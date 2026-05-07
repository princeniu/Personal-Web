#!/usr/bin/env node
// Compress every JPG/PNG under app/assets/ in place.
// - JPG: re-encode at quality 82 with mozjpeg
// - PNG: palette compression via sharp (lossless-ish)
// - Cap "-large" variants at 1920px wide so they stay reasonable
// Idempotent enough: re-running just produces marginally smaller files.
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const ASSETS_DIR = path.resolve(__dirname, '../app/assets');
const MAX_LARGE_WIDTH = 1920;
const JPG_QUALITY = 82;

const files = fs.readdirSync(ASSETS_DIR).filter(f => /\.(jpe?g|png)$/i.test(f));

let totalSavedBytes = 0;
let processed = 0;

(async () => {
  for (const file of files) {
    const fullPath = path.join(ASSETS_DIR, file);
    const stat = fs.statSync(fullPath);
    if (!stat.isFile()) continue;
    const originalSize = stat.size;

    const isLarge = /-large\.(jpe?g|png)$/i.test(file);
    const isPlaceholder = /-placeholder\.(jpe?g|png)$/i.test(file);
    const isPng = /\.png$/i.test(file);

    // Placeholders are already tiny LQIPs; skip to avoid re-blurring.
    if (isPlaceholder) continue;

    try {
      const tmpPath = fullPath + '.tmp';
      const pipeline = sharp(fullPath, { failOn: 'none' });
      const meta = await pipeline.metadata();
      let pipe = pipeline;

      if (isLarge && meta.width && meta.width > MAX_LARGE_WIDTH) {
        pipe = pipe.resize({ width: MAX_LARGE_WIDTH, withoutEnlargement: true });
      }

      if (isPng) {
        pipe = pipe.png({ compressionLevel: 9, palette: true });
      } else {
        pipe = pipe.jpeg({ quality: JPG_QUALITY, mozjpeg: true });
      }

      await pipe.toFile(tmpPath);
      const newSize = fs.statSync(tmpPath).size;

      if (newSize < originalSize) {
        fs.renameSync(tmpPath, fullPath);
        const saved = originalSize - newSize;
        totalSavedBytes += saved;
        processed++;
        console.info(
          `${file}: ${(originalSize / 1024).toFixed(0)}KB → ${(newSize / 1024).toFixed(0)}KB (-${(
            (saved / originalSize) *
            100
          ).toFixed(1)}%)`
        );
      } else {
        fs.unlinkSync(tmpPath);
      }
    } catch (err) {
      console.error(`failed: ${file} (${err.message})`);
    }
  }

  console.info(
    `\nDone. ${processed} files optimized, total saved: ${(totalSavedBytes / 1024 / 1024).toFixed(2)} MB.`
  );
})();
