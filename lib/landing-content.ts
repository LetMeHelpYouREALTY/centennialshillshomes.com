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
  "buying-guide": {
    slug: "buying-guide",
    title: "Complete Home Buying Guide — Las Vegas",
    description:
      "Step-by-step home buying guide for Las Vegas and Centennial Hills. Financing, search, offers, and closing with Dr. Jan Duffy.",
    heroSubtitle: "From pre-approval to keys — expert guidance for northwest Las Vegas buyers",
    image: siteImages.services.luxuryHomeSales,
    showListings: true,
    breadcrumbs: [
      { name: "Buyers", href: "/buyers" },
      { name: "Buying Guide", href: "/buying-guide" },
    ],
    sections: [
      {
        heading: "Step 1: Get Pre-Approved",
        paragraphs: [
          "Before you start looking, get pre-approved for a mortgage. Use our affordability calculator and mortgage calculator to understand purchasing power. Dr. Jan Duffy connects you with trusted Las Vegas lenders.",
        ],
      },
      {
        heading: "Step 2: Define Your Priorities",
        paragraphs: [
          "Create a list of must-haves and nice-to-haves — location, size, schools, commute, and budget. Focus your search on Centennial Hills ZIP codes 89135, 89138, and 89144 or adjacent luxury communities.",
        ],
      },
      {
        heading: "Step 3: Search and Tour Homes",
        paragraphs: [
          "Browse live MLS listings, attend showings, and work with your agent for same-day tours. Dr. Jan Duffy provides personalized recommendations and negotiation strategy.",
        ],
      },
      {
        heading: "Step 4: Make an Offer and Close",
        paragraphs: [
          "Your agent prepares a competitive offer with protective contingencies, coordinates inspections, and guides you through escrow to closing. Call (702) 903-1952 for a free buyer consultation.",
        ],
      },
    ],
  },
  "selling-guide": {
    slug: "selling-guide",
    title: "Complete Home Selling Guide — Las Vegas",
    description:
      "Step-by-step home selling guide for Centennial Hills and Las Vegas. Pricing, staging, marketing, and closing with Dr. Jan Duffy.",
    heroSubtitle: "Maximize your sale price with data-driven pricing and professional marketing",
    image: siteImages.services.luxuryHomeSellers,
    breadcrumbs: [
      { name: "Sellers", href: "/sellers" },
      { name: "Selling Guide", href: "/selling-guide" },
    ],
    sections: [
      {
        heading: "Step 1: Get a Home Valuation",
        paragraphs: [
          "Start with a complimentary market analysis using recent comparable sales and neighborhood trends. Accurate pricing is the foundation of a successful sale in Centennial Hills.",
        ],
      },
      {
        heading: "Step 2: Prepare Your Home",
        paragraphs: [
          "Make repairs, declutter, depersonalize, and consider professional staging. First impressions drive showings and offers in northwest Las Vegas.",
        ],
      },
      {
        heading: "Step 3: Market Strategically",
        paragraphs: [
          "Professional photography, MLS optimization, and targeted digital marketing maximize exposure to qualified buyers. Dr. Jan Duffy coordinates showings and feedback.",
        ],
      },
      {
        heading: "Step 4: Negotiate and Close",
        paragraphs: [
          "Review offers, negotiate terms, and manage inspections through closing. Call (702) 903-1952 for a complimentary seller consultation.",
        ],
      },
    ],
  },
  "moving-guide": {
    slug: "moving-guide",
    title: "Moving Guide — Relocating to Las Vegas",
    description:
      "Complete guide to moving to Las Vegas and Centennial Hills. Relocation tips, neighborhoods, and expert advice from Dr. Jan Duffy.",
    heroSubtitle: "Plan your move to northwest Las Vegas with confidence",
    image: siteImages.services.corporateRelocations,
    breadcrumbs: [
      { name: "Relocation", href: "/relocation" },
      { name: "Moving Guide", href: "/moving-guide" },
    ],
    sections: [
      {
        heading: "Planning Your Las Vegas Move",
        paragraphs: [
          "Relocating to Las Vegas involves choosing the right neighborhood, understanding cost of living, and coordinating timelines. This guide covers the essentials from house hunting to settling in.",
        ],
      },
      {
        heading: "Choosing a Neighborhood",
        paragraphs: [
          "Compare Centennial Hills, Summerlin West, North Las Vegas, and guard-gated luxury corridors based on commute, schools, budget, and lifestyle. Dr. Jan Duffy provides structured relocation tours.",
        ],
      },
      {
        heading: "California and Corporate Relocations",
        paragraphs: [
          "Many relocators deploy California equity into Las Vegas with no state income tax and lower housing costs. Corporate clients receive white-glove coordination aligned with employer benefits.",
        ],
      },
      {
        heading: "Settling In",
        paragraphs: [
          "Connect utilities, register vehicles, explore local amenities, and build your local network. Call (702) 903-1952 for relocation support tailored to your timeline.",
        ],
      },
    ],
  },
  "centennial-hills-luxury-homes": {
    slug: "centennial-hills-luxury-homes",
    title: "Centennial Hills Luxury Homes",
    description:
      "Luxury homes for sale in Centennial Hills, Las Vegas. Custom estates, premium finishes, and mountain views with Dr. Jan Duffy.",
    heroSubtitle: "Premium properties from $500K to $1.5M+ in northwest Las Vegas",
    image: siteImages.communities.centennialHills,
    showListings: true,
    widgetHtml: `<realscout-office-listings agent-encoded-id="${agentId}" sort-order="NEWEST" listing-status="For Sale" property-types=",SFR" price-min="500000" price-max="1500000"></realscout-office-listings>`,
    sections: [
      {
        heading: "Exclusive Luxury Living",
        paragraphs: [
          "Discover Centennial Hills luxury homes with custom architecture, gourmet kitchens, spa-like master suites, and outdoor living with pools and mountain views.",
        ],
      },
      {
        heading: "Prestigious Communities",
        paragraphs: [
          "Luxury inventory spans Providence custom estates, Skye Canyon modern designs, and established neighborhoods with mature landscaping and privacy near Red Rock Canyon.",
        ],
      },
      {
        heading: "Concierge-Level Service",
        paragraphs: [
          "Dr. Jan Duffy provides private showings, market analysis, and discreet representation for discerning buyers and sellers. Call (702) 903-1952.",
        ],
      },
    ],
  },
  "centennial-hills-homes": {
    slug: "centennial-hills-homes",
    title: "Centennial Hills Homes",
    description:
      "Centennial Hills homes for sale in northwest Las Vegas. Neighborhoods, amenities, and expert guidance from Dr. Jan Duffy.",
    heroSubtitle: "Your guide to buying and selling in Centennial Hills",
    image: siteImages.communities.centennialHills,
    showListings: true,
    sections: [
      {
        heading: "Centennial Hills Overview",
        paragraphs: [
          "Centennial Hills is a master-planned northwest Las Vegas community known for newer homes, family amenities, and access to Red Rock Canyon and the 215 beltway.",
        ],
      },
      {
        heading: "ZIP Codes Served",
        paragraphs: [
          "Dr. Jan Duffy specializes in 89135, 89138, and 89144 — each offering distinct character from established west Centennial Hills to newer north valley development.",
        ],
      },
    ],
  },
  "centennial-hills-amenities": {
    slug: "centennial-hills-amenities",
    title: "Centennial Hills Amenities",
    description:
      "Parks, shopping, dining, and recreation in Centennial Hills, Las Vegas. Local amenities guide from Dr. Jan Duffy.",
    heroSubtitle: "Shopping, parks, trails, and recreation in northwest Las Vegas",
    image: siteImages.communities.centennialHills,
    sections: [
      {
        heading: "Shopping and Dining",
        paragraphs: [
          "Centennial Hills offers convenient retail along Ann Road, Grand Teton, and nearby Centennial Center with grocery, dining, and services for daily life.",
        ],
      },
      {
        heading: "Parks and Recreation",
        paragraphs: [
          "Community parks, hiking near Red Rock Canyon, Floyd Lamb State Park, and Skye Canyon Park provide outdoor recreation for families and active adults.",
        ],
      },
      {
        heading: "Healthcare and Services",
        paragraphs: [
          "Northwest Las Vegas continues to add medical facilities, fitness centers, and community services supporting Centennial Hills residents.",
        ],
      },
    ],
  },
  "condos-centennial-hills": {
    slug: "condos-centennial-hills",
    title: "Condos in Centennial Hills",
    description:
      "Condos and townhomes for sale in Centennial Hills, Las Vegas. Low-maintenance options with Dr. Jan Duffy.",
    heroSubtitle: "Affordable entry and low-maintenance living in northwest Las Vegas",
    image: siteImages.communities.centennialHills,
    showListings: true,
    widgetHtml: `<realscout-office-listings agent-encoded-id="${agentId}" sort-order="NEWEST" listing-status="For Sale" property-types="TC,MF" price-min="250000" price-max="500000"></realscout-office-listings>`,
    sections: [
      {
        heading: "Centennial Hills Condos and Townhomes",
        paragraphs: [
          "Condominiums and townhomes offer affordable entry into Centennial Hills with low-maintenance living and access to community amenities — ideal for first-time buyers, downsizers, and investors.",
        ],
      },
    ],
  },
  "golf-course-homes": {
    slug: "golf-course-homes",
    title: "Golf Course Homes Las Vegas",
    description:
      "Golf course homes for sale in Las Vegas near Centennial Hills. Red Rock Country Club, The Ridges, and premier golf communities.",
    heroSubtitle: "Luxury golf-course living minutes from Centennial Hills",
    image: siteImages.communities.redRockCountryClub,
    showListings: true,
    sections: [
      {
        heading: "Golf Course Communities",
        paragraphs: [
          "Las Vegas offers world-class golf communities including Red Rock Country Club, The Ridges, and courses across Summerlin — many within a short drive of Centennial Hills.",
        ],
      },
      {
        heading: "Golf Lifestyle Benefits",
        paragraphs: [
          "Golf course homes provide privacy, views, and resort amenities. Dr. Jan Duffy helps you compare guard-gated options, HOA structures, and resale dynamics.",
        ],
      },
    ],
  },
  "homes-under-400k": {
    slug: "homes-under-400k",
    title: "Homes Under $400K Las Vegas",
    description:
      "Affordable homes under $400K in Las Vegas and near Centennial Hills. First-time buyer options with Dr. Jan Duffy.",
    heroSubtitle: "Entry-level homes, townhomes, and condos for budget-conscious buyers",
    image: siteImages.communities.northLasVegas,
    showListings: true,
    widgetHtml: `<realscout-office-listings agent-encoded-id="${agentId}" sort-order="NEWEST" listing-status="For Sale" property-types=",SFR,MF,TC" price-min="200000" price-max="400000"></realscout-office-listings>`,
    sections: [
      {
        heading: "Affordable Home Options",
        paragraphs: [
          "The under-$400K range includes condos, townhomes, and single-family homes in growing north Las Vegas and northwest corridors — strong options for first-time buyers building equity.",
        ],
      },
    ],
  },
  "homes-400k-600k": {
    slug: "homes-400k-600k",
    title: "Homes $400K–$600K Las Vegas",
    description:
      "Homes for sale between $400K and $600K in Centennial Hills and northwest Las Vegas. Move-up and family homes with Dr. Jan Duffy.",
    heroSubtitle: "Move-up inventory in Centennial Hills and adjacent communities",
    image: siteImages.communities.centennialHills,
    showListings: true,
    widgetHtml: `<realscout-office-listings agent-encoded-id="${agentId}" sort-order="NEWEST" listing-status="For Sale" property-types=",SFR" price-min="400000" price-max="600000"></realscout-office-listings>`,
    sections: [
      {
        heading: "Move-Up Price Range",
        paragraphs: [
          "The $400K–$600K segment is the sweet spot for many Centennial Hills buyers — newer construction, family floor plans, and strong schools in northwest Las Vegas.",
        ],
      },
    ],
  },
  "homes-over-1m": {
    slug: "homes-over-1m",
    title: "Homes Over $1M Las Vegas",
    description:
      "Luxury homes over $1 million in Las Vegas near Centennial Hills. Custom estates and guard-gated properties with Dr. Jan Duffy.",
    heroSubtitle: "Ultra-luxury estates and custom homes in northwest Las Vegas",
    image: siteImages.communities.theRidges,
    showListings: true,
    widgetHtml: `<realscout-office-listings agent-encoded-id="${agentId}" sort-order="NEWEST" listing-status="For Sale" property-types=",SFR" price-min="1000000" price-max="5000000"></realscout-office-listings>`,
    sections: [
      {
        heading: "Luxury Estate Market",
        paragraphs: [
          "Homes over $1M include custom estates in Providence, Summerlin guard-gated communities, and architectural residences with Strip and mountain views.",
        ],
      },
    ],
  },
  aliante: {
    slug: "aliante",
    title: "Aliante Homes for Sale",
    description:
      "Aliante real estate in North Las Vegas. Master-planned community homes and amenities with Dr. Jan Duffy.",
    heroSubtitle: "Master-planned living adjacent to Centennial Hills",
    image: siteImages.communities.northLasVegas,
    showListings: true,
    sections: [
      {
        heading: "Premier Master-Planned Living",
        paragraphs: [
          "Aliante features designed neighborhoods, extensive amenities, and a strong community identity in North Las Vegas — popular with families seeking value near Centennial Hills.",
        ],
      },
      {
        heading: "Aliante Amenities",
        paragraphs: [
          "Residents enjoy parks, golf, shopping at Aliante Casino + Hotel area, and convenient freeway access via US-95 and the 215 beltway.",
        ],
      },
    ],
  },
  providence: {
    slug: "providence",
    title: "Providence Homes for Sale",
    description:
      "Providence luxury gated community in Centennial Hills. Custom estates and mountain views with Dr. Jan Duffy.",
    heroSubtitle: "Centennial Hills' premier gated community with custom estates",
    image: siteImages.communities.centennialHills,
    showListings: true,
    widgetHtml: `<realscout-office-listings agent-encoded-id="${agentId}" sort-order="NEWEST" listing-status="For Sale" property-types=",SFR" price-min="600000" price-max="2000000"></realscout-office-listings>`,
    sections: [
      {
        heading: "Exclusive Providence Community",
        paragraphs: [
          "Providence offers gated luxury living with custom estates, resort-style amenities, and mountain views — among Centennial Hills' most prestigious addresses.",
        ],
      },
    ],
  },
  "tule-springs": {
    slug: "tule-springs",
    title: "Tule Springs Homes for Sale",
    description:
      "Tule Springs and north Las Vegas homes near Centennial Hills. New construction and value with Dr. Jan Duffy.",
    heroSubtitle: "Growing north valley community near Tule Springs Fossil Beds",
    image: siteImages.communities.northLasVegas,
    showListings: true,
    sections: [
      {
        heading: "Tule Springs Area",
        paragraphs: [
          "The Tule Springs corridor offers newer construction, proximity to the national monument, and relative value compared to established Centennial Hills neighborhoods.",
        ],
      },
    ],
  },
  "northwest-las-vegas": {
    slug: "northwest-las-vegas",
    title: "Northwest Las Vegas Homes for Sale",
    description:
      "Homes for sale in northwest Las Vegas including Centennial Hills, Skye Canyon, and Lone Mountain. Dr. Jan Duffy, Top 1% REALTOR®.",
    heroSubtitle: "Centennial Hills, Skye Canyon, Lone Mountain, and adjacent communities",
    image: siteImages.communities.loneMountain,
    showListings: true,
    sections: [
      {
        heading: "Northwest Las Vegas Overview",
        paragraphs: [
          "Northwest Las Vegas encompasses Centennial Hills, Skye Canyon, Lone Mountain, and corridors toward Red Rock — one of the valley's fastest-growing residential markets.",
        ],
      },
    ],
  },
  "best-schools-centennial-hills": {
    slug: "best-schools-centennial-hills",
    title: "Best Schools in Centennial Hills",
    description:
      "Top-rated schools serving Centennial Hills, Las Vegas. Public, private, and CCSD options for families with Dr. Jan Duffy.",
    heroSubtitle: "School boundaries and education options for 89135, 89138, and 89144",
    image: siteImages.communities.centennialHills,
    sections: [
      {
        heading: "Highly-Rated CCSD Schools",
        paragraphs: [
          "Centennial Hills is served by Clark County School District schools with strong elementary, middle, and high school options across ZIP codes 89135, 89138, and 89144.",
        ],
      },
      {
        heading: "Choosing by School Boundary",
        paragraphs: [
          "School boundaries affect home values and family satisfaction. Dr. Jan Duffy helps relocating buyers map neighborhoods to preferred schools. See also our Centennial Hills schools guide.",
        ],
      },
    ],
  },
  "luxury-estates": {
    slug: "luxury-estates",
    title: "Luxury Estates Las Vegas",
    description:
      "Luxury estates for sale in Las Vegas and near Centennial Hills. Custom homes and guard-gated properties with Dr. Jan Duffy.",
    heroSubtitle: "Custom architecture and guard-gated privacy",
    image: siteImages.communities.theRidges,
    showListings: true,
    widgetHtml: `<realscout-office-listings agent-encoded-id="${agentId}" sort-order="NEWEST" listing-status="For Sale" property-types=",SFR" price-min="800000" price-max="5000000"></realscout-office-listings>`,
    sections: [
      {
        heading: "Las Vegas Luxury Estates",
        paragraphs: [
          "Luxury estates span The Ridges, Red Rock Country Club, Providence, and custom lots across northwest Las Vegas with architectural diversity and premium finishes.",
        ],
      },
    ],
  },
  "luxury-home-buyers": {
    slug: "luxury-home-buyers",
    title: "Luxury Home Buyers Las Vegas",
    description:
      "Luxury home buyer representation in Centennial Hills and Las Vegas. Discreet showings and contract strategy with Dr. Jan Duffy.",
    heroSubtitle: "Executive-level buyer representation in northwest Las Vegas",
    image: siteImages.services.luxuryHomeSales,
    breadcrumbs: [
      { name: "Buyers", href: "/buyers" },
      { name: "Luxury Home Buyers", href: "/luxury-home-buyers" },
    ],
    sections: [
      {
        heading: "Luxury Buyer Services",
        paragraphs: [
          "Luxury buyers receive off-market awareness, confidential showings, and negotiation strategy backed by Berkshire Hathaway HomeServices Nevada Properties.",
        ],
      },
      {
        heading: "Communities We Serve",
        paragraphs: [
          "Red Rock Country Club, The Ridges, Providence, Summerlin West, and premium Centennial Hills enclaves — call (702) 903-1952.",
        ],
      },
    ],
  },
  "fair-housing": {
    slug: "fair-housing",
    title: "Fair Housing Statement",
    description:
      "Fair housing commitment for Centennial Hills Real Estate | Homes by Dr. Jan Duffy. Equal professional service for all persons.",
    heroSubtitle: "Equal access to housing opportunities for all",
    sections: [
      {
        heading: "Our Commitment to Fair Housing",
        paragraphs: [
          "Centennial Hills Real Estate | Homes by Dr. Jan Duffy is committed to providing equal professional service to all persons, regardless of race, color, religion, sex, handicap, familial status, national origin, or any other protected class under federal, state, or local law.",
        ],
      },
      {
        heading: "Fair Housing Act",
        paragraphs: [
          "The Fair Housing Act prohibits discrimination in the sale, rental, and financing of housing. We train our team on fair housing laws and best practices.",
        ],
        list: [
          "Race or color",
          "Religion",
          "National origin",
          "Sex (including gender identity and sexual orientation)",
          "Familial status",
          "Disability",
        ],
      },
      {
        heading: "Report Discrimination",
        paragraphs: [
          "If you believe you have experienced housing discrimination, contact HUD at 1-800-669-9777 or visit hud.gov/fairhousing. For questions about our practices, call (702) 903-1952.",
        ],
      },
    ],
  },
  accessibility: {
    slug: "accessibility",
    title: "Accessibility Statement",
    description:
      "Digital accessibility commitment for centennialhillshomesforsale.com. WCAG standards and accommodation requests.",
    heroSubtitle: "Committed to accessible digital experiences for all users",
    sections: [
      {
        heading: "Our Commitment",
        paragraphs: [
          "We are committed to ensuring digital accessibility for people with disabilities and continually improve the user experience per WCAG 2.1 guidelines.",
        ],
      },
      {
        heading: "Accessibility Features",
        paragraphs: [
          "We strive for semantic HTML, keyboard navigation, sufficient color contrast, and descriptive alt text on images across our website.",
        ],
      },
      {
        heading: "Feedback",
        paragraphs: [
          "If you encounter accessibility barriers, contact Dr. Jan Duffy at DrDuffy@CentennialHillsHomesForSale.com or (702) 903-1952. We aim to respond within 5 business days.",
        ],
      },
    ],
  },
};

export function getLandingPage(slug: string): ContentLandingData | undefined {
  return landingPages[slug];
}
