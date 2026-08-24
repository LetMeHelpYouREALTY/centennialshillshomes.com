import { agentInfo, officeInfo } from "@/lib/site-config";
import type { FaqItem } from "@/lib/site-config";

export interface MarketBandItem {
  value: string;
  label: string;
}

/** Evergreen market band — no invented MLS medians or weekly snapshots. */
export function currentMarketItems(area: string): MarketBandItem[] {
  return [
    { value: "Live MLS", label: `${area} listings via RealScout` },
    { value: "Free CMA", label: "Comps for your address" },
    { value: "Same-day", label: "Showings for qualified buyers" },
    { value: agentInfo.phone, label: `${officeInfo.address.city} office` },
  ];
}

export function currentMarketIntro(area: string, zipLabel?: string): string {
  const zip = zipLabel ? ` ZIP ${zipLabel}` : "";
  return `MLS prices and inventory in ${area}${zip} change weekly. Dr. Jan Duffy prepares a complimentary comparative market analysis from current active and sold listings — not a stale dashboard. Call ${agentInfo.phone}.`;
}

export function areaPriceFaq(area: string, zipLabel?: string): FaqItem {
  const zip = zipLabel ? ` (${zipLabel})` : "";
  return {
    question: `What is the current median home price in ${area}?`,
    answer: `Published medians lag the MLS. For current ${area}${zip} pricing, Dr. Jan Duffy pulls live comps and absorption for your criteria and sends a complimentary CMA. Call ${agentInfo.phone}.`,
  };
}

export function areaTourFaq(area: string): FaqItem {
  return {
    question: `How do I tour ${area} homes for sale?`,
    answer: `Call ${agentInfo.phone} for same-day showings in ${area}. Evening and weekend tours are available. Browse live MLS listings on this page, then Dr. Jan Duffy schedules the properties that match your criteria.`,
  };
}

export function areaRepresentationFaq(area: string): FaqItem {
  return {
    question: `Does Dr. Jan Duffy represent buyers and sellers in ${area}?`,
    answer: `Yes. Dr. Jan Duffy, REALTOR® (license ${agentInfo.license}) with ${agentInfo.brokerage}, represents buyers and sellers in ${area} and northwest Las Vegas ZIP codes 89144, 89138, and 89135. Buyer representation on resale and new construction is typically paid by the listing side.`,
  };
}

export function evergreenMarketFaqs(): FaqItem[] {
  return [
    {
      question: "Is now a good time to buy in Centennial Hills?",
      answer: `Timing depends on your rate, timeline, and the specific subdivision — not a valley-wide headline. Dr. Jan Duffy reviews current Centennial Hills (89144, 89138, 89135) inventory, days on market, and builder incentives for your criteria. Call ${agentInfo.phone} for a complimentary consultation.`,
    },
    {
      question: "Should I wait for home prices to drop in Las Vegas?",
      answer: `Waiting is a personal finance decision. Dr. Jan Duffy will show you current sold comps next to active listings in your target ZIP so you can compare net cost of waiting versus buying. Request a CMA at ${agentInfo.phone}.`,
    },
    {
      question: "Is Centennial Hills a buyer's or seller's market?",
      answer: `Conditions vary by price band and subdivision. Inventory, list-to-sale ratios, and days on market are pulled from the MLS at the time of your consultation — we do not publish invented weekly snapshots. Call ${agentInfo.phone}.`,
    },
    {
      question: "How do I get current Centennial Hills market statistics?",
      answer: `Call ${agentInfo.phone} or request a complimentary market analysis. Dr. Jan Duffy uses live MLS data for 89144, 89138, and 89135, plus adjacent northwest communities such as Skye Canyon, Lone Mountain, and Summerlin West.`,
    },
  ];
}

export const listingTourFaqs: FaqItem[] = [
  {
    question: "Can I tour a specific MLS listing in Centennial Hills?",
    answer: `Yes. Call ${agentInfo.phone} with the MLS number or listing address. Dr. Jan Duffy schedules same-day showings in Centennial Hills and northwest Las Vegas for qualified buyers.`,
  },
  {
    question: "Why don't listing pages show a price and address here?",
    answer: `Live prices, photos, and status come from the MLS through RealScout so they stay current. This site does not invent sample homes or placeholder prices. Open the live listings widget or visit https://drjanduffy.realscout.com/.`,
  },
  {
    question: "Who is the listing agent for these homes?",
    answer: `Office listings shown in the widget are associated with Dr. Jan Duffy, ${agentInfo.brokerage}, 1490 Center Crossing Rd, Las Vegas, NV 89144. Call ${agentInfo.phone} to confirm a specific MLS number.`,
  },
];
