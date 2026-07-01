import { siteImages } from "@/lib/site-config";
import type { ServiceLandingProps } from "@/components/templates/ServiceLandingPage";

type BlogCategoryContent = Omit<ServiceLandingProps, "slug"> & { categorySlug: string };

export const blogCategories: Record<string, BlogCategoryContent> = {
  "buyer-guide": {
    categorySlug: "buyer-guide",
    title: "Buyer Guide — Las Vegas Real Estate",
    description:
      "Comprehensive home buying guide for Las Vegas and Centennial Hills. Tips and strategies from Dr. Jan Duffy.",
    heroSubtitle: "Expert advice for purchasing a home in northwest Las Vegas",
    image: siteImages.services.luxuryHomeSales,
    body: [
      "Buying a home in Las Vegas starts with mortgage pre-approval, defining your priorities, and choosing the right neighborhoods.",
      "Dr. Jan Duffy guides buyers through inspections, offer strategy, HOA review, and closing with Berkshire Hathaway HomeServices.",
      "Explore our first-time buyer resources, MLS search, and Centennial Hills neighborhood guides to get started.",
    ],
  },
  "seller-guide": {
    categorySlug: "seller-guide",
    title: "Seller Guide — Las Vegas Real Estate",
    description:
      "Home selling guide for Centennial Hills and Las Vegas. Pricing, staging, and marketing from Dr. Jan Duffy.",
    heroSubtitle: "Maximize your sale price with proven seller strategies",
    image: siteImages.services.luxuryHomeSellers,
    body: [
      "Successful selling in Centennial Hills requires accurate pricing, professional marketing, and skilled negotiation.",
      "Dr. Jan Duffy provides complimentary market analysis, staging recommendations, and BHHS global buyer exposure.",
      "Contact Dr. Jan Duffy for a seller consultation tailored to your neighborhood and timeline.",
    ],
  },
  "market-updates": {
    categorySlug: "market-updates",
    title: "Las Vegas Market Updates",
    description:
      "Centennial Hills and Las Vegas real estate market updates. Trends, inventory, and pricing from Dr. Jan Duffy.",
    heroSubtitle: "Stay informed on northwest Las Vegas market conditions",
    image: siteImages.services.marketAnalysis,
    body: [
      "Northwest Las Vegas markets reflect demand from families, California relocators, and luxury buyers near Red Rock and Summerlin.",
      "Track median prices, days on market, and inventory levels to time your buy or sell decision.",
      "Request a complimentary market report for Centennial Hills ZIP codes 89135, 89138, and 89144.",
    ],
  },
};

export const blogCategorySlugs = Object.keys(blogCategories);
