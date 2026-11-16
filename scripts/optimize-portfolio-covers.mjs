import sharp from 'sharp';
import { mkdir, stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const directory = path.join(root, 'public/projects/clipmori');
await mkdir(directory, { recursive: true });

for (const locale of ['en', 'zh']) {
  const source = path.join(directory, `cover-${locale}.png`);
  const variants = [640, 1120, 1672];
  const sizes = [];
  for (const width of variants) {
    const name = width === 1672 ? `cover-${locale}.webp` : `cover-${locale}-${width}.webp`;
    const destination = path.join(directory, name);
    await sharp(source).resize({ width, withoutEnlargement: true }).webp({ quality: 86, effort: 6 }).toFile(destination);
    sizes.push({ width, bytes: (await stat(destination)).size, name });
  }
  console.log(JSON.stringify({ locale, originalBytes: (await stat(source)).size, variants: sizes }));
}
