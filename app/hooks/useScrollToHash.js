import { useReducedMotion } from 'framer-motion';
import { useLocation, useNavigate } from '@remix-run/react';
import { useCallback, useEffect, useRef } from 'react';

export function useScrollToHash() {
  const cancelScroll = useRef();
  const location = useLocation();
  const navigate = useNavigate();
  const reduceMotion = useReducedMotion();

  useEffect(() => () => cancelScroll.current?.(), []);

  const scrollToHash = useCallback(
    (hash, onDone) => {
      cancelScroll.current?.();
      const encodedId = hash.split('#')[1];
      if (!encodedId) return;
      let id;
      try {
        id = decodeURIComponent(encodedId);
      } catch {
        onDone?.();
        return;
      }
      const targetElement = document.getElementById(id);
      if (!targetElement) {
        onDone?.();
        return;
      }

      // Focus defines where keyboard navigation continues after the jump.
      // A plain anchor div needs a temporary tabindex to accept that focus.
      if (!targetElement.hasAttribute('tabindex')) {
        targetElement.setAttribute('tabindex', '-1');
        targetElement.addEventListener('blur', () => {
          targetElement.removeAttribute('tabindex');
        }, { once: true });
      }
      targetElement.focus({ preventScroll: true });

      let settledTimer;
      let deadlineTimer;
      let cancelled = false;
      const cleanup = () => {
        cancelled = true;
        window.removeEventListener('scroll', handleScroll);
        clearTimeout(settledTimer);
        clearTimeout(deadlineTimer);
      };
      const complete = () => {
        if (cancelled) return;
        cleanup();
        if (window.location.pathname === location.pathname) {
          navigate(`${location.pathname}${location.search}#${encodedId}`, {
            preventScrollReset: true,
          });
          onDone?.();
        }
      };

      const handleScroll = () => {
        clearTimeout(settledTimer);
        settledTimer = setTimeout(complete, 100);
      };

      cancelScroll.current = cleanup;
      window.addEventListener('scroll', handleScroll);
      targetElement.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
      // Already aligned targets do not emit scroll; they still complete.
      handleScroll();
      deadlineTimer = setTimeout(complete, 2000);
      return cleanup;
    },
    [navigate, reduceMotion, location.pathname, location.search]
  );

  return scrollToHash;
}
