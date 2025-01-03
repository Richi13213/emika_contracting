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
    title: "Curb and Sidewalk Repair",
    image: {
      src: CurbSidewalkRepair,
      alt: "Curb and Sidewalk Repair",
    },
  },
  {
    title: "Asphalt Maintenance",
    image: {
      src: AsphaltMaintenance,
      alt: "",
    },
  },
  {
    title: "Building Repair",
    image: {
      src: BuildingRepair,
      alt: "",
    },
  },
  {
    title: "Line Painting",
    image: {
      src: LinePainting,
      alt: "Line Painting",
    },

  },
  {
    title: "Landscaping",
    image: {
      src: Landscaping,
      alt: "",
    },
  },
  {
    title: "Snow Removal",
    image: {
      src: SnowRemoval,
      alt: "",
    },
  },
  {
    title: "General Construction",
    image: {
      src: GeneralContracting,
      alt: "",
    },
  },
];

export const servicesOptions: Array<string> = [
  "Line painting",
  "Curb and Sidewalk Repair",
  "Asphalt Maintenance",
  "Building Repair",
  "Landscaping",
  "Snow Removal",
  "General Contracting",
];
