import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import test from 'node:test';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { transformSync } from 'esbuild';

const require = createRequire(import.meta.url);
const styles = new Proxy({}, { get: (_, key) => key });

// Exercise the real components without a server, assets, or network requests.
function loadModule(path, mocks = {}, globals = {}) {
  const source = readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');
  const code = transformSync(source, { loader: 'jsx', format: 'cjs', jsx: 'automatic' }).code;
  const module = { exports: {} };
  const scopedRequire = name => {
    if (name in mocks) return mocks[name];
    if (name.endsWith('.module.css')) return { __esModule: true, default: styles };
    if (name === '~/utils/style') return {
      classes: (...names) => names.filter(Boolean).join(' '),
      cssProps: props => Object.fromEntries(Object.entries(props).map(([key, value]) => [`--${key}`, value])),
      numToMs: value => `${value}ms`,
    };
    return require(name);
  };
  new Function('require', 'module', 'exports', ...Object.keys(globals), code)(
    scopedRequire, module, module.exports, ...Object.values(globals)
  );
  return module.exports;
}

test('loader server markup stays identical for reduced-motion client preferences', () => {
  const render = preference => {
    const { Loader } = loadModule('app/components/loader/loader.jsx', {
      'framer-motion': { useReducedMotion: () => preference },
      '~/components/text': { Text: ({ children }) => React.createElement('span', {}, children) },
    });
    return renderToStaticMarkup(React.createElement(Loader, { text: 'Loading projects' }));
  };
  const serverMarkup = render(null);
  assert.equal(render(true), serverMarkup);
  assert.equal(render(false), serverMarkup);
  assert.match(serverMarkup, /role="status" aria-label="Loading projects"/);
});

test('images expose unobscured real sources before hydration and preserve eager/lazy policy', () => {
  const { Image } = loadModule('app/components/image/image.jsx', {
    'framer-motion': { useReducedMotion: () => null },
    '@remix-run/react': { useLocation: () => ({ pathname: '/' }) },
    '~/components/button': { Button: () => null },
    '~/components/icon': { Icon: () => null },
    '~/components/theme-provider': { useTheme: () => ({ theme: 'dark' }) },
    '~/hooks': { useHasMounted: () => false, useInViewport: () => false },
    '~/i18n/route': { getLocaleFromPathname: () => 'en' },
    '~/i18n/ui': { getUiStrings: () => ({ play: 'Play', pause: 'Pause' }) },
    '~/utils/image': { resolveSrcFromSrcSet: () => undefined },
  });
  const props = { src: '/hero.webp', srcSet: '/hero.webp 800w, /hero-large.webp 1600w', placeholder: '/tiny.jpg', alt: 'Project interface' };
  const eager = renderToStaticMarkup(React.createElement(Image, { ...props, loading: 'eager' }));
  assert.doesNotMatch(eager, /tiny\.jpg/, 'SSR must not cover the real image with a permanent no-JS placeholder');
  assert.match(eager, /loading="eager" src="\/hero.webp" srcSet="\/hero.webp 800w, \/hero-large.webp 1600w"/);
  const lazy = renderToStaticMarkup(React.createElement(Image, props));
  assert.match(lazy, /loading="lazy" src="\/hero.webp"/);
});

function createScrollHarness({ exists = true, reduceMotion = false } = {}) {
  const timers = new Map();
  const listeners = new Map();
  const attributes = new Map();
  const calls = [];
  const effects = [];
  let clock = 0;
  let nextTimer = 0;
  let blur;
  const target = {
    hasAttribute: name => attributes.has(name),
    setAttribute: (name, value) => attributes.set(name, value),
    removeAttribute: name => attributes.delete(name),
    addEventListener: (name, callback) => { if (name === 'blur') blur = callback; },
    focus: options => calls.push(['focus', options]),
    scrollIntoView: options => calls.push(['scroll', options]),
  };
  const window = {
    location: { pathname: '/zh' },
    addEventListener: (name, callback) => listeners.set(name, callback),
    removeEventListener: name => listeners.delete(name),
  };
  const { useScrollToHash } = loadModule('app/hooks/useScrollToHash.js', {
    react: {
      useRef: () => ({ current: undefined }),
      useCallback: callback => callback,
      useEffect: callback => effects.push(callback),
    },
    'framer-motion': { useReducedMotion: () => reduceMotion },
    '@remix-run/react': {
      useLocation: () => ({ pathname: '/zh', search: '?source=portfolio' }),
      useNavigate: () => (...args) => calls.push(['navigate', ...args]),
    },
  }, {
    window,
    document: { getElementById: () => exists ? target : null },
    setTimeout: (callback, delay) => {
      const id = ++nextTimer;
      timers.set(id, { callback, at: clock + delay });
      return id;
    },
    clearTimeout: id => timers.delete(id),
  });
  const scroll = useScrollToHash();
  const unmount = effects[0]();
  const advance = ms => {
    const end = clock + ms;
    while (timers.size > 0) {
      const next = [...timers.entries()].sort((a, b) => a[1].at - b[1].at)[0];
      if (!next || next[1].at > end) break;
      clock = next[1].at;
      timers.delete(next[0]);
      next[1].callback();
    }
    clock = end;
  };
  return { scroll, unmount, advance, calls, timers, listeners, attributes, blur: () => blur?.() };
}

test('an already aligned hash target still focuses content and completes with its query string', () => {
  const harness = createScrollHarness();
  let completed = 0;
  harness.scroll('#projects', () => completed++);
  assert.deepEqual(harness.calls.slice(0, 2), [['focus', { preventScroll: true }], ['scroll', { behavior: 'smooth' }]]);
  assert.equal(harness.attributes.get('tabindex'), '-1');
  harness.advance(100);
  assert.deepEqual(harness.calls[2], ['navigate', '/zh?source=portfolio#projects', { preventScrollReset: true }]);
  assert.equal(completed, 1);
  assert.equal(harness.listeners.size, 0);
  assert.equal(harness.timers.size, 0);
  harness.blur();
  assert.equal(harness.attributes.has('tabindex'), false);
});

test('a replacement jump and unmount cancel obsolete scroll navigation', () => {
  const harness = createScrollHarness({ reduceMotion: true });
  harness.scroll('#projects');
  harness.scroll('#details');
  harness.advance(100);
  assert.deepEqual(harness.calls.filter(([name]) => name === 'navigate').map(call => call[1]), ['/zh?source=portfolio#details']);
  harness.scroll('#intro');
  harness.unmount();
  harness.advance(3000);
  assert.equal(harness.calls.filter(([name]) => name === 'navigate').length, 1);
  assert.equal(harness.listeners.size, 0);
  assert.equal(harness.timers.size, 0);
});

test('missing or malformed hash targets exit without leaving pending work', () => {
  const harness = createScrollHarness({ exists: false });
  let completed = 0;
  harness.scroll('#gone', () => completed++);
  harness.scroll('#%ZZ', () => completed++);
  assert.equal(completed, 2);
  assert.equal(harness.calls.length, 0);
  assert.equal(harness.listeners.size, 0);
  assert.equal(harness.timers.size, 0);
});
