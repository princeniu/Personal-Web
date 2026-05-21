import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const root = process.cwd();
const scanRoots = [
  path.join(root, 'app/data/site-content.js'),
  path.join(root, 'app/data/content'),
];

const englishSignals = [
  'designed to',
  'built to',
  'focused on',
  'end-to-end',
  'real-time',
  'long-term',
  'high-fidelity',
  'cross-platform',
  'broader',
  'seamless',
  'valuable',
  'at its core',
  'common thread',
  'transform',
  'actionable insights',
];

const chineseSignals = [
  '打造',
  '赋能',
  '沉淀',
  '链路',
  '闭环',
  '旨在',
  '转化为',
  '真正可以',
  '端到端',
  '复杂度',
  '驱动',
  '场景',
];

const extensions = new Set(['.js', '.jsx', '.mjs']);

function walk(targetPath) {
  if (!fs.existsSync(targetPath)) return [];
  const stat = fs.statSync(targetPath);

  if (stat.isFile()) {
    return extensions.has(path.extname(targetPath)) ? [targetPath] : [];
  }

  return fs
    .readdirSync(targetPath, { withFileTypes: true })
    .flatMap(entry => walk(path.join(targetPath, entry.name)));
}

function countLiteral(text, literal) {
  return text.split(literal).length - 1;
}

function lineHits(lines, signals) {
  const hits = [];

  lines.forEach((line, index) => {
    const lowered = line.toLowerCase();
    const matched = signals.filter(signal => lowered.includes(signal.toLowerCase()));

    if (matched.length > 0) {
      hits.push({
        line: index + 1,
        matched,
        text: line.trim().slice(0, 180),
      });
    }
  });

  return hits;
}

const files = [...new Set(scanRoots.flatMap(walk))].sort();
const reports = files.map(file => {
  const text = fs.readFileSync(file, 'utf8');
  const lines = text.split('\n');
  const englishHits = lineHits(lines, englishSignals);
  const chineseHits = lineHits(lines, chineseSignals);
  const dashCount = countLiteral(text, '—');
  const enDashCount = countLiteral(text, '–');
  const chineseDashCount = countLiteral(text, '——');

  return {
    file: path.relative(root, file),
    dashCount,
    enDashCount,
    chineseDashCount,
    englishSignalCount: englishHits.reduce((sum, hit) => sum + hit.matched.length, 0),
    chineseSignalCount: chineseHits.reduce((sum, hit) => sum + hit.matched.length, 0),
    englishHits: englishHits.slice(0, 5),
    chineseHits: chineseHits.slice(0, 5),
  };
});

const ranked = reports
  .filter(
    report =>
      report.dashCount +
        report.enDashCount +
        report.englishSignalCount +
        report.chineseSignalCount >
      0
  )
  .sort(
    (a, b) =>
      b.dashCount +
        b.enDashCount +
        b.englishSignalCount +
        b.chineseSignalCount -
      (a.dashCount + a.enDashCount + a.englishSignalCount + a.chineseSignalCount)
  );

const totals = ranked.reduce(
  (acc, report) => {
    acc.files += 1;
    acc.emDashes += report.dashCount;
    acc.enDashes += report.enDashCount;
    acc.chineseDashes += report.chineseDashCount;
    acc.englishSignals += report.englishSignalCount;
    acc.chineseSignals += report.chineseSignalCount;
    return acc;
  },
  {
    files: 0,
    emDashes: 0,
    enDashes: 0,
    chineseDashes: 0,
    englishSignals: 0,
    chineseSignals: 0,
  }
);

console.log('Portfolio copy audit');
console.log('====================');
console.log(`Files with signals: ${totals.files}`);
console.log(`Em dashes: ${totals.emDashes}`);
console.log(`En dashes: ${totals.enDashes}`);
console.log(`Chinese double dashes: ${totals.chineseDashes}`);
console.log(`English signal hits: ${totals.englishSignals}`);
console.log(`Chinese signal hits: ${totals.chineseSignals}`);
console.log('');

ranked.slice(0, 20).forEach(report => {
  console.log(report.file);
  console.log(
    `  — ${report.dashCount} | – ${report.enDashCount} | —— ${report.chineseDashCount} | EN ${report.englishSignalCount} | ZH ${report.chineseSignalCount}`
  );

  [...report.englishHits, ...report.chineseHits].slice(0, 5).forEach(hit => {
    console.log(`  L${hit.line}: [${hit.matched.join(', ')}] ${hit.text}`);
  });

  console.log('');
});
