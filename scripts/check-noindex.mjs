import fs from 'node:fs/promises';
import path from 'node:path';

const DIST_DIR = path.resolve(process.cwd(), 'dist');

const walk = async (dir) => {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      files.push(...(await walk(p)));
    } else {
      files.push(p);
    }
  }
  return files;
};

const main = async () => {
  try {
    await fs.access(DIST_DIR);
  } catch {
    console.error(`[check-noindex] Missing dist directory: ${DIST_DIR}`);
    process.exit(2);
  }

  const files = (await walk(DIST_DIR)).filter((f) =>
    /\.(html|htm|headers|txt)$/i.test(f)
  );

  const hits = [];
  for (const f of files) {
    // Only scan text-ish files.
    const content = await fs.readFile(f, 'utf8');
    if (content.toLowerCase().includes('noindex')) {
      hits.push(path.relative(process.cwd(), f));
    }
  }

  if (hits.length) {
    console.error('[check-noindex] Found "noindex" in build output files:');
    for (const f of hits) console.error(`- ${f}`);
    process.exit(1);
  }

  console.log(`[check-noindex] OK: no "noindex" found in ${files.length} scanned file(s).`);
};

await main();
