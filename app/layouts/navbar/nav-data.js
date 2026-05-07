import config from '~/config.json';

export const navLinks = [
  {
    label: 'Projects',
    pathname: '/#projects',
  },
  {
    label: 'About',
    pathname: '/#details',
  },
  {
    label: 'All Work',
    pathname: '/projects/all-work',
  },
  {
    label: 'Contact',
    pathname: '/contact',
  },
  {
    label: 'Uses',
    pathname: '/uses',
  },
];

export const socialLinks = [
  config.linkedin && {
    label: 'LinkedIn',
    url: `https://www.linkedin.com/in/${config.linkedin}`,
    icon: 'linkedin',
  },
  config.github && {
    label: 'Github',
    url: `https://github.com/${config.github}`,
    icon: 'github',
  },
  config.bluesky && {
    label: 'Bluesky',
    url: `https://bsky.app/profile/${config.bluesky}`,
    icon: 'bluesky',
  },
  config.figma && {
    label: 'Figma',
    url: `https://www.figma.com/${config.figma}`,
    icon: 'figma',
  },
  {
    label: 'Resume (PDF)',
    url: '/resume.pdf',
    icon: 'resume',
    download: true,
  },
].filter(Boolean);
