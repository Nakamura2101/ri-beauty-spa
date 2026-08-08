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
  {
    route: '/blog/kawasaki-massage-guide/',
    file: path.join(DIST_DIR, 'blog', 'kawasaki-massage-guide', 'index.html'),
    mustIncludeAny: ['<h1', '川崎', 'マッサージ', 'ポイント'],
    canonical: 'https://www.ri-beauty-spa.com/blog/kawasaki-massage-guide/',
  },
  {
    route: '/blog/kawasaki-mens-massage/',
    file: path.join(DIST_DIR, 'blog', 'kawasaki-mens-massage', 'index.html'),
    mustIncludeAny: ['<h1', 'メンズ', '川崎', 'FAQ'],
    canonical: 'https://www.ri-beauty-spa.com/blog/kawasaki-mens-massage/',
  },
  {
    route: '/blog/kawasaki-yomogi-steam/',
    file: path.join(DIST_DIR, 'blog', 'kawasaki-yomogi-steam', 'index.html'),
    mustIncludeAny: ['<h1', 'よもぎ蒸し', '川崎', 'FAQ'],
    canonical: 'https://www.ri-beauty-spa.com/blog/kawasaki-yomogi-steam/',
    article: {
      // Article pages must ship a complete BlogPosting and a representative
      // social image (not the generic site logo).
      ogType: 'article',
      requiredBlogPostingFields: ['headline', 'description', 'image', 'datePublished', 'dateModified', 'author', 'publisher'],
    },
  },
  {
    route: '/blog/kawasaki-herbal-peel/',
    file: path.join(DIST_DIR, 'blog', 'kawasaki-herbal-peel', 'index.html'),
    mustIncludeAny: ['<h1', 'ハーブピーリング', '川崎', 'FAQ'],
    canonical: 'https://www.ri-beauty-spa.com/blog/kawasaki-herbal-peel/',
    article: {
      ogType: 'article',
      requiredBlogPostingFields: ['headline', 'description', 'image', 'datePublished', 'dateModified', 'author', 'publisher'],
    },
  },
  {
    route: '/kawasaki-massage/',
    file: path.join(DIST_DIR, 'kawasaki-massage', 'index.html'),
    mustIncludeAny: ['<h1', '川崎', 'マッサージ', '予約'],
    canonical: 'https://www.ri-beauty-spa.com/kawasaki-massage/',
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

    // 4) Google tag: exactly one loader, and no analytics scripts injected at
    //    prerender time (those would carry the build-time localhost URL).
    const gtagLoaders = html.match(/googletagmanager\.com\/gtag\/js\?id=AW-18377146199/gi) ?? [];
    if (gtagLoaders.length !== 1) {
      fail(`${r.route} must contain exactly 1 Google tag loader, found ${gtagLoaders.length}`);
    }

    const injectedAnalytics = html.match(/googleadservices\.com|doubleclick\.net|google-analytics\.com/gi) ?? [];
    if (injectedAnalytics.length) {
      fail(`${r.route} contains prerender-injected analytics scripts: ${[...new Set(injectedAnalytics)].join(', ')}`);
    }

    // 5) Article pages: complete BlogPosting + a representative social image.
    if (r.article) {
      const ogType = html.match(/<meta property="og:type" content="([^"]*)"/i)?.[1];
      if (ogType !== r.article.ogType) {
        fail(`${r.route} og:type is "${ogType}", expected "${r.article.ogType}"`);
      }

      const ogImage = html.match(/<meta property="og:image" content="([^"]*)"/i)?.[1] ?? '';
      if (!ogImage || /\/images\/logo\.png$/i.test(ogImage)) {
        fail(`${r.route} og:image should be a representative article image, got: ${ogImage || '(none)'}`);
      }

      const jsonLdRaw = html.match(/<script[^>]*id="seo-jsonld"[^>]*>([\s\S]*?)<\/script>/i)?.[1];
      let blogPosting = null;
      try {
        const parsed = JSON.parse(jsonLdRaw ?? 'null');
        const nodes = Array.isArray(parsed?.['@graph']) ? parsed['@graph'] : [parsed];
        blogPosting = nodes.find((n) => n?.['@type'] === 'BlogPosting') ?? null;
      } catch {
        fail(`${r.route} JSON-LD is not valid JSON`);
      }

      if (!blogPosting) {
        fail(`${r.route} missing BlogPosting JSON-LD`);
      } else {
        const missing = r.article.requiredBlogPostingFields.filter((f) => !blogPosting[f]);
        if (missing.length) {
          fail(`${r.route} BlogPosting missing field(s): ${missing.join(', ')}`);
        }

        // Dates must be ISO 8601 with an explicit timezone offset.
        for (const field of ['datePublished', 'dateModified']) {
          const value = blogPosting[field];
          if (value && !/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(Z|[+-]\d{2}:\d{2})$/.test(value)) {
            fail(`${r.route} BlogPosting.${field} is not ISO 8601 with timezone: ${value}`);
          }
        }

        // The structured-data image must actually appear on the page.
        const imageUrl = typeof blogPosting.image === 'string' ? blogPosting.image : blogPosting.image?.url;
        const imagePath = imageUrl ? imageUrl.replace('https://www.ri-beauty-spa.com', '') : '';
        if (!imagePath || !html.includes(`src="${imagePath}"`)) {
          fail(`${r.route} BlogPosting.image is not rendered on the page: ${imageUrl ?? '(none)'}`);
        }
      }
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
