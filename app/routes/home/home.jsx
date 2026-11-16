import { Footer } from '~/components/footer';
import { Button } from '~/components/button';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { createRef, useEffect, useRef, useState } from 'react';
import { useLoaderData, useLocation } from '@remix-run/react';
import { getLocaleFromPathname, localizePath } from '~/i18n/route';
import config from '~/config.json';
import styles from './home.module.css';

// Prefetch the Draco decoder for the lazily loaded project models.
export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: 'Product Design · Human Factors · AI Products',
    description: `Portfolio of Zhuo (Prince) Niu — designer-builder working across product design, human factors, and AI, from in-car HMI to shipped macOS tools.`,
    path: '/',
  });
};

export const Home = () => {
  const location = useLocation();
  const locale = getLocaleFromPathname(location.pathname);
  const isZh = locale === 'zh';
  const { projects } = useLoaderData();
  const homeLabels = isZh
    ? {
        name: '牛拙Prince',
        role: 'Designer-Builder',
        disciplines: ['人因工程', 'AI 产品', '原型设计', 'UX 研究', '设计工程'],
        viewProject: '查看项目',
        explorePortfolio: '查看完整作品集',
        viewAllWork: '查看全部作品',
        listSeparator: '、',
        finalJoin: '和',
        pauseLabel: '暂停轮播领域标签',
        resumeLabel: '继续轮播领域标签',
        pauseTitle: '暂停',
        resumeTitle: '继续',
        positioning: '面向人机交互与 AI 产品的产品设计师。在 Tufts 攻读人因工程硕士，也把设计做成可使用的产品。',
        projectsLabel: '查看精选作品',
        resumeLinkLabel: '下载简历',
      }
    : {
        name: config.name,
        role: config.role,
        disciplines: config.disciplines,
        viewProject: 'View project',
        explorePortfolio: 'Explore the full portfolio',
        viewAllWork: 'View all work',
        listSeparator: ', ',
        finalJoin: ', and ',
        pauseLabel: 'Pause rotating disciplines',
        resumeLabel: 'Resume rotating disciplines',
        pauseTitle: 'Pause',
        resumeTitle: 'Resume',
        positioning: 'Product designer working on human–AI interaction. Studying Human Factors Engineering at Tufts and building products people can use.',
        projectsLabel: 'Explore selected work',
        resumeLinkLabel: 'Download resume',
      };
  const [visibleSections, setVisibleSections] = useState([]);
  const intro = useRef();
  const projectRefs = useRef([]);
  const details = useRef();

  projectRefs.current = projects.map(
    (_, index) => projectRefs.current[index] || createRef()
  );

  useEffect(() => {
    const sections = [intro, ...projectRefs.current, details].filter(
      section => section?.current
    );

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            setVisibleSections(prevSections =>
              prevSections.includes(section) ? prevSections : [...prevSections, section]
            );
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    return () => {
      sectionObserver.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        name={homeLabels.name}
        role={homeLabels.role}
        disciplines={homeLabels.disciplines}
        sectionRef={intro}
        scrollTo={localizePath('/#projects', locale)}
        listSeparator={homeLabels.listSeparator}
        finalJoin={homeLabels.finalJoin}
        pauseLabel={homeLabels.pauseLabel}
        resumeLabel={homeLabels.resumeLabel}
        pauseTitle={homeLabels.pauseTitle}
        resumeTitle={homeLabels.resumeTitle}
        positioning={homeLabels.positioning}
        projectsLabel={homeLabels.projectsLabel}
        resumeLinkLabel={homeLabels.resumeLinkLabel}
      />
      <div id="projects" />
      {projects.map((project, index) => (
        <ProjectSummary
          alternate={index % 2 === 1}
          buttonLink={localizePath(project.path, locale)}
          buttonText={project.summary.ctaLabel || homeLabels.viewProject}
          description={project.summary.description}
          id={`project-${index + 1}`}
          index={index + 1}
          key={project.slug}
          model={{
            alt: project.summary.modelAlt,
            preview: project.summary.preview,
            textures: project.summary.textures,
            type: project.summary.modelType,
          }}
          quickFacts={project.summary.quickFacts}
          sectionRef={projectRefs.current[index]}
          title={project.summary.title}
          visible={visibleSections.includes(projectRefs.current[index]?.current)}
        />
      ))}
      <div className={styles.allWorkCta}>
        <span className={styles.allWorkEyebrow}>{homeLabels.explorePortfolio}</span>
        <Button
          className={styles.allWorkButton}
          iconHoverShift
          href={localizePath('/projects/all-work', locale)}
          iconEnd="arrow-right"
        >
          {homeLabels.viewAllWork}
        </Button>
      </div>
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
