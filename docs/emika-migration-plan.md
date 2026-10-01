# EMIKA migration plan and architecture decision

## Decision

Keep Vite as the asset/compiler pipeline and render the one public landing page into complete HTML at build time. Use a small client script only for the contact form, mobile menu, and progressive scroll effects. The repository contains no server deployment configuration, so a static output retains compatibility with ordinary static hosting while fixing the CSR crawlability gap. A framework migration would add deployment assumptions and runtime weight without a clear benefit for one page.

`SITE_URL` is mandatory for production builds. One validated value supplies the canonical, Open Graph URL, JSON-LD URL, robots sitemap reference, and sitemap location. The build must fail if it is missing or not an HTTPS origin. The exact production domain remains an owner/deployment input.

## Sequence

1. Complete this audit and content inventory before UI changes.
2. Build the approved visual language with the official logo, royal blue, charcoal, warm off-white, generous editorial spacing, and current site service imagery.
3. Render all essential headings, service copy, contact text, links, and JSON-LD into initial HTML. Keep one H1.
4. Preserve the seven services and three real process steps. Gate portfolio, before/after, and testimonials behind verified data arrays; initially publish none. The later verified EMIKA project photo handoff enabled one conservative Commercial Interior Renovation case study. Its transformation explorer uses tabs and a Before/After toggle because the viewpoints differ; testimonials remain gated.
5. Preserve the existing five-field Lambda POST contract and `data.ok` success rule. Add accessible client validation, state announcements, and phone normalization. Do not submit a live inquiry without a suitable test contact.
6. Generate robots and sitemap from `SITE_URL`, create a branded social card, and document search validation.
7. Verify responsive layout, keyboard menu, reduced motion, form behavior, typecheck, lint, tests, and build.

## Release dependencies

- Set the verified production `SITE_URL` in deployment settings. No canonical domain is currently confirmed.
- Confirm the hosting platform serves the generated `dist` directory and supports the intended static routes.
- The supplied project photography supports one published project section. The client, exact project location, detailed project metadata, and testimonials remain unavailable. A matched-angle pair is required before enabling the overlay slider.
- Confirm the legal name and any broader service area before adding either to structured data.

## Implementation status

The new page is rendered by `scripts/render-site.mjs` from `site-content.mjs`; `scripts/project-section.mjs` builds the reusable project section from published case studies. `src/site.ts` handles the menu, form, and process emphasis, while `src/project-explorer.ts` manages active project, comparison, and Before/After state. Production images and brand assets live under `public/`. Static output was built successfully in a preview configuration that intentionally blocks indexing. The old React/Emotion source and its dependencies remain in the repository, but the shipped page does not import them. A proposed recursive deletion of that tracked legacy source was rejected by the environment's automatic approval review, so cleanup is deferred for explicit owner review.
