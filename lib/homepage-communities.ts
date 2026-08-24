import { siteImages } from "@/lib/site-config";

export interface HomepageCommunity {
  name: string;
  slug: string;
  href: string;
  description: string;
  image: string;
  zipHint: string;
}

/**
 * Figma Make homepage community grid.
 * Copy is amenity/location based (Fair Housing). Price ranges are omitted
 * because the mock did not cite a live MLS source.
 */
export const homepageCommunities: HomepageCommunity[] = [
  {
    name: "Providence",
    slug: "providence",
    href: "/neighborhoods",
    description: "Master-planned streets with parks, trails, and a community center",
    image: siteImages.communities.northLasVegas,
    zipHint: "Northwest Las Vegas",
  },
  {
    name: "Skye Canyon",
    slug: "skye-canyon",
    href: "/neighborhoods/skye-canyon",
    description: "Newer master plan at the base of the Spring Mountains",
    image: siteImages.communities.summerlinWest,
    zipHint: "89166",
  },
  {
    name: "Tule Springs",
    slug: "tule-springs",
    href: "/neighborhoods/centennial-hills",
    description: "Established streets bordering the Tule Springs Fossil Beds",
    image: siteImages.communities.lasVegasLuxury,
    zipHint: "Northwest Las Vegas",
  },
  {
    name: "Centennial Hills",
    slug: "centennial-hills",
    href: "/neighborhoods/centennial-hills",
    description: "The hub of northwest Las Vegas living near 89144, 89138, and 89135",
    image: siteImages.communities.centennialHills,
    zipHint: "89144",
  },
  {
    name: "Lone Mountain",
    slug: "lone-mountain",
    href: "/neighborhoods/lone-mountain",
    description: "Mountain views with quick access to the 215 and US-95",
    image: siteImages.communities.loneMountain,
    zipHint: "Northwest Las Vegas",
  },
  {
    name: "Sheep Mountain",
    slug: "sheep-mountain",
    href: "/neighborhoods",
    description: "Gated enclaves with Spring Mountain panoramas",
    image: siteImages.communities.theRidges,
    zipHint: "Northwest Las Vegas",
  },
];
