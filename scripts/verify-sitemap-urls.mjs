import fs from 'node:fs/promises';
import path from 'node:path';

const DEFAULT_SITEMAP = path.resolve(process.cwd(), 'dist', 'sitemap.xml');

const parseArgs = () => {
  const args = process.argv.slice(2);
  const out = { base: null, sitemap: DEFAULT_SITEMAP, limit: null };

  for (let i = 0; i < args.length; i++) {
    const a = args[i];
    if (a === '--base') out.base = args[++i] ?? null;
    else if (a === '--sitemap') out.sitemap = args[++i] ?? DEFAULT_SITEMAP;
    else if (a === '--limit') out.limit = Number(args[++i]);
  }

  return out;
};

const extractLocs = (xml) => {
  const locs = [];
  const re = /<loc>([^<]+)<\/loc>/g;
  let m;
  while ((m = re.exec(xml))) {
    locs.push(m[1].trim());
  }
  return locs;
};

const toTestUrl = (locUrl, base) => {
  if (!base) return locUrl;
  const baseUrl = new URL(base);
  const u = new URL(locUrl);
  // Keep path + query, swap origin to base.
  return new URL(u.pathname + u.search, baseUrl.origin).toString();
};

const checkUrl = async (url) => {
  // redirect: 'manual' so 301/302 are visible failures
  const res = await fetch(url, { redirect: 'manual' });
  return {
    status: res.status,
    location: res.headers.get('location') ?? '',
  };
};

const main = async () => {
  const { base, sitemap, limit } = parseArgs();

  let xml;
  try {
    xml = await fs.readFile(sitemap, 'utf8');
  } catch {
    console.error(`[verify-sitemap-urls] Could not read sitemap: ${sitemap}`);
    process.exit(2);
  }

  const locs = extractLocs(xml);
  const targets = (limit ? locs.slice(0, limit) : locs).map((u) => ({ loc: u, test: toTestUrl(u, base) }));

  if (targets.length === 0) {
    console.error('[verify-sitemap-urls] No <loc> URLs found.');
    process.exit(2);
  }

  const failures = [];
  for (const t of targets) {
    try {
      const r = await checkUrl(t.test);
      const ok = r.status === 200;
      if (!ok) {
        failures.push({ ...t, ...r });
      }
      const statusText = ok ? 'OK' : 'FAIL';
      const extra = r.location ? ` -> ${r.location}` : '';
      console.log(`[${statusText}] ${r.status} ${t.test}${extra}`);
    } catch (e) {
      failures.push({ ...t, status: 0, location: '', error: String(e) });
      console.log(`[FAIL] 0 ${t.test} (${String(e)})`);
    }
  }

  if (failures.length) {
    console.error(`\n[verify-sitemap-urls] ${failures.length} URL(s) failed (expected 200).`);
    process.exit(1);
  }

  console.log(`\n[verify-sitemap-urls] All ${targets.length} URL(s) returned 200.`);
};

await main();
