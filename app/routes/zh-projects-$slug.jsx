import { json, redirect } from '@remix-run/cloudflare';
import { useLoaderData } from '@remix-run/react';
import { baseMeta } from '~/utils/meta';
import { getProjectPage } from '~/data/portfolio.server';
import { ProjectCase } from './projects/project-case';
import {
  legacyProjectSlugRedirects,
  resolveProjectSlug,
} from '~/data/project-content';

export const loader = async ({ params }) => {
  if (legacyProjectSlugRedirects[params.slug]) {
    return redirect(`/zh/projects/${legacyProjectSlugRedirects[params.slug]}`, 301);
  }

  const resolvedSlug = resolveProjectSlug(params.slug);
  const page = getProjectPage(resolvedSlug, 'zh');

  if (!page) {
    throw new Response(null, { status: 404, statusText: 'Project not found' });
  }

  return json(page);
};

export const meta = ({ data, params }) => {
  const project = data?.project;

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
    path: `/zh/projects/${project.slug}`,
    locale: 'zh',
  });
};

export default function ZhProjectRoute() {
  const { project, nextProjects } = useLoaderData();

  return <ProjectCase project={project} nextProjects={nextProjects} locale="zh" />;
}
