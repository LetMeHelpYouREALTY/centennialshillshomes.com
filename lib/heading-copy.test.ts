import { describe, it, expect } from "vitest";
import {
  AGENT_HEADING,
  agentHeadingLine,
  buyOrSellH2,
  communityAmenitiesH3,
  homesForSaleH1,
  includesAgentName,
  nearbySchoolsH3,
  placeFaqH2,
} from "./heading-copy";

describe("heading-copy", () => {
  it("builds inventory H1s the way ranking SERPs do", () => {
    expect(homesForSaleH1("Skye Canyon")).toBe("Skye Canyon Homes for Sale");
    expect(homesForSaleH1("Centennial Hills", "89144")).toBe(
      "89144 Homes for Sale in Centennial Hills",
    );
  });

  it("pairs place H1s with a Dr. Jan Duffy line", () => {
    expect(agentHeadingLine()).toContain(AGENT_HEADING);
    expect(agentHeadingLine("Skye Canyon")).toBe(
      "Dr. Jan Duffy, REALTOR® · Skye Canyon",
    );
    expect(includesAgentName("Luxury Homes for Sale in Centennial Hills")).toBe(
      false,
    );
    expect(includesAgentName("Dr. Jan Duffy, Centennial Hills REALTOR®")).toBe(
      true,
    );
  });

  it("localizes H2/H3 without Fair Housing proxies", () => {
    expect(buyOrSellH2("Centennial Hills", "89144, 89138, 89135")).toBe(
      "Buy or sell in Centennial Hills ZIP 89144, 89138, 89135 with Dr. Jan Duffy",
    );
    expect(communityAmenitiesH3("Mountains Edge")).toBe(
      "Mountains Edge Homes, Parks & Amenities",
    );
    expect(nearbySchoolsH3("Summerlin")).toBe("Summerlin Nearby Schools & Commute");
    expect(placeFaqH2("Green Valley")).toBe("Green Valley Homes for Sale FAQ");
    expect(communityAmenitiesH3("Skye Canyon")).not.toMatch(/family-friendly|safe|good schools/i);
  });
});
