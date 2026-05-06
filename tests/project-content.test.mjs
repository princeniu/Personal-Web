import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

import {
  featuredProjectSlugs,
  getProjectPath,
  legacyProjectSlugRedirects,
  portfolioProjects,
  resolveProjectSlug,
} from '../app/data/project-content.js';

test('portfolio projects have unique slugs and required fields', () => {
  const slugs = new Set();

  for (const project of portfolioProjects) {
    assert.equal(typeof project.slug, 'string');
    assert.ok(project.slug.length > 0);
    assert.equal(slugs.has(project.slug), false, `duplicate slug: ${project.slug}`);
    slugs.add(project.slug);

    assert.equal(typeof project.title, 'string');
    assert.ok(project.title.length > 0);
    assert.equal(typeof project.description, 'string');
    assert.ok(project.description.length > 0);
    assert.ok(Array.isArray(project.roles));
    assert.ok(project.roles.length > 0);
    assert.ok(project.summary);
    assert.equal(typeof project.summary.title, 'string');
    assert.equal(typeof project.summary.description, 'string');
    assert.equal(typeof project.summary.modelType, 'string');
    assert.ok(Array.isArray(project.sections));
    assert.ok(project.sections.length > 0);
  }
});

test('featured project slugs point at real projects in display order', () => {
  const availableSlugs = new Set(portfolioProjects.map(project => project.slug));

  assert.deepEqual(featuredProjectSlugs, [
    'porsche-digital-interface',
    'posture-checker',
    'trekassist',
    'little-lemon',
    'sayit',
  ]);

  for (const slug of featuredProjectSlugs) {
    assert.ok(availableSlugs.has(slug), `missing featured project: ${slug}`);
  }
});

test('project paths use stable portfolio URLs', () => {
  assert.equal(
    getProjectPath('porsche-digital-interface'),
    '/projects/porsche-digital-interface'
  );
  assert.equal(getProjectPath('posture-checker'), '/projects/posture-checker');
  assert.equal(getProjectPath('more-work'), '/projects/more-work');
});

test('more-work is a first-class project route', () => {
  assert.equal(resolveProjectSlug('more-work'), 'more-work');
  assert.deepEqual(legacyProjectSlugRedirects, {});
});

test('repository metadata points to the active GitHub repo', () => {
  const packageJson = JSON.parse(readFileSync('package.json', 'utf8'));
  const configJson = JSON.parse(readFileSync('app/config.json', 'utf8'));

  assert.equal(packageJson.repository, 'https://github.com/princeniu/Personal-Web.git');
  assert.equal(configJson.repo, 'https://github.com/princeniu/Personal-Web');
});

test('sitemap only publishes intended public project routes', () => {
  const sitemap = readFileSync('public/sitemap.xml', 'utf8');

  assert.match(sitemap, /https:\/\/princeniu\.com\/projects\/more-work/);
  assert.doesNotMatch(sitemap, /https:\/\/princeniu\.com\/projects\/sayit/);

  for (const slug of ['porsche-digital-interface', 'posture-checker', 'trekassist', 'little-lemon']) {
    assert.match(sitemap, new RegExp(`https://princeniu\\.com/projects/${slug}`));
  }
});
