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
    route: '/blog/kawasaki-aroma-lymphatic-massage/',
    file: path.join(DIST_DIR, 'blog', 'kawasaki-aroma-lymphatic-massage', 'index.html'),
    mustIncludeAny: ['<h1', 'アロマリンパ', '川崎', 'FAQ'],
    canonical: 'https://www.ri-beauty-spa.com/blog/kawasaki-aroma-lymphatic-massage/',
    article: {
      ogType: 'article',
      requiredBlogPostingFields: ['headline', 'description', 'image', 'datePublished', 'dateModified', 'author', 'publisher'],
    },
  },
  {
    route: '/blog/kawasaki-facial-guide/',
    file: path.join(DIST_DIR, 'blog', 'kawasaki-facial-guide', 'index.html'),
    mustIncludeAny: ['<h1', 'フェイシャル', '川崎', 'FAQ'],
    canonical: 'https://www.ri-beauty-spa.com/blog/kawasaki-facial-guide/',
    article: {
      ogType: 'article',
      requiredBlogPostingFields: ['headline', 'description', 'image', 'datePublished', 'dateModified', 'author', 'publisher'],
    },
  },
  {
    route: '/blog/kawasaki-neck-shoulder-relaxation/',
    file: path.join(DIST_DIR, 'blog', 'kawasaki-neck-shoulder-relaxation', 'index.html'),
    mustIncludeAny: ['<h1', '首・肩', '川崎', 'FAQ'],
    canonical: 'https://www.ri-beauty-spa.com/blog/kawasaki-neck-shoulder-relaxation/',
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

/* ------------------------------------------------------------------------- *
 * Business-data / NAP regression guard
 *
 * The LocalBusiness node on /kawasaki-massage/ once shipped template
 * placeholders to production - telephone "[PHONE]", geo "[LAT]"/"[LNG]" and an
 * openingHoursSpecification made of "[OPENING_HOURS_*]" strings - while the
 * hand-maintained DaySpa node in index.html described the same salon with a
 * different address shape and no shared @id. index.html is plain HTML and
 * cannot import src/constants.ts, so nothing in the build chain noticed.
 *
 * These checks close that gap: src/constants.ts stays the single source of
 * truth, and every business entity on every prerendered route - including the
 * static block from index.html - has to agree with it.
 * ------------------------------------------------------------------------- */

const CONSTANTS_FILE = path.resolve(PROJECT_ROOT, 'src', 'constants.ts');

/**
 * Literal template tokens that must never reach generated output. Verified to
 * match nothing in the real build, so a hit means a placeholder was published
 * in place of a real business value.
 */
const PLACEHOLDER_PATTERNS = [
  /\[[A-Z][A-Z0-9_]{2,}\]/g,
  /\{\{[A-Z][A-Z0-9_]{2,}\}\}/g,
  /%[A-Z][A-Z0-9_]{2,}%/g,
  /<<[A-Z][A-Z0-9_]{2,}>>/g,
];

/**
 * schema.org types that describe the salon itself rather than a page or a post.
 * Organization is deliberately absent: a nested publisher node is not a second
 * business, and a top-level one carrying real NAP is caught by the
 * telephone+address rule below.
 */
const BUSINESS_TYPES = new Set([
  'LocalBusiness',
  'DaySpa',
  'BeautySalon',
  'HealthAndBeautyBusiness',
  'MedicalBusiness',
]);

/** The fields that make up the canonical postal address. */
const ADDRESS_FIELDS = ['postalCode', 'addressRegion', 'addressLocality', 'streetAddress', 'addressCountry'];

/** Opening-hours properties: currently unverified, so they must stay absent. */
const OPENING_HOURS_FIELDS = ['openingHoursSpecification', 'openingHours'];

const findPlaceholders = (text) => {
  const hits = new Set();
  for (const re of PLACEHOLDER_PATTERNS) {
    for (const m of text.matchAll(re)) hits.add(m[0]);
  }
  return [...hits];
};

/**
 * Canonical NAP, read out of src/constants.ts. This verifier is plain .mjs and
 * cannot import a .ts module, so the literals are extracted textually. A parse
 * failure is fatal on purpose: a guard that quietly finds nothing to compare
 * against is worse than no guard at all.
 */
const readCanonicalNap = async () => {
  const src = await fs.readFile(CONSTANTS_FILE, 'utf8');

  const stringConst = (name) =>
    src.match(new RegExp(`export const ${name}\\s*=\\s*['"]([^'"]*)['"]`))?.[1] ?? null;

  const objectConst = (name) => {
    const body = src.match(new RegExp(`export const ${name}\\s*=\\s*\\{([\\s\\S]*?)\\}`))?.[1];
    if (body == null) return null;
    const out = {};
    for (const m of body.matchAll(/(\w+)\s*:\s*['"]([^'"]*)['"]/g)) out[m[1]] = m[2];
    return Object.keys(out).length ? out : null;
  };

  const siteOrigin = stringConst('SITE_ORIGIN');
  // BUSINESS_ID is a template literal over SITE_ORIGIN.
  const idTemplate = src.match(/export const BUSINESS_ID\s*=\s*`([^`]*)`/)?.[1] ?? null;

  const nap = {
    id: idTemplate && siteOrigin ? idTemplate.replace('${SITE_ORIGIN}', siteOrigin) : null,
    name: stringConst('BUSINESS_NAME'),
    telephone: stringConst('BUSINESS_PHONE'),
    address: objectConst('BUSINESS_ADDRESS'),
    geo: objectConst('BUSINESS_GEO'),
  };

  const unreadable = [
    ...Object.entries(nap)
      .filter(([, v]) => !v)
      .map(([k]) => k),
    ...ADDRESS_FIELDS.filter((f) => !nap.address?.[f]).map((f) => `address.${f}`),
    ...['latitude', 'longitude'].filter((f) => !nap.geo?.[f]).map((f) => `geo.${f}`),
  ];
  if (unreadable.length) {
    console.error(
      `[verify-prerender] Cannot read the canonical NAP from ${path.relative(PROJECT_ROOT, CONSTANTS_FILE)}` +
        ` (unreadable: ${unreadable.join(', ')}). Refusing to verify business data against nothing.`
    );
    process.exit(2);
  }

  return nap;
};

/** Every JSON-LD node on the page, flattened out of any @graph wrapper. */
const extractJsonLdNodes = (html, route) => {
  const nodes = [];
  const blocks = html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi);

  let index = 0;
  for (const block of blocks) {
    index += 1;
    let parsed;
    try {
      parsed = JSON.parse(block[1]);
    } catch {
      fail(`${route} JSON-LD block #${index} is not valid JSON`);
      continue;
    }
    // Top-level nodes only: nested objects (address, geo, publisher) are
    // properties of a node, not entities in their own right.
    const flatten = (value) => {
      if (Array.isArray(value)) return value.flatMap(flatten);
      if (!value || typeof value !== 'object') return [];
      const graph = Array.isArray(value['@graph']) ? value['@graph'].flatMap(flatten) : [];
      return value['@type'] ? [value, ...graph] : graph;
    };
    for (const node of flatten(parsed)) nodes.push({ node, block: index });
  }
  return nodes;
};

const isBusinessEntity = (node, expectedId) => {
  if ([node['@type']].flat().some((t) => BUSINESS_TYPES.has(t))) return true;
  if (node['@id'] === expectedId) return true;
  // Anything carrying both a phone and a postal address is describing the
  // business too, whatever type it claims to be.
  return Boolean(node.telephone && node.address);
};

const verifyBusinessData = async () => {
  const nap = await readCanonicalNap();
  /** route -> business entities found there, used for the cross-route report. */
  const entitiesByRoute = new Map();

  for (const r of routes) {
    // Missing files are already reported by the main route loop.
    if (!(await exists(r.file))) continue;
    const html = await fs.readFile(r.file, 'utf8');

    // 1) No literal template placeholder anywhere in the generated page.
    const placeholders = findPlaceholders(html);
    if (placeholders.length) {
      fail(`${r.route} generated HTML contains literal placeholder token(s): ${placeholders.join(', ')}`);
    }

    const found = extractJsonLdNodes(html, r.route).filter(({ node }) => isBusinessEntity(node, nap.id));
    entitiesByRoute.set(r.route, found);

    if (!found.length) {
      fail(`${r.route} has no business entity in JSON-LD (every route carries the site-wide ${nap.name} node)`);
      continue;
    }

    for (const { node, block } of found) {
      const where = `${r.route} JSON-LD block #${block} (${[node['@type']].flat().join('/')})`;

      // 2) Placeholders inside the entity, in case a token ever takes a shape
      //    the page-wide scan does not recognise.
      const entityPlaceholders = findPlaceholders(JSON.stringify(node));
      if (entityPlaceholders.length) {
        fail(`${where} contains placeholder value(s): ${entityPlaceholders.join(', ')}`);
      }

      // 3) One business: the same @id, name and telephone everywhere.
      if (node['@id'] !== nap.id) {
        fail(
          `${where} @id is ${JSON.stringify(node['@id'] ?? null)}, expected ${JSON.stringify(nap.id)}` +
            ` (entities without the shared @id compete instead of merging)`
        );
      }
      if (node.name !== nap.name) {
        fail(`${where} name is ${JSON.stringify(node.name ?? null)}, expected ${JSON.stringify(nap.name)}`);
      }
      if (node.telephone !== nap.telephone) {
        fail(`${where} telephone is ${JSON.stringify(node.telephone ?? null)}, expected ${JSON.stringify(nap.telephone)}`);
      }

      // 4) The canonical postal address, field by field and nothing extra.
      const address = node.address;
      if (!address || typeof address !== 'object' || Array.isArray(address)) {
        fail(`${where} is missing a PostalAddress`);
      } else {
        if (address['@type'] !== 'PostalAddress') {
          fail(`${where} address @type is ${JSON.stringify(address['@type'] ?? null)}, expected "PostalAddress"`);
        }
        for (const field of ADDRESS_FIELDS) {
          if (address[field] !== nap.address[field]) {
            fail(
              `${where} address.${field} is ${JSON.stringify(address[field] ?? null)},` +
                ` expected ${JSON.stringify(nap.address[field])}`
            );
          }
        }
        const extra = Object.keys(address).filter((k) => k !== '@type' && !ADDRESS_FIELDS.includes(k));
        if (extra.length) {
          fail(`${where} address carries field(s) outside the canonical NAP: ${extra.join(', ')}`);
        }
      }

      // 5) geo is optional - only the pages where it is relevant expose it -
      //    but when present it must be the canonical coordinates.
      if (node.geo !== undefined) {
        const geo = node.geo;
        if (!geo || typeof geo !== 'object' || Array.isArray(geo)) {
          fail(`${where} geo is present but is not a GeoCoordinates object`);
        } else {
          if (geo['@type'] !== 'GeoCoordinates') {
            fail(`${where} geo @type is ${JSON.stringify(geo['@type'] ?? null)}, expected "GeoCoordinates"`);
          }
          for (const field of ['latitude', 'longitude']) {
            if (String(geo[field]) !== nap.geo[field]) {
              fail(`${where} geo.${field} is ${JSON.stringify(geo[field] ?? null)}, expected ${JSON.stringify(nap.geo[field])}`);
            }
          }
        }
      }

      // 6) Current invariant: the weekly schedule is not verified, so opening
      //    hours stay absent rather than being published as a guess.
      for (const field of OPENING_HOURS_FIELDS) {
        if (node[field] !== undefined) {
          fail(
            `${where} publishes ${field}; opening hours are deliberately omitted until real verified values exist` +
              ` (see the NAP block in src/constants.ts)`
          );
        }
      }
    }

    // 7) No conflicting duplicate entity data on one page: two business nodes
    //    with different @ids split the salon into two competing businesses.
    const ids = [...new Set(found.map(({ node }) => JSON.stringify(node['@id'] ?? null)))];
    if (ids.length > 1) {
      fail(`${r.route} describes the business with ${ids.length} different @id(s): ${ids.join(', ')}`);
    }
  }

  // 8) Cross-route consistency, reported per diverging field so a drift between
  //    index.html and a page-level entity is named explicitly.
  const crossRouteFields = {
    '@id': (node) => node['@id'],
    name: (node) => node.name,
    telephone: (node) => node.telephone,
    address: (node) => ADDRESS_FIELDS.map((f) => node.address?.[f] ?? null),
  };
  for (const [label, read] of Object.entries(crossRouteFields)) {
    const seen = new Map();
    for (const [route, entities] of entitiesByRoute) {
      for (const { node } of entities) {
        const value = JSON.stringify(read(node) ?? null);
        if (!seen.has(value)) seen.set(value, []);
        seen.get(value).push(route);
      }
    }
    if (seen.size > 1) {
      const detail = [...seen].map(([value, routes]) => `${value} on ${routes.join(', ')}`).join(' | ');
      fail(`business entity ${label} is not consistent across prerendered routes: ${detail}`);
    }
  }

  const total = [...entitiesByRoute.values()].reduce((n, list) => n + list.length, 0);
  ok(
    `business data: ${total} entity/entities across ${entitiesByRoute.size} route(s) share one @id, name, telephone` +
      ` and postal address; no placeholder tokens; no unverified opening hours.`
  );
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

  await verifyBusinessData();

  if (process.exitCode && process.exitCode !== 0) {
    console.error('[verify-prerender] One or more prerendered pages failed the HTML/metadata or business-data checks.');
    process.exit(process.exitCode);
  }

  ok('All required pages contain <h1>, content keywords, and correct canonical.');
};

await main();
