import { forwardRef, useId } from 'react';
import { classes } from '~/utils/style';
import styles from './monogram.module.css';

const mainPath = 'M10 9h39v6H28L11 29v7h40v-6H29l23-21h-8L19 31V9h-9Z';
const accentPath = 'M55 8h7v28h-7V19L35 36h-8l28-25V8Z';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;

  return (
    <svg
      aria-hidden
      className={classes(styles.monogram, className)}
      width="52"
      height="32"
      viewBox="0 0 72 44"
      ref={ref}
      {...props}
    >
      <defs>
        <clipPath id={clipId}>
          <path d={mainPath} />
          <path d={accentPath} />
        </clipPath>
      </defs>
      <path className={styles.base} d={mainPath} />
      <path className={styles.accent} d={accentPath} />
      {highlight && (
        <g clipPath={`url(#${clipId})`}>
          <rect className={styles.highlight} width="100%" height="100%" />
        </g>
      )}
    </svg>
  );
});
