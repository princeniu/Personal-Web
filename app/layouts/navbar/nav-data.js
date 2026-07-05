import config from '~/config.json';

export const navLinks = [
  {
    label: 'Projects',
    zhLabel: '项目',
    pathname: '/#projects',
  },
  {
    label: 'About',
    zhLabel: '关于',
    pathname: '/#details',
  },
  {
    label: 'All Work',
    zhLabel: '全部作品',
    pathname: '/projects/all-work',
  },
  {
    label: 'Contact',
    zhLabel: '联系',
    pathname: '/contact',
  },
  {
    label: 'Uses',
    zhLabel: '工具',
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
    zhLabel: '简历（PDF）',
    url: '/resume.pdf',
    icon: 'resume',
    download: true,
  },
].filter(Boolean);
