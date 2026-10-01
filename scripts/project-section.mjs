const e = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

function renderProjectImage(
  photo,
  sizes,
  className = "",
  deferred = false,
  ariaHidden = false,
  imageState = "",
) {
  const source = deferred
    ? `data-src="${e(photo.src)}" data-srcset="${e(photo.srcset || "")}" data-sizes="${e(sizes)}"`
    : `src="${e(photo.src)}" srcset="${e(photo.srcset || "")}" sizes="${e(sizes)}"`;
  return `<img class="${e(className)}" ${source} ${imageState ? `data-image-state="${e(imageState)}"` : ""} alt="${e(photo.alt)}" width="${photo.width}" height="${photo.height}" style="object-position:${e(photo.objectPosition || "center")}" loading="lazy" decoding="async" aria-hidden="${ariaHidden}">`;
}

const transformationSizes =
  "(max-width: 760px) calc(100vw - 2.5rem), (max-width: 1100px) calc(100vw - 4rem), 66vw";

function renderTransformation(project, projectIndex) {
  if (!project.comparisons.length) return "";
  const count = project.comparisons.length;
  const slug = project.slug;
  const navigation =
    count > 1
      ? `<div class="comparison-tabs" role="tablist" aria-label="Areas of work" data-comparison-tabs>${project.comparisons
          .map(
            (comparison, index) =>
              `<button type="button" class="comparison-tab" role="tab" id="comparison-tab-${e(slug)}-${e(comparison.id)}" aria-controls="comparison-panel-${e(slug)}-${e(comparison.id)}" aria-selected="${index === 0}" tabindex="${index === 0 ? 0 : -1}" data-comparison-tab="${e(comparison.id)}"><span class="comparison-tab-index">${String(index + 1).padStart(2, "0")}</span><span class="comparison-tab-label">${e(comparison.label)}</span></button>`,
          )
          .join("")}</div>`
      : "";
  const panels = project.comparisons
    .map((comparison, index) => {
      const active = projectIndex === 0 && index === 0;
      const panelId = `comparison-panel-${slug}-${comparison.id}`;
      const tabs =
        count > 1
          ? `role="tabpanel" aria-labelledby="comparison-tab-${e(slug)}-${e(comparison.id)}" tabindex="0"`
          : "";
      return `<div class="transformation-panel" id="${e(panelId)}" data-comparison-panel="${e(comparison.id)}" data-active-image="before" ${tabs} ${index === 0 ? "" : "hidden"}><div class="transformation-media"><div class="transformation-image-frame">${renderProjectImage(comparison.before, transformationSizes, "transformation-photo transformation-photo-before", !active, false, "before")}${renderProjectImage(comparison.after, transformationSizes, "transformation-photo transformation-photo-after", true, true, "after")}</div><div class="transformation-controls" role="group" aria-label="Photo stage"><button type="button" aria-pressed="true" data-image-toggle="before">Before</button><button type="button" aria-pressed="false" data-image-toggle="after">After</button></div></div><div class="transformation-meta"><span>${String(index + 1).padStart(2, "0")} / ${String(count).padStart(2, "0")}</span><div><h4>${e(comparison.title)}</h4><p>${e(comparison.summary)}</p></div></div></div>`;
    })
    .join("");

  return `<div class="transformation-viewer" data-transformation-viewer><div class="project-stage"><aside class="project-stage-rail"><p class="eyebrow"><span class="blue-rule"></span> 03 / ${e(project.eyebrow || "EMIKA project")}</p><h2>See the work take shape.</h2><div class="project-stage-meta"><p class="project-stage-label">Project</p><h3>${e(project.publicTitle)}</h3><p>${e(project.summary)}</p></div>${navigation}</aside><div class="project-stage-content">${panels}</div></div></div>`;
}

function renderAlignedSlider(pair, index) {
  const id = `aligned-comparison-${index + 1}`;
  return `<figure class="aligned-slider" style="--comparison-position: 50%"><div class="aligned-slider-image">${renderProjectImage(pair.before, "(max-width: 760px) 100vw, 70vw")}${renderProjectImage(pair.after, "(max-width: 760px) 100vw, 70vw", "aligned-slider-after")}</div><figcaption><label for="${id}">${e(pair.title)}: show before or after</label><input id="${id}" type="range" min="0" max="100" value="50" aria-valuetext="Half before, half after" data-aligned-slider></figcaption></figure>`;
}

function renderProjectGallery(project, active) {
  if (!project.gallery.length) return "";
  const many = project.gallery.length > 3;
  return `<div class="project-gallery-block"><div class="project-gallery-heading"><p class="eyebrow">Details in context</p><h3>Craft in the details.</h3></div><div class="project-gallery${many ? " project-gallery-many" : ""}" data-count="${project.gallery.length}">${project.gallery
    .map((item, index) => {
      const sizes =
        index === 0
          ? "(max-width: 760px) calc(100vw - 2.5rem), (max-width: 1100px) calc(100vw - 4rem), 62vw"
          : "(max-width: 760px) calc(100vw - 2.5rem), (max-width: 1100px) 48vw, 31vw";
      return `<figure class="project-gallery-item">${renderProjectImage(item.image, sizes, "", !active)}${item.caption ? `<figcaption>${e(item.caption)}</figcaption>` : ""}</figure>`;
    })
    .join("")}</div></div>`;
}

export function renderProjects(projects, alignedPhotoPairs = []) {
  const published = projects.filter((project) => project.published);
  if (!published.length) return "";
  const projectNavigation =
    published.length > 1
      ? `<div class="project-tabs" role="tablist" aria-label="Projects" data-project-tabs>${published
          .map(
            (project, index) =>
              `<button type="button" role="tab" id="project-tab-${e(project.slug)}" aria-controls="project-panel-${e(project.slug)}" aria-selected="${index === 0}" tabindex="${index === 0 ? 0 : -1}" data-project-tab="${e(project.slug)}">${e(project.publicTitle)}</button>`,
          )
          .join("")}</div>`
      : "";
  const studies = published
    .map((project, index) => {
      const panelAttrs =
        published.length > 1
          ? `role="tabpanel" id="project-panel-${e(project.slug)}" aria-labelledby="project-tab-${e(project.slug)}" tabindex="0"`
          : "";
      return `<article class="project-case" data-project-case data-project-slug="${e(project.slug)}" ${panelAttrs} ${index === 0 ? "" : "hidden"}>${renderTransformation(project, index)}${renderProjectGallery(project, index === 0)}</article>`;
    })
    .join("");
  return `<section class="section project-study" id="projects" aria-label="EMIKA projects" data-project-explorer><div class="wrap">${projectNavigation}${studies}${alignedPhotoPairs.map(renderAlignedSlider).join("")}</div></section>`;
}
