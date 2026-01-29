import fs from 'node:fs/promises';
import path from 'node:path';

const PROJECT_ROOT = process.cwd();
const APP_ROUTES_FILE = path.resolve(PROJECT_ROOT, 'src', 'App.tsx');
const OUT_FILE = path.resolve(PROJECT_ROOT, 'public', 'sitemap.xml');

// Keep in sync with src/constants.ts (used for canonical URLs).
const SITE_ORIGIN = 'https://www.ri-beauty-spa.com';

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
  const re = /<Route\s+path=\"([^\"]+)\"/g;
  let m;
  while ((m = re.exec(src))) routes.push(m[1]);
  return routes;
};

const priorityForPath = (p) => {
  if (p === '/') return 1.0;
  if (p === '/services/') return 0.9;
  if (p.startsWith('/services/')) return 0.8;
  if (p === '/about/' || p === '/corporate/') return 0.7;
  if (p === '/contact/') return 0.6;
  return 0.5;
};

const changefreqForPath = (p) => {
  if (p === '/' || p === '/services/') return 'weekly';
  if (p.startsWith('/services/')) return 'weekly';
  return 'weekly';
};

const toYyyyMmDd = (d) => {
  const yyyy = d.getUTCFullYear();
  const mm = String(d.getUTCMonth() + 1).padStart(2, '0');
  const dd = String(d.getUTCDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
};

const main = async () => {
  const raw = await extractRoutePathsFromApp();

  const paths = raw
    .filter((p) => p && p !== '*')
    .map(normalizeTrailingSlash);

  // Ensure homepage exists in sitemap even if router omits trailing slash
  if (!paths.includes('/')) paths.push('/');

  // Canonical policy: keep trailing-slash variants, drop non-trailing duplicates.
  const canonicalSet = new Set(paths);
  const canonicalPaths = Array.from(canonicalSet)
    .filter((p) => !p.includes('*'))
    .sort((a, b) => {
      if (a === '/') return -1;
      if (b === '/') return 1;
      return a.localeCompare(b);
    });

  const lastmod = toYyyyMmDd(new Date());

  const urlEntries = canonicalPaths
    .map((p) => {
      const loc = `${SITE_ORIGIN}${p}`;
      const changefreq = changefreqForPath(p);
      const priority = priorityForPath(p).toFixed(1);

      return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
    })
    .join('\n\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlEntries}\n</urlset>\n`;

  await fs.mkdir(path.dirname(OUT_FILE), { recursive: true });
  await fs.writeFile(OUT_FILE, xml, 'utf8');
  console.log(`[generate-sitemap] Wrote ${path.relative(PROJECT_ROOT, OUT_FILE)} (${canonicalPaths.length} URL(s))`);
};

await main();
