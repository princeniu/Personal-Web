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
const SITEMAP_EXCLUDED_SLUGS = new Set();

function readProjectSlugs() {
  const projectsDir = path.resolve(__dirname, '../app/data/content/en/projects');
  const slugs = [];
  const files = fs.readdirSync(projectsDir).filter(f => f.endsWith('.js'));
  const re = /slug:\s*['"]([^'"]+)['"]/g;

  for (const file of files) {
    const content = fs.readFileSync(path.join(projectsDir, file), 'utf8');
    let match;
    while ((match = re.exec(content)) !== null) {
      slugs.push(match[1]);
    }
  }
  return slugs;
}

const localizeRoute = route => ({
  ...route,
  path: route.path === '/' ? '/zh' : `/zh${route.path}`,
});

const projectRoutes = readProjectSlugs()
  .filter(slug => !SITEMAP_EXCLUDED_SLUGS.has(slug))
  .map(slug => ({
    path: `/projects/${slug}`,
    priority: '0.8',
    changefreq: 'monthly',
  }));

const localizedStaticRoutes = staticRoutes.map(localizeRoute);
const localizedProjectRoutes = projectRoutes.map(localizeRoute);

const allRoutes = [
  ...staticRoutes,
  ...localizedStaticRoutes,
  ...projectRoutes,
  ...localizedProjectRoutes,
];

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
