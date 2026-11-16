import { Form, useLocation, useSearchParams } from '@remix-run/react';
import { Button } from '~/components/button';
import { Section } from '~/components/section';
import { localizePath } from '~/i18n/route';
import styles from './all-work-index.module.css';

function PreviewImage({ image, paired, loading }) {
  const crop = image.crop ?? { x: 0, y: 0, width: image.width, height: image.height };
  return (
    <div className={styles.previewPanel}>
      <div className={styles.previewWindow} style={{ '--crop-ratio': crop.width / crop.height }}>
        <img
          src={image.src}
          srcSet={image.srcSet}
          sizes={paired
            ? '(max-width: 600px) 112px, (max-width: 1040px) 200px, 300px'
            : '(max-width: 600px) 112px, (max-width: 1040px) 340px, 500px'}
          width={image.width}
          height={image.height}
          alt={image.alt}
          loading={loading}
          decoding="async"
          style={{
            width: `${image.width / crop.width * 100}%`,
            height: `${image.height / crop.height * 100}%`,
            left: `${-crop.x / crop.width * 100}%`,
            top: `${-crop.y / crop.height * 100}%`,
          }}
        />
      </div>
    </div>
  );
}

export function AllWorkIndex({ project, locale }) {
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();
  const labels = project.indexLabels;
  const section = project.sections.find(section => section.type === 'project-grid');
  const items = section.items;
  const requested = searchParams.get('category');
  const category = project.categories.some(item => item.id === requested) ? requested : 'all';
  const filters = [{ id: 'all', label: labels.allLabel }, ...project.categories];
  const visibleItems = category === 'all' ? items : items.filter(item => item.category === category);

  return (
    <Section as="div" className={styles.index}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </header>

        <div className={styles.directoryControls}>
          <Form method="get" action={pathname} preventScrollReset className={styles.filters}>
            <div role="group" aria-label={labels.filtersLabel}>
              {filters.map(filter => (
                <button
                  key={filter.id}
                  type="submit"
                  name="category"
                  value={filter.id}
                  aria-pressed={category === filter.id}
                  aria-controls="project-directory"
                >
                  {filter.label}
                  <span aria-hidden="true">
                    {filter.id === 'all' ? items.length : items.filter(item => item.category === filter.id).length}
                  </span>
                </button>
              ))}
            </div>
          </Form>
          <p className={styles.resultCount} role="status" aria-live="polite" aria-atomic="true">
            {labels.countTemplate.replace('{count}', visibleItems.length)}
          </p>
        </div>

        <ul id="project-directory" className={styles.grid} aria-label={section.heading}>
          {visibleItems.map((item, index) => (
            <li key={item.slug}>
              <a className={styles.card} href={item.href} aria-labelledby={`index-title-${item.slug}`}>
                <div className={styles.preview} data-layout={item.preview.layout}>
                  <div className={styles.previewStage}>
                    {item.preview.images.map((image, imageIndex) => (
                      <PreviewImage
                        key={`${image.src}-${imageIndex}`}
                        image={image}
                        paired={item.preview.layout === 'pair'}
                        loading={index < 2 ? 'eager' : 'lazy'}
                      />
                    ))}
                  </div>
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.projectHeading}>
                    <h2 id={`index-title-${item.slug}`}>{item.title}</h2>
                    {item.featured && <span className={styles.featured}>{labels.featuredLabel}</span>}
                  </div>
                  <p className={styles.metadata}>
                    <span>{item.timeframe}</span><span>{item.context}</span>
                  </p>
                  <p className={styles.status}>{item.status}</p>
                  {item.preview.note && <p className={styles.sourceNote}>{item.preview.note}</p>}
                  <p className={styles.description}>{item.description}</p>
                  <p className={styles.evidence}><span>{labels.evidenceLabel}</span>{item.evidence}</p>
                  <ul className={styles.tags} aria-label={labels.tagsLabel}>
                    {item.tags.map(tag => <li key={tag}>{tag}</li>)}
                  </ul>
                  <span className={styles.cta} aria-hidden="true">{labels.ctaLabel} <span>→</span></span>
                </div>
              </a>
            </li>
          ))}
        </ul>

        <section className={styles.contact} aria-labelledby="directory-contact-title">
          <div>
            <h2 id="directory-contact-title">{labels.contactHeading}</h2>
            <p>{labels.contactBody}</p>
          </div>
          <Button secondary href={localizePath('/contact', locale)} iconEnd="arrow-right">
            {labels.contactLabel}
          </Button>
        </section>
      </div>
    </Section>
  );
}
