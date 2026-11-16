import { lazy, Suspense, useEffect } from 'react';
import { useLocation } from '@remix-run/react';
import { Footer } from '~/components/footer';
import { Button } from '~/components/button';
import { Image } from '~/components/image';
import { Section } from '~/components/section';
import { useScrollToHash } from '~/hooks';
import { localizePath } from '~/i18n/route';
import { ThemeProvider } from '~/components/theme-provider';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { media } from '~/utils/style';
import styles from './project-case.module.css';
import { AllWorkIndex } from './all-work-index';

const Carousel = lazy(() =>
  import('~/components/carousel').then(module => ({ default: module.Carousel }))
);

const imageSizes = `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`;

const urlRegex = /(https?:\/\/[^\s,;:!?)]+)/g;

const renderBody = body =>
  body?.map((paragraph, i) => {
    const parts = [];
    let lastIndex = 0;
    let match;
    const regex = new RegExp(urlRegex.source, urlRegex.flags);
    while ((match = regex.exec(paragraph)) !== null) {
      if (match.index > lastIndex) {
        parts.push(paragraph.slice(lastIndex, match.index));
      }
      parts.push(match[0]);
      lastIndex = regex.lastIndex;
    }
    if (lastIndex < paragraph.length) {
      parts.push(paragraph.slice(lastIndex));
    }
    const children = parts.map((part, j) =>
      /^https?:\/\//.test(part) ? (
        <a key={j} href={part} target="_blank" rel="noopener noreferrer">
          {part.replace(/^https?:\/\//, '')}
        </a>
      ) : (
        part
      )
    );
    return (
      <ProjectSectionText key={i}>{children}</ProjectSectionText>
    );
  });

const renderImage = ({ image, alt, className, sizes = imageSizes, ...rest }) => (
  <Image
    className={className}
    src={image.src}
    srcSet={image.srcSet}
    width={image.width}
    height={image.height}
    placeholder={image.placeholder}
    poster={image.poster}
    alt={alt}
    sizes={sizes}
    {...rest}
  />
);

const renderTextRow = section => (
  <ProjectTextRow width={section.width}>
    {section.heading && !section.suppressHeading && (
      <ProjectSectionHeading>{section.heading}</ProjectSectionHeading>
    )}
    {renderBody(section.body)}
  </ProjectTextRow>
);

const ProjectGallery = ({ section }) => {
  const [firstImage] = section.images;
  // Treat clearly portrait imagery (e.g. phone screenshots) as a constrained
  // device frame so a 428×1000 asset doesn't stretch the carousel into a
  // 2x-tall column on desktop.
  const isPortrait =
    section.portrait ?? firstImage.height > firstImage.width * 1.4;
  const portraitSizes = `(max-width: ${media.mobile}px) 70vw, 360px`;

  return (
    <ProjectSection light={section.light}>
      <ProjectSectionContent>
        <div className={isPortrait ? styles.portraitGallery : undefined}>
          <Suspense
            fallback={
              <Image
                src={firstImage.src}
                srcSet={firstImage.srcSet}
                width={firstImage.width}
                height={firstImage.height}
                placeholder={firstImage.placeholder}
                alt={firstImage.alt || section.alt || section.heading}
                sizes={isPortrait ? portraitSizes : imageSizes}
              />
            }
          >
            <Carousel
              placeholder={firstImage.placeholder}
              images={section.images.map(image => ({
                srcSet: image.srcSet,
                sizes: isPortrait ? portraitSizes : imageSizes,
                alt: image.alt || section.alt || section.heading,
              }))}
              width={firstImage.width}
              height={firstImage.height}
            />
          </Suspense>
        </div>
        {renderTextRow(section)}
      </ProjectSectionContent>
    </ProjectSection>
  );
};

const ProjectImageSection = ({ section }) => (
  <ProjectSection light={section.light}>
    <ProjectSectionContent>
      {section.heading && renderTextRow(section)}
      {renderImage({
        image: section.image,
        alt: section.alt,
        sizes: imageSizes,
      })}
    </ProjectSectionContent>
  </ProjectSection>
);

const ProjectImageTextSection = ({ section }) => (
  <ProjectSection padding="top" light={section.light}>
    <ProjectSectionContent className={styles.grid}>
      <div className={styles.gridImage}>
        <div className={`${styles.gridBackground} ${section.portrait ? styles.gridPortrait : ''}`}>
          {renderImage({
            image: section.image,
            alt: section.alt,
            sizes: `(max-width: ${media.mobile}px) 312px, (max-width: ${media.tablet}px) 408px, 514px`,
          })}
        </div>
      </div>
      <div className={styles.gridText}>
        <ProjectSectionHeading>{section.heading}</ProjectSectionHeading>
        {renderBody(section.body)}
      </div>
    </ProjectSectionContent>
  </ProjectSection>
);

const ProjectComparisonColumns = ({ section }) => (
  <ProjectSection light={section.light}>
    <ProjectSectionColumns centered className={styles.columns}>
      <div>
        <ProjectSectionHeading>{section.heading}</ProjectSectionHeading>
        {renderBody(section.body)}
      </div>
      <div className={styles.sidebarImages}>
        {renderImage({
          image: section.image,
          alt: section.alt,
          className: styles.sidebarImage,
          sizes: `(max-width: ${media.mobile}px) 200px, 343px`,
        })}
      </div>
    </ProjectSectionColumns>
  </ProjectSection>
);

const ProjectTimeline = ({ section }) => (
  <ProjectSection light={section.light}>
    <ProjectSectionContent>
      <ProjectTextRow width="m">
        <ProjectSectionHeading>{section.heading}</ProjectSectionHeading>
        {renderBody(section.body)}
      </ProjectTextRow>
      <ol
        className={styles.timeline}
        style={{ '--cols-desktop': Math.min(7, section.items.length) }}
        aria-label={section.heading}
      >
        {section.items.map((item, index) => (
          <li className={styles.timelineItem} key={item.title}>
            <span className={styles.timelineIndex}>{String(index + 1).padStart(2, '0')}</span>
            <h3 className={styles.timelineTitle}>{item.title}</h3>
            <p className={styles.timelineDescription}>{item.description}</p>
          </li>
        ))}
      </ol>
    </ProjectSectionContent>
  </ProjectSection>
);

const ProjectGrid = ({ section }) => {
  const tagsLabel = section.tagsLabel || 'Tools and methods';
  const ctaLabel = section.ctaLabel || 'View case study';

  return (
    <ProjectSection light={section.light} className={styles.projectIndexSection}>
      <ProjectSectionContent className={styles.projectGridContent}>
        <ProjectTextRow width="l" stretch justify="start">
          <ProjectSectionHeading className={styles.projectGridHeading}>{section.heading}</ProjectSectionHeading>
          {renderBody(section.body)}
        </ProjectTextRow>
        <ul className={styles.projectGrid} aria-label={section.heading}>
          {section.items.map(item => {
            const inner = (
              <>
                {item.cover && (
                  <img className={styles.projectGridCover} src={item.cover} srcSet={item.coverSrcSet} sizes="(max-width: 1024px) calc(100vw - 48px), 480px" alt={item.coverAlt || item.title} width={1672} height={941} loading="lazy" />
                )}
                {item.timeframe && (
                  <span className={styles.projectGridTimeframe}>{item.timeframe}</span>
                )}
                <h3 className={styles.projectGridTitle}>{item.title}</h3>
                <p className={styles.projectGridDescription}>{item.description}</p>
                {!!item.tags?.length && (
                  <ul className={styles.projectGridTags} aria-label={tagsLabel}>
                    {item.tags.map(tag => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                )}
                {item.href && (
                  <span className={styles.projectGridCta} aria-hidden>
                    {ctaLabel} →
                  </span>
                )}
              </>
            );

          return (
            <li
              key={item.title}
              className={styles.projectGridItem}
              data-linked={!!item.href}
            >
              {item.href ? (
                <a className={styles.projectGridLink} href={item.href}>
                  {inner}
                </a>
              ) : (
                <div className={styles.projectGridStatic}>{inner}</div>
              )}
            </li>
          );
        })}
      </ul>
    </ProjectSectionContent>
  </ProjectSection>
  );
};

const ProjectMetrics = ({ section }) => (
  <ProjectSection light={section.light}>
    <ProjectSectionContent>
      <ProjectTextRow width="m">
        <ProjectSectionHeading>{section.heading}</ProjectSectionHeading>
        {renderBody(section.body)}
      </ProjectTextRow>
      <div
        className={styles.metricsGrid}
        style={{
          '--cols-desktop': Math.min(4, section.metrics.length),
          '--cols-laptop': Math.min(3, section.metrics.length),
        }}
      >
        {section.metrics.map(metric => (
          <div className={styles.metricCard} key={metric.label}>
            <strong className={styles.metricValue}>{metric.value}</strong>
            <span className={styles.metricLabel}>{metric.label}</span>
          </div>
        ))}
      </div>
      <dl className={styles.evidenceList}>
        {section.evidence.map(item => (
          <div className={styles.evidenceItem} key={item.label}>
            <dt>{item.label}</dt>
            <dd>{item.value}</dd>
          </div>
        ))}
      </dl>
    </ProjectSectionContent>
  </ProjectSection>
);

const ProjectOutcome = ({ section }) => {
  if (!section.image) {
    return (
      <ProjectSection>
        <ProjectSectionContent>{renderTextRow(section)}</ProjectSectionContent>
      </ProjectSection>
    );
  }

  return (
    <ThemeProvider theme="dark" data-invert>
      <ProjectSection
        backgroundOverlayOpacity={section.backgroundOverlayOpacity ?? 0.5}
        backgroundElement={renderImage({
          image: section.image,
          alt: '',
          role: 'presentation',
          sizes: '100vw',
        })}
      >
        <ProjectSectionColumns width="full">
          <ProjectSectionContent width="full">
            <ProjectTextRow width="s">
              <ProjectSectionHeading>{section.heading}</ProjectSectionHeading>
              {renderBody(section.body)}
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSectionColumns>
      </ProjectSection>
    </ThemeProvider>
  );
};

const ProjectSectionRenderer = ({ section }) => {
  switch (section.type) {
    case 'video':
      return (
        <ProjectSection>
          <ProjectSectionContent>
            {renderTextRow(section)}
            <figure className={styles.videoFigure}>
              {/* These product demos have no spoken dialogue; adjacent captions describe their content. */}
              {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
              <video className={styles.projectVideo} controls playsInline preload="none" poster={section.poster} aria-label={section.heading} aria-describedby={`video-${section.src.split('/').pop()}`}>
                <source src={section.src} type="video/mp4" />
                <a href={section.src}>{section.heading}</a>
              </video>
              <figcaption id={`video-${section.src.split('/').pop()}`}>{section.caption}</figcaption>
            </figure>
          </ProjectSectionContent>
        </ProjectSection>
      );
    case 'gallery':
      return <ProjectGallery section={section} />;
    case 'hero-image': {
      const isPortrait =
        section.portrait ?? section.image.height > section.image.width * 1.4;
      const portraitSizes = `(max-width: ${media.mobile}px) 70vw, 360px`;
      return (
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <div className={isPortrait ? styles.portraitHero : undefined}>
              <ProjectImage
                raised
                src={section.image.src}
                srcSet={section.image.srcSet}
                width={section.image.width}
                height={section.image.height}
                placeholder={section.image.placeholder}
                alt={section.alt}
                sizes={isPortrait ? portraitSizes : imageSizes}
                loading="eager"
                fetchpriority="high"
              />
            </div>
          </ProjectSectionContent>
        </ProjectSection>
      );
    }
    case 'image':
      return <ProjectImageSection section={section} />;
    case 'image-text':
      return <ProjectImageTextSection section={section} />;
    case 'comparison-columns':
      return <ProjectComparisonColumns section={section} />;
    case 'timeline':
      return <ProjectTimeline section={section} />;
    case 'metrics':
      return <ProjectMetrics section={section} />;
    case 'project-grid':
      return <ProjectGrid section={section} />;
    case 'outcome':
      return <ProjectOutcome section={section} />;
    default:
      return (
        <ProjectSection>
          <ProjectSectionContent>{renderTextRow(section)}</ProjectSectionContent>
        </ProjectSection>
      );
  }
};

const sectionId = (project, index) => `case-${project.slug}-${index + 1}`;

const CaseOverview = ({ brief }) => (
  <Section as="section" className={styles.overview} aria-labelledby="case-overview-title">
    <div className={styles.overviewInner}>
      <h2 id="case-overview-title">{brief.label}</h2>
      <dl className={styles.briefList}>
        {brief.items.map(item => (
          <div key={item.label}>
            <dt>{item.label}</dt>
            <dd>{item.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  </Section>
);

const CaseContents = ({ project, locale }) => {
  const scrollToHash = useScrollToHash();
  const navigateToSection = event => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    const href = event.currentTarget.href;
    const target = document.getElementById(href.split('#')[1]);
    // A deep link remains usable when its supporting evidence is collapsed.
    if (target?.tagName === 'DETAILS') target.open = true;
    scrollToHash(href);
  };
  return (
    <Section as="div" className={styles.contentsSection}>
      <details className={styles.contents}>
        <summary>{locale === 'zh' ? '跳转到章节' : 'Jump to a section'}</summary>
        <nav aria-label={locale === 'zh' ? '案例目录' : 'Case study contents'}>
          <ol>
            {project.sections.map((section, index) => section.heading && (
              <li key={sectionId(project, index)}>
                <a href={`#${sectionId(project, index)}`} onClick={navigateToSection}>
                  {section.heading}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </details>
    </Section>
  );
};

const CaseSection = ({ project, section, index }) => {
  const id = sectionId(project, index);
  if (section.detail && section.heading) {
    return (
      <details id={id} className={`${styles.sectionAnchor} ${styles.detailSection}`}>
        <summary><h2>{section.heading}</h2></summary>
        <ProjectSectionRenderer section={{ ...section, suppressHeading: true }} />
      </details>
    );
  }
  return (
    <div id={id} className={styles.sectionAnchor} tabIndex={-1}>
      <ProjectSectionRenderer section={section} />
    </div>
  );
};

const ContinueReading = ({ project, nextProjects, locale }) => (
  <Section as="section" className={styles.continueReading} aria-labelledby="continue-reading-title">
    <div className={styles.overviewInner}>
      <h2 id="continue-reading-title">
        {locale === 'zh' ? '继续了解我的作品' : 'Explore more work'}
      </h2>
      {!!nextProjects.length && (
        <ul className={styles.nextProjects}>
          {nextProjects.map(item => (
            <li key={item.slug}>
              <a href={localizePath(item.path, locale)}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span>{locale === 'zh' ? '查看案例' : 'View case study'}</span>
              </a>
            </li>
          ))}
        </ul>
      )}
      <nav className={styles.caseEnd} aria-label={locale === 'zh' ? '作品集导航' : 'Portfolio navigation'}>
        {project.slug !== 'all-work' && (
          <Button secondary href={localizePath('/projects/all-work', locale)} icon="arrow-left">
            {locale === 'zh' ? '查看全部作品' : 'View all work'}
          </Button>
        )}
        <Button secondary href={localizePath('/contact', locale)} icon="send">
          {locale === 'zh' ? '联系我' : 'Get in touch'}
        </Button>
      </nav>
    </div>
  </Section>
);

export const ProjectCase = ({ project, nextProjects = [], locale = 'en' }) => {
  const { hash } = useLocation();
  useEffect(() => {
    if (!hash.startsWith(`#case-${project.slug}-`)) return;
    const target = document.getElementById(hash.slice(1));
    if (target?.tagName === 'DETAILS' && !target.open) {
      target.open = true;
      target.scrollIntoView({ block: 'start' });
    }
  }, [hash, project.slug]);
  if (project.indexLayout) {
    return (
      <>
        <ProjectContainer className={styles.caseContainer}>
          <AllWorkIndex project={project} locale={locale} />
        </ProjectContainer>
        <Footer />
      </>
    );
  }
  return (
  <>
    <ProjectContainer className={styles.caseContainer}>
      {project.background && (
        <ProjectBackground
          src={project.background.src}
          srcSet={project.background.srcSet}
          width={project.background.width}
          height={project.background.height}
          placeholder={project.background.placeholder}
          opacity={project.background.opacity}
        />
      )}
      <ProjectHeader
        className={project.indexLayout ? styles.indexHeader : project.slug === 'helmline' ? styles.storeHeader : undefined}
        title={project.title}
        description={project.description}
        roles={project.roles}
        facts={project.caseFacts}
        url={project.url}
        linkLabel={project.linkLabel}
      />
      {project.caseBrief && <CaseOverview brief={project.caseBrief} />}
      {!project.indexLayout && <CaseContents project={project} locale={locale} />}
      {project.sections.map((section, index) => (
        <CaseSection key={sectionId(project, index)} project={project} section={section} index={index} />
      ))}
      <ContinueReading project={project} nextProjects={nextProjects} locale={locale} />
    </ProjectContainer>
    <Footer />
  </>
  );
};
