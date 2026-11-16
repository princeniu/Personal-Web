import { Button } from '~/components/button';
import { Icon } from '~/components/icon';
import { useTheme } from '~/components/theme-provider';
import { useReducedMotion } from 'framer-motion';
import { useHasMounted, useInViewport } from '~/hooks';
import { useLocation } from '@remix-run/react';
import { getLocaleFromPathname } from '~/i18n/route';
import { getUiStrings } from '~/i18n/ui';
import { Fragment, useCallback, useEffect, useRef, useState } from 'react';
import { resolveSrcFromSrcSet } from '~/utils/image';
import { classes, cssProps, numToMs } from '~/utils/style';
import styles from './image.module.css';

export const Image = ({
  className,
  style,
  reveal,
  delay = 0,
  raised,
  src: baseSrc,
  srcSet,
  placeholder,
  ...rest
}) => {
  const [loaded, setLoaded] = useState(false);
  const { theme } = useTheme();
  const containerRef = useRef();
  const src = baseSrc || srcSet?.split(' ')[0];
  const inViewport = useInViewport(containerRef, !getIsVideo(src));

  const onLoad = useCallback(() => {
    setLoaded(true);
  }, []);

  return (
    <div
      className={classes(styles.image, className)}
      data-visible={inViewport || loaded}
      data-reveal={reveal}
      data-raised={raised}
      data-theme={theme}
      style={cssProps({ delay: numToMs(delay) }, style)}
      ref={containerRef}
    >
      <ImageElements
        delay={delay}
        onLoad={onLoad}
        loaded={loaded}
        inViewport={inViewport}
        reveal={reveal}
        src={src}
        srcSet={srcSet}
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
};

const ImageElements = ({
  onLoad,
  loaded,
  inViewport,
  srcSet,
  placeholder,
  delay,
  src,
  alt,
  play = true,
  restartOnPause,
  reveal,
  sizes,
  width,
  height,
  noPauseButton,
  cover,
  poster,
  loading = 'lazy',
  ...rest
}) => {
  const reduceMotion = useReducedMotion();
  const location = useLocation();
  const ui = getUiStrings(getLocaleFromPathname(location.pathname));
  const [showPlaceholder, setShowPlaceholder] = useState(!!placeholder);
  const [playing, setPlaying] = useState(false);
  const [videoSrc, setVideoSrc] = useState();
  const [videoInteracted, setVideoInteracted] = useState(false);
  const placeholderRef = useRef();
  const videoRef = useRef();
  const imageRef = useRef();
  const isVideo = getIsVideo(src);
  const hasMounted = useHasMounted();

  useEffect(() => {
    // Images may finish loading between the server response and hydration.
    if (imageRef.current?.complete && imageRef.current.naturalWidth > 0) onLoad();
  }, [onLoad, src, srcSet]);

  // Defer video loading until the element is actually in the viewport so
  // offscreen videos never start downloading. Once resolved, the src sticks.
  useEffect(() => {
    if (!isVideo || !inViewport || videoSrc) return;

    const resolveVideoSrc = async () => {
      const resolvedVideoSrc = await resolveSrcFromSrcSet({ srcSet, sizes });
      setVideoSrc(resolvedVideoSrc);
    };

    if (srcSet) {
      resolveVideoSrc();
    } else {
      setVideoSrc(src);
    }
  }, [isVideo, inViewport, videoSrc, sizes, src, srcSet]);

  useEffect(() => {
    if (!videoRef.current || !videoSrc) return;

    const playVideo = () => {
      videoRef.current.play()?.catch(() => setPlaying(false));
    };

    const pauseVideo = () => {
      setPlaying(false);
      videoRef.current.pause();
    };

    if (!play) {
      pauseVideo();

      if (restartOnPause) {
        videoRef.current.currentTime = 0;
      }
    }

    if (!inViewport || (reduceMotion && !videoInteracted)) {
      pauseVideo();
    } else if (!videoInteracted && !reduceMotion && play) {
      playVideo();
    }
  }, [inViewport, play, reduceMotion, restartOnPause, videoInteracted, videoSrc]);

  useEffect(() => {
    if (!isVideo) return;
    const pauseWhenHidden = () => {
      if (document.visibilityState === 'hidden') videoRef.current?.pause();
    };
    document.addEventListener('visibilitychange', pauseWhenHidden);
    return () => document.removeEventListener('visibilitychange', pauseWhenHidden);
  }, [isVideo]);

  const togglePlaying = event => {
    event.preventDefault();

    setVideoInteracted(true);

    if (videoRef.current.paused) {
      videoRef.current.play()?.catch(() => setPlaying(false));
    } else {
      setPlaying(false);
      videoRef.current.pause();
    }
  };

  return (
    <div
      className={styles.elementWrapper}
      data-reveal={reveal}
      data-visible={!isVideo || inViewport || loaded}
      style={cssProps({ delay: numToMs(delay + 1000) })}
    >
      {isVideo && hasMounted && (
        <Fragment>
          <video
            muted
            loop
            playsInline
            preload="none"
            className={styles.element}
            data-loaded={loaded}
            data-cover={cover}
            autoPlay={!reduceMotion}
            onLoadStart={onLoad}
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            src={videoSrc}
            poster={poster}
            width={width}
            height={height}
            aria-label={alt}
            ref={videoRef}
            {...rest}
          />
          {!noPauseButton && (
            <Button className={styles.button} onClick={togglePlaying}>
              <Icon icon={playing ? 'pause' : 'play'} />
              {playing ? ui.pause : ui.play}
            </Button>
          )}
        </Fragment>
      )}
      {!isVideo && (
        <img
          className={styles.element}
          data-loaded={loaded}
          data-cover={cover}
          onLoad={onLoad}
          ref={imageRef}
          decoding="async"
          loading={loading}
          src={src}
          srcSet={srcSet}
          width={width}
          height={height}
          alt={alt}
          sizes={sizes}
          {...rest}
        />
      )}
      {showPlaceholder && hasMounted && (
        <img
          aria-hidden
          className={styles.placeholder}
          data-loaded={loaded}
          data-cover={cover}
          style={cssProps({ delay: numToMs(delay) })}
          ref={placeholderRef}
          src={placeholder}
          width={width}
          height={height}
          onTransitionEnd={() => setShowPlaceholder(false)}
          decoding="async"
          loading="lazy"
          alt=""
          role="presentation"
        />
      )}
    </div>
  );
};

function getIsVideo(src) {
  return typeof src === 'string' && src.includes('.mp4');
}
