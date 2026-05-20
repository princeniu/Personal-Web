import { json, redirect } from '@remix-run/cloudflare';
import { useLoaderData } from '@remix-run/react';
import { baseMeta } from '~/utils/meta';
import { withAssets } from '~/data/projects';
import { ProjectCase } from './projects/project-case';
import {
  portfolioProjects as zhProjectsRaw,
} from '~/data/content/zh';
import {
  legacyProjectSlugRedirects,
  resolveProjectSlug,
} from '~/data/project-content';

const zhProjects = zhProjectsRaw.map(withAssets);
const getZhProjectBySlug = slug => zhProjects.find(p => p.slug === slug);

export const loader = async ({ params }) => {
  if (legacyProjectSlugRedirects[params.slug]) {
    return redirect(`/zh/projects/${legacyProjectSlugRedirects[params.slug]}`, 301);
  }

  const resolvedSlug = resolveProjectSlug(params.slug);
  const project = getZhProjectBySlug(resolvedSlug);

  if (!project) {
    throw new Response(null, { status: 404, statusText: 'Project not found' });
  }

  return json({ slug: project.slug });
};

export const meta = ({ params }) => {
  const project = getZhProjectBySlug(resolveProjectSlug(params.slug));

  if (!project) {
    return baseMeta({
      prefix: '牛拙Prince',
      title: '项目未找到',
      description: '请求的项目不存在。',
      path: `/zh/projects/${params.slug}`,
      locale: 'zh',
    });
  }

  return baseMeta({
    title: project.title,
    description: project.description,
    prefix: '项目',
    path: `/zh/projects/${params.slug}`,
    locale: 'zh',
  });
};

export default function ZhProjectRoute() {
  const { slug } = useLoaderData();
  const project = getZhProjectBySlug(slug);

  return <ProjectCase project={project} />;
}
