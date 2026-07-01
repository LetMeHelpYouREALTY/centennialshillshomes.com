import { siteImages } from "@/lib/site-config";

export type ContentSection = {
  heading?: string;
  paragraphs: string[];
  list?: string[];
};

export type ContentLandingData = {
  slug: string;
  title: string;
  description: string;
  heroSubtitle: string;
  image?: string;
  zipCode?: string;
  sections: ContentSection[];
  showListings?: boolean;
  widgetHtml?: string;
  breadcrumbs?: Array<{ name: string; href: string }>;
};

const agentId = "QWdlbnQtMjI1MDUw";

export const landingPages: Record<string, ContentLandingData> = {
  "centennial-hills-homes-for-sale": {
    slug: "centennial-hills-homes-for-sale",
    title: "Centennial Hills Homes for Sale",
    description:
      "Browse active Centennial Hills homes for sale with Dr. Jan Duffy. Luxury properties, new construction, and established neighborhoods in northwest Las Vegas (89135, 89138, 89144).",
    heroSubtitle:
      "Live MLS listings in Las Vegas' premier northwest community — same-day showings available",
    image: siteImages.communities.centennialHills,
    showListings: true,
    widgetHtml: `<realscout-office-listings agent-encoded-id="${agentId}" sort-order="NEWEST" listing-status="For Sale" property-types=",SFR" price-min="300000" price-max="1000000"></realscout-office-listings>`,
    sections: [
      {
        heading: "Discover Your Dream Home in Centennial Hills",
        paragraphs: [
          "Explore our comprehensive selection of Centennial Hills homes for sale, featuring luxury properties, new construction, and established neighborhoods. Dr. Jan Duffy brings deep northwest Las Vegas expertise to help you find the perfect home.",
        ],
      },
      {
        heading: "Current Market Overview",
        paragraphs: [
          "Centennial Hills offers exceptional value with homes ranging from $300,000 to over $1 million. The area has seen consistent growth with new developments like Skye Canyon and Providence adding modern amenities and luxury features.",
        ],
      },
      {
        heading: "Why Choose Centennial Hills",
        paragraphs: [
          "Centennial Hills combines suburban tranquility with urban convenience, offering easy access to Las Vegas attractions while maintaining a family-friendly atmosphere with excellent schools, shopping centers, and recreational facilities.",
          "Call (702) 903-1952 to schedule a private showing or discuss your requirements for Centennial Hills homes for sale.",
        ],
      },
    ],
  },
  "centennial-hills-89135": {
    slug: "centennial-hills-89135",
    title: "Centennial Hills 89135 Homes for Sale",
    description:
      "Homes for sale in Centennial Hills ZIP code 89135. Central northwest Las Vegas with established neighborhoods, excellent schools, and mature landscaping. Dr. Jan Duffy, Top 1% REALTOR®.",
    heroSubtitle: "Central Centennial Hills — established neighborhoods and family-friendly living",
    image: siteImages.communities.centennialHills,
    zipCode: "89135",
    showListings: true,
    sections: [
      {
        heading: "Central Centennial Hills (89135) Overview",
        paragraphs: [
          "Centennial Hills ZIP code 89135 represents the heart of this master-planned community in northwest Las Vegas, offering the perfect balance of suburban tranquility and urban convenience with easy access to major highways, shopping, and entertainment.",
        ],
      },
      {
        heading: "Established Community",
        paragraphs: [
          "Central Centennial Hills features well-established neighborhoods with mature landscaping, tree-lined streets, and a strong sense of community. The area has been carefully developed to create a family-friendly environment with excellent amenities.",
        ],
      },
      {
        heading: "Real Estate Market Trends",
        paragraphs: [
          "The 89135 area shows consistent appreciation with home prices ranging from $400,000 for traditional homes to over $800,000 for luxury estates. Buyers seeking established communities with proven neighborhood stability find strong value here.",
        ],
      },
      {
        heading: "Schools and Education",
        paragraphs: [
          "ZIP code 89135 is served by the Clark County School District with several highly-rated elementary, middle, and high schools, plus proximity to private school options.",
        ],
      },
    ],
  },
  "centennial-hills-89138": {
    slug: "centennial-hills-89138",
    title: "Centennial Hills 89138 Homes for Sale",
    description:
      "Explore Centennial Hills 89138 with Dr. Jan Duffy. North Centennial Hills homes, new construction, and luxury properties in Las Vegas' premier northwest ZIP code.",
    heroSubtitle: "North Centennial Hills — newer developments, mountain views, and highway access",
    image: siteImages.communities.centennialHills,
    zipCode: "89138",
    showListings: true,
    sections: [
      {
        heading: "Discover North Centennial Hills 89138",
        paragraphs: [
          "Explore the northern section of Centennial Hills in ZIP code 89138, featuring newer developments, mountain views, and convenient access to major highways. Homes range from modern townhouses to luxury single-family estates.",
        ],
      },
      {
        heading: "Neighborhood Characteristics",
        paragraphs: [
          "Centennial Hills 89138 encompasses the northern reaches of the community, including areas near Skye Canyon and newer developments along Grand Teton Drive, with planned communities and HOA amenities.",
        ],
      },
      {
        heading: "Housing Market Overview",
        paragraphs: [
          "The 89138 area shows strong market performance with newer construction commanding premium prices. Home values range from $350,000 for townhouses to over $800,000 for luxury estates.",
        ],
      },
      {
        heading: "Transportation and Commuting",
        paragraphs: [
          "ZIP code 89138 offers excellent transportation with direct access to US-95 for downtown Las Vegas and I-215 for Strip access, with typical commute times of 15–30 minutes.",
        ],
      },
    ],
  },
  "centennial-hills-89144": {
    slug: "centennial-hills-89144",
    title: "Centennial Hills 89144 Homes for Sale",
    description:
      "West Centennial Hills 89144 homes for sale. Established neighborhoods near Red Rock Canyon with Dr. Jan Duffy, Top 1% Las Vegas REALTOR®.",
    heroSubtitle: "West Centennial Hills — mature landscaping and proximity to Red Rock Canyon",
    image: siteImages.communities.centennialHills,
    zipCode: "89144",
    showListings: true,
    sections: [
      {
        heading: "West Centennial Hills 89144 Living",
        paragraphs: [
          "Experience the best of West Centennial Hills in ZIP code 89144, featuring established neighborhoods, mature landscaping, and proximity to Red Rock Canyon with mountain views and resort-style amenities.",
        ],
      },
      {
        heading: "Community Features",
        paragraphs: [
          "Centennial Hills 89144 includes the western portion of the community with established neighborhoods, custom homes, and newer developments like Providence offering a sense of permanence and proven neighborhood stability.",
        ],
      },
      {
        heading: "Real Estate Market Trends",
        paragraphs: [
          "The 89144 area shows consistent appreciation with home prices ranging from $400,000 for traditional homes to over $1 million for luxury estates.",
        ],
      },
      {
        heading: "Local Attractions and Recreation",
        paragraphs: [
          "Residents enjoy proximity to Red Rock Canyon National Conservation Area, Floyd Lamb State Park, and numerous hiking trails while maintaining easy access to northwest Las Vegas shopping and dining.",
        ],
      },
    ],
  },
  "centennial-hills-new-construction": {
    slug: "centennial-hills-new-construction",
    title: "Centennial Hills New Construction Homes",
    description:
      "Explore Centennial Hills new construction homes with Dr. Jan Duffy. Brand new homes, modern designs, and builder partnerships in northwest Las Vegas.",
    heroSubtitle: "Brand new homes from Las Vegas' premier builders — warranties and modern floor plans",
    image: siteImages.communities.centennialHills,
    showListings: true,
    sections: [
      {
        heading: "Brand New Homes in Centennial Hills",
        paragraphs: [
          "Discover the latest Centennial Hills new construction homes featuring modern floor plans, energy-efficient designs, and the latest home technology — from starter homes to luxury estates.",
        ],
      },
      {
        heading: "Featured New Home Communities",
        paragraphs: [
          "New construction includes developments like Skye Canyon with modern single-family homes, Providence featuring luxury estates, and established neighborhoods with new phases.",
        ],
      },
      {
        heading: "New Home Advantages",
        paragraphs: [
          "Centennial Hills new construction offers modern amenities, energy efficiency, and warranty protection with open floor plans, smart home features, and low-maintenance materials.",
          "Dr. Jan Duffy provides comprehensive assistance including builder negotiations, upgrade selections, and construction monitoring. Call (702) 903-1952.",
        ],
      },
    ],
  },
  "centennial-hills-market-report": {
    slug: "centennial-hills-market-report",
    title: "Centennial Hills Market Report",
    description:
      "Comprehensive Centennial Hills real estate market report with current trends, prices, inventory, and analysis for buyers and sellers.",
    heroSubtitle: "Data-driven insights for northwest Las Vegas buyers and sellers",
    image: siteImages.services.marketAnalysis,
    sections: [
      {
        heading: "Current Market Overview",
        paragraphs: [
          "The Centennial Hills real estate market continues to show strong performance with steady demand from families, first-time buyers, and California equity buyers. Excellent schools, new construction, and family-friendly amenities drive consistent interest.",
        ],
      },
      {
        heading: "Market Statistics",
        list: [
          "Median Home Price: $450K–$550K (varies by property type and location)",
          "Price Range: $300K–$1M+",
          "Average Days on Market: 25–35 days",
          "Inventory: Moderate — balanced market in many segments",
        ],
        paragraphs: [],
      },
      {
        heading: "Buyer and Seller Insights",
        paragraphs: [
          "Buyers benefit from diverse inventory across ZIP codes 89135, 89138, and 89144. Sellers with well-priced, move-in-ready homes see strong interest, especially in the $400K–$750K range.",
          "Request a complimentary market analysis tailored to your address or target neighborhood from Dr. Jan Duffy at (702) 903-1952.",
        ],
      },
    ],
  },
  "centennial-hills-schools": {
    slug: "centennial-hills-schools",
    title: "Centennial Hills Schools Guide",
    description:
      "Comprehensive guide to schools in Centennial Hills, Las Vegas. Top-rated public and private schools, school districts, and educational resources for families.",
    heroSubtitle: "Excellent education options for Centennial Hills families",
    image: siteImages.communities.centennialHills,
    sections: [
      {
        heading: "School Districts Serving Centennial Hills",
        paragraphs: [
          "Centennial Hills is served by the Clark County School District (CCSD), the fifth-largest school district in the United States, with excellent public schools and private school options for families.",
        ],
      },
      {
        heading: "Public Schools",
        paragraphs: [
          "Centennial Hills area schools include highly-rated elementary, middle, and high schools. CCSD has made significant investments in northwest Las Vegas schools recognizing the community's growth.",
        ],
        list: [
          "Multiple CCSD elementary schools serving 89135, 89138, and 89144",
          "Middle and high schools with strong academic and extracurricular programs",
          "Magnet and specialty programs available within driving distance",
        ],
      },
      {
        heading: "Private and Charter Options",
        paragraphs: [
          "Families also have access to private and charter schools in northwest Las Vegas and Summerlin. Dr. Jan Duffy helps relocating families evaluate school boundaries when choosing a neighborhood.",
        ],
      },
    ],
  },
  "centennial-hills-vs-summerlin": {
    slug: "centennial-hills-vs-summerlin",
    title: "Centennial Hills vs Summerlin",
    description:
      "Compare Centennial Hills and Summerlin to decide which Las Vegas community is right for you. Expert comparison from Dr. Jan Duffy.",
    heroSubtitle: "Two premier Las Vegas communities — understand the differences before you buy",
    image: siteImages.communities.summerlinWest,
    sections: [
      {
        heading: "Community Comparison",
        paragraphs: [
          "Both Centennial Hills and Summerlin are premier Las Vegas communities offering different lifestyles and value propositions. This comparison examines location, price, amenities, schools, and lifestyle.",
        ],
      },
      {
        heading: "Centennial Hills Highlights",
        list: [
          "Generally more affordable entry points ($350K–$750K+)",
          "Newer master-planned development with modern infrastructure",
          "Strong value for move-up and first-time buyers",
          "Proximity to Skye Canyon, Providence, and north valley growth",
        ],
        paragraphs: [],
      },
      {
        heading: "Summerlin Highlights",
        list: [
          "Established master-planned community with mature amenities",
          "Premium guard-gated options (The Ridges, Red Rock CC)",
          "Higher price points for luxury segments",
          "Extensive trails, parks, and village centers",
        ],
        paragraphs: [],
      },
      {
        heading: "Which Is Right for You?",
        paragraphs: [
          "Centennial Hills often appeals to buyers seeking newer construction and relative value, while Summerlin attracts those prioritizing established prestige and luxury guard-gated living.",
          "Dr. Jan Duffy serves both corridors and can tour neighborhoods side-by-side. Call (702) 903-1952 for a personalized comparison.",
        ],
      },
    ],
  },
};

export function getLandingPage(slug: string): ContentLandingData | undefined {
  return landingPages[slug];
}
