import { featuredProjects, zhFeaturedProjects, projects, zhProjects } from './projects';
import { getProjectIndexPreview } from './project-index-previews';

// These catalogs stay on the server. Each route sends only the content it needs.
export function getHomeProjects(locale = 'en') {
  const featured = locale === 'zh' ? zhFeaturedProjects : featuredProjects;
  return featured.map(({ slug, path, summary }) => ({ slug, path, summary }));
}

export function getProjectPage(slug, locale = 'en') {
  const catalog = locale === 'zh' ? zhProjects : projects;
  const project = catalog.find(item => item.slug === slug);
  if (!project) return null;

  const browsable = catalog.filter(item => item.slug !== 'all-work');
  const position = browsable.findIndex(item => item.slug === slug);
  const nextProjects = project.slug === 'all-work' ? [] : [1, 2].map(offset => {
    const item = browsable[(position + offset) % browsable.length];
    return { slug: item.slug, title: item.title, description: item.description, path: item.path };
  });
  const pageProject = project.indexLayout ? {
    ...project,
    sections: project.sections.map(section => section.type === 'project-grid' ? {
      ...section,
      items: section.items.map(item => ({
        ...item,
        featured: featuredProjects.some(featured => featured.slug === item.slug),
        preview: getProjectIndexPreview(item.slug, locale),
      })),
    } : section),
  } : project;
  return { project: pageProject, nextProjects };
}
