# EMIKA release checklist

## Before deployment

- [ ] Confirm canonical public HTTPS origin with EMIKA; set `SITE_URL` to that origin in the build environment.
- [ ] Confirm the host publishes `dist/` and serves `/`, `/robots.txt`, `/sitemap.xml`, assets, and favicon with successful responses.
- [ ] Run format checks, `npm test`, `npm run lint`, `npm run typecheck`, and `npm run build` with verified `SITE_URL`. Preview builds use `SITE_URL=https://preview.invalid ALLOW_PREVIEW_SITE_URL=1` and intentionally produce noindex output.
- [ ] Confirm production HTML source includes EMIKA, Barrie, all seven services, email, phone, and JSON-LD without running JavaScript.
- [ ] Confirm generated canonical, `og:url`, JSON-LD URLs, robots sitemap reference, and sitemap `<loc>` all use the same verified origin.
- [ ] Confirm production has no `noindex` and no accidental bot block in robots, CDN, firewall, authentication, or host configuration.
- [ ] Validate the live URL in Google's Rich Results Test. Omit unverified fields even if the tool recommends more data.
- [ ] Test keyboard and screen-reader navigation, mobile menu focus/Escape, form errors, form loading/success/failure, and reduced motion on the deployed page.
- [ ] Check the **Commercial Interior Renovation** explorer pairs (`02/03`, `06/16`, `07/12`) and compact gallery (`11`, `13`, `15`) on desktop and mobile. Confirm only one comparison is visible, Before/After buttons report `aria-pressed`, tabs support ArrowLeft/ArrowRight/Home/End and native Enter/Space, frames do not shift during loading, and inactive media is deferred.
- [ ] Check the project section at 1440, 1280, 1024, 768, 430, 390, and 375 pixels. Confirm touch targets, gallery crops, no horizontal overflow, and immediate image switching with reduced motion.
- [ ] Keep the client unnamed in title, copy, alt text, metadata, captions, filenames, and structured data. The exact project location is still unverified. Do not add date, cost, size, timeline, or outcome claims without approval.
- [ ] Keep testimonials hidden until a verified testimonial is supplied. Use the overlay Before/After slider only when a matched-angle pair is available.
- [ ] Submit one authorized test inquiry with known contact details. Confirm Lambda delivery and verify the payload has only the five legacy fields.
- [ ] Review every image/caption and ensure only the supplied verified EMIKA project photography is presented as project work; legacy service imagery remains illustrative.

## After deployment

- [ ] Verify the Google Search Console property, submit `/sitemap.xml`, inspect the canonical landing page, and request indexing.
- [ ] Monitor indexing and Core Web Vitals in Search Console; measure LCP, CLS, and INP on mobile and desktop.
- [ ] Check that Googlebot, Bingbot, and OAI-SearchBot can fetch the page and that visible business facts are in the returned HTML.
- [ ] Check the social card in sharing previews.
- [ ] Add analytics only if the owner chooses a platform and approves its configuration.

No ranking or ChatGPT appearance is guaranteed by these steps.
