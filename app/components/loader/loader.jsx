import { classes, cssProps } from '~/utils/style';
import { forwardRef } from 'react';
import styles from './loader.module.css';

export const Loader = forwardRef(
  (
    { className, style, width = 32, height = 4, text = 'Loading...', center, ...rest },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={classes(styles.loader, className)}
        data-center={center}
        role="status"
        aria-label={text}
        style={cssProps({ width, height }, style)}
        {...rest}
      >
        <span className={styles.track} aria-hidden><span className={styles.span} /></span>
        <span className={styles.text} aria-hidden>{text}</span>
      </div>
    );
  }
);
