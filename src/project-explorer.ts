type ImageState = "before" | "after";

const explorer = document.querySelector<HTMLElement>("[data-project-explorer]");

if (explorer) {
  const projects = [
    ...explorer.querySelectorAll<HTMLElement>("[data-project-case]"),
  ];
  let activeProjectSlug = projects[0]?.dataset.projectSlug || "";
  let activeComparisonId =
    projects[0]?.querySelector<HTMLElement>("[data-comparison-panel]")?.dataset
      .comparisonPanel || "";
  let activeImageState: ImageState = "before";
  let imageSwitchVersion = 0;

  const syncState = () => {
    explorer!.dataset.activeProjectSlug = activeProjectSlug;
    explorer!.dataset.activeComparisonId = activeComparisonId;
    explorer!.dataset.activeImageState = activeImageState;
  };

  const loadImage = (image: HTMLImageElement | null) => {
    if (!image?.dataset.src) return;
    if (image.dataset.srcset) image.srcset = image.dataset.srcset;
    if (image.dataset.sizes) image.sizes = image.dataset.sizes;
    image.src = image.dataset.src;
    delete image.dataset.src;
    delete image.dataset.srcset;
    delete image.dataset.sizes;
  };

  const setImageState = (panel: HTMLElement, state: ImageState) => {
    activeImageState = state;
    panel.dataset.activeImage = state;
    panel
      .querySelectorAll<HTMLButtonElement>("[data-image-toggle]")
      .forEach((button) => {
        button.setAttribute(
          "aria-pressed",
          String(button.dataset.imageToggle === state),
        );
      });
    panel
      .querySelectorAll<HTMLImageElement>("[data-image-state]")
      .forEach((image) => {
        image.setAttribute(
          "aria-hidden",
          String(image.dataset.imageState !== state),
        );
      });
    syncState();
  };

  const selectComparison = (project: HTMLElement, id: string) => {
    const panels = [
      ...project.querySelectorAll<HTMLElement>("[data-comparison-panel]"),
    ];
    const selected = panels.find(
      (panel) => panel.dataset.comparisonPanel === id,
    );
    if (!selected) return;
    imageSwitchVersion++;
    panels.forEach((panel) => {
      panel.hidden = panel !== selected;
    });
    project
      .querySelectorAll<HTMLButtonElement>("[data-comparison-tab]")
      .forEach((tab) => {
        const current = tab.dataset.comparisonTab === id;
        tab.setAttribute("aria-selected", String(current));
        tab.tabIndex = current ? 0 : -1;
      });
    activeComparisonId = id;
    setImageState(selected, "before");
    loadImage(
      selected.querySelector<HTMLImageElement>('[data-image-state="before"]'),
    );
  };

  const selectProject = (slug: string) => {
    const selected = projects.find(
      (project) => project.dataset.projectSlug === slug,
    );
    if (!selected) return;
    imageSwitchVersion++;
    projects.forEach((project) => {
      project.hidden = project !== selected;
    });
    explorer!
      .querySelectorAll<HTMLButtonElement>("[data-project-tab]")
      .forEach((tab) => {
        const current = tab.dataset.projectTab === slug;
        tab.setAttribute("aria-selected", String(current));
        tab.tabIndex = current ? 0 : -1;
      });
    activeProjectSlug = slug;
    selected
      .querySelectorAll<HTMLImageElement>(".project-gallery img")
      .forEach(loadImage);
    const first = selected.querySelector<HTMLElement>(
      "[data-comparison-panel]",
    );
    activeComparisonId = first?.dataset.comparisonPanel || "";
    activeImageState = "before";
    if (first) selectComparison(selected, activeComparisonId);
    else syncState();
  };

  const selectImage = async (panel: HTMLElement, state: ImageState) => {
    const version = ++imageSwitchVersion;
    if (panel.dataset.activeImage === state) return;
    const image = panel.querySelector<HTMLImageElement>(
      `[data-image-state="${state}"]`,
    );
    if (!image) return;
    loadImage(image);
    try {
      await image.decode();
    } catch {
      /* Keep the current photo if loading fails. */
    }
    if (version !== imageSwitchVersion || !image.naturalWidth) return;
    setImageState(panel, state);
  };

  explorer.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;
    const projectTab = target.closest<HTMLButtonElement>("[data-project-tab]");
    if (projectTab?.dataset.projectTab) {
      selectProject(projectTab.dataset.projectTab);
      return;
    }
    const comparisonTab = target.closest<HTMLButtonElement>(
      "[data-comparison-tab]",
    );
    if (comparisonTab?.dataset.comparisonTab) {
      const project = comparisonTab.closest<HTMLElement>("[data-project-case]");
      if (project)
        selectComparison(project, comparisonTab.dataset.comparisonTab);
      return;
    }
    const toggle = target.closest<HTMLButtonElement>("[data-image-toggle]");
    const panel = toggle?.closest<HTMLElement>("[data-comparison-panel]");
    if (
      panel &&
      (toggle?.dataset.imageToggle === "before" ||
        toggle?.dataset.imageToggle === "after")
    ) {
      void selectImage(panel, toggle.dataset.imageToggle);
    }
  });

  explorer.addEventListener("keydown", (event) => {
    const target = event.target;
    if (
      !(target instanceof HTMLButtonElement) ||
      target.getAttribute("role") !== "tab"
    )
      return;
    const tablist = target.closest<HTMLElement>('[role="tablist"]');
    if (!tablist) return;
    const tabs = [
      ...tablist.querySelectorAll<HTMLButtonElement>('[role="tab"]'),
    ];
    const index = tabs.indexOf(target);
    let next = index;
    if (event.key === "ArrowRight" || event.key === "ArrowDown")
      next = (index + 1) % tabs.length;
    else if (event.key === "ArrowLeft" || event.key === "ArrowUp")
      next = (index - 1 + tabs.length) % tabs.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = tabs.length - 1;
    else return; // Enter and Space use the native button click behavior.
    event.preventDefault();
    tabs[next].click();
    tabs[next].focus();
  });

  syncState();
}
