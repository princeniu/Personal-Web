import config from '~/config.json';

export const navLinks = [
  {
    label: 'Projects',
    pathname: '/#project-1',
  },
  {
    label: 'About',
    pathname: '/#details',
  },
  {
    label: 'More Work',
    pathname: '/projects/more-work',
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
  config.github && {
    label: 'Github',
    url: `https://github.com/${config.github}`,
    icon: 'github',
  },
].filter(Boolean);
