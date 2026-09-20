import { ServiceCardData } from "@typing/props";
import LinePainting from "@images/our_services/line_painting.webp";
import CurbSidewalkRepair from "@images/our_services/curb_and_sidewalk_repair.webp";
import AsphaltMaintenance from "@images/our_services/asphalt_maintenance.webp";
import BuildingRepair from "@images/our_services/building_repair.webp";
import Landscaping from "@images/our_services/landscaping.webp";
import SnowRemoval from "@images/our_services/snow_removal.webp";
import GeneralContracting from "@images/our_services/general_contracting.webp";

export const servicesData: Array<ServiceCardData> = [
  {
    eyebrow: "Site safety",
    title: "Curb and Sidewalk Repair",
    description:
      "Restore damaged pedestrian routes, edges and entrances to improve safety, drainage and overall first impressions.",
    image: {
      src: CurbSidewalkRepair,
      alt: "Freshly repaired curb and sidewalk at a commercial property",
    },
  },
  {
    eyebrow: "Pavement care",
    title: "Asphalt Maintenance",
    description:
      "Protect traffic flow and extend pavement life with maintenance work that keeps parking lots looking organized and dependable.",
    image: {
      src: AsphaltMaintenance,
      alt: "Commercial asphalt maintenance work in a parking lot",
    },
  },
  {
    eyebrow: "Property upkeep",
    title: "Building Repair",
    description:
      "Address wear, damage and exterior repair needs before they become bigger interruptions for your site or tenants.",
    image: {
      src: BuildingRepair,
      alt: "Exterior building repair work in progress",
    },
  },
  {
    eyebrow: "Traffic clarity",
    title: "Line Painting",
    description:
      "Keep lots easy to navigate with crisp, durable markings that support safety, organization and a polished appearance.",
    image: {
      src: LinePainting,
      alt: "Fresh line painting in a parking lot",
    },
  },
  {
    eyebrow: "Exterior appeal",
    title: "Landscaping",
    description:
      "Maintain clean, welcoming outdoor areas that strengthen curb appeal and reflect the standard of your property.",
    image: {
      src: Landscaping,
      alt: "Maintained landscaping around a property entrance",
    },
  },
  {
    eyebrow: "Seasonal readiness",
    title: "Snow Removal",
    description:
      "Reduce winter risk with responsive clearing for access routes, parking areas and walkways when conditions change fast.",
    image: {
      src: SnowRemoval,
      alt: "Snow removal service clearing a commercial access route",
    },
  },
  {
    eyebrow: "Coordinated delivery",
    title: "General Contracting",
    description:
      "Bring multiple scopes together under one accountable team focused on scheduling, detail and lasting workmanship.",
    image: {
      src: GeneralContracting,
      alt: "General contracting work underway on a construction site",
    },
  },
];

export const servicesOptions: Array<string> = servicesData.map(
  ({ title }) => title
);
