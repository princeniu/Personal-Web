import {
  etongueProject,
  porscheProject,
  postureProject,
  trekassistProject,
  littleLemonProject,
  knowledgeosProject,
  allWorkProject,
  sayitProject,
  hermesIosCompanionProject,
} from './content/en/index.js';

export const featuredProjectSlugs = [
  'hermes-ios-companion',
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
  hermesIosCompanionProject,
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
