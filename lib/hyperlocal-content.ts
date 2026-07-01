import type { HyperlocalPageData } from "@/components/templates/HyperlocalPage";
import { siteImages } from "@/lib/site-config";

const sharedServiceLinks = [
  {
    title: "Same-Day Showings",
    description: "Tour Centennial Hills homes on your schedule",
    href: "/same-day-showings",
  },
  {
    title: "Market Analysis",
    description: "Complimentary CMA for 89144, 89138, 89135",
    href: "/market-analysis",
  },
  {
    title: "Home Valuation",
    description: "Pricing strategy before you list",
    href: "/home-valuation",
  },
  {
    title: "Luxury Home Sales",
    description: "Move-up and luxury northwest Las Vegas",
    href: "/luxury-home-sales",
  },
];

export const hyperlocalPages: Record<string, HyperlocalPageData> = {
  "realtor-services": {
    slug: "realtor-services",
    path: "/realtor-services",
    title: "Centennial Hills Realtor Services",
    description:
      "Full-service realtor services in Centennial Hills and northwest Las Vegas. Dr. Jan Duffy offers buyer representation, seller marketing, luxury home sales, relocations, and complimentary market analysis in ZIP 89144, 89138, and 89135.",
    heroSubtitle:
      "Buyer and seller representation, luxury home sales, relocations, and investment consulting — hyperlocal expertise with Berkshire Hathaway HomeServices.",
    image: siteImages.services.marketAnalysis,
    answerQuestion: "What realtor services does Dr. Jan Duffy offer in Centennial Hills?",
    answerText:
      "Dr. Jan Duffy provides buyer representation, seller marketing, complimentary market analysis, same-day showings, luxury home sales ($400K–$750K focus), California equity relocations, corporate moves, 55+ community guidance, and investment property consulting in Centennial Hills and northwest Las Vegas ZIP codes 89135, 89138, and 89144.",
    answerBullets: [
      "Buyer & seller representation — BHHS Nevada Properties",
      "Same-day showings in 89144, 89138, 89135",
      "Free market analysis & home valuations",
      "Luxury, relocation & 55+ specialists",
    ],
    body: [
      "Centennial Hills buyers and sellers need a REALTOR® who knows northwest Las Vegas block by block — not a generic Las Vegas agent. Dr. Jan Duffy has closed 500+ transactions since 2008 with a focus on Centennial Hills, Red Rock Country Club, Summerlin West, and adjacent communities.",
      "Every service includes Berkshire Hathaway HomeServices marketing, professional photography coordination, negotiation strategy, and access to a global referral network when you relocate in or out of Nevada.",
      "Whether you are deploying California equity, accepting a corporate transfer, downsizing to a 55+ community, or listing a move-up home near Lone Mountain, you get executive-level communication and hyperlocal pricing guidance.",
    ],
    faqs: [
      {
        question: "Does Dr. Jan Duffy charge for a market analysis?",
        answer:
          "No. Complimentary market analysis and home valuations are available for Centennial Hills sellers and buyers. Call (702) 903-1952 or request a CMA online.",
      },
      {
        question: "What areas does Dr. Jan Duffy serve?",
        answer:
          "Primary focus: Centennial Hills (89144), northwest Las Vegas (89138), and Summerlin West / Red Rock corridor (89135), plus Red Rock Country Club, The Ridges, Lone Mountain, and North Las Vegas.",
      },
      {
        question: "Can Dr. Jan Duffy help with California relocations?",
        answer:
          "Yes. California equity buyers receive neighborhood comparisons, school zone guidance, and timing strategies to deploy equity into Las Vegas while minimizing taxes and carrying costs.",
      },
      {
        question: "Does Dr. Jan Duffy work with luxury home buyers?",
        answer:
          "Yes. Luxury and move-up homes in the $400K–$750K range are a core specialty, with experience in guard-gated and golf-course communities across northwest Las Vegas.",
      },
    ],
    serviceLinks: [
      {
        title: "Buy in Centennial Hills",
        description: "Homes for sale in 89144",
        href: "/buy-home-centennial-hills",
      },
      {
        title: "Sell in Centennial Hills",
        description: "List your home with BHHS marketing",
        href: "/sell-home-centennial-hills",
      },
      ...sharedServiceLinks,
    ],
    breadcrumbs: [{ name: "Realtor Services", href: "/realtor-services" }],
    schemaType: "service",
  },

  "centennial-hills-realtor": {
    slug: "centennial-hills-realtor",
    path: "/centennial-hills-realtor",
    title: "Centennial Hills REALTOR® — Dr. Jan Duffy",
    description:
      "Dr. Jan Duffy is a Top 1% Centennial Hills REALTOR® with Berkshire Hathaway HomeServices. License S.0197614.LLC. Serving 89144, 89138, and 89135 with 500+ closed transactions.",
    heroSubtitle:
      "Top 1% Las Vegas REALTOR® focused on Centennial Hills luxury and move-up homes. Licensed, local, and available 6 AM–9 PM daily.",
    image: siteImages.agentHero,
    answerQuestion: "Who is the best REALTOR® in Centennial Hills Las Vegas?",
    answerText:
      "Dr. Jan Duffy is a Berkshire Hathaway HomeServices Nevada Properties REALTOR® (License S.0197614.LLC) specializing in Centennial Hills and northwest Las Vegas. With 500+ transactions, $127M+ in volume, and a 4.9-star Google rating, she offers same-day showings and complimentary market analysis in ZIP codes 89144, 89138, and 89135.",
    answerBullets: [
      "Office: 1490 Center Crossing Rd, Las Vegas, NV 89144",
      "Top 1% Las Vegas agent · Serving since 2008",
      "4.9★ · 200+ verified Google reviews",
      "Same-day showings · Free CMA",
    ],
    body: [
      "Choosing a Centennial Hills REALTOR® means hiring someone who prices homes against the right comps — not Summerlin medians or Henderson averages. Dr. Jan Duffy lives and works northwest Las Vegas daily.",
      "Her E-E-A-T credentials include Nevada license S.0197614.LLC, Berkshire Hathaway HomeServices affiliation, and verifiable transaction history across guard-gated, golf-course, and new-build neighborhoods.",
      "Call (702) 903-1952 for buyer representation, listing strategy, relocation planning, or a complimentary market analysis tailored to your Centennial Hills address.",
    ],
    faqs: [
      {
        question: "What is Dr. Jan Duffy's real estate license number?",
        answer: "Nevada license S.0197614.LLC — displayed on all marketing and verified with the Nevada Real Estate Division.",
      },
      {
        question: "Where is Dr. Jan Duffy's office?",
        answer:
          "1490 Center Crossing Rd, Las Vegas, NV 89144 — matching the Google Business Profile for consistent NAP across web and maps.",
      },
      {
        question: "What makes Dr. Jan Duffy different from other Las Vegas agents?",
        answer:
          "Hyperlocal Centennial Hills focus, Berkshire Hathaway brand trust, same-day showings, complimentary CMAs, and executive-level service for luxury and move-up clients.",
      },
    ],
    serviceLinks: sharedServiceLinks,
    breadcrumbs: [{ name: "Centennial Hills REALTOR®", href: "/centennial-hills-realtor" }],
    schemaType: "service",
  },

  "buy-home-centennial-hills": {
    slug: "buy-home-centennial-hills",
    path: "/buy-home-centennial-hills",
    title: "Buy a Home in Centennial Hills Las Vegas",
    description:
      "Buy a home in Centennial Hills with Dr. Jan Duffy. Homes for sale in ZIP 89144 with same-day showings, buyer representation, and neighborhood expertise in northwest Las Vegas.",
    heroSubtitle:
      "Buyer representation in Centennial Hills — newer homes, mountain views, and family-friendly northwest Las Vegas neighborhoods.",
    image: siteImages.communities.centennialHills,
    answerQuestion: "How do I buy a home in Centennial Hills Las Vegas?",
    answerText:
          "Work with Dr. Jan Duffy for buyer representation in Centennial Hills (ZIP 89144). She provides same-day showings, offer strategy, inspection negotiation, and hyperlocal knowledge of northwest Las Vegas schools, HOAs, and new construction. Call (702) 903-1952 to start your home search.",
    answerBullets: ["ZIP 89144 · Centennial Hills core", "Same-day showings available", "First-time & move-up buyers welcome", "BHHS buyer representation"],
    body: [
      "Centennial Hills offers newer construction, parks, and quick access to US-95 and the 215 Beltway — ideal for move-up buyers and California relocators. Dr. Jan Duffy tracks inventory daily across 89144 and adjacent ZIPs.",
      "Your buyer plan includes pre-approval guidance, neighborhood tours, comparable sales analysis, and coordination with lenders, inspectors, and title — all with Berkshire Hathaway HomeServices transaction management.",
    ],
    faqs: [
      {
        question: "What is the average home price in Centennial Hills?",
        answer:
          "Centennial Hills homes typically range from the mid-$400Ks to $750K+ depending on size, lot, and proximity to Red Rock / Summerlin West. Request a current market snapshot for your target criteria.",
      },
      {
        question: "Are there new construction homes in Centennial Hills?",
        answer:
          "Yes. Dr. Jan Duffy represents buyers in new-build communities and can negotiate builder incentives, design-center credits, and closing-cost contributions.",
      },
    ],
    serviceLinks: sharedServiceLinks,
    breadcrumbs: [
      { name: "Buyers", href: "/buyers" },
      { name: "Buy in Centennial Hills", href: "/buy-home-centennial-hills" },
    ],
    schemaType: "service",
    zipCodes: ["89144"],
  },

  "sell-home-centennial-hills": {
    slug: "sell-home-centennial-hills",
    path: "/sell-home-centennial-hills",
    title: "Sell Your Home in Centennial Hills",
    description:
      "Sell your Centennial Hills home with Dr. Jan Duffy. Free market analysis, BHHS marketing, and pricing strategy for sellers in ZIP 89144, 89138, and northwest Las Vegas.",
    heroSubtitle:
      "Maximize your Centennial Hills sale with professional marketing, accurate pricing, and Berkshire Hathaway HomeServices exposure.",
    image: siteImages.services.luxuryHomeSellers,
    answerQuestion: "How do I sell my house in Centennial Hills?",
    answerText:
      "List with Dr. Jan Duffy for a complimentary market analysis, BHHS professional marketing, staging guidance, and negotiation strategy tailored to Centennial Hills buyers. She prices against true 89144 comps and markets to relocation and equity buyers across California and the west coast.",
    answerBullets: ["Free CMA for 89144 sellers", "BHHS global marketing reach", "Same-day showing coordination", "Divorce, probate & relocation sales"],
    body: [
      "Selling in Centennial Hills requires positioning against the right inventory — new builds, resales near Skye Canyon, and move-up options in Summerlin West. Dr. Jan Duffy builds a pricing and marketing plan around your timeline and net proceeds goals.",
      "Listing services include MLS exposure, digital campaigns, open-house strategy, offer review, and contract-to-close management with transparent communication throughout.",
    ],
    faqs: [
      {
        question: "How long do homes take to sell in Centennial Hills?",
        answer:
          "Days on market vary by price point, condition, and season. Dr. Jan Duffy provides a current absorption report with your complimentary CMA so you can plan move-up or relocation timing.",
      },
      {
        question: "Does Dr. Jan Duffy help with staging?",
        answer:
          "Yes. She coordinates staging recommendations, photography, and pre-list prep to maximize first-impression value for northwest Las Vegas buyers.",
      },
    ],
    serviceLinks: sharedServiceLinks,
    breadcrumbs: [
      { name: "Sellers", href: "/sellers" },
      { name: "Sell in Centennial Hills", href: "/sell-home-centennial-hills" },
    ],
    schemaType: "service",
    zipCodes: ["89144"],
  },

  "zip-89144-homes-for-sale": {
    slug: "zip-89144-homes-for-sale",
    path: "/zip-89144-homes-for-sale",
    title: "89144 Homes for Sale — Centennial Hills",
    description:
      "Homes for sale in ZIP code 89144 Centennial Hills Las Vegas. Dr. Jan Duffy, local REALTOR®, offers same-day showings and market analysis in northwest Las Vegas.",
    heroSubtitle: "Search homes for sale in 89144 — the heart of Centennial Hills northwest Las Vegas.",
    image: siteImages.communities.centennialHills,
    answerQuestion: "What homes are for sale in ZIP code 89144?",
    answerText:
      "ZIP 89144 covers Centennial Hills — one of northwest Las Vegas's most sought-after areas for newer homes, parks, and mountain access. Dr. Jan Duffy lists and shows 89144 homes daily. Browse live listings below or call (702) 903-1952 for same-day tours.",
    answerBullets: ["Centennial Hills · Northwest Las Vegas", "Family-friendly · Newer construction", "Near Skye Canyon & Lone Mountain", "Dr. Jan Duffy · License S.0197614.LLC"],
    body: [
      "89144 buyers often compare Centennial Hills against Skye Canyon new builds and Summerlin West resales. Dr. Jan Duffy provides side-by-side value analysis so you understand lot premiums, HOA structures, and commute patterns before you offer.",
    ],
    faqs: [
      {
        question: "What neighborhoods are in ZIP 89144?",
        answer: "89144 primarily covers Centennial Hills and adjacent northwest Las Vegas communities near Floyd Lamb Park and the Centennial Center area.",
      },
      {
        question: "Is 89144 a good area to buy?",
        answer:
          "Centennial Hills (89144) attracts families and move-up buyers for newer homes, parks, and relative value compared to Summerlin. Schedule a neighborhood tour to compare blocks and price points.",
      },
    ],
    serviceLinks: sharedServiceLinks,
    breadcrumbs: [
      { name: "Neighborhoods", href: "/neighborhoods" },
      { name: "89144 Homes for Sale", href: "/zip-89144-homes-for-sale" },
    ],
    schemaType: "place",
    placeName: "Centennial Hills, Las Vegas, NV 89144",
    zipCodes: ["89144"],
  },

  "zip-89138-homes-for-sale": {
    slug: "zip-89138-homes-for-sale",
    path: "/zip-89138-homes-for-sale",
    title: "89138 Homes for Sale — Northwest Las Vegas",
    description:
      "Homes for sale in ZIP 89138 northwest Las Vegas near Centennial Hills. Buyer and seller services from Dr. Jan Duffy, Berkshire Hathaway HomeServices REALTOR®.",
    heroSubtitle: "Luxury and move-up homes in 89138 — northwest Las Vegas corridor adjacent to Centennial Hills.",
    image: siteImages.communities.loneMountain,
    answerQuestion: "What is ZIP code 89138 in Las Vegas?",
    answerText:
      "ZIP 89138 covers northwest Las Vegas communities northwest of the Strip, including areas near Lone Mountain and approaches to Summerlin West. Dr. Jan Duffy serves 89138 buyers and sellers with same-day showings and hyperlocal pricing analysis.",
    answerBullets: ["Northwest Las Vegas · 89138", "Move-up & luxury inventory", "Near Lone Mountain & Centennial Hills", "BHHS buyer & seller representation"],
    body: [
      "89138 offers a mix of established neighborhoods and newer infill — popular with buyers who want northwest Las Vegas access without Summerlin premiums. Dr. Jan Duffy tracks 89138 inventory alongside 89144 for cross-ZIP comparisons.",
    ],
    faqs: [
      {
        question: "How is 89138 different from 89144?",
        answer:
          "89138 spans a broader northwest corridor while 89144 centers on Centennial Hills. Pricing, HOA, and school zones differ by subdivision — get a ZIP-specific CMA before you decide.",
      },
    ],
    serviceLinks: sharedServiceLinks,
    breadcrumbs: [
      { name: "Neighborhoods", href: "/neighborhoods" },
      { name: "89138 Homes for Sale", href: "/zip-89138-homes-for-sale" },
    ],
    schemaType: "place",
    placeName: "Northwest Las Vegas, NV 89138",
    zipCodes: ["89138"],
  },

  "zip-89135-homes-for-sale": {
    slug: "zip-89135-homes-for-sale",
    path: "/zip-89135-homes-for-sale",
    title: "89135 Homes for Sale — Summerlin West & Red Rock",
    description:
      "Homes for sale in ZIP 89135 Summerlin West and Red Rock area. Dr. Jan Duffy specializes in luxury northwest Las Vegas real estate and golf-course communities.",
    heroSubtitle: "89135 luxury homes — Summerlin West, Red Rock Country Club corridor, and premium northwest Las Vegas.",
    image: siteImages.communities.redRockCountryClub,
    answerQuestion: "What homes are for sale in ZIP 89135?",
    answerText:
      "ZIP 89135 includes Summerlin West and communities near Red Rock Country Club — among Las Vegas's most desirable luxury corridors. Dr. Jan Duffy represents buyers and sellers in guard-gated and golf-course neighborhoods throughout 89135.",
    answerBullets: ["Summerlin West · Red Rock area", "Golf & guard-gated options", "Luxury $400K–$750K+ focus", "Same-day private showings"],
    body: [
      "89135 buyers prioritize schools, trails, and Red Rock Canyon access. Dr. Jan Duffy provides subdivision-level insight for The Ridges, Summerlin West enclaves, and Red Rock Country Club inventory.",
    ],
    faqs: [
      {
        question: "Is 89135 considered Summerlin?",
        answer: "89135 covers west Summerlin and adjacent luxury communities. Subdivision amenities and HOA fees vary — tour with a local agent before you narrow your search.",
      },
    ],
    serviceLinks: sharedServiceLinks,
    breadcrumbs: [
      { name: "Neighborhoods", href: "/neighborhoods" },
      { name: "89135 Homes for Sale", href: "/zip-89135-homes-for-sale" },
    ],
    schemaType: "place",
    placeName: "Summerlin West, Las Vegas, NV 89135",
    zipCodes: ["89135"],
  },
};
