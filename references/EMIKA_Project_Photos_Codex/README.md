# EMIKA Project Photos — Codex Handoff

These are the newly supplied real-world project photographs for the EMIKA site.

## Important publication rule

Only publish them as EMIKA project work if the owner confirms the photos are authorized for public use.

A third-party brand/logo is visible in some photographs. Do **not** name that client/brand in page copy,
SEO metadata, alt text, structured data, project titles, or testimonial language unless the relationship
and permission to publicize it are explicitly confirmed.

## Before / After interaction

The photos show meaningful transformation, but the before and after shots were not captured from identical
camera positions or focal lengths.

Therefore the production site should **not force the original pixel-overlay drag slider** for these images.
That interaction works best with perfectly aligned photographs.

Preferred treatments:

1. Side-by-side `Before` / `After` comparison cards.
2. Tap/click toggle between two images.
3. Crossfade transition with clear Before/After labels.
4. Project story section: `Before → Work in progress → Result`.

If a matched camera-angle before/after pair is later supplied, the accessible drag slider can be enabled.

## Recommended comparison candidates

### Feature wall / cladding
- Before candidate: `web/emika-project-02.webp`
- After candidate: `web/emika-project-03.webp`
- Alternatives: 05, 09 → 14

### Service counter / interior area
- Before candidate: `web/emika-project-06.webp`
- After candidate: `web/emika-project-16.webp`
- Alternatives: 08 → 13/17

### Upper facade / architectural cladding
- Before candidate: `web/emika-project-07.webp`
- After candidate: `web/emika-project-12.webp`
- Alternative: 04 → 11

## Suggested implementation

Create a data-driven project object, for example:

```ts
{
  slug: "commercial-interior-renovation",
  title: "Commercial Interior Renovation",
  location: null, // do not invent
  client: null,   // do not infer from visible signage
  description: "Commercial interior renovation showing wall, cladding and service-area improvements.",
  comparisons: [...],
  gallery: [...]
}
```

Use a conservative generic project title until the real project/client name and location are approved.

## Asset folders

- `originals/` — normalized full-resolution JPEGs, metadata stripped.
- `web/` — WebP derivatives, max width 1800px, quality 86.
- `manifest.json` — file metadata, stage suggestions, and comparison candidates.

Generate AVIF variants inside the final application's image pipeline if useful.
