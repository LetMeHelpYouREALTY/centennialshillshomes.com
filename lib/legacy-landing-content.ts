import { siteConfig, siteImages } from "@/lib/site-config";
import type { ServiceLandingProps } from "@/components/templates/ServiceLandingPage";

type LegacyPageContent = Omit<ServiceLandingProps, "slug">;

const agentId = siteConfig.realScoutAgentId;

const advancedSearchWidget = `<realscout-advanced-search agent-encoded-id="${agentId}"></realscout-advanced-search>`;

const officeListingsWidget = `<realscout-office-listings agent-encoded-id="${agentId}" sort-order="NEWEST" listing-status="For Sale" property-types=",SFR,MF,TC" price-min="400000" price-max="6000000"></realscout-office-listings>`;

const luxuryListingsWidget = `<realscout-office-listings agent-encoded-id="${agentId}" sort-order="NEWEST" listing-status="For Sale" property-types=",SFR" price-min="1000000" price-max="15000000"></realscout-office-listings>`;

/** Migrated from Qwik src/routes/ — legacy SEO landing pages */
export const legacyLandingPages: Record<string, LegacyPageContent> = {
  "homes-over-1m": {
    title: "Luxury Homes Over $1M in Las Vegas",
    description:
      "Luxury homes for sale over $1M in Las Vegas. Premium estates in The Ridges, Red Rock Country Club, Summerlin, and Centennial Hills with Dr. Jan Duffy.",
    heroSubtitle:
      "Premium estates in The Ridges, Red Rock Country Club, and Summerlin's most exclusive communities",
    image: siteImages.communities.theRidges,
    widgetHtml: luxuryListingsWidget,
    body: [
      "The $1M+ luxury segment represents Las Vegas' most prestigious properties — custom estates, golf course homes, and guard-gated residences with resort-style amenities.",
      "Dr. Jan Duffy specializes in luxury representation across Red Rock Country Club, The Ridges, Summerlin West, and northwest Las Vegas communities.",
      "Receive white-glove service including private showings, off-market opportunities, and data-driven pricing strategy backed by Berkshire Hathaway HomeServices.",
    ],
  },
  "active-listings": {
    title: "Active Las Vegas Property Listings",
    description:
      "Browse active MLS listings in Centennial Hills and northwest Las Vegas. Real-time property data with Dr. Jan Duffy, Top 1% REALTOR®.",
    heroSubtitle: "Live MLS listings updated in real time across northwest Las Vegas",
    image: siteImages.communities.centennialHills,
    widgetHtml: officeListingsWidget,
    body: [
      "Access the complete database of active Centennial Hills homes for sale with advanced search filters and real-time MLS updates.",
      "Dr. Jan Duffy serves ZIP codes 89135, 89138, and 89144 plus Red Rock Country Club, Summerlin West, and adjacent luxury communities.",
      "Same-day showings are available for qualified buyers — call (702) 903-1952 to schedule your tour.",
    ],
  },
  "mls-search": {
    title: "Las Vegas MLS Property Search",
    description:
      "Search the complete Las Vegas MLS database. Find homes, condos, and luxury properties in Centennial Hills and northwest Las Vegas with Dr. Jan Duffy.",
    heroSubtitle:
      "Advanced MLS search with comprehensive filtering — powered by RealScout integration",
    image: siteImages.communities.lasVegasLuxury,
    widgetHtml: advancedSearchWidget,
    body: [
      "Search thousands of Las Vegas properties with comprehensive filtering by price, neighborhood, beds, baths, and features.",
      "The MLS database includes Centennial Hills, Summerlin, Red Rock Country Club, North Las Vegas, and surrounding northwest communities.",
      "Dr. Jan Duffy provides expert guidance to help you interpret listings, schedule showings, and craft competitive offers.",
    ],
  },
  "our-luxury-listings": {
    title: "Our Luxury Listings",
    description:
      "Exclusive luxury home listings in Centennial Hills, Red Rock Country Club, and northwest Las Vegas from Dr. Jan Duffy.",
    heroSubtitle: "Curated luxury properties from a Top 1% Las Vegas REALTOR®",
    image: siteImages.services.luxuryHomeSales,
    widgetHtml: luxuryListingsWidget,
    body: [
      "Explore Dr. Jan Duffy's luxury portfolio featuring move-up and premium homes in northwest Las Vegas' finest communities.",
      "From guard-gated golf course estates to custom new construction, each listing receives professional marketing and buyer qualification.",
      "Contact Dr. Jan Duffy for private showings, off-market opportunities, and complimentary market analysis on any property.",
    ],
  },
  "virtual-tours": {
    title: "Virtual Property Tours",
    description:
      "Virtual and video property tours for Centennial Hills and Las Vegas luxury homes. Tour homes remotely with Dr. Jan Duffy.",
    heroSubtitle: "Tour northwest Las Vegas homes from anywhere — schedule a virtual or in-person showing",
    image: siteImages.services.sameDayShowings,
    widgetHtml: officeListingsWidget,
    body: [
      "Virtual tours let out-of-state and busy executives preview homes before traveling to Las Vegas — saving time and narrowing your shortlist.",
      "Dr. Jan Duffy coordinates live video walkthroughs, detailed photo packages, and same-day in-person showings when you are ready to visit.",
      "California equity buyers and corporate relocations benefit from flexible touring options tailored to executive schedules.",
    ],
  },
  "centennial-hills-luxury-homes": {
    title: "Centennial Hills Luxury Homes",
    description:
      "Luxury homes for sale in Centennial Hills, Las Vegas. Premium properties in ZIP codes 89135, 89138, and 89144 with Dr. Jan Duffy.",
    heroSubtitle: "Move-up and luxury homes in northwest Las Vegas' premier family community",
    image: siteImages.communities.centennialHills,
    widgetHtml: officeListingsWidget,
    body: [
      "Centennial Hills offers newer construction, mountain views, top-rated schools, and family-friendly amenities in northwest Las Vegas.",
      "Luxury and move-up buyers find exceptional value compared to Summerlin and Red Rock, with homes typically ranging $400K–$750K and above.",
      "Dr. Jan Duffy provides hyperlocal expertise on Centennial Hills neighborhoods, HOA communities, and resale dynamics.",
    ],
  },
  "centennial-hills-amenities": {
    title: "Centennial Hills Amenities & Lifestyle",
    description:
      "Centennial Hills lifestyle guide — parks, shopping, dining, trails, and community amenities in northwest Las Vegas ZIP 89144.",
    heroSubtitle: "Discover why families choose Centennial Hills for quality of life in Las Vegas",
    image: siteImages.communities.centennialHills,
    body: [
      "Centennial Hills features Centennial Hills Park, extensive trail systems, proximity to Red Rock Canyon, and convenient access to shopping at Centennial Center.",
      "The community attracts families seeking newer homes, strong schools, and a suburban feel with quick access to the Las Vegas Strip and downtown.",
      "Dr. Jan Duffy helps buyers and sellers understand how amenities, commute times, and neighborhood character affect property values in 89135, 89138, and 89144.",
    ],
  },
  "golf-course-homes": {
    title: "Golf Course Homes in Las Vegas",
    description:
      "Golf course homes for sale in Las Vegas. Luxury properties at Red Rock Country Club, TPC Las Vegas, and premier golf communities.",
    heroSubtitle: "Live on the fairway in Las Vegas' finest golf course communities",
    image: siteImages.communities.redRockCountryClub,
    widgetHtml: luxuryListingsWidget,
    body: [
      "Las Vegas golf course communities offer guard-gated security, championship courses, and custom estates with stunning mountain and fairway views.",
      "Red Rock Country Club, The Ridges, and Summerlin West feature the area's most sought-after golf course residences.",
      "Dr. Jan Duffy provides specialized knowledge of golf community HOAs, membership structures, and luxury resale markets.",
    ],
  },
  blog: {
    title: "Centennial Hills Real Estate Blog",
    description:
      "Las Vegas real estate blog with market updates, buyer guides, and seller tips for Centennial Hills and northwest Las Vegas from Dr. Jan Duffy.",
    heroSubtitle: "Market insights, neighborhood guides, and expert advice for buyers and sellers",
    image: siteImages.communities.lasVegasLuxury,
    body: [
      "Stay informed with market updates, neighborhood comparisons, and practical guides for buying and selling in Centennial Hills and northwest Las Vegas.",
      "Explore our buyer resources, seller guides, and market analysis pages for in-depth local real estate intelligence.",
      "For the latest listings and personalized advice, contact Dr. Jan Duffy at (702) 903-1952 or schedule a consultation online.",
    ],
  },
  "centennial-hills-homes": {
    title: "Centennial Hills Homes for Sale",
    description:
      "Centennial Hills homes for sale in Las Vegas. Browse listings in ZIP codes 89135, 89138, and 89144 with Dr. Jan Duffy.",
    heroSubtitle: "Northwest Las Vegas' premier community for families and move-up buyers",
    image: siteImages.communities.centennialHills,
    widgetHtml: officeListingsWidget,
    body: [
      "Centennial Hills combines newer construction, excellent schools, parks, and mountain access in one of Las Vegas' most desirable northwest communities.",
      "Browse active MLS listings with real-time updates, or contact Dr. Jan Duffy for same-day showings and neighborhood tours.",
      "Whether you are a first-time buyer, move-up seller, or California relocator, Centennial Hills offers outstanding lifestyle and value.",
    ],
  },
  "centennial-hills-89135": {
    title: "Centennial Hills ZIP 89135 Homes",
    description:
      "Homes for sale in Centennial Hills ZIP code 89135, Las Vegas. Local expert Dr. Jan Duffy serves this northwest Las Vegas area.",
    heroSubtitle: "Explore homes and neighborhoods in the 89135 Centennial Hills area",
    image: siteImages.communities.centennialHills,
    widgetHtml: officeListingsWidget,
    body: [
      "ZIP code 89135 covers a portion of the Centennial Hills area with a mix of single-family homes, townhomes, and newer construction.",
      "Dr. Jan Duffy provides complimentary market analysis and same-day showings for qualified buyers in 89135.",
      "Contact Dr. Jan Duffy to compare 89135 with adjacent ZIP codes 89138 and 89144 for the best fit for your lifestyle and budget.",
    ],
  },
  "centennial-hills-89138": {
    title: "Centennial Hills ZIP 89138 Homes",
    description:
      "Homes for sale in Centennial Hills ZIP code 89138, Las Vegas. North Centennial Hills real estate with Dr. Jan Duffy.",
    heroSubtitle: "North Centennial Hills homes in ZIP 89138",
    image: siteImages.communities.centennialHills,
    widgetHtml: officeListingsWidget,
    body: [
      "ZIP 89138 includes north Centennial Hills neighborhoods with family-friendly streets, parks, and convenient access to US-95.",
      "Dr. Jan Duffy specializes in this hyperlocal market with deep knowledge of comps, schools, and community amenities.",
    ],
  },
  "centennial-hills-89144": {
    title: "Centennial Hills ZIP 89144 Homes",
    description:
      "Homes for sale in Centennial Hills ZIP code 89144, Las Vegas. West Centennial Hills real estate expert Dr. Jan Duffy.",
    heroSubtitle: "West Centennial Hills homes in ZIP 89144",
    image: siteImages.communities.centennialHills,
    widgetHtml: officeListingsWidget,
    body: [
      "ZIP 89144 encompasses west Centennial Hills near Dr. Jan Duffy's office at 1490 Center Crossing Rd — the heart of northwest Las Vegas real estate.",
      "Browse active listings or request a complimentary market analysis for any 89144 property.",
    ],
  },
  search: {
    title: "Property Search — Centennial Hills & Las Vegas",
    description:
      "Search Centennial Hills and Las Vegas homes for sale. MLS property search hub with Dr. Jan Duffy.",
    heroSubtitle: "Find your perfect home with advanced search tools and expert guidance",
    image: siteImages.communities.lasVegasLuxury,
    widgetHtml: advancedSearchWidget,
    body: [
      "Use our MLS search to filter by price, beds, baths, neighborhood, and features across northwest Las Vegas.",
      "Popular searches include Centennial Hills, Summerlin West, Red Rock Country Club, and new construction communities.",
      "Dr. Jan Duffy is available for same-day showings — call (702) 903-1952 to tour properties that match your criteria.",
    ],
  },
  "area-explorer": {
    title: "Northwest Las Vegas Area Explorer",
    description:
      "Explore northwest Las Vegas neighborhoods — Centennial Hills, Summerlin West, Red Rock, and more with Dr. Jan Duffy.",
    heroSubtitle: "Compare communities, amenities, and home values across northwest Las Vegas",
    image: siteImages.communities.lasVegasLuxury,
    body: [
      "Northwest Las Vegas offers diverse communities from family-friendly Centennial Hills to ultra-luxury Red Rock Country Club and The Ridges.",
      "Use our neighborhood guides to compare schools, commute times, price points, and lifestyle amenities before you buy.",
      "Dr. Jan Duffy provides personalized area tours and market data to help you choose the right community for your needs.",
    ],
  },
};

export const legacyLandingSlugs = Object.keys(legacyLandingPages);
