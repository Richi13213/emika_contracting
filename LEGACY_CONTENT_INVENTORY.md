# EMIKA — Legacy Production Content Inventory

This inventory was extracted from the uploaded legacy repository (`Archive(1).zip`).

Treat these values as **existing production facts/configuration** unless the business owner explicitly corrects them. The new Stitch design is not the source of truth for business facts.

## Current technical stack

- React 18.2
- Vite 5.2
- TypeScript 5.2
- Emotion (`@emotion/css`, `@emotion/react`)
- Formik 2.4
- Yup 1.4
- Axios 1.6
- Current app architecture: client-rendered single-page landing
- Current production build script: `tsc && vite build`
- No router detected
- No test script detected
- Both `package-lock.json` and `pnpm-lock.yaml` are present; determine the actual deployment/package-manager convention before deleting either.

## Existing public business information

### Brand / naming

- Current application name: `EMIKA Construction`
- Current short/display brand: `EMIKA`
- New approved identity should visually display only `EMIKA`
- Do **not** invent a legal business name.
- Current code and new branding have a naming conflict (`EMIKA Construction` vs. `EMIKA`). Use `EMIKA` as the visual brand and keep legal/business-name fields configurable until confirmed.

### Current positioning

- Tagline: `Commercial construction and property maintenance`
- Existing description:
  `Commercial construction and maintenance services in Barrie, Ontario focused on safe, polished and high-performing properties.`
- Existing location: `Barrie, Ontario, Canada`
- Family-owned positioning is approved by the owner and may be used in the new site.

### Contact information

- Email: `info@emikaconstruction.ca`
- Display phone: `+1 (647) 801-5900`
- Telephone href: `tel:+16478015900`
- Structured phone: `+16478015900`
- Existing location text: `Barrie, Ontario, Canada`

There is **no verified street address** in the repository. Do not fabricate one.

There are **no verified business hours** in the repository. Do not fabricate them.

There are **no verified social-media URLs** in the repository. Do not render fake social links.

There are **no existing privacy/terms routes** in the repository. Do not create dead links.

## Verified existing service catalog

The legacy application exposes exactly seven services:

1. **Curb and Sidewalk Repair**
   - Eyebrow: `Site safety`
   - Existing description:
     `Restore damaged pedestrian routes, edges and entrances to improve safety, drainage and overall first impressions.`

2. **Asphalt Maintenance**
   - Eyebrow: `Pavement care`
   - Existing description:
     `Protect traffic flow and extend pavement life with maintenance work that keeps parking lots looking organized and dependable.`

3. **Building Repair**
   - Eyebrow: `Property upkeep`
   - Existing description:
     `Address wear, damage and exterior repair needs before they become bigger interruptions for your site or tenants.`

4. **Line Painting**
   - Eyebrow: `Traffic clarity`
   - Existing description:
     `Keep lots easy to navigate with crisp, durable markings that support safety, organization and a polished appearance.`

5. **Landscaping**
   - Eyebrow: `Exterior appeal`
   - Existing description:
     `Maintain clean, welcoming outdoor areas that strengthen curb appeal and reflect the standard of your property.`

6. **Snow Removal**
   - Eyebrow: `Seasonal readiness`
   - Existing description:
     `Reduce winter risk with responsive clearing for access routes, parking areas and walkways when conditions change fast.`

7. **General Contracting**
   - Eyebrow: `Coordinated delivery`
   - Existing description:
     `Bring multiple scopes together under one accountable team focused on scheduling, detail and lasting workmanship.`

Do not replace these with the unverified example service catalog from Stitch.

## Existing operational / value messaging

Current About/value content includes these ideas:

- One accountable team
- Work designed around daily operations
- Professional presentation
- Reliable scheduling
- Quality-first execution
- Clear/calm communication
- Minimal disruption

These may be rewritten to fit the approved premium family-owned tone, but their factual meaning should not be expanded into unverified guarantees.

## Existing process

The legacy application currently presents a verified three-step process:

1. **Walk the site**
   - Review the property, priorities, and practical site realities.

2. **Align the scope**
   - Provide a service recommendation based on property needs, timeline expectations, and operating constraints.

3. **Deliver with care**
   - Execute with safety, cleanliness, and durability in mind.

The Stitch reference shows a six-stage process for visual demonstration.

**Do not publish an invented six-step operating process.**

Default production behavior:
- preserve the new scroll-driven visual interaction,
- adapt it to the verified three-step EMIKA process,
- only expand to six steps when EMIKA provides/approves real process content.

## Existing contact form — business-critical

### Fields currently sent

The current production payload is:

```ts
{
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  service: string;
}
```

### Current validation

- first name: required
- last name: required
- email: required + email regex
- phone number: required + North American phone regex
- service: required

### Phone normalization

Before submission:
- remove all non-digits
- remove a leading `1`

### Current endpoint

```text
https://q2baaxwcjimj3vimfaf6ucipqm0ghmqg.lambda-url.us-east-1.on.aws/
```

### Current request

- HTTP method: POST
- `Content-Type: application/json`
- Axios
- Success is determined by `Boolean(data?.ok)`

### Current UX

- loading state
- success message
- error message
- successful submit resets form
- success/error notice clears after ~5 seconds

### Critical migration constraint

The approved Stitch design contains additional example fields such as project location, estimated budget, project details, and consent.

**Do not send additional fields to the existing Lambda unless its API contract is verified to accept them.**

Preserve the exact working payload by default.

If richer inquiry fields are required:
1. update/verify the backend contract first,
2. then extend frontend validation and payload,
3. test end-to-end,
4. document the change.

Do not replace the working Lambda integration with a mock or fake timeout.

## Existing form claims

Current site includes:
- `Free consultation for your project or maintenance need`
- `Responsive follow-up from a local Ontario team`
- recommendations shaped around safety, presentation and budget

Treat these as existing published marketing statements, but avoid strengthening them into guarantees or exact response-time promises.

## Existing image assets

Existing approved/current-site assets include:

- `src/assets/images/about_us/image.webp`
- `src/assets/images/our_services/asphalt_maintenance.webp`
- `src/assets/images/our_services/building_repair.webp`
- `src/assets/images/our_services/curb_and_sidewalk_repair.webp`
- `src/assets/images/our_services/general_contracting.webp`
- `src/assets/images/our_services/landscaping.webp`
- `src/assets/images/our_services/line_painting.webp`
- `src/assets/images/our_services/snow_removal.webp`
- existing background/wave assets

Prefer these current EMIKA assets over presenting generated Stitch images as if they were completed EMIKA projects.

## Missing portfolio data

The legacy repository contains:

- no verified project names
- no project locations
- no project completion dates
- no verified before/after project pair
- no verified portfolio descriptions
- no verified testimonial/client attribution

Therefore:

- Do not present Stitch-generated houses/interiors as real EMIKA projects.
- Do not invent project names or locations.
- Do not invent testimonials.
- Do not fabricate Before/After claims.

For production:
- implement the Projects and Before/After components/data model,
- render them only when verified EMIKA project content is supplied,
- or omit those sections from the production build until real content exists.

Never label generative/reference imagery as completed EMIKA work.

## Existing SEO

Current `index.html` includes:

- `lang="en-CA"`
- title:
  `EMIKA Construction | Commercial Construction and Maintenance`
- meta description:
  `EMIKA Construction delivers commercial construction and property maintenance services in Barrie, Ontario with a focus on safety, presentation and reliable execution.`
- meta keywords
- robots: `index, follow`
- Open Graph title/description
- Twitter title/description
- favicon used as OG/Twitter image
- theme color `#102536`

Missing in legacy repo:

- canonical URL
- sitemap.xml
- robots.txt file
- dedicated social sharing image
- server/static rendering of page content
- verified social URLs
- Google Business Profile URL
- analytics/tag manager scripts
- dedicated legal/privacy pages

## Existing structured data

Current React app injects JSON-LD at runtime:

- `@type`: `GeneralContractor`
- business name from `companyInfo.name`
- description
- service area based on Barrie, Ontario
- telephone
- email
- PostalAddress:
  - `addressLocality`: Barrie
  - `addressRegion`: Ontario
  - `addressCountry`: CA
- makesOffer generated from the seven real services

Important:
- no street address exists
- no postal code exists
- no coordinates exist
- no rating/review data exists
- no business hours exist
- no price range exists

Do not fabricate these structured-data fields.

## Search/rendering risk in the current architecture

The current Vite landing serves an HTML shell containing `<div id="root"></div>` and relies on client-side React for the actual business content.

Google can render JavaScript, but the public landing should preferably return important text, links, metadata, and structured data in the initial HTML through SSR, SSG, or build-time prerendering.

The migration should not leave EMIKA's core public content dependent solely on client-side rendering if SEO and AI-search discoverability are primary goals.

## Existing analytics / tracking

No GA4, Google Tag Manager, Meta Pixel, or other analytics integration was found in the supplied repository.

Do not invent/add trackers without approval.

## Existing navigation

Current sections:

- About
- Services
- Why EMIKA
- Contact

The new design may add visual sections, but no dead nav links should be created.

## Current content/assets to preserve carefully

- working Lambda contact form
- contact information
- Barrie, Ontario location
- seven real services
- existing service images
- current three-step operating process
- family-owned positioning from owner brief
- GeneralContractor/business positioning
