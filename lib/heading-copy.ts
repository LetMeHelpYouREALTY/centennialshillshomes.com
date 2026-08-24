/**
 * Hyperlocal realtor heading formulas.
 *
 * Source: Parallel Search API (`search_1e84af188adc858f8843fea97bf7bd49`), 2026-08-24.
 * Ranking SERPs for inventory queries use "{Place} homes for sale" (Redfin Centennial Hills,
 * Trulia/Zillow 89144). Branded queries rank H1s that lead with "Dr. Jan Duffy".
 * LinkedIn/agent profiles co-list Centennial Hills, Skye Canyon, Summerlin West, Lone Mountain.
 *
 * Visible headings: one H1, natural language, no keyword stuffing, Fair Housing safe.
 */

export const AGENT_HEADING = "Dr. Jan Duffy, REALTOR®";
export const PRIMARY_MARKET = "Centennial Hills";
export const PRIMARY_ZIPS_LABEL = "89144, 89138, 89135";

export function includesAgentName(text: string): boolean {
  return /dr\.?\s*jan\s*duffy/i.test(text);
}

/** Second H1 line for realtor-search intent when the title is place/service first. */
export function agentHeadingLine(place?: string): string {
  if (place && place !== PRIMARY_MARKET) {
    return `${AGENT_HEADING} · ${place}`;
  }
  return `${AGENT_HEADING} · ${PRIMARY_MARKET}`;
}

export function homesForSaleH1(place: string, zip?: string): string {
  if (zip) {
    return `${zip} Homes for Sale in ${place}`;
  }
  return `${place} Homes for Sale`;
}

export function buyOrSellH2(place: string, zipLabel?: string): string {
  const zips = zipLabel ? ` ZIP ${zipLabel}` : "";
  return `Buy or sell in ${place}${zips} with Dr. Jan Duffy`;
}

export function communityAmenitiesH3(place: string): string {
  return `${place} Homes, Parks & Amenities`;
}

export function nearbySchoolsH3(place: string): string {
  return `${place} Nearby Schools & Commute`;
}

export function placeFaqH2(place: string): string {
  return `${place} Homes for Sale FAQ`;
}
