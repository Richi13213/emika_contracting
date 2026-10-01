# EMIKA — Repo-Specific Codex Migration Brief

You are modifying the existing EMIKA production landing-page repository.

Read this file and `LEGACY_CONTENT_INVENTORY.md` completely before changing application code.

You also have:
- `references/STITCH_FINAL_REFERENCE.zip` — approved visual/UX reference
- `references/EMIKA_Brand_Assets.zip` — approved brand assets

## Mission

Replace the legacy EMIKA landing-page presentation with the approved new premium EMIKA design **without losing verified business data or breaking the current working form**.

At the same time, improve the public site for:

- Google Search
- local search
- ChatGPT Search / answer-engine discoverability
- accessibility
- Core Web Vitals
- semantic crawlability

This is a production migration, not a mockup exercise.

---

# 1. Source-of-truth hierarchy

When sources conflict, use this order:

### Business facts and integrations
1. Existing repository / `LEGACY_CONTENT_INVENTORY.md`
2. Explicit owner-provided information
3. Never use Stitch placeholder facts

### Visual design and interaction
1. `STITCH_FINAL_REFERENCE.zip`
2. `EMIKA_Brand_Assets.zip`
3. Existing visual design only where needed for real content/assets

### Brand
Display brand:
**EMIKA**

Do not append `Construction` or `Architecture` to the logo lockup.

The existing application currently uses `EMIKA Construction` as its company name in copy/schema. Treat that as an existing public name, not automatically as a confirmed legal name.

Do not add a `legalName` structured-data field until verified.

---

# 2. Existing repository facts you must preserve

The uploaded legacy project is:

- React 18
- Vite 5
- TypeScript
- Emotion
- Formik + Yup
- Axios
- client-rendered single-page application

Real current business data:

- Location: **Barrie, Ontario, Canada**
- Email: **info@emikaconstruction.ca**
- Phone: **+1 (647) 801-5900**
- Phone machine form: **+16478015900**
- Positioning: commercial construction and property maintenance
- Family-owned positioning: approved by owner

Real services:

1. Curb and Sidewalk Repair
2. Asphalt Maintenance
3. Building Repair
4. Line Painting
5. Landscaping
6. Snow Removal
7. General Contracting

Do not replace these with the example services from the Stitch reference.

---

# 3. Existing form contract — DO NOT BREAK

The current form posts to:

`https://q2baaxwcjimj3vimfaf6ucipqm0ghmqg.lambda-url.us-east-1.on.aws/`

Payload:

```ts
{
  first_name,
  last_name,
  email,
  phone_number,
  service
}
```

Request:
- POST
- JSON
- success when `data?.ok` is truthy

The phone value is normalized by removing non-digits and a leading North American country code `1`.

Preserve this working behavior end-to-end.

The Stitch form contains example fields not present in the legacy backend contract.

Do **not** send:

- project location
- estimated budget
- project details
- consent
- any other new field

unless you first confirm/update the backend contract and test it.

The new visual contact section must wrap the **real existing form behavior**, not a mock.

---

# 4. First action: audit, then plan

Before changing UI code, create:

- `docs/emika-content-inventory.md`
- `docs/emika-migration-plan.md`

Your content inventory must reconcile the actual source code with `LEGACY_CONTENT_INVENTORY.md`.

Explicitly flag:
- any discrepancy
- any unknown
- any Stitch placeholder
- any business claim that cannot be verified

Do not edit production application code until these two docs exist.

---

# 5. Rendering architecture — SEO is a primary requirement

The current site is a Vite CSR application whose initial HTML contains only the React root shell.

Google can render JavaScript, but server/static rendering is preferable for important public content and not all crawlers should be assumed to execute the entire app.

The finished EMIKA landing must return the core business content in the initial HTML.

Acceptable approaches:

### Preferred, when deployment supports it
Migrate the landing to **Next.js App Router** using static/server rendering while preserving the same public URLs and working form behavior.

### Acceptable alternative
Remain on Vite/React but add a robust build-time prerender/SSG/SSR solution that produces indexable initial HTML.

Do not leave the final production site as pure CSR if a clean static/server-rendered solution is feasible.

Do not choose a framework based only on preference.

Inspect current deployment constraints first.

Document the architecture decision in `docs/emika-migration-plan.md`.

If there is no deployment constraint and this remains a small public marketing site, prefer a statically rendered implementation with minimal client-side JavaScript.

---

# 6. Do not paste Stitch HTML into production

The Stitch package is a visual specification.

Rebuild the approved experience using maintainable application components.

Suggested conceptual breakdown:

- Header
- MobileNavigation
- Hero
- TrustIndicators
- About
- Services
- BeforeAfter
- Projects
- Process
- Principles
- Contact
- FinalCTA
- Footer

Interactive behavior should be isolated into client-side components/islands where the chosen framework permits it.

Static sections should not ship unnecessary JavaScript.

---

# 7. Brand system

Use assets from `EMIKA_Brand_Assets.zip`.

Official colors:

- Royal Blue: `#123DA6`
- Charcoal: `#1A1A1A`
- Warm Off-White: `#F8F7F3`
- Cool Gray: `#8A9AA6`

Use:
- dark logo on light backgrounds
- light logo on dark/photo backgrounds
- symbol for favicon/compact contexts

Do not:
- redraw the monogram
- use CSS filters as the production light/dark logo strategy
- stretch/skew the mark
- add trade text to the logo

No runtime Tailwind CDN.

If Tailwind is chosen, compile it normally.

Use one coherent styling strategy in the migrated implementation; do not retain redundant styling libraries without a reason.

---

# 8. Hero content strategy

Preserve the approved visual hero direction.

The visual headline may remain:

**Built with precision. Designed to last.**

But the supporting copy must clearly state the actual service/category/location context in crawlable text.

Use wording grounded in the legacy site, for example:

**Family-owned commercial construction and property maintenance in Barrie, Ontario.**

or a polished equivalent that does not add unsupported claims.

The user should understand quickly:
- who EMIKA is
- what EMIKA does
- where EMIKA operates
- how to contact EMIKA

Do not imply architecture services unless explicitly verified.

---

# 9. Trust section

Do not use fake years, project counts, satisfaction percentages, ratings, certifications, or guarantees.

Use real/qualitative trust signals such as:

- Family-Owned
- One Accountable Team
- Clear Communication
- Detail-Focused Execution
- Built Around Daily Operations
- Professional Presentation

A numeric value of `7 services` may be used because the service catalog contains seven verified services, but do not force a metric layout if qualitative cards fit better.

---

# 10. About section

Retain the approved family-owned premium narrative.

Ground it in real legacy concepts:

- one accountable team
- practical site coordination
- safety
- daily operations
- professional presentation
- dependable execution

Do not add:
- years of experience
- generation count
- founder story
- certifications
- team size
- warranty claims

unless verified.

Use current EMIKA/jobsite imagery where appropriate rather than presenting generated architecture imagery as completed EMIKA work.

---

# 11. Services section — exact production catalog

Render the seven existing services.

Use the exact existing service data as the initial factual source.

Existing service images may be reused from the legacy assets.

You may rewrite descriptions for readability/search intent, but preserve the actual scope.

Do not invent:
- residential custom homes
- architecture
- luxury-home specialization
- commercial fit-outs
- design-build
- permit services
- engineering
- any other service not present in the existing content

unless the owner provides confirmation.

Do not create thin SEO pages for each service solely to generate URLs.

If there is enough approved content later, the architecture should make dedicated service pages possible.

---

# 12. Projects / Before-After — production gating

The approved visual design includes impressive Projects and Before/After sections.

The legacy repository does **not** contain verified EMIKA project metadata, project names, locations, or a verified before/after pair.

Therefore:

- implement reusable data-driven components,
- but do not present Stitch/generated imagery as real EMIKA work,
- do not invent project names,
- do not invent project locations,
- do not invent completion years,
- do not invent project descriptions.

Recommended production behavior:

```ts
if (verifiedProjects.length > 0) {
  renderProjects();
}

if (verifiedBeforeAfter.length > 0) {
  renderBeforeAfter();
}
```

Until real material is supplied, omit these sections from the production page rather than publishing fictitious portfolio proof.

Reference/generative images may be used only in development/design preview and must never be represented as completed EMIKA projects.

---

# 13. Process section — keep the interaction, use the real process

The legacy site has a three-step process:

1. Walk the site
2. Align the scope
3. Deliver with care

Preserve the approved dark, scroll-driven visual treatment, but map it to these real steps.

Do not publish the Stitch six-step process as fact.

Design the component so the data can later expand to more stages without rewriting the interaction.

Do not invent:
- warranties
- budget locks
- permitting workflows
- architectural phases
- inspections
- certifications
- millimeter precision
- response SLAs

unless verified.

---

# 14. Testimonials

No verified testimonial is present in the supplied legacy repository.

Do not publish a fabricated quote or client identity.

The component may exist, but hide it unless real approved testimonial data exists.

---

# 15. Contact section

Use real values:

- `info@emikaconstruction.ca`
- `+1 (647) 801-5900`
- `Barrie, Ontario, Canada`

Do not fabricate:
- street address
- hours
- social links
- additional locations

Preserve the working form fields unless the backend is intentionally extended.

The new design can visually present a larger inquiry portal while still using the verified five-field payload.

---

# 16. Local SEO target

Primary current geographic entity:

**Barrie, Ontario, Canada**

Primary current service themes:

- commercial construction
- property maintenance
- general contracting
- curb and sidewalk repair
- asphalt maintenance
- building repair
- line painting
- landscaping
- snow removal

Use these naturally in:
- title
- description
- visible content
- service headings
- structured data
- image alt text where appropriate

Do not keyword-stuff.

Do not create fake city pages.

Do not claim a wider service area than the repository verifies.

If future verified service areas are provided, model them as structured content rather than duplicative doorway pages.

---

# 17. Recommended metadata baseline

Do not hardcode a production domain until verified.

Use a single site-url configuration/env source.

Recommended title direction:

`Commercial Construction & Property Maintenance in Barrie, ON | EMIKA`

Recommended meta-description direction:

`EMIKA is a family-owned construction company in Barrie, Ontario providing general contracting, building repair, curb and sidewalk repair, asphalt maintenance, line painting, landscaping and snow removal.`

You may refine wording/length, but do not alter facts.

Remove reliance on `meta name="keywords"` as an SEO strategy.

Create a real branded Open Graph image; do not use the favicon as the final social card.

---

# 18. Canonical domain

The repository contains the email domain:

`emikaconstruction.ca`

but does not explicitly establish the website canonical URL.

Do not infer the canonical site from the email domain.

Do not reuse the unverified `emika.ca` value from Stitch.

Use a required production environment/config value such as:

`SITE_URL`

and generate:
- canonical
- Open Graph URL
- sitemap absolute URLs
- structured-data URL

from that single source.

Fail visibly in deployment validation if production `SITE_URL` is missing rather than silently publishing a fake canonical.

---

# 19. Structured data

Build JSON-LD from verified data and output it in server/static HTML when possible.

At minimum consider:

- `Organization`
- `GeneralContractor` / appropriate local-business representation
- `WebSite`
- `WebPage`
- `Service` nodes for the seven real services

Use:

- display name: `EMIKA`
- telephone: `+16478015900`
- email: `info@emikaconstruction.ca`
- locality: Barrie
- region: Ontario
- country: CA
- service descriptions from real service data

Do not add:
- streetAddress
- postalCode
- geo
- openingHours
- aggregateRating
- review
- priceRange
- foundingDate
- employee count
- awards

without verified data.

If current public name `EMIKA Construction` needs to be retained as an alternate name, make it a deliberate configurable decision. Do not claim it as a legal name.

Validate structured data against current Google tooling/guidelines.

Visible page content and JSON-LD must agree.

---

# 20. robots.txt / ChatGPT Search

Create a production `robots.txt`.

The public site should not accidentally block:

- Googlebot
- Bingbot
- OAI-SearchBot

if EMIKA wants discoverability in ChatGPT Search.

Reference the sitemap.

Do not confuse:
- OAI-SearchBot (search discovery)
with
- GPTBot (training-related crawler controls)

Do not change training-crawler policy without owner instruction.

Do not promise that allowing OAI-SearchBot guarantees inclusion in ChatGPT.

Do not add `llms.txt` as if it were an official ranking signal.

---

# 21. Sitemap

Create `sitemap.xml` from the actual production URL set.

If the site remains one page, include the canonical landing page only plus any genuine public routes.

Do not include:
- fake service pages
- placeholder projects
- API routes
- non-public pages

---

# 22. HTML semantics

Ensure the initial delivered HTML contains meaningful business content.

Use:
- one primary H1
- descriptive H2/H3 headings
- `header`
- `nav`
- `main`
- `section`
- `article` where appropriate
- `footer`
- actual `<a href>` links
- actual button semantics
- meaningful image `alt`

Important content must not exist only inside:
- canvas
- CSS backgrounds
- generated decorative images
- inaccessible animation states

---

# 23. Image strategy

Use the legacy EMIKA service/jobsite images as approved/current assets where they serve the new design.

Do not imply that generic Stitch architecture references are real portfolio work.

Optimize images:

- AVIF/WebP where useful
- responsive sizing
- intrinsic dimensions
- lazy loading below fold
- hero priority only
- meaningful alt text
- no CLS

Use the new brand pack for logo variants/favicon.

Create an asset manifest so future real project photography can be inserted without rewriting components.

---

# 24. Contact form architecture

If remaining on a static frontend:
- preserve the existing Lambda request exactly,
- move the endpoint to configuration if reasonable,
- remember that a public form endpoint cannot be made secret merely by using an env variable.

If migrating to a framework with server/API routes:
- it is acceptable to proxy through `/api/inquiries`,
- preserve the exact Lambda payload contract,
- add server-side validation,
- normalize the phone consistently,
- pass the request to the existing Lambda,
- preserve `data.ok` success semantics,
- avoid exposing backend/internal errors.

Do not change the functional behavior without testing.

Do not log PII unnecessarily.

If spam protection/rate limiting is added, do so in a way that does not silently block legitimate submissions.

---

# 25. Accessibility

Target WCAG 2.2 AA where practical.

Preserve/implement:

- skip link
- semantic navigation
- `aria-expanded`
- `aria-controls`
- Escape-to-close mobile menu
- focus trap
- focus restoration
- body scroll locking
- visible focus
- reduced motion
- form error associations
- `aria-live` submission states
- accessible Before/After slider when real content enables that section

The current app already has some reduced-motion/reveal logic; retain the concept but implement it cleanly in the target architecture.

---

# 26. Performance

Target excellent Core Web Vitals.

Avoid:
- runtime Tailwind CDN
- unnecessary animation libraries
- shipping whole app as client JS
- duplicated styling systems
- unoptimized full-resolution images
- web fonts loaded through blocking CSS `@import`

Prefer:
- static/server components
- minimal interactive islands/client components
- framework-managed/self-hosted fonts
- transform/opacity animations
- IntersectionObserver
- requestAnimationFrame for scroll-linked visual work
- dynamic import only when useful

---

# 27. Analytics

No analytics/tracking scripts were found in the supplied legacy repository.

Do not add:
- GA4
- GTM
- Meta Pixel
- heatmaps
- third-party trackers

without explicit configuration/approval.

Document analytics as a post-launch option.

If ChatGPT referrals are later analyzed, normal analytics can distinguish referral traffic; do not add special tracking hacks.

---

# 28. Google / search validation

Before release, document/manual-check:

- production HTML source contains core EMIKA text
- canonical is correct
- robots is reachable
- sitemap is reachable
- no accidental `noindex`
- Googlebot not blocked
- structured data validates
- links are crawlable
- mobile layout works
- metadata uses verified data
- no generated placeholder is presented as business proof

Provide Search Console post-deploy steps in the release checklist:
- verify property
- submit sitemap
- inspect canonical landing
- request indexing after launch
- monitor indexing/Core Web Vitals

Do not claim ranking guarantees.

---

# 29. ChatGPT-search validation

Document/manual-check:

- site is public
- OAI-SearchBot is not blocked when discovery is desired
- key company/service/location facts are visible in crawlable text
- contact information is text, not image-only
- page structure uses meaningful headings/ARIA
- no important information requires hidden UI interactions to exist in DOM

Do not claim ChatGPT inclusion/ranking guarantees.

---

# 30. No fake content rule

This rule supersedes visual fidelity.

Never publish as EMIKA facts:

- fake project photos
- generated Before/After photos
- made-up project names
- made-up locations
- fake testimonials
- fake budgets
- fake metrics
- invented certifications
- invented warranty terms
- invented architecture services
- invented years in business
- fake social accounts
- fake office addresses

When real content is missing, hide/gate the section or document the need.

---

# 31. Repository cleanup

After successful migration, inspect whether old dependencies/assets are now unused.

Potentially removable dependencies may include old visual libraries, but do not remove them until verified unused.

If migrating away from Emotion, remove it only after all usage is gone.

If migrating away from Vite, remove Vite-specific config only after the replacement build is working.

Resolve the duplicate package-lock/pnpm-lock situation based on actual deployment/package-manager choice. Do not casually regenerate both.

Do not preserve `src/ui/sharing/atoms/Archive.zip` as an application source artifact unless it is truly needed.

---

# 32. Tests and validation

The legacy repository has no test script.

Add meaningful tests where the target stack supports them, particularly for:

- service-data rendering
- contact validation
- phone normalization
- successful contact submission
- failed contact submission
- mobile menu keyboard behavior
- reduced-motion behavior
- gated portfolio sections
- Before/After keyboard behavior if enabled

Run the target repository's actual:

- format
- lint
- typecheck
- tests
- build

Do not report a command as passing unless it was executed successfully.

---

# 33. Required documentation after implementation

Create/update:

- `docs/emika-content-inventory.md`
- `docs/emika-migration-plan.md`
- `docs/emika-seo-ai-search-audit.md`
- `docs/emika-release-checklist.md`

The SEO/AI-search audit must state:

- rendering strategy
- production canonical source
- robots policy
- OAI-SearchBot status
- Googlebot status
- sitemap
- structured-data types
- metadata
- social-card status
- page indexability
- current service-area statement
- Core Web Vitals risks
- gated/missing project content
- missing testimonial content
- any data awaiting business confirmation

---

# 34. Visual acceptance

The new implementation should strongly match the approved final Stitch direction:

- Royal Blue brand accents
- Charcoal process/contact sections
- Warm Off-White main canvas
- editorial architectural typography
- premium spacing
- cinematic but restrained motion
- family-owned warmth
- professional construction credibility
- responsive mobile behavior

Do not revert to the old navy/orange design.

Do not add construction clichés such as:
- helmets
- hammer icons
- generic roof marks
- cranes as decorative branding

The official monogram is the construction symbolism.

---

# 35. Completion criteria

The task is complete only when:

1. The approved new visual direction is implemented.
2. Barrie, Ontario and the real service offering remain accurate.
3. Phone/email are preserved.
4. All seven actual services are preserved.
5. The existing contact submission still works end-to-end.
6. The payload contract is not accidentally changed.
7. Core public content exists in initial HTML.
8. Canonical/robots/sitemap use the real production domain configuration.
9. OAI-SearchBot is not accidentally blocked when ChatGPT Search discovery is desired.
10. Structured data contains verified facts only.
11. No Stitch/generative placeholder is presented as real EMIKA portfolio evidence.
12. Projects/BeforeAfter/testimonials are gated until verified content exists.
13. Accessibility and reduced-motion behavior work.
14. Build/lint/typecheck/tests pass.
15. Documentation records remaining unknowns.

At the end, report:

- architecture choice and reason
- files changed
- real legacy content preserved
- contact-form integration status
- SEO changes
- ChatGPT-search crawlability changes
- performance changes
- accessibility changes
- commands executed and results
- facts/content still needed from EMIKA
- post-deploy actions
