import test from "node:test";
import assert from "node:assert/strict";
import { verifiedProjects } from "../site-content.mjs";
import { renderProjects } from "../scripts/project-section.mjs";

test("one published project exposes only its first comparison and image source", () => {
  const html = renderProjects(verifiedProjects);
  assert.equal(html.includes("data-project-tabs"), false);
  assert.equal((html.match(/data-comparison-tab=/g) || []).length, 3);
  assert.equal((html.match(/data-comparison-panel=/g) || []).length, 3);
  assert.match(
    html,
    /data-comparison-panel="feature-wall"[^>]*data-active-image="before"/,
  );
  assert.match(html, /data-comparison-panel="service-counter"[^>]*hidden/);
  assert.match(html, /src="\/images\/projects\/emika-project-02-960.webp"/);
  assert.match(
    html,
    /data-src="\/images\/projects\/emika-project-03-960.webp"/,
  );
  assert.equal(html.includes("data-aligned-slider"), false);
});

test("project renderer uses one unified editorial project stage", () => {
  const html = renderProjects(verifiedProjects);
  assert.equal(html.includes('class="project-intro"'), false);
  assert.equal(html.includes('class="transformation-heading"'), false);
  assert.equal((html.match(/See the work take shape\./g) || []).length, 1);
  assert.match(html, /class="project-stage"/);
  assert.match(html, /class="project-stage-rail"/);
  assert.match(html, /class="project-stage-content"/);
  assert.match(html, /class="project-stage-meta"/);
  assert.match(html, /<h3>Commercial Interior Renovation<\/h3>/);
  assert.match(html, /comparison-tab-index/);
  assert.match(html, /comparison-tab-label/);
});

test("project renderer covers empty, single, and multiple content cases", () => {
  const base = verifiedProjects[0];
  assert.equal(renderProjects([{ ...base, published: false }]), "");
  const empty = renderProjects([{ ...base, comparisons: [], gallery: [] }]);
  assert.equal(empty.includes("data-transformation-viewer"), false);
  assert.equal(empty.includes("project-gallery-block"), false);
  const single = renderProjects([
    {
      ...base,
      comparisons: base.comparisons.slice(0, 1),
      gallery: base.gallery.slice(0, 1),
    },
  ]);
  assert.equal(single.includes("data-comparison-tabs"), false);
  assert.equal(single.includes('data-count="1"'), true);
  const second = {
    ...base,
    slug: "future-project",
    publicTitle: "Future Project",
    comparisons: base.comparisons.slice(0, 1),
    gallery: [],
  };
  const multiple = renderProjects([base, second]);
  assert.equal(multiple.includes("data-project-tabs"), true);
  assert.match(multiple, /data-project-slug="future-project"[^>]*hidden/);
  assert.match(
    multiple,
    /data-src="\/images\/projects\/emika-project-02-960.webp"/,
  );
  const many = renderProjects([
    { ...base, gallery: [...base.gallery, base.gallery[0]] },
  ]);
  assert.equal(many.includes("project-gallery-many"), true);
});
