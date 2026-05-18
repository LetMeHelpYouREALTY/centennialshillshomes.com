import { siteConfig, siteImages } from "@/lib/site-config";
import type { ServiceLandingProps } from "@/components/templates/ServiceLandingPage";

type ServicePageContent = Omit<ServiceLandingProps, "slug">;

const agentId = siteConfig.realScoutAgentId;

export const servicePages: Record<string, ServicePageContent> = {
  "luxury-home-sales": {
    title: "Luxury Home Sales",
    description:
      "Luxury and move-up home sales $400K–$750K in Centennial Hills, Red Rock Country Club, and northwest Las Vegas.",
    heroSubtitle: "Expert representation for discerning buyers and sellers in northwest Las Vegas",
    image: siteImages.services.luxuryHomeSales,
    widgetHtml: `<realscout-advanced-search agent-encoded-id="${agentId}"></realscout-advanced-search>`,
    body: [
      "Dr. Jan Duffy specializes in luxury and move-up homes in Centennial Hills and adjacent northwest Las Vegas communities, with a focus on the $400K–$750K range.",
      "From pricing strategy to same-day showings, you receive executive-level service backed by Berkshire Hathaway HomeServices Nevada Properties.",
    ],
  },
  "market-analysis": {
    title: "Complimentary Market Analysis",
    description:
      "Free Centennial Hills home valuation and pricing strategy from Dr. Jan Duffy, Top 1% Las Vegas REALTOR®.",
    heroSubtitle: "Know your home's value before you buy or sell in northwest Las Vegas",
    image: siteImages.services.marketAnalysis,
    body: [
      "Receive a complimentary market analysis with comparable sales, neighborhood trends, and a clear pricing strategy for Centennial Hills and nearby communities.",
      "Whether you are preparing to list or evaluating a purchase, data-driven guidance helps you move with confidence.",
    ],
  },
  "same-day-showings": {
    title: "Same-Day Showings",
    description:
      "Fast property showings for qualified buyers in Centennial Hills and northwest Las Vegas with Dr. Jan Duffy.",
    heroSubtitle: "Schedule quickly — including evenings and weekends for executive clients",
    image: siteImages.services.sameDayShowings,
    body: [
      "Qualified buyers can schedule same-day showings in ZIP codes 89135, 89138, and 89144 and surrounding luxury communities.",
      "Dr. Jan Duffy coordinates efficient tours so you can act quickly in a competitive northwest Las Vegas market.",
    ],
  },
  "california-equity-buyers": {
    title: "California Equity Buyers",
    description:
      "Relocate California equity into Centennial Hills and northwest Las Vegas homes with Dr. Jan Duffy.",
    heroSubtitle: "Deploy equity into Las Vegas with a trusted local BHHS advisor",
    image: siteImages.services.californiaEquityBuyers,
    body: [
      "California relocators benefit from hyperlocal knowledge of Centennial Hills, Summerlin West, and guard-gated communities near Red Rock.",
      "Dr. Jan Duffy helps you compare neighborhoods, understand HOA and tax considerations, and identify homes that match your lifestyle and investment goals.",
    ],
  },
  "corporate-relocations": {
    title: "Corporate Relocations",
    description:
      "Executive relocation support for moves to Centennial Hills and northwest Las Vegas.",
    heroSubtitle: "White-glove coordination for corporate and executive relocations",
    image: siteImages.services.corporateRelocations,
    body: [
      "Corporate relocation clients receive structured tours, school and commute guidance, and streamlined offer-to-close support.",
      "Dr. Jan Duffy aligns timelines with your employer's relocation benefits and keeps communication clear for busy executives.",
    ],
  },
  "investment-properties": {
    title: "Investment Properties",
    description:
      "Rental and investment property guidance near Centennial Hills and northwest Las Vegas.",
    heroSubtitle: "Identify opportunities aligned with your investment criteria",
    image: siteImages.services.investmentProperties,
    widgetHtml: `<realscout-office-listings agent-encoded-id="${agentId}" sort-order="NEWEST" listing-status="For Sale" property-types="SFR,MF,TC" price-min="300000" price-max="900000"></realscout-office-listings>`,
    body: [
      "Investment buyers receive neighborhood-level insight on demand, rental potential, and resale dynamics in northwest Las Vegas.",
      "Work with a Top 1% REALTOR® who understands both lifestyle purchases and income-producing assets.",
    ],
  },
};
