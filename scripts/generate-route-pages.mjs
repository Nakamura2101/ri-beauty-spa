import fs from 'node:fs/promises';
import path from 'node:path';

const DIST_DIR = path.resolve(process.cwd(), 'dist');
const TEMPLATE_PATH = path.join(DIST_DIR, 'index.html');

const SITE_ORIGIN = 'https://www.ri-beauty-spa.com';

const ROUTES = [
  {
    path: '/services/',
    title: 'サービス一覧｜Ri Beauty Spa 川崎',
    description: '川崎のRi Beauty Spaが提供するフェイシャル、ボディケア、ハーバルリチュアルの一覧ページ。',
  },
  {
    path: '/services/body-wellness/',
    title: 'ボディウェルネス｜Ri Beauty Spa & Wellness 川崎',
    description: 'ボディケアで巡りとバランスを整えるトリートメント。川崎のRi Beauty Spa & Wellnessで深いリラクゼーションを。',
  },
  {
    path: '/services/skin-therapy/',
    title: 'スキンセラピー｜Ri Beauty Spa & Wellness 川崎',
    description: 'フェイシャルを中心としたスキンケアメニュー。肌状態に合わせた丁寧なケアで、健やかな素肌へ導きます。',
  },
  {
    path: '/services/herbal-rituals/',
    title: 'ハーバルリチュアル｜Ri Beauty Spa & Wellness 川崎',
    description: 'ハーブの力で心身を整えるリチュアル。香りと温もりに包まれる癒やしの時間をご提供します。',
  },
  // Optional: generate other directory pages as real 200 responses (helps indexing + deep links)
  {
    path: '/about/',
    title: 'About｜Ri Beauty Spa & Wellness 川崎',
    description: 'Ri Beauty Spa & Wellnessについて。川崎で上質なリラクゼーション体験をご提供します。',
  },
  {
    path: '/corporate/',
    title: '法人向け｜Ri Beauty Spa & Wellness 川崎',
    description: '法人向けサービスのご案内。ご相談・お問い合わせはこちらから。',
  },
  {
    path: '/contact/',
    title: 'Contact｜Ri Beauty Spa & Wellness 川崎',
    description: 'お問い合わせページ。ご予約やご質問はこちらからお気軽にご連絡ください。',
  },
];

const ensureDir = async (dirPath) => {
  await fs.mkdir(dirPath, { recursive: true });
};

const setTitle = (html, title) => {
  if (!title) return html;
  return html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${title}</title>`);
};

const setMetaByName = (html, name, content) => {
  if (!content) return html;
  const re = new RegExp(`<meta\\s+name=\"${name.replace(/[.*+?^${}()|[\\]\\]/g, '\\$&')}\"\\s+content=\"[^\"]*\"\\s*\\/?\\s*>`, 'i');
  if (re.test(html)) {
    return html.replace(re, `<meta name="${name}" content="${content}" />`);
  }
  // If not found, insert before </head>
  return html.replace(/<\/head>/i, `  <meta name="${name}" content="${content}" />\n  </head>`);
};

const setMetaByProperty = (html, property, content) => {
  if (!content) return html;
  const propEscaped = property.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const re = new RegExp(`<meta\\s+property=\"${propEscaped}\"\\s+content=\"[^\"]*\"\\s*\\/?\\s*>`, 'i');
  if (re.test(html)) {
    return html.replace(re, `<meta property="${property}" content="${content}" />`);
  }
  return html.replace(/<\/head>/i, `  <meta property="${property}" content="${content}" />\n  </head>`);
};

const setCanonical = (html, canonicalUrl) => {
  const re = /<link\s+rel=\"canonical\"\s+href=\"[^\"]*\"\s*\/?\s*>/i;
  if (re.test(html)) {
    return html.replace(re, `<link rel="canonical" href="${canonicalUrl}" />`);
  }
  return html.replace(/<\/head>/i, `  <link rel="canonical" href="${canonicalUrl}" />\n  </head>`);
};

const removeRobotsNoindex = (html) => {
  // Ensure we don't ship any meta robots noindex in generated pages.
  return html
    .replace(/<meta\s+name=\"robots\"[^>]*noindex[^>]*>\s*/gi, '')
    .replace(/<meta\s+name=\"robots\"[^>]*>\s*/gi, (m) => (m.toLowerCase().includes('noindex') ? '' : m));
};

const routeToOutputFile = (routePath) => {
  const trimmed = routePath.replace(/^\//, '').replace(/\/$/, '');
  // For "/" -> dist/index.html (we don't generate root)
  if (!trimmed) return null;
  return path.join(DIST_DIR, trimmed, 'index.html');
};

const main = async () => {
  let template;
  try {
    template = await fs.readFile(TEMPLATE_PATH, 'utf8');
  } catch {
    console.error(`[generate-route-pages] Missing ${TEMPLATE_PATH}. Did the build run?`);
    process.exit(1);
  }

  for (const route of ROUTES) {
    const outFile = routeToOutputFile(route.path);
    if (!outFile) continue;

    const canonicalUrl = `${SITE_ORIGIN}${route.path}`;

    let html = template;
    html = removeRobotsNoindex(html);
    html = setTitle(html, route.title);
    html = setMetaByName(html, 'description', route.description);
    html = setMetaByProperty(html, 'og:title', route.title);
    html = setMetaByProperty(html, 'og:description', route.description);
    html = setMetaByProperty(html, 'og:url', canonicalUrl);
    html = setCanonical(html, canonicalUrl);

    await ensureDir(path.dirname(outFile));
    await fs.writeFile(outFile, html, 'utf8');
    console.log(`[generate-route-pages] Wrote ${path.relative(process.cwd(), outFile)}`);
  }
};

await main();
