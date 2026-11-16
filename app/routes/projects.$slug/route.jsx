import { json, redirect } from '@remix-run/cloudflare';
import { useLoaderData } from '@remix-run/react';
import { getProjectPage } from '~/data/portfolio.server';
import { legacyProjectSlugRedirects, resolveProjectSlug } from '~/data/project-content';
import { baseMeta } from '~/utils/meta';
import { ProjectCase } from '../projects/project-case';

export const loader = async ({ params }) => {
  // Permanent redirect for legacy slugs so old links keep working in search results.
  if (legacyProjectSlugRedirects[params.slug]) {
    return redirect(`/projects/${legacyProjectSlugRedirects[params.slug]}`, 301);
  }

  const resolvedSlug = resolveProjectSlug(params.slug);
  const page = getProjectPage(resolvedSlug, 'en');

  if (!page) {
    throw new Response(null, { status: 404, statusText: 'Project not found' });
  }

  return json(page);
};

export const meta = ({ data, params }) => {
  const project = data?.project;

  if (!project) {
    return baseMeta({
      title: 'Project not found',
      description: 'The requested project could not be found.',
      path: `/projects/${params.slug}`,
    });
  }

  return baseMeta({
    title: project.title,
    description: project.description,
    prefix: 'Projects',
    path: `/projects/${project.slug}`,
  });
};

export default function ProjectRoute() {
  const { project, nextProjects } = useLoaderData();

  return <ProjectCase project={project} nextProjects={nextProjects} locale="en" />;
}
