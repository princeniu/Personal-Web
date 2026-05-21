import { Button } from '~/components/button';
import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { deviceModels } from '~/components/model/device-models';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { useTheme } from '~/components/theme-provider';
import { Transition } from '~/components/transition';
import { Loader } from '~/components/loader';
import { useWindowSize } from '~/hooks';
import { Suspense, lazy, useState } from 'react';
import { cssProps, media } from '~/utils/style';
import { useHydrated } from '~/hooks/useHydrated';
import katakana from './katakana.svg';
import styles from './project-summary.module.css';

const Model = lazy(() =>
  import('~/components/model').then(module => ({ default: module.Model }))
);

export function ProjectSummary({
  id,
  visible: sectionVisible,
  sectionRef,
  index,
  title,
  description,
  model,
  buttonText,
  buttonLink,
  alternate,
  quickFacts,
  ...rest
}) {
  const [focused, setFocused] = useState(false);
  const [modelLoaded, setModelLoaded] = useState(false);
  const { theme } = useTheme();
  const { width } = useWindowSize();
  const isHydrated = useHydrated();
  const titleId = `${id}-title`;
  const isMobile = width <= media.tablet;
  const svgOpacity = theme === 'light' ? 0.7 : 1;
  const indexText = index < 10 ? `0${index}` : index;
  const phoneSizes = `(max-width: ${media.tablet}px) 30vw, 20vw`;
  const laptopSizes = `(max-width: ${media.tablet}px) 80vw, 40vw`;
  const phonePositions = [
    { x: 0.3, y: 1.1, z: 0 },
    { x: 1.4, y: -0.5, z: 0.3 },
    { x: -1.4, y: 0.3, z: 0.6 },
  ];

  function handleModelLoad() {
    setModelLoaded(true);
  }

  function renderKatakana(device, visible) {
    return (
      <svg
        type="project"
        data-visible={visible && modelLoaded}
        data-light={theme === 'light'}
        style={cssProps({ opacity: svgOpacity })}
        className={styles.svg}
        data-device={device}
        viewBox="0 0 751 136"
      >
        <use href={`${katakana}#katakana-project`} />
      </svg>
    );
  }

  function renderDetails(visible) {
    return (
      <div className={styles.details}>
        <div aria-hidden className={styles.index}>
          <Divider
            notchWidth="64px"
            notchHeight="8px"
            collapsed={!visible}
            collapseDelay={1000}
          />
          <span className={styles.indexNumber} data-visible={visible}>
            {indexText}
          </span>
        </div>
        <Heading
          level={3}
          as="h2"
          className={styles.title}
          data-visible={visible}
          id={titleId}
        >
          {title}
        </Heading>
        <Text className={styles.description} data-visible={visible} as="p">
          {description}
        </Text>
        {quickFacts?.length > 0 && (
          <dl className={styles.quickFacts} data-visible={visible}>
            {quickFacts.map(fact => (
              <div className={styles.quickFactRow} key={fact.label}>
                <dt className={styles.quickFactLabel}>{fact.label}</dt>
                <dd className={styles.quickFactValue}>{fact.value}</dd>
              </div>
            ))}
          </dl>
        )}
        <div className={styles.button} data-visible={visible}>
          <Button iconHoverShift href={buttonLink} iconEnd="arrow-right">
            {buttonText}
          </Button>
        </div>
      </div>
    );
  }

  function renderMacOSUtilityPreview(visible) {
    const idleTexture = model.textures?.[0];
    const recordingTexture = model.textures?.[1] || idleTexture;

    return (
      <div
        className={styles.sayitPreview}
        data-visible={true}
        role="img"
        aria-label={model.alt}
      >
        <div className={styles.sayitGlow} aria-hidden />
        <div className={styles.sayitWindow}>
          <div className={styles.sayitMenuBar} aria-hidden>
            <div className={styles.sayitTrafficLights}>
              <span />
              <span />
              <span />
            </div>
            <div className={styles.sayitMenuItems}>
              <span>SayIt</span>
              <span>Edit</span>
              <span>Engine</span>
            </div>
            <div className={styles.sayitStatus}>
              <span className={styles.sayitStatusDot} />
              Listening
            </div>
          </div>
          <div className={styles.sayitCanvas}>
            <div className={styles.sayitHotkey} aria-hidden>
              <span>⌥</span>
              <span>Space</span>
              <small>Global hotkey</small>
            </div>
            <img
              className={styles.sayitPopover}
              src={idleTexture?.src || idleTexture?.placeholder}
              srcSet={idleTexture?.srcSet}
              sizes="(max-width: 696px) 76vw, 28vw"
              alt=""
              aria-hidden="true"
            />
            <div className={styles.sayitRecordingCard} aria-hidden>
              <div className={styles.sayitWaveform}>
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <img
                src={recordingTexture?.src || recordingTexture?.placeholder}
                srcSet={recordingTexture?.srcSet}
                sizes="160px"
                alt=""
              />
            </div>
            <div className={styles.sayitTranscript} aria-hidden>
              <span>“Turn spoken thoughts into clean text.”</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function renderKnowledgeSystemPreview(visible) {
    const preview = model.preview || {};
    const flowItems = preview.flowItems || [
      { title: 'Capture', detail: 'conversations · work logs' },
      { title: 'Synthesize', detail: 'current judgment · links' },
      { title: 'Audit', detail: 'structure · backups' },
    ];
    const footerItems = preview.footerItems || [
      'Markdown vault',
      'Hermes Agent',
      'Git-backed',
      'Weekly review',
    ];

    return (
      <div
        className={styles.knowledgePreview}
        data-visible={visible}
        role="img"
        aria-label={model.alt}
      >
        <div className={styles.knowledgeGlow} aria-hidden />
        <div className={styles.knowledgePanel}>
          <div className={styles.knowledgeHeader}>
            <span className={styles.knowledgeEyebrow}>
              {preview.eyebrow || 'Local-first memory layer'}
            </span>
            <span className={styles.knowledgeStatus}>{preview.status || 'Live system'}</span>
          </div>
          <div className={styles.knowledgeHeroText}>
            <span>
              Knowledge<strong>OS</strong>
            </span>
            <small>
              {preview.subtitle ||
                'Agent-maintained context for decisions, projects, and research.'}
            </small>
          </div>
          <div className={styles.knowledgeFlow} aria-hidden>
            {flowItems.map(item => (
              <div key={item.title}>
                <strong>{item.title}</strong>
                <span>{item.detail}</span>
              </div>
            ))}
          </div>
          <div className={styles.knowledgeFooter} aria-hidden>
            {footerItems.map(item => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  function renderPreview(visible) {
    return (
      <div className={styles.preview}>
        {model.type === 'macosUtility' && renderMacOSUtilityPreview(visible)}
        {model.type === 'knowledgeSystem' && renderKnowledgeSystemPreview(visible)}
        {model.type === 'laptop' && (
          <>
            {renderKatakana('laptop', visible)}
            <div className={styles.model} data-device="laptop">
              {!modelLoaded && (
                <Loader center className={styles.loader} data-visible={visible} />
              )}
              {isHydrated && visible && (
                <Suspense>
                  <Model
                    alt={model.alt}
                    cameraPosition={{ x: 0, y: 0, z: 8 }}
                    showDelay={700}
                    onLoad={handleModelLoad}
                    show={visible}
                    models={[
                      {
                        ...deviceModels.laptop,
                        texture: {
                          ...model.textures[0],
                          sizes: laptopSizes,
                        },
                      },
                    ]}
                  />
                </Suspense>
              )}
            </div>
          </>
        )}
        {model.type === 'phone' && (
          <>
            {renderKatakana('phone', visible)}
            <div className={styles.model} data-device="phone">
              {!modelLoaded && (
                <Loader center className={styles.loader} data-visible={visible} />
              )}
              {isHydrated && visible && (
                <Suspense>
                  <Model
                    alt={model.alt}
                    cameraPosition={{ x: 0, y: 0, z: 11.5 }}
                    showDelay={300}
                    onLoad={handleModelLoad}
                    show={visible}
                    models={model.textures.map((texture, index) => ({
                      ...deviceModels.phone,
                      position: phonePositions[index],
                      texture: {
                        ...texture,
                        sizes: phoneSizes,
                      },
                    }))}
                  />
                </Suspense>
              )}
            </div>
          </>
        )}
      </div>
    );
  }

  return (
    <Section
      className={styles.summary}
      data-alternate={alternate}
      data-first={index === 1}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      aria-labelledby={titleId}
      ref={sectionRef}
      id={id}
      tabIndex={-1}
      {...rest}
    >
      <div className={styles.content}>
        <Transition in={sectionVisible || focused}>
          {({ visible }) => (
            <>
              {!alternate && !isMobile && (
                <>
                  {renderDetails(visible)}
                  {renderPreview(visible)}
                </>
              )}
              {(alternate || isMobile) && (
                <>
                  {renderPreview(visible)}
                  {renderDetails(visible)}
                </>
              )}
            </>
          )}
        </Transition>
      </div>
    </Section>
  );
}
