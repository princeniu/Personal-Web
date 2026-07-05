import { Button } from '~/components/button';
import { Icon } from '~/components/icon';
import { useLocation } from '@remix-run/react';
import { getLocaleFromPathname } from '~/i18n/route';
import { getUiStrings } from '~/i18n/ui';
import styles from './nav-toggle.module.css';

export const NavToggle = ({ menuOpen, ...rest }) => {
  const location = useLocation();
  const ui = getUiStrings(getLocaleFromPathname(location.pathname));

  return (
    <Button
      iconOnly
      className={styles.toggle}
      aria-label={ui.menu}
      aria-expanded={menuOpen}
      {...rest}
    >
      <div className={styles.inner}>
        <Icon className={styles.icon} data-menu={true} data-open={menuOpen} icon="menu" />
        <Icon
          className={styles.icon}
          data-close={true}
          data-open={menuOpen}
          icon="close"
        />
      </div>
    </Button>
  );
};
