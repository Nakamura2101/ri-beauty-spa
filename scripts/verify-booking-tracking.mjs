import fs from 'node:fs/promises';
import path from 'node:path';
import http from 'node:http';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PROJECT_ROOT = path.resolve(__dirname, '..');
const DIST_DIR = path.resolve(PROJECT_ROOT, 'dist');

const BOOKING_SEND_TO = 'AW-18377146199/lnS3CMf8_N0cENf-87pE';
const BOOKING_URL = 'https://ribeautyspa.square.site/';
const BOOKING_SELECTOR = `a[href="${BOOKING_URL}"]`;

// Never let a test reach Google: gtag.js must not load, so the inline base-tag stub
// only ever pushes into window.dataLayer and no real conversion is transmitted.
// Square is blocked too, to keep the run offline and deterministic.
const BLOCKED_HOSTS = [
  'googletagmanager.com',
  'google-analytics.com',
  'googleadservices.com',
  'doubleclick.net',
  'ribeautyspa.square.site',
];

// Representative routes: the Ads landing pages, a service page (which also renders the
// indirect article.ctaHref anchors), and a blog page.
const ROUTES = [
  { route: '/', label: 'home (hero + booking section + floating CTA)' },
  { route: '/kawasaki-massage/', label: 'ads landing page' },
  { route: '/services/body-wellness/', label: 'service detail + article.ctaHref path' },
  { route: '/blog/kawasaki-herbal-peel/', label: 'blog article' },
  { route: '/price/', label: 'price page' },
];

let failures = 0;
const fail = (msg) => {
  console.error(`[verify-booking] FAIL: ${msg}`);
  failures += 1;
};
const ok = (msg) => console.log(`[verify-booking] OK: ${msg}`);
const check = (condition, msg) => (condition ? ok(msg) : fail(msg));

const exists = async (p) => {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
};

const CONTENT_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
};

const createServer = async () => {
  const indexPath = path.join(DIST_DIR, 'index.html');
  if (!(await exists(indexPath))) {
    throw new Error(`Missing dist/index.html at ${indexPath}. Did you run vite build?`);
  }

  const server = http.createServer(async (req, res) => {
    try {
      const pathname = decodeURIComponent(new URL(req.url ?? '/', `http://${req.headers.host}`).pathname);
      let candidate = path.join(DIST_DIR, pathname);

      const rel = path.relative(DIST_DIR, candidate);
      if (rel.startsWith('..') || path.isAbsolute(rel)) {
        res.statusCode = 400;
        res.end('Bad Request');
        return;
      }

      if (pathname.endsWith('/')) candidate = path.join(DIST_DIR, pathname, 'index.html');
      if (!(await exists(candidate))) candidate = indexPath;

      res.statusCode = 200;
      res.setHeader('Content-Type', CONTENT_TYPES[path.extname(candidate).toLowerCase()] ?? 'application/octet-stream');
      res.end(await fs.readFile(candidate));
    } catch (e) {
      res.statusCode = 500;
      res.end(String(e));
    }
  });

  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  return { server, baseUrl: `http://127.0.0.1:${server.address().port}` };
};

// Test harness installed in the page AFTER the app mounted, so both probes run after the
// app's own delegated listener:
// - a document-level probe records whether the app's handler cancelled the navigation
// - a window-level listener cancels navigation itself, so the run stays offline
const installClickProbe = (page) =>
  page.evaluate(() => {
    const w = window;
    w.__probe = { defaultPreventedByApp: [] };
    document.addEventListener('click', (e) => {
      w.__probe.defaultPreventedByApp.push(e.defaultPrevented);
    });
    window.addEventListener('click', (e) => e.preventDefault());
  });

const readConversions = (page) =>
  page.evaluate(() =>
    Array.from(window.dataLayer ?? [])
      .map((entry) => Array.from(entry))
      .filter((entry) => entry[0] === 'event' && entry[1] === 'conversion')
      .map((entry) => entry[2] ?? {})
  );

const resetState = (page) =>
  page.evaluate(() => {
    window.dataLayer.length = 0;
    window.__probe.defaultPreventedByApp = [];
  });

const main = async () => {
  if (!(await exists(DIST_DIR))) {
    console.error(`[verify-booking] Missing dist directory: ${DIST_DIR}`);
    process.exit(2);
  }

  // --- Static checks on the shipped HTML -------------------------------------------
  const htmlFiles = [];
  const walk = async (dir) => {
    for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
      const p = path.join(dir, entry.name);
      if (entry.isDirectory()) await walk(p);
      else if (p.endsWith('.html')) htmlFiles.push(p);
    }
  };
  await walk(DIST_DIR);

  for (const file of htmlFiles) {
    const html = await fs.readFile(file, 'utf8');
    const rel = path.relative(PROJECT_ROOT, file);
    // 404.html is a bare redirect shim and intentionally carries no tag.
    if (path.basename(file) === '404.html') continue;

    const loaders = html.match(/googletagmanager\.com\/gtag\/js\?id=AW-18377146199/gi) ?? [];
    if (loaders.length !== 1) fail(`${rel} has ${loaders.length} base tag loaders, expected exactly 1`);

    // The conversion label belongs in the JS bundle only. Finding it in serialized HTML
    // would mean a conversion was fired and captured at build time.
    if (html.includes(BOOKING_SEND_TO)) {
      fail(`${rel} contains a build-time serialized conversion artifact (${BOOKING_SEND_TO})`);
    }
  }
  ok(`${htmlFiles.length - 1} prerendered page(s): exactly 1 base tag loader, no build-time conversion artifact`);

  // --- Behavioral checks in a real browser -----------------------------------------
  const { server, baseUrl } = await createServer();
  const isCI = !!process.env.CI;
  const browser = await puppeteer.launch({
    headless: 'new',
    ...(isCI ? { args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'] } : {}),
  });

  try {
    for (const { route, label } of ROUTES) {
      const page = await browser.newPage();
      await page.setViewport({ width: 1440, height: 900 });

      const pageErrors = [];
      page.on('pageerror', (e) => pageErrors.push(e.message));

      await page.setRequestInterception(true);
      page.on('request', (request) => {
        const blocked = BLOCKED_HOSTS.some((host) => request.url().includes(host));
        if (blocked) request.abort().catch(() => {});
        else request.continue().catch(() => {});
      });

      await page.goto(`${baseUrl}${route}`, { waitUntil: 'networkidle2', timeout: 45000 });
      await page.waitForSelector(BOOKING_SELECTOR, { timeout: 15000 });

      // 1) No conversion on page load / render / route mount.
      check((await readConversions(page)).length === 0, `${route} [${label}] no conversion on page load`);

      await installClickProbe(page);

      const ctaCount = await page.$$eval(BOOKING_SELECTOR, (els) => els.length);
      check(ctaCount > 0, `${route} found ${ctaCount} booking CTA(s)`);

      // 2) Destination + link semantics unchanged on every booking CTA.
      const attrs = await page.$$eval(BOOKING_SELECTOR, (els) =>
        els.map((el) => ({ href: el.getAttribute('href'), target: el.getAttribute('target'), rel: el.getAttribute('rel') }))
      );
      check(
        attrs.every((a) => a.href === 'https://ribeautyspa.square.site/' && a.target === '_blank' && a.rel === 'noopener noreferrer'),
        `${route} all ${ctaCount} CTA(s) keep Square href + target=_blank + rel=noopener noreferrer`
      );

      // 3) Every booking CTA on the page emits exactly one correct conversion per click.
      for (let i = 0; i < ctaCount; i += 1) {
        await resetState(page);
        await page.evaluate((sel, index) => document.querySelectorAll(sel)[index].click(), BOOKING_SELECTOR, i);

        const conversions = await readConversions(page);
        const probe = await page.evaluate(() => window.__probe.defaultPreventedByApp);

        check(conversions.length === 1, `${route} CTA#${i} emitted exactly 1 conversion (got ${conversions.length})`);
        check(conversions[0]?.send_to === BOOKING_SEND_TO, `${route} CTA#${i} exact send_to`);
        check(
          conversions[0] && Object.keys(conversions[0]).length === 1,
          `${route} CTA#${i} payload carries send_to only, no value/currency/transaction_id (got ${JSON.stringify(conversions[0] ?? {})})`
        );
        check(probe[0] === false, `${route} CTA#${i} navigation not cancelled by tracking`);
      }

      // 4) Clicking a child element inside a CTA must not double-fire.
      const nested = await page.$$eval(`${BOOKING_SELECTOR} *`, (els) => els.length);
      if (nested > 0) {
        await resetState(page);
        // dispatchEvent rather than .click(): the inner node is often an <svg>, and
        // SVGElement has no click() method.
        await page.evaluate(
          (sel) =>
            document
              .querySelector(`${sel} *`)
              .dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true })),
          BOOKING_SELECTOR
        );
        check((await readConversions(page)).length === 1, `${route} click on nested child inside CTA emits exactly 1 conversion`);
      }

      // 5) Non-booking links must never emit a conversion.
      const nonBooking = await page.$$eval('a[href]', (els) =>
        els
          .map((el, index) => ({ index, href: el.getAttribute('href') }))
          .filter((a) => a.href && a.href !== 'https://ribeautyspa.square.site/')
          .slice(0, 8)
      );
      await resetState(page);
      for (const link of nonBooking) {
        await page.evaluate((index) => document.querySelectorAll('a[href]')[index].click(), link.index);
      }
      check(
        (await readConversions(page)).length === 0,
        `${route} ${nonBooking.length} non-booking link click(s) emitted 0 conversions`
      );

      // 6) gtag missing: booking must still work, tracking must stay silent.
      await resetState(page);
      await page.evaluate(() => {
        window.__savedGtag = window.gtag;
        delete window.gtag;
      });
      await page.evaluate((sel) => document.querySelector(sel).click(), BOOKING_SELECTOR);
      check(
        (await page.evaluate(() => window.__probe.defaultPreventedByApp))[0] === false,
        `${route} gtag unavailable: navigation still proceeds`
      );

      // 7) gtag throwing: booking must still work.
      await resetState(page);
      await page.evaluate(() => {
        window.gtag = () => {
          throw new Error('simulated gtag failure');
        };
      });
      await page.evaluate((sel) => document.querySelector(sel).click(), BOOKING_SELECTOR);
      check(
        (await page.evaluate(() => window.__probe.defaultPreventedByApp))[0] === false,
        `${route} gtag throws: navigation still proceeds`
      );

      const newErrors = pageErrors.filter((m) => !m.includes('Minified React error #418'));
      check(newErrors.length === 0, `${route} no new console errors (${JSON.stringify(newErrors)})`);

      await page.close();
    }
  } finally {
    await browser.close();
    await new Promise((resolve) => server.close(resolve));
  }

  if (failures) {
    console.error(`[verify-booking] ${failures} check(s) failed.`);
    process.exit(1);
  }

  ok('Booking conversion tracking verified. No real Google Ads conversion was sent.');
};

await main();
