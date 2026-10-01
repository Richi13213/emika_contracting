# EMIKA Codex Handoff

This package is designed to be placed beside/opened with the existing EMIKA repository when using Codex.

## Included

- `CODEX_PROMPT.md`
  Repo-specific migration instructions.

- `LEGACY_CONTENT_INVENTORY.md`
  Concrete business data and technical integration extracted from the uploaded old landing.

- `references/STITCH_FINAL_REFERENCE.zip`
  Final approved Stitch design reference. Treat it as visual/interaction guidance, not production source code.

- `references/EMIKA_Brand_Assets.zip`
  Approved EMIKA logo variants, symbol, PNG/SVG assets, favicons, and palette.

## Suggested message to Codex

Paste this after putting the files in the repo root (or tell Codex where they are):

> Read `CODEX_PROMPT.md` and `LEGACY_CONTENT_INVENTORY.md` completely. Inspect the current repository and the files under `references/`. Follow the source-of-truth hierarchy strictly. Start by creating `docs/emika-content-inventory.md` and `docs/emika-migration-plan.md`. Do not modify application code until the audit is complete. Then execute the migration end-to-end, preserve the working Lambda contact form, implement the approved EMIKA design, optimize rendering/SEO/accessibility/performance, validate the result, and report all unresolved business facts instead of inventing them.

## Critical facts

- Current location: Barrie, Ontario, Canada.
- Current phone: +1 (647) 801-5900.
- Current email: info@emikaconstruction.ca.
- Seven current services are listed in the inventory.
- Current form POSTs to an AWS Lambda URL and must remain functional.
- The current backend payload has only five fields.
- The old site does not contain verified projects, testimonials, or Before/After content.
- Do not publish generated Stitch project imagery as EMIKA work.
