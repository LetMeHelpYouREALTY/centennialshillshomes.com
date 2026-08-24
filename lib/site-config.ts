// Site Configuration — Centennial Hills Homes (centennialhillshomesforsale.com)
// NAP must match Google Business Profile. Agent: Dr. Jan Duffy (never Janet).

export const siteConfig = {
  name: "Centennial Hills Homes",
  fullName: "Centennial Hills Real Estate | Homes by Dr. Jan Duffy",
  tagline: "Northwest Las Vegas Luxury & Move-Up Homes",
  brandLine:
    "Centennial Hills Real Estate | Berkshire Hathaway HomeServices Nevada Properties",
  brandName: "Berkshire Hathaway HomeServices",
  shortName: "Centennial Hills Homes",
  url: "https://www.centennialhillshomesforsale.com",
  description:
    "Buying or selling in Centennial Hills? Dr. Jan Duffy, Top 1% Las Vegas REALTOR®, serves ZIP codes 89138, 89144, and 89135 with luxury homes, same-day showings, and complimentary market analysis.",
  zipCodes: ["89135", "89138", "89144"],
  priceRange: "$400K-$750K",
  realScoutAgentId: "QWdlbnQtMjI1MDUw",
  realScoutListingsUrl: "https://drjanduffy.realscout.com/",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=1490+Center+Crossing+Rd,+Las+Vegas,+NV+89144",
  mapEmbedUrl:
    "https://www.google.com/maps?q=1490+Center+Crossing+Rd,+Las+Vegas,+NV+89144&hl=en&z=15&output=embed",
  /** Link to GBP listing for reviews (update when Place ID is available) */
  googleReviewsUrl:
    "https://www.google.com/maps/search/?api=1&query=1490+Center+Crossing+Rd,+Las+Vegas,+NV+89144",
  hoursLabel: "Daily 6:00 AM – 9:00 PM",
  social: {
    facebook: "https://www.facebook.com/drjanduffy",
    instagram: "https://www.instagram.com/drjanduffy",
    linkedin: "https://www.linkedin.com/in/drjanduffy",
  },
};

export const agentInfo = {
  name: "Dr. Jan Duffy",
  title: "REALTOR®",
  license: "S.0197614.LLC",
  phone: "(702) 903-1952",
  phoneFormatted: "(702) 903-1952",
  phoneTel: "tel:+17029031952",
  email: "DrDuffy@CentennialHillsHomesForSale.com",
  brokerage: "Berkshire Hathaway HomeServices Nevada Properties",
};

export const officeInfo = {
  name: "Berkshire Hathaway HomeServices Nevada Properties",
  address: {
    street: "1490 Center Crossing Rd",
    city: "Las Vegas",
    state: "NV",
    zip: "89144",
    full: "1490 Center Crossing Rd, Las Vegas, NV 89144",
  },
  coordinates: {
    lat: 36.2792,
    lng: -115.2744,
  },
  phone: "(702) 903-1952",
  phoneTel: "tel:+17029031952",
};

/** Root-relative static image paths (files in public/) */
export const siteImages = {
  logo: "/logo.svg",
  logoRaster: "/logo.png",
  ogDefault: "/og-image.jpg",
  fallback: "/media/fallback.svg",
  agentHero: "/media/dr-jan-duffy-luxury-real-estate.jpg",
  hero: [
    "/media/centennial-hills.jpg",
    "/media/las-vegas-luxury-communities.jpg",
    "/media/dr-jan-duffy-luxury-real-estate.jpg",
  ],
  communities: {
    lasVegasLuxury: "/media/las-vegas-luxury-communities.jpg",
    redRockCountryClub: "/media/red-rock-country-club.jpg",
    theRidges: "/media/the-ridges.jpg",
    summerlinWest: "/media/summerlin-west.jpg",
    centennialHills: "/media/centennial-hills.jpg",
    loneMountain: "/media/lone-mountain.jpg",
    northLasVegas: "/media/north-las-vegas.jpg",
  },
  services: {
    luxuryHomeSales: "/media/luxury-home-sales-dr-jan-duffy.jpg",
    luxuryHomeSellers: "/media/luxury-home-sellers-dr-jan-duffy.jpg",
    californiaEquityBuyers: "/media/california-equity-buyers-dr-jan-duffy.jpg",
    corporateRelocations: "/media/corporate-relocations-dr-jan-duffy.jpg",
    marketAnalysis: "/media/market-analysis-dr-jan-duffy.jpg",
    sameDayShowings: "/media/same-day-showings-dr-jan-duffy.jpg",
    investmentProperties: "/media/investment-properties-dr-jan-duffy.jpg",
  },
} as const;

export function siteImageUrl(path: string): string {
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export const agentStats = {
  servingSince: 2008,
  transactionsClosed: 500,
  volumeClosed: "$127M+",
  averageRating: 4.9,
  reviewCount: 200,
};

export const valuePropositions = {
  main: "Northwest Las Vegas expertise backed by Berkshire Hathaway HomeServices — trusted brand, ethical standards, and a global referral network when you buy or sell in Centennial Hills.",
  trust:
    "Dr. Jan Duffy focuses on Centennial Hills and adjacent communities (89135, 89138, 89144) with same-day showings, complimentary market analysis, and executive-level service.",
  expertise:
    "Top 1% Las Vegas REALTOR® serving luxury and move-up buyers and sellers in Red Rock Country Club, The Ridges, Summerlin West, Lone Mountain, and North Las Vegas.",
};

/** Primary neighborhoods for this hyperlocal site */
export const neighborhoods = [
  {
    name: "Centennial Hills",
    slug: "centennial-hills",
    description:
      "Northwest Las Vegas with newer homes, parks, and mountain access",
    highlights: ["89144", "Newer construction", "Parks", "Shopping"],
    image: siteImages.communities.centennialHills,
  },
  {
    name: "Red Rock Country Club",
    slug: "red-rock-country-club",
    description: "Golf-course luxury living near Red Rock Canyon",
    highlights: ["Golf", "Guard-gated", "Custom homes", "Views"],
    image: siteImages.communities.redRockCountryClub,
  },
  {
    name: "The Ridges",
    slug: "the-ridges",
    description: "Ultra-luxury Summerlin community with custom estates",
    highlights: ["Custom estates", "Strip views", "Privacy", "Golf nearby"],
    image: siteImages.communities.theRidges,
  },
  {
    name: "Summerlin West",
    slug: "summerlin-west",
    description: "Established west Summerlin neighborhoods and amenities",
    highlights: ["Trails", "Dining", "Move-up homes", "89135"],
    image: siteImages.communities.summerlinWest,
  },
  {
    name: "Lone Mountain",
    slug: "lone-mountain",
    description: "Convenient northwest location with strong value",
    highlights: ["Central NW", "Commute-friendly", "Variety of price points"],
    image: siteImages.communities.loneMountain,
  },
  {
    name: "North Las Vegas",
    slug: "north-las-vegas",
    description: "Growing area adjacent to Centennial Hills",
    highlights: ["New builds", "Value", "89131–89149"],
    image: siteImages.communities.northLasVegas,
  },
  {
    name: "Summerlin",
    slug: "summerlin",
    description: "Master-planned west Las Vegas with top amenities",
    highlights: ["89135", "Trails", "Downtown Summerlin"],
    image: siteImages.communities.summerlinWest,
  },
  {
    name: "Henderson",
    slug: "henderson",
    description: "Southeast valley city with established neighborhoods",
    highlights: ["Green Valley", "Anthem", "Lake Las Vegas"],
    image: siteImages.communities.lasVegasLuxury,
  },
  {
    name: "Green Valley",
    slug: "green-valley",
    description: "Mature Henderson community with parks and shopping",
    highlights: ["89014", "Golf", "Parks", "Established homes"],
    image: siteImages.communities.lasVegasLuxury,
  },
  {
    name: "Southern Highlands",
    slug: "southern-highlands",
    description: "Guard-gated luxury in southwest Las Vegas",
    highlights: ["89141", "Golf", "Custom homes", "Views"],
    image: siteImages.communities.theRidges,
  },
  {
    name: "Skye Canyon",
    slug: "skye-canyon",
    description: "Newer northwest master plan near Centennial Hills",
    highlights: ["89166", "Trails", "New construction", "Parks"],
    image: siteImages.communities.centennialHills,
  },
  {
    name: "Inspirada",
    slug: "inspirada",
    description: "Henderson master plan with pools and events",
    highlights: ["89044", "Community pools", "Newer builds"],
    image: siteImages.communities.lasVegasLuxury,
  },
  {
    name: "Mountains Edge",
    slug: "mountains-edge",
    description: "Southwest Las Vegas with mountain and Strip views",
    highlights: ["89178", "Trails", "Parks", "Move-up homes"],
    image: siteImages.communities.loneMountain,
  },
];

export const services = [
  {
    name: "Luxury Home Sales",
    slug: "luxury-home-sales",
    description: "Homes $400K–$750K in northwest Las Vegas premier communities",
    icon: "Star",
  },
  {
    name: "Home Buying",
    slug: "buyers",
    description: "Expert guidance for Centennial Hills and northwest Las Vegas buyers",
    icon: "Home",
  },
  {
    name: "Home Selling",
    slug: "sellers",
    description: "Maximize your home's value with professional marketing",
    icon: "TrendingUp",
  },
  {
    name: "Market Analysis",
    slug: "market-analysis",
    description: "Complimentary pricing and neighborhood trend review",
    icon: "BarChart",
  },
  {
    name: "Same-Day Showings",
    slug: "same-day-showings",
    description: "Fast scheduling for qualified buyers",
    icon: "Clock",
  },
  {
    name: "California Equity Buyers",
    slug: "california-equity-buyers",
    description: "Relocation and equity deployment into Las Vegas",
    icon: "Truck",
  },
  {
    name: "Corporate Relocations",
    slug: "corporate-relocations",
    description: "Executive relocation support in northwest Las Vegas",
    icon: "Building",
  },
  {
    name: "Investment Properties",
    slug: "investment-properties",
    description: "Rental and investment opportunities near Centennial Hills",
    icon: "DollarSign",
  },
];

export type FaqItem = { question: string; answer: string };

export const homeFaqs: FaqItem[] = [
  {
    question: "What areas does Dr. Jan Duffy serve in Las Vegas?",
    answer:
      "Dr. Jan Duffy specializes in Centennial Hills and northwest Las Vegas, including ZIP codes 89135, 89138, and 89144, plus Red Rock Country Club, The Ridges, Summerlin West, Lone Mountain, and North Las Vegas.",
  },
  {
    question: "What price range does Dr. Jan Duffy specialize in?",
    answer:
      "Her focus is luxury and move-up homes roughly $400K–$750K in Centennial Hills and adjacent northwest Las Vegas communities, with experience across a wider range for buyers and sellers.",
  },
  {
    question: "How quickly can Dr. Jan Duffy schedule property showings?",
    answer:
      "Same-day showings are available for qualified buyers. Executive clients receive flexible scheduling, including evenings and weekends.",
  },
  {
    question: "Does Dr. Jan Duffy provide free market analysis?",
    answer:
      "Yes. Complimentary market analysis is available for buyers and sellers, including comparable sales, pricing strategy, and neighborhood trends for Centennial Hills.",
  },
  {
    question: "What luxury communities does Dr. Jan Duffy serve near Centennial Hills?",
    answer:
      "Red Rock Country Club, The Ridges, Summerlin West, Centennial Hills, Lone Mountain, and North Las Vegas — with deep knowledge of golf-course, guard-gated, and new-build neighborhoods.",
  },
  {
    question: "How do I contact Dr. Jan Duffy's office?",
    answer:
      "Call (702) 903-1952, email DrDuffy@CentennialHillsHomesForSale.com, or visit 1490 Center Crossing Rd, Las Vegas, NV 89144. Office hours are 6:00 AM–9:00 PM daily.",
  },
];

export const commonFAQs = {
  general: homeFaqs,
  buying: homeFaqs.slice(0, 3),
  selling: homeFaqs.slice(3, 6),
};
