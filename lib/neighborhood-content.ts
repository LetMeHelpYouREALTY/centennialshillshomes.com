import type { ServiceLandingProps } from "@/components/templates/ServiceLandingPage";
import { siteImages } from "@/lib/site-config";

export type NeighborhoodPageData = {
  slug: string;
  title: string;
  description: string;
  heroSubtitle: string;
  image: string;
  highlights: string[];
  body: string[];
  zipCodes?: string[];
};

export const neighborhoodPages: Record<string, NeighborhoodPageData> = {
  "centennial-hills": {
    slug: "centennial-hills",
    title: "Centennial Hills Homes for Sale",
    description:
      "Homes for sale in Centennial Hills, Las Vegas (89144, 89138, 89135). Dr. Jan Duffy, Top 1% REALTOR® — same-day showings and complimentary market analysis.",
    heroSubtitle: "Family-friendly northwest Las Vegas with newer homes, parks, and mountain access",
    image: siteImages.communities.centennialHills,
    highlights: ["89144 · 89138", "Newer construction", "Parks & trails", "Move-up homes"],
    zipCodes: ["89144", "89138", "89135"],
    body: [
      "Centennial Hills is one of northwest Las Vegas's most sought-after areas for move-up and luxury buyers, with contemporary floor plans, strong schools, and quick access to shopping along Ann Road and the 215 beltway.",
      "Dr. Jan Duffy focuses on homes roughly $400K–$750K in Centennial Hills and adjacent communities, with same-day showings and data-backed pricing guidance for buyers and sellers.",
    ],
  },
  "red-rock-country-club": {
    slug: "red-rock-country-club",
    title: "Red Rock Country Club Homes for Sale",
    description:
      "Luxury homes at Red Rock Country Club near Centennial Hills. Golf-course living, guard-gated options, and expert representation by Dr. Jan Duffy.",
    heroSubtitle: "Golf-course luxury minutes from Red Rock Canyon and northwest Las Vegas",
    image: siteImages.communities.redRockCountryClub,
    highlights: ["Golf community", "Guard-gated options", "Custom homes", "Red Rock views"],
    body: [
      "Red Rock Country Club attracts buyers who want golf-course lifestyle, privacy, and proximity to outdoor recreation, while remaining close to Centennial Hills amenities.",
      "Whether you are relocating from California or upgrading within Las Vegas, Dr. Jan Duffy provides discreet, executive-level service backed by Berkshire Hathaway HomeServices Nevada Properties.",
    ],
  },
  "the-ridges": {
    slug: "the-ridges",
    title: "The Ridges Summerlin Homes for Sale",
    description:
      "Luxury estates and custom homes in The Ridges, Summerlin. Dr. Jan Duffy serves discerning buyers and sellers near Centennial Hills.",
    heroSubtitle: "Ultra-luxury guard-gated living in west Summerlin",
    image: siteImages.communities.theRidges,
    highlights: ["Custom estates", "Guard-gated", "Strip views", "Privacy"],
    body: [
      "The Ridges is among Las Vegas's most exclusive addresses, with architectural estates and a highly private setting above the valley.",
      "Dr. Jan Duffy supports luxury clients with confidential showings, contract strategy, and coordination with lenders and legal advisors when needed.",
    ],
  },
  "summerlin-west": {
    slug: "summerlin-west",
    title: "Summerlin West Homes for Sale",
    description:
      "Homes for sale in Summerlin West near Centennial Hills. Established neighborhoods, top amenities, and expert guidance from Dr. Jan Duffy.",
    heroSubtitle: "Established west Summerlin neighborhoods with premium amenities",
    image: siteImages.communities.summerlinWest,
    highlights: ["Top schools", "Trails & parks", "Dining & retail", "Move-up inventory"],
    body: [
      "Summerlin West offers mature landscaping, respected schools, and a wide range of price points for buyers stepping up from Centennial Hills or relocating into the valley.",
      "Dr. Jan Duffy helps you compare villages, HOA structures, and commute patterns so you choose the right fit—not just the right floor plan.",
    ],
  },
  "lone-mountain": {
    slug: "lone-mountain",
    title: "Lone Mountain Homes for Sale",
    description:
      "Homes for sale near Lone Mountain and northwest Las Vegas. Value, variety, and local expertise from Dr. Jan Duffy.",
    heroSubtitle: "Central northwest location with strong value and commute options",
    image: siteImages.communities.loneMountain,
    highlights: ["Central NW Vegas", "Commute-friendly", "Variety of price points", "Near Centennial Hills"],
    body: [
      "Lone Mountain and surrounding northwest pockets appeal to buyers who want proximity to Centennial Hills, Summerlin access, and relative value compared to guard-gated luxury corridors.",
      "Dr. Jan Duffy provides neighborhood-level insight on resale trends, rental demand, and the best streets for your criteria.",
    ],
  },
  "north-las-vegas": {
    slug: "north-las-vegas",
    title: "North Las Vegas Homes for Sale",
    description:
      "Homes for sale in North Las Vegas near Centennial Hills. New construction, family communities, and investor-friendly options with Dr. Jan Duffy.",
    heroSubtitle: "Growing north valley communities adjacent to Centennial Hills",
    image: siteImages.communities.northLasVegas,
    highlights: ["New builds", "Family-friendly", "Investor interest", "Near 215 corridor"],
    body: [
      "North Las Vegas continues to add inventory and amenities, making it a practical choice for first-time buyers, growing families, and investors watching northwest Las Vegas.",
      "Dr. Jan Duffy helps you evaluate builders, resale potential, and how north valley homes compare to Centennial Hills and Summerlin West alternatives.",
    ],
  },
};
