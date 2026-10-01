export const company = {
  name: "EMIKA",
  description:
    "Family-owned commercial construction and property maintenance in Barrie, Ontario.",
  email: "info@emikaconstruction.ca",
  phoneDisplay: "+1 (647) 801-5900",
  phoneE164: "+16478015900",
  location: "Barrie, Ontario, Canada",
};

export const services = [
  {
    title: "Curb and Sidewalk Repair",
    eyebrow: "Site safety",
    description:
      "Restore damaged pedestrian routes, edges and entrances to improve safety, drainage and overall first impressions.",
    image: "curb_and_sidewalk_repair.webp",
    alt: "Curb and sidewalk repair at a commercial property",
    width: 2048,
    height: 1536,
  },
  {
    title: "Asphalt Maintenance",
    eyebrow: "Pavement care",
    description:
      "Protect traffic flow and extend pavement life with maintenance work that keeps parking lots looking organized and dependable.",
    image: "asphalt_maintenance.webp",
    alt: "Asphalt maintenance in a parking area",
    width: 2048,
    height: 1536,
  },
  {
    title: "Building Repair",
    eyebrow: "Property upkeep",
    description:
      "Address wear, damage and exterior repair needs before they become bigger interruptions for your site or tenants.",
    image: "building_repair.webp",
    alt: "Exterior building repair work",
    width: 1536,
    height: 1200,
  },
  {
    title: "Line Painting",
    eyebrow: "Traffic clarity",
    description:
      "Keep lots easy to navigate with crisp, durable markings that support safety, organization and a polished appearance.",
    image: "line_painting.webp",
    alt: "Line painting in a parking area",
    width: 1600,
    height: 1200,
  },
  {
    title: "Landscaping",
    eyebrow: "Exterior appeal",
    description:
      "Maintain clean, welcoming outdoor areas that strengthen curb appeal and reflect the standard of your property.",
    image: "landscaping.webp",
    alt: "Landscaping around a property entrance",
    width: 1536,
    height: 1200,
  },
  {
    title: "Snow Removal",
    eyebrow: "Seasonal readiness",
    description:
      "Reduce winter risk with responsive clearing for access routes, parking areas and walkways when conditions change fast.",
    image: "snow_removal.webp",
    alt: "Snow removal at a commercial access route",
    width: 1200,
    height: 1200,
  },
  {
    title: "General Contracting",
    eyebrow: "Coordinated delivery",
    description:
      "Bring multiple scopes together under one accountable team focused on scheduling, detail and lasting workmanship.",
    image: "general_contracting.webp",
    alt: "General contracting work at a construction site",
    width: 1536,
    height: 1200,
  },
];

export const processSteps = [
  {
    title: "Walk the site",
    description:
      "We review the property, identify priorities and understand the practical realities of the space before recommending a plan.",
  },
  {
    title: "Align the scope",
    description:
      "You get a clear service recommendation shaped by property needs, timeline expectations and operating constraints.",
  },
  {
    title: "Deliver with care",
    description:
      "Our team executes with safety, cleanliness and durability in mind.",
  },
];

// Photo IDs and stages follow references/EMIKA_Project_Photos_Codex/manifest.json.
// The owner has supplied these as publishable EMIKA work; client and location remain undisclosed.
const projectPhoto = (id, alt, width, height, objectPosition = "center") => {
  const path = `/images/projects/emika-project-${id}`;
  const widths = ["02", "07"].includes(id) ? [480, 960] : [480, 960, 1440];
  return {
    src: `${path}-960.webp`,
    srcset: widths.map((size) => `${path}-${size}.webp ${size}w`).join(", "),
    alt,
    width,
    height,
    objectPosition,
  };
};

export const verifiedProjects = [
  {
    slug: "commercial-interior-renovation",
    title: "Commercial Interior Renovation",
    publicTitle: "Commercial Interior Renovation",
    eyebrow: "Real EMIKA work",
    summary:
      "Photographs document visible wall finishes, dark cladding, service-area finishes and interior detailing at different stages of work.",
    transformationIntro:
      "Three areas from the same commercial interior renovation, shown from earlier work stages through later finish stages.",
    location: null,
    client: null,
    published: true,
    comparisons: [
      {
        id: "feature-wall",
        label: "Feature wall",
        title: "Feature wall and cladding",
        summary: "Earlier work stage → Later finish stage",
        before: projectPhoto(
          "02",
          "Interior commercial wall during cladding work",
          1152,
          2048,
          "center 53%",
        ),
        after: projectPhoto(
          "03",
          "Dark cladding installed on the commercial interior wall",
          1536,
          2048,
          "center 49%",
        ),
      },
      {
        id: "service-counter",
        label: "Service counter",
        title: "Service counter area",
        summary: "Earlier work stage → Later finish stage",
        before: projectPhoto(
          "06",
          "Commercial service area with unfinished wall and materials during renovation",
          1536,
          2048,
          "center 55%",
        ),
        after: projectPhoto(
          "16",
          "Service counter with wood front and finished wall surfaces",
          1800,
          1350,
          "center 48%",
        ),
      },
      {
        id: "upper-cladding",
        label: "Upper cladding",
        title: "Upper wall cladding",
        summary: "Earlier work stage → Later finish stage",
        before: projectPhoto(
          "07",
          "Upper commercial wall before dark cladding was installed",
          1152,
          2048,
          "center 39%",
        ),
        after: projectPhoto(
          "12",
          "Dark cladding installed across the upper commercial wall",
          1800,
          1350,
          "center 42%",
        ),
      },
    ],
    gallery: [
      {
        id: "entrance-cladding",
        image: projectPhoto(
          "11",
          "Dark cladding and an entrance at the commercial interior",
          1800,
          1350,
          "center 54%",
        ),
        caption: "Wall and entrance cladding",
      },
      {
        id: "counter-finishes",
        image: projectPhoto(
          "13",
          "Commercial service counter with wood finish and dark wall detailing",
          1800,
          1350,
          "center 52%",
        ),
        caption: "Service-area finishes",
      },
      {
        id: "interior-details",
        image: projectPhoto(
          "15",
          "Interior wall detailing with wood shelves and lower cabinets",
          1536,
          2048,
          "center 36%",
        ),
        caption: "Interior detailing",
      },
    ],
  },
];

// Reserved for future pairs photographed from an aligned camera position.
export const alignedPhotoPairs = [];
export const verifiedTestimonials = [];
