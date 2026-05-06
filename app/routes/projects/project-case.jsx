import { lazy, Suspense } from 'react';
import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
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

const Carousel = lazy(() =>
  import('~/components/carousel').then(module => ({ default: module.Carousel }))
);

const imageSizes = `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`;

const renderBody = body =>
  body?.map(paragraph => (
    <ProjectSectionText key={paragraph}>{paragraph}</ProjectSectionText>
  ));

const renderImage = ({ image, alt, className, sizes = imageSizes, ...rest }) => (
  <Image
    className={className}
    src={image.src}
    srcSet={image.srcSet}
    width={image.width}
    height={image.height}
    placeholder={image.placeholder}
    alt={alt}
    sizes={sizes}
    {...rest}
  />
);

const renderTextRow = section => (
  <ProjectTextRow width={section.width}>
    <ProjectSectionHeading>{section.heading}</ProjectSectionHeading>
    {renderBody(section.body)}
  </ProjectTextRow>
);

const ProjectGallery = ({ section }) => {
  const [firstImage] = section.images;

  return (
    <ProjectSection light={section.light}>
      <ProjectSectionContent>
        <Suspense>
          <Carousel
            placeholder={firstImage.placeholder}
            images={section.images.map(image => ({
              srcSet: image.srcSet,
              sizes: imageSizes,
              alt: image.alt || section.alt || section.heading,
            }))}
            width={firstImage.width}
            height={firstImage.height}
          />
        </Suspense>
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
        <div className={styles.gridBackground}>
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
    <ProjectSectionContent width="xl">
      <ProjectTextRow width="m">
        <ProjectSectionHeading>{section.heading}</ProjectSectionHeading>
        {renderBody(section.body)}
      </ProjectTextRow>
      <ol className={styles.timeline} aria-label={section.heading}>
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

const ProjectMetrics = ({ section }) => (
  <ProjectSection light={section.light}>
    <ProjectSectionContent width="xl">
      <ProjectTextRow width="m">
        <ProjectSectionHeading>{section.heading}</ProjectSectionHeading>
        {renderBody(section.body)}
      </ProjectTextRow>
      <div className={styles.metricsGrid}>
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
    case 'gallery':
      return <ProjectGallery section={section} />;
    case 'hero-image':
      return (
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              raised
              src={section.image.src}
              srcSet={section.image.srcSet}
              width={section.image.width}
              height={section.image.height}
              placeholder={section.image.placeholder}
              alt={section.alt}
              sizes={imageSizes}
            />
          </ProjectSectionContent>
        </ProjectSection>
      );
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

export const ProjectCase = ({ project }) => (
  <>
    <ProjectContainer>
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
        title={project.title}
        description={project.description}
        roles={project.roles}
        url={project.url}
        linkLabel={project.linkLabel}
      />
      {project.sections.map(section => (
        <ProjectSectionRenderer
          key={`${project.slug}-${section.heading || section.type}`}
          section={section}
        />
      ))}
    </ProjectContainer>
    <Footer />
  </>
);
