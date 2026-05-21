import {
  etongueProject,
  porscheProject,
  postureProject,
  trekassistProject,
  littleLemonProject,
  knowledgeosProject,
  allWorkProject,
  sayitProject,
} from './content/en/index.js';

export const featuredProjectSlugs = [
  'trekassist',
  'knowledgeos',
  'porsche-digital-interface',
  'sayit',
  'etongue-sensory-platform',
];

export const legacyProjectSlugRedirects = {
  'more-work': 'all-work',
};

export const portfolioProjects = [
  etongueProject,
  porscheProject,
  postureProject,
  trekassistProject,
  littleLemonProject,
  knowledgeosProject,
  allWorkProject,
  sayitProject,
];

export const resolveProjectSlug = slug => legacyProjectSlugRedirects[slug] ?? slug;

export const getProjectPath = slug => `/projects/${slug}`;
