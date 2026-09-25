// Google Business Profile Schema Data
// Supports GBP ranking factors: Relevance, Distance, Prominence

export const businessInfo = {
  // NAP - Must match GBP exactly
  name: "Centennial Hills Real Estate | Homes by Dr. Jan Duffy",
  address: {
    streetAddress: "1490 Center Crossing Rd",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89144",
    addressCountry: "US",
  },
  phone: {
    display: "(702) 903-1952",
    tel: "+17029031952",
  },
  email: "DrDuffy@CentennialHillsHomesForSale.com",
  url: "https://www.centennialhillshomesforsale.com",

  // Business Details
  license: "S.0197614.LLC",
  priceRange: "$$",

  // Hours - Match GBP exactly
  hours: {
    monday: "08:00-20:00",
    tuesday: "08:00-20:00",
    wednesday: "08:00-20:00",
    thursday: "08:00-20:00",
    friday: "08:00-20:00",
    saturday: "08:00-20:00",
    sunday: "08:00-20:00",
  },

  // Geo coordinates for distance ranking
  geo: {
    latitude: 36.2792,
    longitude: -115.2744,
  },

  // Service areas - Start focused, expand with prominence
  serviceAreas: [
    // Primary (immediate city)
    "Las Vegas, NV",
    "Summerlin, NV",
    // Secondary (close ZIPs)
    "Henderson, NV",
    "North Las Vegas, NV",
    // Tertiary (county expansion)
    "Clark County, NV",
  ],

  // Categories - Primary + Secondary for GBP
  categories: {
    primary: "Real Estate Agent",
    secondary: [
      "Real Estate Agency",
      "Real Estate Consultant",
      "Property management company",
    ],
  },

  // Services — names match the GBP service list (checked 2026-09-25).
  services: [
    { name: "Building lots for sale", description: "Vacant lots in Centennial Hills and northwest Las Vegas, including 89144, 89138, and 89135." },
    { name: "Buying agent services", description: "Buyer representation for homes in Centennial Hills, with same-day showings and a written offer strategy." },
    { name: "Commercial real estate", description: "Commercial purchase and sale guidance in northwest Las Vegas through Berkshire Hathaway HomeServices Nevada Properties." },
    { name: "First-time home buyer services", description: "Step-by-step buying help for a first Las Vegas purchase, including loan-type options and offer timing." },
    { name: "Luxury property buying and sales", description: "Luxury listings and purchases in Centennial Hills, Skye Canyon, and nearby northwest Las Vegas communities." },
    { name: "New real estate", description: "Newly listed homes in Centennial Hills, matched to price, size, and preferred ZIP." },
    { name: "New construction", description: "Builder negotiations and buyer representation for new construction in Centennial Hills and northwest Las Vegas." },
    { name: "Property management", description: "Property management coordination for rental homes in the Centennial Hills service area." },
    { name: "Real estate investment", description: "Investment purchase analysis for rental and resale homes in 89144, 89138, and 89135." },
    { name: "Real estate management", description: "Ongoing management support for owners of Centennial Hills investment property." },
    { name: "Relocation services", description: "Move-in and move-out planning for people relocating to or from Centennial Hills and northwest Las Vegas." },
    { name: "Seller's agent services", description: "Listing, pricing, and negotiation for sellers in Centennial Hills, with a complimentary market analysis." },
  ],

  // Attributes for GBP - Fill out ALL available
  attributes: {
    // Accessibility (important for GBP)
    accessibility: [
      "Wheelchair accessible entrance",
      "Wheelchair accessible parking lot",
      "Wheelchair accessible restroom",
    ],
    // Service options
    serviceOptions: [
      "Online appointments",
      "Onsite services",
      "Same-day appointments",
    ],
    // Highlights
    highlights: [
      "Identifies as women-owned",
      "LGBTQ+ friendly",
      "Veteran-led",
    ],
    // Offerings
    offerings: [
      "Free consultation",
      "Free estimates",
    ],
    // Amenities
    amenities: [
      "Free Wi-Fi",
      "Free parking",
    ],
    // Planning
    planning: [
      "Appointment required",
      "Accepts new clients",
    ],
    // Payments (if applicable)
    payments: [
      "Credit cards",
      "Checks",
      "Wire transfer",
    ],
  },

  // Social profiles for sameAs schema
  socialProfiles: [
    "https://www.facebook.com/drjanduffy",
    "https://www.instagram.com/drjanduffy",
    "https://www.linkedin.com/in/drjanduffy",
    "https://www.youtube.com/@drjanduffy",
    "https://twitter.com/drjanduffy",
  ],

  // Languages spoken
  languages: ["English", "Spanish"],

  // Payment methods accepted
  paymentAccepted: ["Credit Card", "Check", "Wire Transfer"],

  // Year established
  foundingDate: "2010",
};

// 750-word GBP Description (3 sections)
export const gbpDescription = {
  // Section 1: Who you are/mission (~250 words)
  whoWeAre: `Dr. Jan Duffy is a trusted REALTOR® with Berkshire Hathaway HomeServices Nevada Properties, serving the Las Vegas real estate market since 2008. Backed by Warren Buffett's Berkshire Hathaway—the most recognized name in real estate—Dr. Jan combines local expertise with world-class resources to deliver exceptional results for buyers and sellers alike.

Dr. Jan holds Nevada license S.0197614.LLC and works from 1490 Center Crossing Rd, Las Vegas, NV 89144. The Google Business Profile shows 5.0 from 1 Google review. Call (702) 903-1952, daily 8:00 AM–8:00 PM.`,

  // Section 2: What/why - Value proposition (~250 words)
  whatWeDo: `What sets Dr. Jan apart is a commitment to education and advocacy. Clients receive comprehensive market analysis, expert negotiation, and honest advice—not sales pressure. As a Berkshire Hathaway HomeServices agent, Dr. Jan offers access to a global network of 50,000+ agents, world-class marketing for sellers, and off-market opportunities for buyers.

Services on the Google Business Profile: building lots for sale, buying agent services, commercial real estate, first-time home buyer services, luxury property buying and sales, new real estate, new construction, property management, real estate investment, real estate management, relocation services, and seller's agent services.

Dr. Jan prices from current comps, answers in plain numbers, and stays on the file until it closes.`,

  // Section 3: Where - Areas served (~250 words)
  whereWeServe: `Dr. Jan serves the entire Las Vegas Valley with specialized knowledge of Las Vegas, Summerlin, Henderson, North Las Vegas, and all of Clark County. Neighborhood expertise includes Summerlin's master-planned communities, Henderson's Green Valley and Inspirada, the luxury enclaves of The Ridges and Southern Highlands, Centennial Hills and Skye Canyon, and affordable options in Mountains Edge and North Las Vegas.

55+ active adult community specialization covers Sun City Summerlin (Nevada's largest 55+ community), Sun City Anthem in Henderson, Del Webb Lake Las Vegas, and Solera at Anthem. Investment property expertise spans single-family rentals, multi-family opportunities, and short-term rental analysis across the Las Vegas metro area.

Office located at 1490 Center Crossing Rd, Las Vegas, NV 89144. Hours: Daily 8:00 AM – 8:00 PM. Call (702) 903-1952 for a free consultation or visit centennialhillshomesforsale.com to start your Las Vegas real estate journey today.`,
};

// FAQ Schema for GBP Q&A section
export const gbpFAQs = [
  {
    question: "What areas does Dr. Jan Duffy serve in Las Vegas?",
    answer: "Dr. Jan serves all of Las Vegas, Summerlin, Henderson, North Las Vegas, and Clark County. Specialized neighborhood expertise includes Summerlin, Green Valley, The Ridges, Southern Highlands, Centennial Hills, Skye Canyon, Inspirada, and Mountains Edge.",
  },
  {
    question: "Does Dr. Jan help buyers relocating from California?",
    answer: "Yes! California relocation is a specialty. Dr. Jan helps CA buyers understand Nevada's 0% state income tax advantage, compare home values (40-60% lower than comparable CA properties), and find the perfect Las Vegas neighborhood. Call (702) 903-1952 for California relocation assistance.",
  },
  {
    question: "What 55+ communities does Dr. Jan specialize in?",
    answer: "Dr. Jan specializes in Sun City Summerlin (Nevada's largest 55+ community with 7,700+ homes), Sun City Anthem in Henderson, Del Webb Lake Las Vegas, and Solera at Anthem. Each community offers different amenities and price points for active adult living.",
  },
  {
    question: "Does Berkshire Hathaway HomeServices help with new construction?",
    answer: "Yes! Dr. Jan provides free buyer representation for new construction purchases from builders like Toll Brothers, Lennar, and Century Communities. The builder pays the commission, but Dr. Jan works exclusively for you—protecting your interests during the build process.",
  },
  {
    question: "How does Dr. Jan help with probate or divorce real estate sales?",
    answer: "Dr. Jan handles sensitive transactions with discretion and professionalism. For probate sales, she coordinates with estate attorneys and ensures court compliance. For divorce sales, she provides neutral representation and works with both parties' attorneys. Call (702) 903-1952 for a confidential consultation.",
  },
  {
    question: "What is the average home price in Las Vegas in 2026?",
    answer: "MLS medians change weekly. Dr. Jan Duffy prepares a complimentary CMA from current active and sold listings in Centennial Hills ZIP codes 89144, 89138, and 89135. Call (702) 903-1952 — we do not publish stale snapshot numbers.",
  },
  {
    question: "Does Dr. Jan work with first-time home buyers?",
    answer: "Absolutely! Dr. Jan guides first-time buyers through every step, including pre-approval, loan programs (FHA 3.5% down, VA 0% down, conventional options), Nevada down payment assistance programs, and new construction incentives. Free buyer consultations available.",
  },
  {
    question: "Why choose Berkshire Hathaway HomeServices over other agencies?",
    answer: "Berkshire Hathaway HomeServices is backed by Warren Buffett's Berkshire Hathaway Inc.—the only real estate brand with this level of financial stability and trust. You get a global network of 50,000+ agents, world-class marketing, and a name synonymous with integrity.",
  },
  {
    question: "How do I schedule a consultation with Dr. Jan Duffy?",
    answer: "Call or text (702) 903-1952 for immediate assistance, or email DrDuffy@CentennialHillsHomesForSale.com. Office visits available at 1490 Center Crossing Rd, Las Vegas, NV 89144. Daily 8:00 AM – 8:00 PM.",
  },
  {
    question: "Does Dr. Jan help with investment properties in Las Vegas?",
    answer: "Yes! Dr. Jan provides investment property consulting including rental property analysis, cap rate calculations, short-term rental regulations, and multi-family opportunities across the Las Vegas Valley. Contact (702) 903-1952 for investment property guidance.",
  },
];

// Generate LocalBusiness Schema
export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": "https://www.centennialhillshomesforsale.com#organization",
    name: businessInfo.name,
    image: "https://www.centennialhillshomesforsale.com/media/dr-jan-duffy-portrait.png",
    url: businessInfo.url,
    telephone: businessInfo.phone.tel,
    email: businessInfo.email,
    priceRange: businessInfo.priceRange,
    address: {
      "@type": "PostalAddress",
      ...businessInfo.address,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: businessInfo.geo.latitude,
      longitude: businessInfo.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "08:00",
        closes: "20:00",
      },
    ],
    areaServed: businessInfo.serviceAreas.map((area) => ({
      "@type": "City",
      name: area,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Real Estate Services",
      itemListElement: businessInfo.services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          description: service.description,
        },
      })),
    },
    sameAs: [
      "https://www.facebook.com/drjanduffy",
      "https://www.instagram.com/drjanduffy",
      "https://www.linkedin.com/in/drjanduffy",
    ],
  };
}

// Generate FAQPage Schema
export function generateFAQSchema(faqs = gbpFAQs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
