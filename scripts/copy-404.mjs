import fs from 'node:fs/promises';
import path from 'node:path';

const distDir = path.resolve(process.cwd(), 'dist');
const indexPath = path.join(distDir, 'index.html');
const notFoundPath = path.join(distDir, '404.html');

try {
  await fs.access(indexPath);
} catch {
  console.error(`[copy-404] Missing ${indexPath}. Did the build run?`);
  process.exit(1);
}

await fs.copyFile(indexPath, notFoundPath);
console.log(`[copy-404] Copied index.html -> 404.html`);
