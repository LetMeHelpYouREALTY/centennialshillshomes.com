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
  "centennial-hills-vs-summerlin": {
    title: "Centennial Hills vs Summerlin Comparison",
    description:
      "Compare Centennial Hills and Summerlin Las Vegas communities. Expert side-by-side comparison from Dr. Jan Duffy.",
    heroSubtitle: "Which northwest Las Vegas community is right for your lifestyle and budget?",
    image: siteImages.communities.centennialHills,
    body: [
      "Centennial Hills offers newer construction, strong value, and family-friendly neighborhoods in ZIP codes 89135, 89138, and 89144.",
      "Summerlin provides established master-planned amenities, top schools, and premium resale markets — typically at higher price points.",
      "Dr. Jan Duffy helps buyers weigh commute times, HOA costs, school districts, and long-term appreciation for both communities.",
    ],
  },
  "centennial-hills-schools": {
    title: "Centennial Hills Schools Guide",
    description:
      "Top schools serving Centennial Hills Las Vegas. CCSD school district guide for families buying in ZIP 89135, 89138, and 89144.",
    heroSubtitle: "School district information for Centennial Hills families",
    image: siteImages.communities.centennialHills,
    body: [
      "Centennial Hills is served by Clark County School District schools popular with families relocating to northwest Las Vegas.",
      "Proximity to quality schools is a top factor for move-up buyers and California relocators choosing between Centennial Hills and Summerlin.",
      "Dr. Jan Duffy provides neighborhood-level school context when helping families evaluate homes and communities.",
    ],
  },
  "best-schools-centennial-hills": {
    title: "Best Schools in Centennial Hills",
    description:
      "Best-rated schools near Centennial Hills, Las Vegas. Elementary, middle, and high school guide for homebuyers.",
    heroSubtitle: "Help your family choose the right Centennial Hills neighborhood by school zone",
    image: siteImages.communities.centennialHills,
    body: [
      "Families choose Centennial Hills for access to well-regarded CCSD schools combined with newer homes and suburban amenities.",
      "School zones vary by address — Dr. Jan Duffy helps buyers verify assignments before making an offer.",
      "Contact Dr. Jan Duffy for a personalized school and neighborhood tour in northwest Las Vegas.",
    ],
  },
  "condos-centennial-hills": {
    title: "Condos & Townhomes in Centennial Hills",
    description:
      "Centennial Hills condos and townhomes for sale. Affordable entry points in northwest Las Vegas with Dr. Jan Duffy.",
    heroSubtitle: "Low-maintenance living options in Centennial Hills and northwest Las Vegas",
    image: siteImages.communities.centennialHills,
    widgetHtml: officeListingsWidget,
    body: [
      "Condos and townhomes in Centennial Hills offer lower maintenance and accessible price points for first-time and move-down buyers.",
      "Browse active MLS listings for attached housing across ZIP codes 89135, 89138, and 89144.",
      "Dr. Jan Duffy explains HOA fees, rental restrictions, and resale dynamics for each community.",
    ],
  },
  "northwest-las-vegas": {
    title: "Northwest Las Vegas Real Estate",
    description:
      "Northwest Las Vegas homes for sale. Centennial Hills, Lone Mountain, Skye Canyon, and luxury communities with Dr. Jan Duffy.",
    heroSubtitle: "Your guide to buying and selling in northwest Las Vegas",
    image: siteImages.communities.lasVegasLuxury,
    widgetHtml: officeListingsWidget,
    body: [
      "Northwest Las Vegas spans Centennial Hills, Lone Mountain, North Las Vegas, and gateway communities to Red Rock and Summerlin West.",
      "The area attracts families, California equity buyers, and executives seeking value, newer homes, and mountain access.",
      "Dr. Jan Duffy specializes in this corridor with same-day showings and complimentary market analysis.",
    ],
  },
  "homes-under-400k": {
    title: "Homes Under $400K in Las Vegas",
    description:
      "Affordable Las Vegas homes under $400,000. Starter homes, condos, and townhomes in northwest Las Vegas.",
    heroSubtitle: "Entry-level and affordable housing options in the Las Vegas market",
    image: siteImages.communities.northLasVegas,
    widgetHtml: `<realscout-office-listings agent-encoded-id="${agentId}" sort-order="NEWEST" listing-status="For Sale" property-types=",SFR,MF,TC" price-min="200000" price-max="400000"></realscout-office-listings>`,
    body: [
      "Homes under $400K include condos, townhomes, and select single-family residences in North Las Vegas and northwest corridors.",
      "First-time buyers benefit from Dr. Jan Duffy's guidance on financing, inspections, and neighborhood selection.",
      "Browse live MLS listings below or call (702) 903-1952 for personalized recommendations.",
    ],
  },
  "homes-400k-600k": {
    title: "Homes $400K–$600K in Las Vegas",
    description:
      "Mid-range Las Vegas homes $400,000–$600,000. Family homes in Centennial Hills and northwest communities.",
    heroSubtitle: "Move-up and family homes in Las Vegas' sweet-spot price range",
    image: siteImages.communities.centennialHills,
    widgetHtml: `<realscout-office-listings agent-encoded-id="${agentId}" sort-order="NEWEST" listing-status="For Sale" property-types=",SFR" price-min="400000" price-max="600000"></realscout-office-listings>`,
    body: [
      "The $400K–$600K range is popular for move-up families seeking newer construction, good schools, and suburban amenities.",
      "Centennial Hills and adjacent northwest communities offer strong value in this segment compared to Summerlin.",
      "Dr. Jan Duffy helps buyers compare neighborhoods, HOA costs, and commute times before making an offer.",
    ],
  },
  "luxury-estates": {
    title: "Luxury Estates in Las Vegas",
    description:
      "Luxury estates for sale in Las Vegas. Custom homes, guard-gated communities, and premium properties with Dr. Jan Duffy.",
    heroSubtitle: "Custom estates and premium residences in Las Vegas' finest communities",
    image: siteImages.communities.theRidges,
    widgetHtml: luxuryListingsWidget,
    body: [
      "Luxury estates in The Ridges, Red Rock Country Club, and Summerlin West feature custom architecture, expansive lots, and resort amenities.",
      "Dr. Jan Duffy provides discreet representation for high-net-worth buyers and sellers in northwest Las Vegas.",
      "Explore live luxury listings below or request a private showing.",
    ],
  },
  "buying-guide": {
    title: "Las Vegas Home Buying Guide",
    description:
      "Complete home buying guide for Las Vegas and Centennial Hills. Expert tips from Dr. Jan Duffy, Top 1% REALTOR®.",
    heroSubtitle: "From pre-approval to closing — your step-by-step buyer roadmap",
    image: siteImages.services.luxuryHomeSales,
    body: [
      "Buying a home in Las Vegas starts with financing pre-approval, defining your must-haves, and choosing the right neighborhoods.",
      "Dr. Jan Duffy guides buyers through inspections, negotiations, HOA review, and closing with Berkshire Hathaway HomeServices support.",
      "Explore our buyer resources, MLS search, and first-time buyer programs to get started.",
    ],
  },
  "selling-guide": {
    title: "Las Vegas Home Selling Guide",
    description:
      "Complete home selling guide for Centennial Hills and Las Vegas. Maximize your sale price with Dr. Jan Duffy.",
    heroSubtitle: "Pricing, staging, marketing, and negotiation strategies for sellers",
    image: siteImages.services.luxuryHomeSellers,
    body: [
      "Selling in Centennial Hills requires accurate pricing, professional photography, and targeted marketing to qualified buyers.",
      "Dr. Jan Duffy provides complimentary market analysis, staging guidance, and BHHS global exposure for your listing.",
      "Contact Dr. Jan Duffy for a seller consultation and customized marketing plan.",
    ],
  },
  "move-up-buyers": {
    title: "Move-Up Buyers in Las Vegas",
    description:
      "Move-up buyer guide for Las Vegas. Sell your current home and upgrade in Centennial Hills with Dr. Jan Duffy.",
    heroSubtitle: "Coordinate your sale and purchase with expert timing and strategy",
    image: siteImages.communities.centennialHills,
    body: [
      "Move-up buyers often need to coordinate selling an existing home while securing their next property in a competitive market.",
      "Dr. Jan Duffy structures contingencies, bridge financing options, and timing to minimize stress during transitions.",
      "Explore our move-up seller resources and northwest Las Vegas neighborhood guides.",
    ],
  },
  "recent-sales": {
    title: "Recent Las Vegas Home Sales",
    description:
      "Recent home sales and market activity in Centennial Hills and northwest Las Vegas. Market data from Dr. Jan Duffy.",
    heroSubtitle: "Understand what homes are selling for in your target neighborhood",
    image: siteImages.services.marketAnalysis,
    body: [
      "Recent comparable sales drive accurate pricing for both buyers and sellers in Centennial Hills and northwest Las Vegas.",
      "Dr. Jan Duffy provides complimentary market reports with sold data, days on market, and price-per-square-foot trends.",
      "Request a custom market analysis for your neighborhood or target ZIP code.",
    ],
  },
  testimonials: {
    title: "Client Testimonials — Dr. Jan Duffy",
    description:
      "Reviews and testimonials from Dr. Jan Duffy's real estate clients in Centennial Hills and Las Vegas.",
    heroSubtitle: "What buyers and sellers say about working with Dr. Jan Duffy",
    image: siteImages.agentHero,
    body: [
      "Dr. Jan Duffy has earned a 4.9-star average rating from 200+ client reviews for her expertise in northwest Las Vegas real estate.",
      "Clients praise her responsiveness, market knowledge, same-day showings, and executive-level service through Berkshire Hathaway HomeServices.",
      "Read reviews on Google and contact Dr. Jan Duffy at (702) 903-1952 to experience the difference.",
    ],
  },
  "press-media": {
    title: "Press & Media — Dr. Jan Duffy",
    description:
      "Press coverage and media recognition for Dr. Jan Duffy, Top 1% Las Vegas REALTOR® serving Centennial Hills.",
    heroSubtitle: "Industry recognition and media features",
    image: siteImages.agentHero,
    body: [
      "Dr. Jan Duffy is recognized as a Top 1% Las Vegas REALTOR® with Berkshire Hathaway HomeServices Nevada Properties.",
      "With $127M+ in closed volume and 500+ transactions since 2008, she is a trusted voice in northwest Las Vegas real estate.",
      "Media inquiries: contact Dr. Jan Duffy at DrDuffy@CentennialHillsHomesForSale.com or (702) 903-1952.",
    ],
  },
  providence: {
    title: "Providence Las Vegas Real Estate",
    description:
      "Providence luxury gated community homes in Centennial Hills, Las Vegas. Custom estates with Dr. Jan Duffy.",
    heroSubtitle: "Luxury gated living in northwest Las Vegas",
    image: siteImages.communities.centennialHills,
    widgetHtml: luxuryListingsWidget,
    body: [
      "Providence is a premier gated community in Centennial Hills featuring custom estates, resort-style amenities, and mountain views.",
      "The community appeals to discerning buyers seeking privacy, security, and luxury finishes in northwest Las Vegas.",
      "Dr. Jan Duffy provides specialized knowledge of Providence HOA, architecture guidelines, and luxury resale trends.",
    ],
  },
  "tule-springs": {
    title: "Tule Springs Las Vegas Real Estate",
    description:
      "Tule Springs homes and natural-area living in northwest Las Vegas. Conservation-focused community guide.",
    heroSubtitle: "Natural beauty and outdoor recreation near northwest Las Vegas",
    image: siteImages.communities.loneMountain,
    widgetHtml: officeListingsWidget,
    body: [
      "Tule Springs offers a unique lifestyle combining preserved desert landscapes with convenient access to northwest Las Vegas amenities.",
      "Outdoor enthusiasts enjoy hiking, wildlife viewing, and proximity to Tule Springs Fossil Beds National Monument.",
      "Dr. Jan Duffy helps buyers evaluate Tule Springs and adjacent communities for lifestyle and investment fit.",
    ],
  },
  "sky-canyon": {
    title: "Sky Canyon Las Vegas Real Estate",
    description:
      "Sky Canyon new-home community in northwest Las Vegas. New construction homes with Dr. Jan Duffy.",
    heroSubtitle: "Master-planned new construction in northwest Las Vegas",
    image: siteImages.communities.loneMountain,
    widgetHtml: officeListingsWidget,
    body: [
      "Sky Canyon is a growing master-planned community in northwest Las Vegas with new construction, parks, and family amenities.",
      "Buyers appreciate modern floor plans, energy-efficient homes, and value compared to established Summerlin neighborhoods.",
      "Dr. Jan Duffy represents buyers and sellers in Sky Canyon and adjacent northwest Las Vegas communities.",
    ],
  },
  "centennial-hills-market-report": {
    title: "Centennial Hills Market Report",
    description:
      "Centennial Hills real estate market report — prices, trends, and inventory for ZIP 89135, 89138, and 89144.",
    heroSubtitle: "Current market data for Centennial Hills buyers and sellers",
    image: siteImages.services.marketAnalysis,
    body: [
      "The Centennial Hills market reflects strong demand from families, California relocators, and move-up buyers seeking northwest Las Vegas value.",
      "Dr. Jan Duffy publishes complimentary market reports with median prices, days on market, and inventory trends.",
      "Request a customized Centennial Hills market analysis for your specific neighborhood or price range.",
    ],
  },
  "local-business-optimization": {
    title: "Local Business & Real Estate SEO",
    description:
      "Local business optimization resources for real estate professionals serving Centennial Hills and Las Vegas.",
    heroSubtitle: "Hyperlocal marketing insights for northwest Las Vegas",
    image: siteImages.communities.lasVegasLuxury,
    body: [
      "Hyperlocal real estate success depends on accurate NAP data, Google Business Profile optimization, and neighborhood-specific content.",
      "Dr. Jan Duffy's Centennial Hills focus demonstrates how deep local expertise drives client trust and search visibility.",
      "For buyer or seller services in northwest Las Vegas, contact Dr. Jan Duffy at (702) 903-1952.",
    ],
  },
  "commute-calculator": {
    title: "Las Vegas Commute Calculator",
    description:
      "Plan your commute from Centennial Hills and northwest Las Vegas neighborhoods to work, school, and destinations.",
    heroSubtitle: "Evaluate drive times before you choose a neighborhood",
    image: siteImages.communities.lasVegasLuxury,
    body: [
      "Commute time is a critical factor when choosing between Centennial Hills, Summerlin West, Lone Mountain, and North Las Vegas.",
      "Peak Las Vegas traffic runs 7–9 AM and 5–7 PM on I-15, US-95, and I-215 — factor extra time during rush hour.",
      "Dr. Jan Duffy helps buyers tour neighborhoods at commute-relevant times and provides directions via Google Maps for your workplace.",
    ],
  },
};

export const legacyLandingSlugs = Object.keys(legacyLandingPages);
