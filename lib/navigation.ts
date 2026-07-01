/**
 * Central navigation — single source for Navbar, Footer, and sitemap helpers.
 * Hyperlocal anchor text targets Centennial Hills ZIPs 89135, 89138, 89144.
 */

export type NavLink = {
  href: string;
  label: string;
  description?: string;
  external?: boolean;
};

export type NavGroup = {
  id: string;
  label: string;
  href?: string;
  links: NavLink[];
};

export const mainNavLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/listings", label: "Listings" },
  { href: "/neighborhoods", label: "Neighborhoods" },
  { href: "/realtor-services", label: "Realtor Services" },
  { href: "/about", label: "About Dr. Jan" },
  { href: "/contact", label: "Contact" },
];

export const buyerNav: NavGroup = {
  id: "buyers",
  label: "Buyers",
  href: "/buyers",
  links: [
    {
      href: "/buyers",
      label: "Home Buying Services",
      description: "Full buyer representation in Centennial Hills",
    },
    {
      href: "/buy-home-centennial-hills",
      label: "Buy in Centennial Hills",
      description: "Homes for sale in ZIP 89144, 89138, 89135",
    },
    {
      href: "/buyers/first-time-buyers",
      label: "First-Time Buyers",
      description: "FHA, VA, and down-payment guidance",
    },
    {
      href: "/buyers/california-relocator",
      label: "California Relocators",
      description: "Equity buyers moving to Las Vegas",
    },
    {
      href: "/buyers/luxury-homes-las-vegas",
      label: "Luxury Home Buyers",
      description: "Move-up and luxury homes northwest Las Vegas",
    },
    {
      href: "/same-day-showings",
      label: "Same-Day Showings",
      description: "Fast tours for qualified buyers",
    },
  ],
};

export const sellerNav: NavGroup = {
  id: "sellers",
  label: "Sellers",
  href: "/sellers",
  links: [
    {
      href: "/sellers",
      label: "Home Selling Services",
      description: "List and sell with BHHS marketing",
    },
    {
      href: "/sell-home-centennial-hills",
      label: "Sell in Centennial Hills",
      description: "Free CMA and pricing for 89144 sellers",
    },
    {
      href: "/home-valuation",
      label: "Home Valuation",
      description: "Complimentary market analysis",
    },
    {
      href: "/sellers/move-up",
      label: "Move-Up Sellers",
      description: "Sell and buy in one coordinated plan",
    },
    {
      href: "/sellers/downsizing",
      label: "Downsizing",
      description: "Transition to 55+ or smaller homes",
    },
    {
      href: "/sellers/divorce-probate",
      label: "Divorce & Probate",
      description: "Neutral, discreet representation",
    },
    {
      href: "/sellers/relocation",
      label: "Seller Relocation",
      description: "Leaving Las Vegas? We handle the sale",
    },
  ],
};

export const servicesNav: NavGroup = {
  id: "services",
  label: "Services",
  href: "/realtor-services",
  links: [
    {
      href: "/luxury-home-sales",
      label: "Luxury Home Sales",
      description: "$400K–$750K northwest Las Vegas",
    },
    {
      href: "/market-analysis",
      label: "Market Analysis",
      description: "Neighborhood trends and pricing",
    },
    {
      href: "/california-equity-buyers",
      label: "California Equity Buyers",
      description: "Deploy CA equity into Nevada",
    },
    {
      href: "/corporate-relocations",
      label: "Corporate Relocations",
      description: "Executive moves to Centennial Hills",
    },
    {
      href: "/investment-properties",
      label: "Investment Properties",
      description: "Rental and ROI analysis",
    },
    {
      href: "/new-construction",
      label: "New Construction",
      description: "Builder representation and incentives",
    },
    {
      href: "/55-plus-communities",
      label: "55+ Communities",
      description: "Sun City, Anthem, Del Webb",
    },
    {
      href: "/relocation",
      label: "Relocation Services",
      description: "Local and out-of-state moves",
    },
  ],
};

export const marketsNav: NavGroup = {
  id: "markets",
  label: "Markets",
  href: "/market-analysis",
  links: [
    {
      href: "/market-analysis",
      label: "Market Analysis",
      description: "Complimentary CMA for Centennial Hills",
    },
    {
      href: "/market-insights",
      label: "Market Insights",
      description: "Northwest Las Vegas trends",
    },
    {
      href: "/market-report",
      label: "Market Report",
      description: "Monthly Centennial Hills snapshot",
    },
    {
      href: "/market-update",
      label: "Market Update",
      description: "Latest inventory and pricing",
    },
  ],
};

export const zipNav: NavGroup = {
  id: "zips",
  label: "ZIP Codes",
  href: "/zip-89144-homes-for-sale",
  links: [
    {
      href: "/zip-89144-homes-for-sale",
      label: "89144 Homes for Sale",
      description: "Centennial Hills core ZIP",
    },
    {
      href: "/zip-89138-homes-for-sale",
      label: "89138 Homes for Sale",
      description: "Northwest Las Vegas luxury corridor",
    },
    {
      href: "/zip-89135-homes-for-sale",
      label: "89135 Homes for Sale",
      description: "Summerlin West and Red Rock area",
    },
  ],
};

export const navDropdownGroups: NavGroup[] = [
  buyerNav,
  sellerNav,
  servicesNav,
  marketsNav,
  zipNav,
];

export const footerQuickLinks: NavLink[] = [
  { href: siteConfigListingsUrl(), label: "Search All Listings", external: true },
  { href: "/neighborhoods/centennial-hills", label: "Centennial Hills Homes" },
  { href: "/centennial-hills-realtor", label: "Centennial Hills REALTOR®" },
  { href: "/why-berkshire-hathaway", label: "Why Berkshire Hathaway" },
  { href: "/faq", label: "FAQ" },
  { href: "/google-business", label: "Google Reviews & Hours" },
];

export const footerServiceLinks: NavLink[] = [
  { href: "/realtor-services", label: "Realtor Services" },
  { href: "/buy-home-centennial-hills", label: "Buy in Centennial Hills" },
  { href: "/sell-home-centennial-hills", label: "Sell in Centennial Hills" },
  { href: "/home-valuation", label: "Home Valuation" },
  { href: "/luxury-home-sales", label: "Luxury Home Sales" },
  { href: "/55-plus-communities", label: "55+ Communities" },
  { href: "/new-construction", label: "New Construction" },
  { href: "/market-insights", label: "Market Insights" },
];

function siteConfigListingsUrl(): string {
  return "https://drjanduffy.realscout.com/";
}

/** Flat list of internal paths for sitemap generation */
export const sitemapPaths: Array<{
  path: string;
  priority: number;
  changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
}> = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/listings", priority: 0.9, changeFrequency: "daily" },
  { path: "/neighborhoods", priority: 0.9, changeFrequency: "weekly" },
  { path: "/realtor-services", priority: 0.9, changeFrequency: "weekly" },
  { path: "/centennial-hills-realtor", priority: 0.9, changeFrequency: "monthly" },
  { path: "/buy-home-centennial-hills", priority: 0.9, changeFrequency: "weekly" },
  { path: "/sell-home-centennial-hills", priority: 0.9, changeFrequency: "weekly" },
  { path: "/zip-89144-homes-for-sale", priority: 0.88, changeFrequency: "weekly" },
  { path: "/zip-89138-homes-for-sale", priority: 0.88, changeFrequency: "weekly" },
  { path: "/zip-89135-homes-for-sale", priority: 0.88, changeFrequency: "weekly" },
  { path: "/about", priority: 0.85, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.85, changeFrequency: "monthly" },
  { path: "/faq", priority: 0.8, changeFrequency: "monthly" },
  { path: "/home-valuation", priority: 0.85, changeFrequency: "monthly" },
  { path: "/google-business", priority: 0.75, changeFrequency: "monthly" },
  { path: "/why-berkshire-hathaway", priority: 0.7, changeFrequency: "monthly" },
  { path: "/buyers", priority: 0.8, changeFrequency: "monthly" },
  { path: "/buyers/first-time-buyers", priority: 0.75, changeFrequency: "monthly" },
  { path: "/buyers/california-relocator", priority: 0.75, changeFrequency: "monthly" },
  { path: "/buyers/luxury-homes-las-vegas", priority: 0.75, changeFrequency: "monthly" },
  { path: "/sellers", priority: 0.8, changeFrequency: "monthly" },
  { path: "/sellers/move-up", priority: 0.75, changeFrequency: "monthly" },
  { path: "/sellers/downsizing", priority: 0.75, changeFrequency: "monthly" },
  { path: "/sellers/divorce-probate", priority: 0.75, changeFrequency: "monthly" },
  { path: "/sellers/relocation", priority: 0.75, changeFrequency: "monthly" },
  { path: "/luxury-home-sales", priority: 0.8, changeFrequency: "monthly" },
  { path: "/luxury-homes", priority: 0.75, changeFrequency: "monthly" },
  { path: "/market-analysis", priority: 0.8, changeFrequency: "weekly" },
  { path: "/market-insights", priority: 0.75, changeFrequency: "weekly" },
  { path: "/market-report", priority: 0.75, changeFrequency: "weekly" },
  { path: "/market-update", priority: 0.75, changeFrequency: "weekly" },
  { path: "/same-day-showings", priority: 0.8, changeFrequency: "monthly" },
  { path: "/california-equity-buyers", priority: 0.8, changeFrequency: "monthly" },
  { path: "/corporate-relocations", priority: 0.8, changeFrequency: "monthly" },
  { path: "/investment-properties", priority: 0.8, changeFrequency: "monthly" },
  { path: "/new-construction", priority: 0.8, changeFrequency: "monthly" },
  { path: "/relocation", priority: 0.75, changeFrequency: "monthly" },
  { path: "/services", priority: 0.7, changeFrequency: "monthly" },
  { path: "/55-plus-communities", priority: 0.8, changeFrequency: "monthly" },
  { path: "/55-plus-communities/sun-city-summerlin", priority: 0.7, changeFrequency: "monthly" },
  { path: "/55-plus-communities/sun-city-anthem", priority: 0.7, changeFrequency: "monthly" },
  { path: "/55-plus-communities/sun-city-aliante", priority: 0.7, changeFrequency: "monthly" },
  { path: "/55-plus-communities/solera-anthem", priority: 0.7, changeFrequency: "monthly" },
  { path: "/55-plus-communities/trilogy-summerlin", priority: 0.7, changeFrequency: "monthly" },
  { path: "/55-plus-communities/del-webb-lake-las-vegas", priority: 0.7, changeFrequency: "monthly" },
  { path: "/55-plus-communities/heritage-stonebridge", priority: 0.7, changeFrequency: "monthly" },
  { path: "/neighborhoods/centennial-hills", priority: 0.9, changeFrequency: "weekly" },
  { path: "/neighborhoods/red-rock-country-club", priority: 0.85, changeFrequency: "weekly" },
  { path: "/neighborhoods/the-ridges", priority: 0.85, changeFrequency: "weekly" },
  { path: "/neighborhoods/summerlin-west", priority: 0.85, changeFrequency: "weekly" },
  { path: "/neighborhoods/lone-mountain", priority: 0.85, changeFrequency: "weekly" },
  { path: "/neighborhoods/north-las-vegas", priority: 0.85, changeFrequency: "weekly" },
  { path: "/neighborhoods/summerlin", priority: 0.8, changeFrequency: "weekly" },
  { path: "/neighborhoods/henderson", priority: 0.8, changeFrequency: "weekly" },
  { path: "/neighborhoods/green-valley", priority: 0.8, changeFrequency: "weekly" },
  { path: "/neighborhoods/southern-highlands", priority: 0.8, changeFrequency: "weekly" },
  { path: "/neighborhoods/skye-canyon", priority: 0.8, changeFrequency: "weekly" },
  { path: "/neighborhoods/inspirada", priority: 0.8, changeFrequency: "weekly" },
  { path: "/neighborhoods/mountains-edge", priority: 0.8, changeFrequency: "weekly" },
];
