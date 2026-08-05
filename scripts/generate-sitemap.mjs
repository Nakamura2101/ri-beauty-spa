import fs from 'node:fs/promises';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

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

/**
 * Map each route to the page component that renders it, so lastmod can be
 * derived from that file's real history instead of the build clock.
 */
const extractRouteComponentsFromApp = async () => {
  const src = await fs.readFile(APP_ROUTES_FILE, 'utf8');
  const map = new Map();
  const re = /<Route\s+path=\"([^\"]+)\"\s+element=\{<(\w+)\s*\/>\}/g;
  let m;
  while ((m = re.exec(src))) {
    map.set(normalizeTrailingSlash(m[1]), path.join('src', 'pages', `${m[2]}.tsx`));
  }
  return map;
};

const git = (args) =>
  execFileSync('git', args, {
    cwd: PROJECT_ROOT,
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'ignore'],
  }).trim();

/**
 * In a shallow clone every file reports the tip commit as its last change, so
 * per-file dates would silently collapse to a single build-time-like value for
 * every URL — the exact false-freshness signal this script exists to avoid.
 * Detect that up front and drop lastmod entirely instead.
 */
const hasUsableHistory = () => {
  try {
    if (git(['rev-parse', '--is-shallow-repository']) === 'true') return false;
    return true;
  } catch {
    return false;
  }
};

/**
 * Last commit date (ISO 8601 with timezone) for a file, or null when git has no
 * trustworthy answer — no repository, shallow history, or a file that is not
 * committed yet. Returning null is deliberate: omitting lastmod is better than
 * publishing a date that does not correspond to a real content change.
 */
const gitLastModified = (relativeFile) => {
  try {
    return git(['log', '-1', '--format=%cI', '--', relativeFile]) || null;
  } catch {
    return null;
  }
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

  const routeComponents = await extractRouteComponentsFromApp();
  const lastmodCache = new Map();
  const historyUsable = hasUsableHistory();
  let withoutLastmod = 0;

  const lastmodForPath = (p) => {
    const file = routeComponents.get(p);
    if (!file || !historyUsable) {
      withoutLastmod++;
      return null;
    }
    if (!lastmodCache.has(file)) lastmodCache.set(file, gitLastModified(file));
    const value = lastmodCache.get(file);
    if (!value) withoutLastmod++;
    return value;
  };

  const urlEntries = canonicalPaths
    .map((p) => {
      const loc = `${SITE_ORIGIN}${p}`;
      const changefreq = changefreqForPath(p);
      const priority = priorityForPath(p).toFixed(1);
      const lastmod = lastmodForPath(p);
      const lastmodLine = lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : '';

      return `  <url>\n    <loc>${loc}</loc>${lastmodLine}\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
    })
    .join('\n\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlEntries}\n</urlset>\n`;

  await fs.mkdir(path.dirname(OUT_FILE), { recursive: true });
  await fs.writeFile(OUT_FILE, xml, 'utf8');
  const detail = withoutLastmod ? `, ${withoutLastmod} without lastmod` : '';
  console.log(
    `[generate-sitemap] Wrote ${path.relative(PROJECT_ROOT, OUT_FILE)} (${canonicalPaths.length} URL(s)${detail})`
  );
};

await main();
