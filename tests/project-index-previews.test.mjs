import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { transformSync } from 'esbuild';
import sharp from 'sharp';

const source = readFileSync(new URL('../app/data/project-index-previews.js', import.meta.url), 'utf8');
const code = transformSync(source, { format: 'cjs' }).code;
const module = { exports: {} };
new Function('require', 'module', 'exports', code)(name => ({ __esModule: true, default: name }), module, module.exports);
const { getProjectIndexPreview } = module.exports;
const slugs = ['helmline', 'shengjian', 'clipmori', 'trekassist', 'porsche-digital-interface', 'sayit', 'knowledgeos', 'posture-checker', 'etongue-sensory-platform', 'little-lemon'];

test('localized previews use real image dimensions and crops stay inside the source', async () => {
  for (const locale of ['en', 'zh']) {
    for (const slug of slugs) {
      const preview = getProjectIndexPreview(slug, locale);
      assert.ok(preview, `${locale}/${slug}: missing preview`);
      assert.equal(preview.images.length, preview.layout === 'pair' ? 2 : 1);
      for (const image of preview.images) {
        const file = image.src.startsWith('~/') ? path.join('app', image.src.slice(2)) : path.join('public', image.src);
        const metadata = await sharp(file).metadata();
        assert.equal(image.width, metadata.width, file);
        assert.equal(image.height, metadata.height, file);
        assert.ok(image.alt.length > 0);
        if (image.crop) {
          const { x, y, width, height } = image.crop;
          assert.ok([x, y, width, height].every(Number.isFinite), file);
          assert.ok(x >= 0 && y >= 0 && width > 0 && height > 0, file);
          assert.ok(x + width <= image.width && y + height <= image.height, `${file}: crop extends beyond source`);
        }
      }
    }
  }
});

test('Shengjian and Clipmori retain their complete existing cover images', () => {
  for (const locale of ['en', 'zh']) {
    for (const [slug, filename] of [['shengjian', `cover-v2-${locale}.webp`], ['clipmori', `cover-${locale}.webp`]]) {
      const preview = getProjectIndexPreview(slug, locale);
      assert.equal(preview.layout, 'single');
      assert.equal(preview.images[0].src, `/projects/${slug}/${filename}`);
      assert.equal(preview.images[0].crop, undefined, `${slug}: excluded project should remain uncropped`);
    }
  }
});
