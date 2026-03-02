import fs from 'node:fs/promises';
import path from 'node:path';

const PROJECT_ROOT = process.cwd();
const DIST_DIR = path.resolve(PROJECT_ROOT, 'dist');

const routes = [
  {
    route: '/',
    file: path.join(DIST_DIR, 'index.html'),
    mustIncludeAny: ['Ri Beauty', '川崎', 'Spa', 'Wellness'],
    canonical: 'https://www.ri-beauty-spa.com/',
  },
  {
    route: '/about/',
    file: path.join(DIST_DIR, 'about', 'index.html'),
    mustIncludeAny: ['私たちについて', '当サロン', '川崎'],
    canonical: 'https://www.ri-beauty-spa.com/about/',
  },
  {
    route: '/corporate/',
    file: path.join(DIST_DIR, 'corporate', 'index.html'),
    mustIncludeAny: ['法人向け', '川崎', 'サービス'],
    canonical: 'https://www.ri-beauty-spa.com/corporate/',
  },
  {
    route: '/services/',
    file: path.join(DIST_DIR, 'services', 'index.html'),
    mustIncludeAny: [
      '<h1',
      // page text
      'サービス',
      '川崎',
      'ボディ',
      'スキン',
      'ハーバル',
    ],
    canonical: 'https://www.ri-beauty-spa.com/services/',
  },
  {
    route: '/services/body-wellness/',
    file: path.join(DIST_DIR, 'services', 'body-wellness', 'index.html'),
    mustIncludeAny: ['<h1', 'ボディ', 'ボディケア', '川崎'],
    canonical: 'https://www.ri-beauty-spa.com/services/body-wellness/',
  },
  {
    route: '/services/skin-therapy/',
    file: path.join(DIST_DIR, 'services', 'skin-therapy', 'index.html'),
    mustIncludeAny: ['<h1', 'スキン', 'スキンケア', '川崎'],
    canonical: 'https://www.ri-beauty-spa.com/services/skin-therapy/',
  },
  {
    route: '/services/herbal-rituals/',
    file: path.join(DIST_DIR, 'services', 'herbal-rituals', 'index.html'),
    mustIncludeAny: ['<h1', 'ハーバル', 'ハーブ', '川崎'],
    canonical: 'https://www.ri-beauty-spa.com/services/herbal-rituals/',
  },
  {
    route: '/services/facial/',
    file: path.join(DIST_DIR, 'services', 'facial', 'index.html'),
    mustIncludeAny: ['<h1', 'フェイシャル', '肌', '川崎'],
    canonical: 'https://www.ri-beauty-spa.com/services/facial/',
  },
  {
    route: '/price/',
    file: path.join(DIST_DIR, 'price', 'index.html'),
    mustIncludeAny: ['<h1', '料金', '川崎', '予約'],
    canonical: 'https://www.ri-beauty-spa.com/price/',
  },
  {
    route: '/access/',
    file: path.join(DIST_DIR, 'access', 'index.html'),
    mustIncludeAny: ['<h1', 'アクセス', '川崎', '神奈川県'],
    canonical: 'https://www.ri-beauty-spa.com/access/',
  },
  {
    route: '/contact/',
    file: path.join(DIST_DIR, 'contact', 'index.html'),
    mustIncludeAny: ['<h1', 'お問い合わせ', 'GET IN TOUCH', '川崎'],
    canonical: 'https://www.ri-beauty-spa.com/contact/',
  },
  {
    route: '/blog/vietnamese-massage-kawasaki/',
    file: path.join(DIST_DIR, 'blog', 'vietnamese-massage-kawasaki', 'index.html'),
    mustIncludeAny: ['<h1', 'ベトナム式マッサージ', '川崎', 'FAQ'],
    canonical: 'https://www.ri-beauty-spa.com/blog/vietnamese-massage-kawasaki/',
  },
];

const fail = (msg) => {
  console.error(`[verify-prerender] FAIL: ${msg}`);
  process.exitCode = 1;
};

const ok = (msg) => console.log(`[verify-prerender] OK: ${msg}`);

const exists = async (p) => {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
};

const main = async () => {
  if (!(await exists(DIST_DIR))) {
    console.error(`[verify-prerender] Missing dist directory: ${DIST_DIR}`);
    process.exit(2);
  }

  for (const r of routes) {
    if (!(await exists(r.file))) {
      fail(`${r.route} is missing output file: ${path.relative(PROJECT_ROOT, r.file)}`);
      continue;
    }

    const html = await fs.readFile(r.file, 'utf8');

    // 1) Must not be an empty SPA shell.
    const hasH1 = /<h1[\s>]/i.test(html);
    if (!hasH1) {
      fail(`${r.route} does not contain an <h1> in generated HTML (${path.relative(PROJECT_ROOT, r.file)})`);
    }

    // 2) Must contain some page-specific text.
    const lower = html.toLowerCase();
    const hasAnyKeyword = r.mustIncludeAny.some((k) => lower.includes(String(k).toLowerCase()));
    if (!hasAnyKeyword) {
      fail(`${r.route} missing expected keywords in HTML. Expected one of: ${r.mustIncludeAny.join(', ')}`);
    }

    // 3) Canonical must match the trailing-slash route.
    const canonicalRe = new RegExp(`<link\\s+rel="canonical"\\s+href="${r.canonical.replace(/[.*+?^${}()|[\\]\\]/g, '\\$&')}"\\s*/?>`, 'i');
    if (!canonicalRe.test(html)) {
      fail(`${r.route} canonical mismatch. Expected: ${r.canonical}`);
    }

    ok(`${r.route} => ${path.relative(PROJECT_ROOT, r.file)}`);
  }

  if (process.exitCode && process.exitCode !== 0) {
    console.error('[verify-prerender] One or more prerendered pages are missing real HTML content.');
    process.exit(process.exitCode);
  }

  ok('All required pages contain <h1>, content keywords, and correct canonical.');
};

await main();
