import fs from 'node:fs/promises';
import path from 'node:path';

const distDir = path.resolve(process.cwd(), 'dist');
const indexPath = path.join(distDir, 'index.html');
const notFoundPath = path.join(distDir, '404.html');
const public404Path = path.resolve(process.cwd(), 'public', '404.html');

try {
  await fs.access(indexPath);
} catch {
  console.error(`[copy-404] Missing ${indexPath}. Did the build run?`);
  process.exit(1);
}

// Prefer a dedicated /public/404.html (classic GitHub Pages SPA workaround).
try {
  await fs.access(public404Path);
  await fs.copyFile(public404Path, notFoundPath);
  console.log('[copy-404] Copied public/404.html -> dist/404.html');
  process.exit(0);
} catch {
  // continue
}

// If a 404.html already exists in dist for some reason, do not overwrite it.
try {
  await fs.access(notFoundPath);
  console.log('[copy-404] dist/404.html already exists. Skipping copy.');
  process.exit(0);
} catch {
  // continue
}

await fs.copyFile(indexPath, notFoundPath);
console.log(`[copy-404] Copied index.html -> 404.html`);
