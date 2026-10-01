import { writeFileSync } from "node:fs";
import { renderProjects } from "./project-section.mjs";
import {
  company,
  services,
  processSteps,
  verifiedProjects,
  alignedPhotoPairs,
  verifiedTestimonials,
} from "../site-content.mjs";

const production = process.argv.includes("--production");
const rawSiteUrl = process.env.SITE_URL;
if (production && !rawSiteUrl)
  throw new Error(
    "Production build requires SITE_URL: the verified canonical HTTPS origin.",
  );
const siteUrl = new URL(rawSiteUrl || "http://localhost:5173");
if (production && siteUrl.protocol !== "https:")
  throw new Error("Production SITE_URL must use HTTPS.");
if (siteUrl.pathname !== "/" || siteUrl.search || siteUrl.hash)
  throw new Error(
    "SITE_URL must be an origin with no path, query, or fragment.",
  );
const preview =
  !production ||
  (process.env.ALLOW_PREVIEW_SITE_URL === "1" &&
    siteUrl.hostname.endsWith(".invalid"));
if (
  production &&
  !preview &&
  (siteUrl.hostname.endsWith(".invalid") ||
    siteUrl.hostname.endsWith(".example") ||
    siteUrl.hostname === "localhost")
) {
  throw new Error("Production SITE_URL must be a verified public domain.");
}
const origin = siteUrl.origin;
const e = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
const title =
  "Commercial Construction & Property Maintenance in Barrie, ON | EMIKA";
const description =
  "EMIKA is a family-owned construction company in Barrie, Ontario providing general contracting, building repair, curb and sidewalk repair, asphalt maintenance, line painting, landscaping and snow removal.";

function renderServices() {
  return services
    .map(
      (
        service,
        index,
      ) => `<article class="service-row" id="service-${index + 1}">
    <span class="service-number">${String(index + 1).padStart(2, "0")}</span>
    <div class="service-copy"><p class="eyebrow">${e(service.eyebrow)}</p><h3>${e(service.title)}</h3><p>${e(service.description)}</p></div>
    <img src="/images/${e(service.image)}" alt="${e(service.alt)}" width="${service.width}" height="${service.height}" loading="lazy" decoding="async">
  </article>`,
    )
    .join("\n");
}

function renderProcess() {
  return processSteps
    .map(
      (step, index) => `<article class="process-step" data-process-step>
    <span class="process-number">${String(index + 1).padStart(2, "0")} / ${String(processSteps.length).padStart(2, "0")}</span>
    <div><h3>${e(step.title)}</h3><p>${e(step.description)}</p></div>
  </article>`,
    )
    .join("\n");
}

function renderTestimonials() {
  if (!verifiedTestimonials.length) return "";
  return `<section class="section" id="testimonials"><div class="wrap"><h2>Client perspectives</h2>${verifiedTestimonials.map((item) => `<blockquote><p>${e(item.quote)}</p><cite>${e(item.attribution)}</cite></blockquote>`).join("")}</div></section>`;
}

const businessId = `${origin}/#business`;
const graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${origin}/#organization`,
      name: company.name,
      url: `${origin}/`,
      email: company.email,
      telephone: company.phoneE164,
      logo: `${origin}/brand/emika-logo-dark.svg`,
    },
    {
      "@type": "GeneralContractor",
      "@id": businessId,
      name: company.name,
      description: company.description,
      url: `${origin}/`,
      telephone: company.phoneE164,
      email: company.email,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Barrie",
        addressRegion: "Ontario",
        addressCountry: "CA",
      },
      areaServed: { "@type": "Place", name: company.location },
      parentOrganization: { "@id": `${origin}/#organization` },
      makesOffer: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
          provider: { "@id": businessId },
        },
      })),
    },
    {
      "@type": "WebSite",
      "@id": `${origin}/#website`,
      name: company.name,
      url: `${origin}/`,
      publisher: { "@id": `${origin}/#organization` },
    },
    {
      "@type": "WebPage",
      "@id": `${origin}/#webpage`,
      name: title,
      description,
      url: `${origin}/`,
      isPartOf: { "@id": `${origin}/#website` },
      about: { "@id": businessId },
      inLanguage: "en-CA",
    },
  ],
};
const jsonLd = JSON.stringify(graph).replaceAll("<", "\\u003c");
const robotsMeta = preview
  ? '<meta name="robots" content="noindex, nofollow">'
  : '<meta name="robots" content="index, follow">';

const html = `<!doctype html>
<html lang="en-CA">
<head>
  <meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${e(title)}</title><meta name="description" content="${e(description)}">
  ${robotsMeta}<meta name="theme-color" content="#1A1A1A">
  <link rel="canonical" href="${origin}/"><link rel="icon" href="/brand/emika-symbol-32.png" type="image/png">
  <meta property="og:type" content="website"><meta property="og:title" content="${e(title)}"><meta property="og:description" content="${e(description)}"><meta property="og:url" content="${origin}/"><meta property="og:image" content="${origin}/brand/emika-social-card.png"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">
  <meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${e(title)}"><meta name="twitter:description" content="${e(description)}"><meta name="twitter:image" content="${origin}/brand/emika-social-card.png">
  <link rel="preload" as="image" href="/images/site-work.webp"><link rel="stylesheet" href="/src/site.css">
  <script type="application/ld+json">${jsonLd}</script>
  <script type="module" src="/src/site.ts"></script>
</head>
<body>
  <a class="skip-link" href="#main-content">Skip to content</a>
  <header class="site-header" id="top"><div class="wrap header-inner">
    <a class="brand" href="#top" aria-label="EMIKA home"><img src="/brand/emika-logo-light.svg" alt="EMIKA" width="168" height="48"></a>
    <nav class="desktop-nav" aria-label="Main navigation"><a href="#about">About</a><a href="#services">Services</a><a href="#projects">Projects</a><a href="#process">Process</a><a href="#contact">Contact</a></nav>
    <a class="header-cta" href="#contact">Start a conversation <span aria-hidden="true">↗</span></a>
    <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-navigation" aria-label="Open menu"><span></span><span></span></button>
  </div><nav class="mobile-nav" id="mobile-navigation" aria-label="Mobile navigation" hidden><a href="#about">About</a><a href="#services">Services</a><a href="#projects">Projects</a><a href="#process">Process</a><a href="#contact">Contact</a><a href="tel:${company.phoneE164}">Call EMIKA</a></nav></header>
  <main id="main-content">
    <section class="hero" aria-labelledby="hero-title"><img class="hero-image" src="/images/site-work.webp" alt="Equipment at a commercial property work site" width="2048" height="1536" fetchpriority="high"><div class="hero-shade"></div><div class="wrap hero-content"><p class="eyebrow eyebrow-light"><span class="blue-rule"></span> EMIKA / Barrie, Ontario</p><h1 id="hero-title">Built with precision.<br><em>Designed to last.</em></h1><p class="hero-description">Family-owned commercial construction and property maintenance in Barrie, Ontario. One accountable team for the work that keeps properties safe, functional and well presented.</p><div class="hero-actions"><a class="button button-blue" href="#contact">Discuss your project <span aria-hidden="true">↗</span></a><a class="text-link light-link" href="#services">Explore services <span aria-hidden="true">↗</span></a></div></div><div class="hero-foot wrap"><span>Commercial construction / Property maintenance</span><span>Scroll to explore ↓</span></div></section>
    <section class="trust" aria-label="Our approach"><div class="wrap trust-grid"><article><span class="trust-index">01</span><h2>Family-owned</h2><p>Personal care in how each scope is planned and delivered.</p></article><article><span class="trust-index">02</span><h2>One accountable team</h2><p>Repairs and maintenance coordinated through a single partner.</p></article><article><span class="trust-index">03</span><h2>Clear communication</h2><p>Practical coordination around the realities of your property.</p></article><article><span class="trust-index">04</span><h2>Detail-focused</h2><p>Attention to safety, durability and professional presentation.</p></article></div></section>
    <section class="section about" id="about"><div class="wrap"><div class="section-heading"><p class="eyebrow"><span class="blue-rule"></span> 01 / About EMIKA</p><h2>Built on craft.<br><em>Driven by family values.</em></h2></div><div class="about-grid"><div class="about-copy"><p class="lead">Commercial properties depend on work that is thoughtful from the first conversation to the final detail.</p><p>EMIKA is a family-owned construction and property maintenance company based in Barrie, Ontario. We bring repairs, upkeep and general contracting under one accountable team, with practical attention to site safety and everyday operations.</p><p>From pedestrian routes and parking areas to building repairs and seasonal care, our focus is work that supports a property's function and presentation.</p><a class="text-link" href="#process">How we work <span aria-hidden="true">↗</span></a></div><figure class="about-photo"><img src="/images/general_contracting.webp" alt="General contracting work at a commercial site" width="1536" height="1200" loading="lazy" decoding="async"><figcaption>Care in the details. Accountability in the work.</figcaption></figure></div></div></section>
    <section class="section services" id="services"><div class="wrap"><div class="section-heading section-heading-split"><div><p class="eyebrow"><span class="blue-rule"></span> 02 / What we do</p><h2>Work that keeps<br>properties moving.</h2></div><p>Seven focused services for commercial construction and property maintenance in Barrie, Ontario.</p></div><div class="service-list">${renderServices()}</div><div class="services-outro"><p>Need help aligning several scopes at one property?</p><a class="text-link" href="#contact">Talk with EMIKA <span aria-hidden="true">↗</span></a></div></div></section>
    ${renderProjects(verifiedProjects, alignedPhotoPairs)}
    <section class="section process" id="process"><div class="wrap"><div class="process-heading"><p class="eyebrow eyebrow-light"><span class="blue-rule"></span> 04 / Our process</p><h2>From first look<br><em>to finished work.</em></h2><p>Three clear steps help us understand your property, align the scope and deliver with care.</p></div><div class="process-grid"><div class="process-visual"><img src="/images/site-work.webp" alt="Equipment at a commercial property work site" width="2048" height="1536" loading="lazy" decoding="async"><span>Practical site coordination</span></div><div class="process-list">${renderProcess()}</div></div></div></section>
    <section class="section principles"><div class="wrap"><p class="eyebrow"><span class="blue-rule"></span> 05 / What guides us</p><h2>Built around the way<br>your property works.</h2><div class="principle-grid"><article><span>01 /</span><h3>Safety first</h3><p>Work planned with attention to movement, access and the people using your site.</p></article><article><span>02 /</span><h3>Practical planning</h3><p>Scope and sequencing shaped by operating realities and property priorities.</p></article><article><span>03 /</span><h3>Professional finish</h3><p>Care for the details that affect function, durability and appearance.</p></article><article><span>04 /</span><h3>Clear communication</h3><p>Straightforward coordination from the first site walk to the final handoff.</p></article></div></div></section>
    ${renderTestimonials()}
    <section class="statement"><div class="wrap"><span class="statement-rule" aria-hidden="true"></span><p>One accountable team. Practical coordination. Work delivered with care.</p><span class="statement-credit">The EMIKA approach</span></div></section>
    <section class="section contact" id="contact"><div class="wrap contact-grid"><div class="contact-copy"><p class="eyebrow eyebrow-light"><span class="blue-rule"></span> 06 / Start a conversation</p><h2>Have a project<br>in mind?</h2><p class="contact-intro">Tell us what your property needs. We'll take the time to understand the scope and the site.</p><div class="contact-details"><div><span>Email</span><a href="mailto:${company.email}">${company.email}</a></div><div><span>Phone</span><a href="tel:${company.phoneE164}">${company.phoneDisplay}</a></div><div><span>Based in</span><p>${company.location}</p></div></div></div><div class="form-panel"><p class="eyebrow">Project inquiry</p><h3>Let's get started.</h3><p>Share your contact details and the service you need.</p><form id="contact-form" novalidate><div class="form-grid"><div class="field"><label for="first_name">First name <span aria-hidden="true">*</span></label><input id="first_name" name="first_name" autocomplete="given-name" required aria-describedby="first_name-error"><span class="field-error" id="first_name-error"></span></div><div class="field"><label for="last_name">Last name <span aria-hidden="true">*</span></label><input id="last_name" name="last_name" autocomplete="family-name" required aria-describedby="last_name-error"><span class="field-error" id="last_name-error"></span></div><div class="field"><label for="email">Email <span aria-hidden="true">*</span></label><input id="email" name="email" type="email" autocomplete="email" required aria-describedby="email-error"><span class="field-error" id="email-error"></span></div><div class="field"><label for="phone_number">Phone <span aria-hidden="true">*</span></label><input id="phone_number" name="phone_number" type="tel" autocomplete="tel" required aria-describedby="phone_number-error"><span class="field-error" id="phone_number-error"></span></div><div class="field field-full"><label for="service">Service <span aria-hidden="true">*</span></label><select id="service" name="service" required aria-describedby="service-error"><option value="">Select a service</option>${services.map((service) => `<option value="${e(service.title)}">${e(service.title)}</option>`).join("")}</select><span class="field-error" id="service-error"></span></div></div><button type="submit" class="button button-blue form-submit">Send inquiry <span aria-hidden="true">↗</span></button><p id="form-status" class="form-status" role="status" aria-live="polite"></p></form></div></div></section>
    <section class="final-cta"><div class="wrap"><p class="eyebrow"><span class="blue-rule"></span> Build with EMIKA</p><h2>Good work starts<br>with a conversation.</h2><a class="button button-blue" href="#contact">Contact EMIKA <span aria-hidden="true">↗</span></a></div></section>
  </main>
  <footer class="site-footer"><div class="wrap footer-top"><div><a href="#top" aria-label="EMIKA home"><img src="/brand/emika-logo-light.svg" alt="EMIKA" width="180" height="52" loading="lazy"></a><p>Family-owned commercial construction and property maintenance in Barrie, Ontario.</p></div><nav aria-label="Footer navigation"><a href="#about">About</a><a href="#services">Services</a><a href="#projects">Projects</a><a href="#process">Process</a><a href="#contact">Contact</a></nav><div class="footer-contact"><a href="mailto:${company.email}">${company.email}</a><a href="tel:${company.phoneE164}">${company.phoneDisplay}</a><span>${company.location}</span></div></div><div class="wrap footer-bottom"><span>© ${new Date().getFullYear()} EMIKA</span><span>Built for lasting work.</span><a href="#top">Back to top ↑</a></div></footer>
</body></html>`;

writeFileSync(
  new URL("../index.html", import.meta.url),
  html.replace(/[ \t]+$/gm, ""),
);
writeFileSync(
  new URL("../public/robots.txt", import.meta.url),
  `User-agent: *\n${preview ? "Disallow: /" : "Allow: /"}\n\nSitemap: ${origin}/sitemap.xml\n`,
);
writeFileSync(
  new URL("../public/sitemap.xml", import.meta.url),
  `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${e(origin)}/</loc></url></urlset>\n`,
);
console.log(
  `Rendered EMIKA page for ${origin} (${preview ? "preview, noindex" : "production"})`,
);
