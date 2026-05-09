import config from '~/config.json';

const { name, url, twitter, linkedin, github } = config;
const defaultOgImage = `${url}/social-image.png`;

export function baseMeta({
  title,
  description,
  prefix = name,
  ogImage = defaultOgImage,
  url: pageUrl = url,
  path,
  type = 'website',
}) {
  const titleText = [prefix, title].filter(Boolean).join(' | ');
  const resolvedUrl = path ? `${url}${path}` : pageUrl;

  const meta = [
    { title: titleText },
    { name: 'description', content: description },
    { name: 'author', content: name },
    {
      name: 'keywords',
      content:
        'product design, ui ux, human factors, ai products, prototyping, design engineering, react native, swiftui, portfolio',
    },
    { property: 'og:image', content: ogImage },
    { property: 'og:image:alt', content: `Portfolio of ${name}` },
    { property: 'og:image:type', content: 'image/png' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '675' },
    { property: 'og:title', content: titleText },
    { property: 'og:site_name', content: name },
    { property: 'og:type', content: type },
    { property: 'og:url', content: resolvedUrl },
    { property: 'og:locale', content: 'en_US' },
    { property: 'og:description', content: description },
    { property: 'twitter:card', content: 'summary_large_image' },
    { property: 'twitter:description', content: description },
    { property: 'twitter:title', content: titleText },
    { property: 'twitter:site', content: url },
    { property: 'twitter:image', content: ogImage },
  ];

  if (twitter) {
    meta.push({ property: 'twitter:creator', content: twitter });
  }

  return meta;
}

export function personSchema() {
  const sameAs = [];
  if (github) sameAs.push(`https://github.com/${github}`);
  if (linkedin) sameAs.push(`https://www.linkedin.com/in/${linkedin}`);

  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name,
    url,
    image: `${url}/social-image.png`,
    jobTitle: 'UI/UX Designer & AI Product Developer',
    description:
      'Designer-builder working at the intersection of Human Factors, Product Design, and AI.',
    alumniOf: [
      { '@type': 'EducationalOrganization', name: 'Tufts University' },
      { '@type': 'EducationalOrganization', name: 'Purdue University' },
    ],
    knowsAbout: [
      'Human Factors Engineering',
      'Product Design',
      'UX Research',
      'AI Products',
      'Prototyping',
      'Design Engineering',
      'React Native',
      'SwiftUI',
    ],
    sameAs,
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name,
    url,
    inLanguage: 'en-US',
  };
}
