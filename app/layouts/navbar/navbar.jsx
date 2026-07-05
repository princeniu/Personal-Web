import { Icon } from '~/components/icon';
import { Monogram } from '~/components/monogram';
import { useTheme } from '~/components/theme-provider';
import { tokens } from '~/components/theme-provider/theme';
import { Transition } from '~/components/transition';
import { useScrollToHash, useWindowSize } from '~/hooks';
import { Link as RouterLink, useLocation } from '@remix-run/react';
import { useEffect, useRef, useState } from 'react';
import { getLocaleFromPathname, localizePath, stripLocaleFromPathname } from '~/i18n/route';
import { localeLabels, supportedLocales } from '~/i18n/locales';
import { getUiStrings } from '~/i18n/ui';
import { cssProps, media, msToNum, numToMs } from '~/utils/style';
import { NavToggle } from './nav-toggle';
import { ThemeToggle } from './theme-toggle';
import { navLinks, socialLinks } from './nav-data';
import config from '~/config.json';
import styles from './navbar.module.css';

export const Navbar = () => {
  const [current, setCurrent] = useState();
  const [menuOpen, setMenuOpen] = useState(false);
  const [target, setTarget] = useState();
  const { theme } = useTheme();
  const location = useLocation();
  const locale = getLocaleFromPathname(location.pathname);
  const isZh = locale === 'zh';
  const displayName = isZh ? '牛拙Prince' : config.name;
  const displayRole = isZh ? 'Designer-Builder' : config.role;
  const basePathname = stripLocaleFromPathname(location.pathname);
  const localizedCurrentPath = `${basePathname}${location.hash}`;
  const windowSize = useWindowSize();
  const headerRef = useRef();
  const menuToggleRef = useRef();
  // Use width-only detection so a short desktop window (split-screen, devtools open)
  // doesn't get treated as mobile, which previously caused the theme toggle to vanish.
  const isMobile = windowSize.width <= media.mobile;
  const scrollToHash = useScrollToHash();

  useEffect(() => {
    // Prevent ssr mismatch by storing this in state
    setCurrent(localizedCurrentPath);
  }, [localizedCurrentPath]);

  // Handle smooth scroll nav items
  useEffect(() => {
    if (!target || basePathname !== '/') return;
    setCurrent(`${basePathname}${target}`);
    scrollToHash(target, () => setTarget(null));
  }, [basePathname, scrollToHash, target]);

  // Handle swapping the theme when intersecting with inverse themed elements
  useEffect(() => {
    const navItems = document.querySelectorAll('[data-navbar-item]');
    const inverseTheme = theme === 'dark' ? 'light' : 'dark';
    const { innerHeight } = window;

    let inverseMeasurements = [];
    let navItemMeasurements = [];

    const isOverlap = (rect1, rect2, scrollY) => {
      return !(rect1.bottom - scrollY < rect2.top || rect1.top - scrollY > rect2.bottom);
    };

    const resetNavTheme = () => {
      for (const measurement of navItemMeasurements) {
        measurement.element.dataset.theme = '';
      }
    };

    const handleInversion = () => {
      const invertedElements = document.querySelectorAll(
        `[data-theme='${inverseTheme}'][data-invert]`
      );

      if (!invertedElements) return;

      inverseMeasurements = Array.from(invertedElements).map(item => ({
        element: item,
        top: item.offsetTop,
        bottom: item.offsetTop + item.offsetHeight,
      }));

      const { scrollY } = window;

      resetNavTheme();

      for (const inverseMeasurement of inverseMeasurements) {
        if (
          inverseMeasurement.top - scrollY > innerHeight ||
          inverseMeasurement.bottom - scrollY < 0
        ) {
          continue;
        }

        for (const measurement of navItemMeasurements) {
          if (isOverlap(inverseMeasurement, measurement, scrollY)) {
            measurement.element.dataset.theme = inverseTheme;
          } else {
            measurement.element.dataset.theme = '';
          }
        }
      }
    };

    // Currently only the light theme has dark full-width elements
    if (theme === 'light') {
      navItemMeasurements = Array.from(navItems).map(item => {
        const rect = item.getBoundingClientRect();

        return {
          element: item,
          top: rect.top,
          bottom: rect.bottom,
        };
      });

      document.addEventListener('scroll', handleInversion);
      handleInversion();
    }

    return () => {
      document.removeEventListener('scroll', handleInversion);
      resetNavTheme();
    };
  }, [theme, windowSize, location.key]);

  // Mobile menu focus management: move focus into the menu on open,
  // close on Escape and hand focus back to the toggle button
  useEffect(() => {
    if (!menuOpen) return;

    const focusFirstItem = () => {
      document.getElementById('mobile-nav')?.querySelector('a, button')?.focus();
    };

    focusFirstItem();
    // The menu mounts via Transition state, which can land a tick after this
    // effect runs; retry once it has.
    const timer = setTimeout(() => {
      if (!document.getElementById('mobile-nav')?.contains(document.activeElement)) {
        focusFirstItem();
      }
    }, 100);

    const onKeyDown = event => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        menuToggleRef.current?.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [menuOpen]);

  // Check if a nav item should be active
  const getCurrent = (url = '') => {
    const nonTrailing = current?.endsWith('/') ? current?.slice(0, -1) : current;

    if (url === nonTrailing) {
      return 'page';
    }

    return '';
  };

  // Store the current hash to scroll to
  const handleNavItemClick = event => {
    const hash = event.currentTarget.href.split('#')[1];
    setTarget(null);

    if (hash && basePathname === '/') {
      setTarget(`#${hash}`);
      event.preventDefault();
    }
  };

  const handleMobileNavClick = event => {
    handleNavItemClick(event);
    if (menuOpen) setMenuOpen(false);
  };

  return (
    <header className={styles.navbar} ref={headerRef}>
      <RouterLink
        viewTransition
        prefetch="intent"
        to={basePathname === '/' ? localizePath('/#intro', locale) : localizePath('/', locale)}
        data-navbar-item
        className={styles.logo}
        aria-label={`${displayName}, ${displayRole}`}
        onClick={handleMobileNavClick}
      >
        <Monogram highlight />
      </RouterLink>
      <NavToggle
        onClick={() => setMenuOpen(!menuOpen)}
        menuOpen={menuOpen}
        ref={menuToggleRef}
      />
      <nav className={styles.nav}>
        <div className={styles.navList} data-locale={locale}>
          {navLinks.map(({ label, zhLabel, pathname }) => {
            const localizedPathname = localizePath(pathname, locale);
            const navLabel = isZh ? zhLabel : label;

            return (
              <RouterLink
                viewTransition
                prefetch="intent"
                to={localizedPathname}
                key={label}
                data-navbar-item
                className={styles.navLink}
                aria-current={getCurrent(pathname)}
                onClick={handleNavItemClick}
              >
                {navLabel}
              </RouterLink>
            );
          })}
        </div>
        <div className={styles.navActions}>
          <LanguageToggle
            className={styles.languageToggle}
            currentLocale={locale}
            pathname={localizedCurrentPath}
          />
        </div>
        <NavbarIcons desktop />
      </nav>
      <Transition unmount in={menuOpen} timeout={msToNum(tokens.base.durationL)}>
        {({ visible, nodeRef }) => (
          <nav
            id="mobile-nav"
            className={styles.mobileNav}
            data-visible={visible}
            ref={nodeRef}
          >
            {navLinks.map(({ label, zhLabel, pathname }, index) => {
              const localizedPathname = localizePath(pathname, locale);
              const navLabel = isZh ? zhLabel : label;

              return (
                <RouterLink
                  viewTransition
                  prefetch="intent"
                  to={localizedPathname}
                  key={label}
                  className={styles.mobileNavLink}
                  data-visible={visible}
                  aria-current={getCurrent(pathname)}
                  onClick={handleMobileNavClick}
                  style={cssProps({
                    transitionDelay: numToMs(
                      Number(msToNum(tokens.base.durationS)) + index * 50
                    ),
                  })}
                >
                  {navLabel}
                </RouterLink>
              );
            })}
            <div className={styles.mobileUtilityNav} data-visible={visible}>
              <span className={styles.mobileUtilityLabel}>{isZh ? '语言' : 'Language'}</span>
              <LanguageToggle
                className={styles.mobileLanguageToggle}
                currentLocale={locale}
                pathname={localizedCurrentPath}
                onClick={() => setMenuOpen(false)}
              />
            </div>
            <NavbarIcons />
            <ThemeToggle isMobile />
          </nav>
        )}
      </Transition>
      {!isMobile && <ThemeToggle data-navbar-item />}
    </header>
  );
};

const LanguageToggle = ({ className, currentLocale, pathname, onClick }) => {
  const targetLocale = supportedLocales.find(locale => locale !== currentLocale) || 'en';
  const ui = getUiStrings(currentLocale);

  return (
    <RouterLink
      viewTransition
      prefetch="intent"
      className={className}
      to={localizePath(pathname, targetLocale)}
      aria-label={ui.switchLanguage(localeLabels[targetLocale])}
      onClick={onClick}
    >
      {currentLocale === 'zh' ? 'EN' : '中文'}
    </RouterLink>
  );
};

const NavbarIcons = ({ desktop }) => {
  const location = useLocation();
  const isZh = getLocaleFromPathname(location.pathname) === 'zh';

  return (
    <div className={styles.navIcons}>
      {socialLinks.map(({ label, zhLabel, url, icon, download }) => (
        <a
          key={label}
          data-navbar-item={desktop || undefined}
          className={styles.navIconLink}
          aria-label={isZh && zhLabel ? zhLabel : label}
          href={url}
          target={download ? undefined : '_blank'}
          rel={download ? undefined : 'noopener noreferrer'}
          download={download || undefined}
        >
          <Icon className={styles.navIcon} icon={icon} />
        </a>
      ))}
    </div>
  );
};
