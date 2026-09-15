import {
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
  'knowledgeos',
  'porsche-digital-interface',
  'sayit',
  'etongue-sensory-platform',
];

export const legacyProjectSlugRedirects = {
  'more-work': 'all-work',
  'hermes-ios-companion': 'helmline',
};

export const portfolioProjects = [
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
