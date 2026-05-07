const fs = require('fs');
const path = require('path');
const config = require('../app/config.json');

const SITE_URL = config.url;
const today = new Date().toISOString().split('T')[0];

const staticRoutes = [
  { path: '/', priority: '1.0', changefreq: 'monthly' },
  { path: '/contact', priority: '0.7', changefreq: 'monthly' },
  { path: '/uses', priority: '0.5', changefreq: 'monthly' },
];

// Slugs intentionally excluded from the public sitemap.
// SayIt is shipped through GitHub Releases, so its case study is reachable
// from the homepage but not indexed as an isolated route.
const SITEMAP_EXCLUDED_SLUGS = new Set(['sayit']);

function readProjectSlugs() {
  const file = fs.readFileSync(
    path.resolve(__dirname, '../app/data/project-content.js'),
    'utf8'
  );
  const slugs = [];
  const re = /slug:\s*['"]([^'"]+)['"]/g;
  let match;
  while ((match = re.exec(file)) !== null) {
    slugs.push(match[1]);
  }
  return slugs;
}

const projectRoutes = readProjectSlugs()
  .filter(slug => !SITEMAP_EXCLUDED_SLUGS.has(slug))
  .map(slug => ({
    path: `/projects/${slug}`,
    priority: '0.8',
    changefreq: 'monthly',
  }));

const allRoutes = [...staticRoutes, ...projectRoutes];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map(
    ({ path, priority, changefreq }) =>
      `  <url>
    <loc>${SITE_URL}${path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

fs.writeFileSync(path.resolve(__dirname, '../public/sitemap.xml'), xml);
console.info(`Generated sitemap with ${allRoutes.length} URLs`);
