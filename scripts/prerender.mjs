import fs from 'node:fs/promises';
import path from 'node:path';
import http from 'node:http';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PROJECT_ROOT = path.resolve(__dirname, '..');
const DIST_DIR = path.resolve(PROJECT_ROOT, 'dist');
const APP_ROUTES_FILE = path.resolve(PROJECT_ROOT, 'src', 'App.tsx');

// Minimum set of routes we want as meaningful static HTML for SEO.
// Keep trailing slash policy consistent with src/components/Seo.tsx.
const REQUIRED_ROUTES = [
  '/',
  '/about/',
  '/services/',
  '/services/body-wellness/',
  '/services/skin-therapy/',
  '/services/herbal-rituals/',
  '/services/facial/',
  '/price/',
  '/access/',
  '/contact/',
];

const log = (...args) => console.log('[prerender]', ...args);

const exists = async (p) => {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
};

const isDirectory = async (p) => {
  try {
    const st = await fs.stat(p);
    return st.isDirectory();
  } catch {
    return false;
  }
};

const normalizeTrailingSlash = (pathname) => {
  if (!pathname || pathname === '/') return '/';
  if (!pathname.startsWith('/')) pathname = `/${pathname}`;
  if (pathname.endsWith('/')) return pathname;

  const lastSegment = pathname.split('/').pop() ?? '';
  if (lastSegment.includes('.')) return pathname;

  return `${pathname}/`;
};

const extractRoutePathsFromApp = async () => {
  const src = await fs.readFile(APP_ROUTES_FILE, 'utf8');
  const routes = [];

  // Match: <Route path="/services" element={...} />
  const re = /<Route\s+path=\"([^\"]+)\"/g;
  let m;
  while ((m = re.exec(src))) {
    routes.push(m[1]);
  }

  return routes;
};

const getRoutesToPrerender = async () => {
  const raw = await extractRoutePathsFromApp();
  const required = REQUIRED_ROUTES.map(normalizeTrailingSlash);

  const fromApp = raw
    .filter((r) => r && r !== '*')
    .map(normalizeTrailingSlash);

  // Include:
  // - required routes (even if router has only non-trailing variant)
  // - all /services/* routes defined in the router
  const selected = fromApp.filter((p) => required.includes(p) || p.startsWith('/services/'));

  const deduped = Array.from(new Set([...selected, ...required]));

  // Stable order: keep REQUIRED_ROUTES first, then any extra /services/* in alpha order
  const requiredOrder = new Map(required.map((p, i) => [p, i]));
  return deduped.sort((a, b) => {
    const ai = requiredOrder.has(a) ? requiredOrder.get(a) : Number.POSITIVE_INFINITY;
    const bi = requiredOrder.has(b) ? requiredOrder.get(b) : Number.POSITIVE_INFINITY;
    if (ai !== bi) return ai - bi;
    return a.localeCompare(b);
  });
};

const getContentType = (ext) => {
  switch (ext) {
    case '.html':
      return 'text/html; charset=utf-8';
    case '.js':
      return 'application/javascript; charset=utf-8';
    case '.css':
      return 'text/css; charset=utf-8';
    case '.json':
      return 'application/json; charset=utf-8';
    case '.xml':
      return 'application/xml; charset=utf-8';
    case '.txt':
      return 'text/plain; charset=utf-8';
    case '.svg':
      return 'image/svg+xml';
    case '.png':
      return 'image/png';
    case '.jpg':
    case '.jpeg':
      return 'image/jpeg';
    case '.webp':
      return 'image/webp';
    case '.ico':
      return 'image/x-icon';
    default:
      return 'application/octet-stream';
  }
};

const createSpaFallbackServer = async () => {
  const indexPath = path.join(DIST_DIR, 'index.html');
  if (!(await exists(indexPath))) {
    throw new Error(`Missing dist/index.html at ${indexPath}. Did you run vite build?`);
  }

  const server = http.createServer(async (req, res) => {
    try {
      const url = new URL(req.url ?? '/', `http://${req.headers.host}`);
      const pathname = decodeURIComponent(url.pathname);

      // 1) Try direct file
      let candidate = path.join(DIST_DIR, pathname);

      // Prevent path traversal
      const rel = path.relative(DIST_DIR, candidate);
      if (rel.startsWith('..') || path.isAbsolute(rel)) {
        res.statusCode = 400;
        res.end('Bad Request');
        return;
      }

      // Directory -> index.html
      if (pathname.endsWith('/') || (await isDirectory(candidate))) {
        candidate = path.join(DIST_DIR, pathname, 'index.html');
      }

      // If file doesn't exist, SPA fallback to /index.html
      if (!(await exists(candidate))) {
        candidate = indexPath;
      }

      const ext = path.extname(candidate).toLowerCase();
      const contentType = getContentType(ext);
      const body = await fs.readFile(candidate);

      res.statusCode = 200;
      res.setHeader('Content-Type', contentType);
      res.end(body);
    } catch (e) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'text/plain; charset=utf-8');
      res.end(String(e));
    }
  });

  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  const address = server.address();
  if (!address || typeof address === 'string') throw new Error('Could not determine server address');

  const baseUrl = `http://127.0.0.1:${address.port}`;
  return { server, baseUrl };
};

const routeToOutputFile = (routePath) => {
  const normalized = normalizeTrailingSlash(routePath);
  const trimmed = normalized.replace(/^\//, '').replace(/\/$/, '');
  if (!trimmed) return path.join(DIST_DIR, 'index.html');
  return path.join(DIST_DIR, trimmed, 'index.html');
};

const waitForPrerenderReady = async (page, timeoutMs = 15000) => {
  await page.evaluate(
    (timeout) =>
      new Promise((resolve) => {
        if (window.__PRERENDER_READY__) return resolve(true);

        const done = () => {
          window.__PRERENDER_READY__ = true;
          resolve(true);
        };

        window.addEventListener('prerender:ready', done, { once: true });
        setTimeout(() => resolve(false), timeout);
      }),
    timeoutMs
  );
};

const escapeRegExp = (s) => String(s).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const waitForMeaningfulHtml = async (page, routePath, timeoutMs = 20000) => {
  // We consider the page "rendered" once:
  // - there is at least one <h1> inside #root
  // - canonical is present and matches the trailing-slash policy for this route
  const expectedCanonical = `https://www.ri-beauty-spa.com${normalizeTrailingSlash(routePath)}`;
  const canonicalRe = new RegExp(`<link\\s+rel="canonical"\\s+href="${escapeRegExp(expectedCanonical)}"`, 'i');

  await page.waitForFunction(
    (reSource, reFlags) => {
      const root = document.getElementById('root');
      const hasH1 = !!root?.querySelector('h1');
      const html = document.documentElement?.outerHTML ?? '';
      const re = new RegExp(reSource, reFlags);
      return hasH1 && re.test(html);
    },
    { timeout: timeoutMs },
    canonicalRe.source,
    canonicalRe.flags
  );
};

const main = async () => {
  const routes = await getRoutesToPrerender();
  if (!routes.length) {
    log('No routes selected for prerender. Nothing to do.');
    return;
  }

  log('Routes:', routes.join(', '));

  const { server, baseUrl } = await createSpaFallbackServer();
  log(`Local SPA server: ${baseUrl}`);

  const browser = await puppeteer.launch({ headless: 'new' });
  try {
    const page = await browser.newPage();

    // Flag the app so it can fire a deterministic "ready" event.
    await page.evaluateOnNewDocument(() => {
      window.__PRERENDERING__ = true;
    });

    for (const route of routes) {
      const url = `${baseUrl}${route}`;
      log(`Rendering ${url}`);

      await page.goto(url, { waitUntil: 'domcontentloaded' });
      await waitForPrerenderReady(page);
      await waitForMeaningfulHtml(page, route);

      // Grab final HTML after React + Seo effects ran.
      const html = await page.content();

      const outFile = routeToOutputFile(route);
      await fs.mkdir(path.dirname(outFile), { recursive: true });
      await fs.writeFile(outFile, html, 'utf8');
      log(`Wrote ${path.relative(PROJECT_ROOT, outFile)}`);
    }
  } finally {
    await browser.close();
    await new Promise((resolve) => server.close(resolve));
  }
};

await main();
