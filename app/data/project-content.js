import {
  shengjianProject,
  clipmoriProject,
  etongueProject,
  porscheProject,
  postureProject,
  trekassistProject,
  littleLemonProject,
  knowledgeosProject,
  allWorkProject,
  sayitProject,
  helmlineProject,
} from './content/en/index.js';

export const featuredProjectSlugs = [
  'helmline',
  'trekassist',
  'porsche-digital-interface',
  'shengjian',
  'etongue-sensory-platform',
];

export const legacyProjectSlugRedirects = {
  'more-work': 'all-work',
  'hermes-ios-companion': 'helmline',
};

export const portfolioProjects = [
  shengjianProject,
  clipmoriProject,
  helmlineProject,
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
