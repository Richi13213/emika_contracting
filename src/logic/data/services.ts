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
    title: "Line Painting",
    image: {
      src: LinePainting,
      alt: "Line Painting",
    },
    content:
      "Our expert team utilizes state-of-the-art equipment and durable paints to provide clear and precise lines in parking lots, roads, and more.",
  },
  {
    title: "Curb and Sidewalk Repair",
    image: {
      src: CurbSidewalkRepair,
      alt: "Curb and Sidewalk Repair",
    },
    content:
      "Need to repair damaged curbs or sidewalks? We have the experience and resources to do so quickly and effectively.",
  },
  {
    title: "Asphalt Maintenance",
    image: {
      src: AsphaltMaintenance,
      alt: "",
    },
    content:
      "From crack repair to surface sealing, we ensure your asphalt pavement is in the best possible condition year-round.",
  },
  {
    title: "Building Repair",
    image: {
      src: BuildingRepair,
      alt: "",
    },
    content:
      "Does your building need repairs? From minor touch-ups to full restoration projects, our team can handle it all with skill and professionalism.",
  },
  {
    title: "Landscaping",
    image: {
      src: Landscaping,
      alt: "",
    },
    content:
      "Transform your outdoor spaces with our landscaping services. From design to installation, we're here to bring your vision to life.",
  },
  {
    title: "Snow Removal",
    image: {
      src: SnowRemoval,
      alt: "",
    },
    content:
      "Keep your properties safe and accessible during the winter months with our reliable snow removal service.",
  },
  {
    title: "General Contracting",
    image: {
      src: GeneralContracting,
      alt: "",
    },
    content:
      "Simplify your construction projects by entrusting us as your trusted general contractor.",
  },
];
