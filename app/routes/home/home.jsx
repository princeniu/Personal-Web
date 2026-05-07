import { Footer } from '~/components/footer';
import { featuredProjects } from '~/data/projects';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { createRef, useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';

// Prefetch draco decoader wasm
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
    description: `Portfolio of ${config.name} — a designer-builder working at the intersection of Human Factors, Product Design, and AI. Shipped UI/UX for complex systems including in-car interfaces, safety-critical outdoor devices, and native macOS AI tools.`,
    path: '/',
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectRefs = useRef([]);
  const details = useRef();

  projectRefs.current = featuredProjects.map(
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
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
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
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      {featuredProjects.map((project, index) => (
        <ProjectSummary
          alternate={index % 2 === 1}
          buttonLink={project.path}
          buttonText="View project"
          description={project.summary.description}
          id={`project-${index + 1}`}
          index={index + 1}
          key={project.slug}
          model={{
            alt: project.summary.modelAlt,
            textures: project.summary.textures,
            type: project.summary.modelType,
          }}
          quickFacts={project.summary.quickFacts}
          sectionRef={projectRefs.current[index]}
          title={project.summary.title}
          visible={visibleSections.includes(projectRefs.current[index]?.current)}
        />
      ))}
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
