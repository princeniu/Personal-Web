import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import test from 'node:test';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { createStaticHandler, createStaticRouter, StaticRouterProvider } from 'react-router-dom/server.js';
import { transformSync } from 'esbuild';
import { allWorkProject as en } from '../app/data/content/en/projects/all-work.js';
import { allWorkProject as zh } from '../app/data/content/zh/projects/all-work.js';

const require = createRequire(import.meta.url);
const module = { exports: {} };
const source = readFileSync(new URL('../app/routes/projects/all-work-index.jsx', import.meta.url), 'utf8');
const code = transformSync(source, { loader: 'jsx', format: 'cjs', jsx: 'automatic' }).code;
const mocks = {
  '~/components/button': { Button: ({ children, href }) => React.createElement('a', { href }, children) },
  '~/components/section': { Section: ({ as: Tag = 'div', children, ...props }) => React.createElement(Tag, props, children) },
  '~/i18n/route': { localizePath: (path, locale) => locale === 'zh' ? `/zh${path}` : path },
  './all-work-index.module.css': { __esModule: true, default: new Proxy({}, { get: (_, key) => key }) },
};
new Function('require', 'module', 'exports', code)(name => mocks[name] ?? require(name), module, module.exports);
const { AllWorkIndex } = module.exports;

async function renderDirectory(locale, query = '') {
  const path = `${locale === 'zh' ? '/zh' : ''}/projects/all-work`;
  const content = locale === 'zh' ? zh : en;
  const project = {
    ...content,
    sections: content.sections.map(section => ({ ...section, items: section.items.map(item => ({
      ...item,
      preview: { layout: 'single', images: [{ src: '/example.webp', width: 800, height: 600, alt: item.title }], note: 'Prototype · illustrative data' },
    })) })),
  };
  const handler = createStaticHandler([{ path, element: React.createElement(AllWorkIndex, { project, locale }) }]);
  const context = await handler.query(new Request(`https://example.test${path}${query}`));
  const router = createStaticRouter(handler.dataRoutes, context);
  return renderToStaticMarkup(React.createElement(StaticRouterProvider, { router, context, hydrate: false }));
}

test('server-rendered category URLs show the requested projects in both languages', async () => {
  for (const locale of ['en', 'zh']) {
    for (const [query, count] of [['', 10], ['?category=all', 10], ['?category=products', 5], ['?category=industry', 1], ['?category=research', 4], ['?category=unknown', 10]]) {
      const html = await renderDirectory(locale, query);
      assert.equal((html.match(/class="card"/g) ?? []).length, count, `${locale}${query}`);
      assert.equal((html.match(/aria-pressed="true"/g) ?? []).length, 1);
      if (query.includes('industry')) {
        assert.match(html, /Porsche Digital Interface/);
        assert.doesNotMatch(html, /index-title-helmline/);
      }
      if (query.includes('unknown')) assert.match(html, /value="all" aria-pressed="true"/);
    }
  }
});

test('the directory exposes a no-JavaScript GET form and localized case and contact links', async () => {
  for (const locale of ['en', 'zh']) {
    const html = await renderDirectory(locale);
    const prefix = locale === 'zh' ? '/zh' : '';
    assert.match(html, new RegExp(`<form method="get" action="${prefix}/projects/all-work"`));
    assert.equal((html.match(/name="category"/g) ?? []).length, 4);
    assert.match(html, new RegExp(`href="${prefix}/projects/helmline"`));
    assert.match(html, new RegExp(`href="${prefix}/contact"`));
    assert.match(html, /role="status" aria-live="polite"/);
    assert.equal((html.match(/class="sourceNote"/g) ?? []).length, 10);
  }
});
