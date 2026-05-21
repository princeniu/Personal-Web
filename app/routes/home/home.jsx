import { Footer } from '~/components/footer';
import { Button } from '~/components/button';
import { featuredProjects, zhFeaturedProjects } from '~/data/projects';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { createRef, useEffect, useRef, useState } from 'react';
import { useLocation } from '@remix-run/react';
import { getLocaleFromPathname, localizePath } from '~/i18n/route';
import config from '~/config.json';
import profileImg from '~/assets/profile.webp';
import styles from './home.module.css';

// Prefetch draco decoder wasm + preload the About-section profile photo so
// it's ready by the time the user scrolls past the intro hero.
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
    {
      rel: 'preload',
      href: profileImg,
      as: 'image',
      fetchPriority: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: 'Product Design · Human Factors · AI Products',
    description: `Portfolio of Zhuo (Prince) Niu, a designer-builder working at the intersection of Human Factors, Product Design, and AI. Shipped UI/UX for complex systems including in-car interfaces, safety-critical outdoor devices, and native macOS AI tools.`,
    path: '/',
  });
};

export const Home = () => {
  const location = useLocation();
  const locale = getLocaleFromPathname(location.pathname);
  const isZh = locale === 'zh';
  const projects = isZh ? zhFeaturedProjects : featuredProjects;
  const homeLabels = isZh
    ? {
        name: '牛拙Prince',
        role: 'Designer-Builder',
        disciplines: ['人因工程', 'AI 产品', '原型设计', 'UX 研究', '设计工程'],
        viewProject: '查看项目',
        explorePortfolio: '查看完整作品集',
        viewAllWork: '查看全部作品',
        scrollToProjects: '滚动到项目',
        listSeparator: '、',
        finalJoin: '和',
        pauseLabel: '暂停轮播领域标签',
        resumeLabel: '继续轮播领域标签',
        pauseTitle: '暂停',
        resumeTitle: '继续',
      }
    : {
        name: config.name,
        role: config.role,
        disciplines: config.disciplines,
        viewProject: 'View project',
        explorePortfolio: 'Explore the full portfolio',
        viewAllWork: 'View all work',
        scrollToProjects: 'Scroll to projects',
        listSeparator: ', ',
        finalJoin: ', and ',
        pauseLabel: 'Pause rotating disciplines',
        resumeLabel: 'Resume rotating disciplines',
        pauseTitle: 'Pause',
        resumeTitle: 'Resume',
      };
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
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

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
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
        scrollLabel={homeLabels.scrollToProjects}
        listSeparator={homeLabels.listSeparator}
        finalJoin={homeLabels.finalJoin}
        pauseLabel={homeLabels.pauseLabel}
        resumeLabel={homeLabels.resumeLabel}
        pauseTitle={homeLabels.pauseTitle}
        resumeTitle={homeLabels.resumeTitle}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <div id="projects" />
      {projects.map((project, index) => (
        <ProjectSummary
          alternate={index % 2 === 1}
          buttonLink={localizePath(project.path, locale)}
          buttonText={homeLabels.viewProject}
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
