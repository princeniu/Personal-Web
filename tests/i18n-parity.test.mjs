import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

import { portfolioProjects as enProjects } from '../app/data/project-content.js';
import { portfolioProjects as zhProjects } from '../app/data/content/zh/index.js';

test('zh project catalog mirrors en catalog in slugs and order', () => {
  assert.deepEqual(
    zhProjects.map(project => project.slug),
    enProjects.map(project => project.slug)
  );
});

test('each zh project mirrors the en section structure', () => {
  const zhBySlug = new Map(zhProjects.map(project => [project.slug, project]));

  for (const enProject of enProjects) {
    const zhProject = zhBySlug.get(enProject.slug);
    assert.ok(zhProject, `missing zh translation for ${enProject.slug}`);

    assert.ok(zhProject.title.length > 0, `${enProject.slug}: empty zh title`);
    assert.ok(
      zhProject.description.length > 0,
      `${enProject.slug}: empty zh description`
    );
    assert.equal(
      zhProject.sections.length,
      enProject.sections.length,
      `${enProject.slug}: zh has ${zhProject.sections.length} sections, en has ${enProject.sections.length}`
    );
    assert.deepEqual(
      zhProject.sections.map(section => section.type),
      enProject.sections.map(section => section.type),
      `${enProject.slug}: zh section types drifted from en`
    );
    assert.equal(
      (zhProject.summary?.quickFacts ?? []).length,
      (enProject.summary?.quickFacts ?? []).length,
      `${enProject.slug}: zh quickFacts count drifted from en`
    );
  }
});

test('every referenced image key resolves in imageAssets', () => {
  const source = readFileSync('app/data/projects.js', 'utf8');
  const start = source.indexOf('const imageAssets = {');
  assert.ok(start !== -1, 'imageAssets object not found in app/data/projects.js');
  const block = source.slice(start, source.indexOf('\n};', start));
  const definedKeys = new Set(
    [...block.matchAll(/^ {2}(\w+): \{/gm)].map(match => match[1])
  );
  assert.ok(definedKeys.size > 0, 'no imageAssets keys parsed');

  const referencedKeys = new Set();
  for (const project of [...enProjects, ...zhProjects]) {
    for (const section of project.sections) {
      if (typeof section.image === 'string') referencedKeys.add(section.image);
      for (const image of section.images ?? []) {
        if (typeof image === 'string') referencedKeys.add(image);
      }
    }
  }
  assert.ok(referencedKeys.size > 0, 'no image keys referenced by content');

  const missing = [...referencedKeys].filter(key => !definedKeys.has(key));
  assert.deepEqual(
    missing,
    [],
    `content references image keys missing from imageAssets: ${missing.join(', ')}`
  );
});
