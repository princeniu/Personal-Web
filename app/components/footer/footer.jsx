import { Link } from '~/components/link';
import { Text } from '~/components/text';
import { useLocation } from '@remix-run/react';
import { getLocaleFromPathname } from '~/i18n/route';
import { getUiStrings } from '~/i18n/ui';
import { classes } from '~/utils/style';
import config from '~/config.json';
import styles from './footer.module.css';

export const Footer = ({ className }) => {
  const location = useLocation();
  const ui = getUiStrings(getLocaleFromPathname(location.pathname));

  return (
    <footer className={classes(styles.footer, className)}>
      <Text size="s" align="center">
        <span className={styles.date}>
          {`© ${new Date().getFullYear()} ${config.name}.`}
        </span>
        <Link secondary className={styles.link} href="/humans.txt" target="_self">
          {ui.craftedBy}
        </Link>
      </Text>
    </footer>
  );
};
