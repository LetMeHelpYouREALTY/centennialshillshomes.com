import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, it, expect } from "vitest";

describe("homepage section order", () => {
  it("places trust and communities before listings, then FAQ and visit CTAs", () => {
    const src = readFileSync(resolve(__dirname, "page.tsx"), "utf8");
    const order = [
      "HomeHero",
      "StatsBand",
      "ReviewsSection",
      "NeighborhoodGrid",
      "RealScoutListings",
      "AgentBio",
      "WhyChooseUs",
      "FAQSection",
      "GoogleMapEmbed",
      "CtaBanner",
      "LocalBusinessCtaBar",
    ];

    let last = -1;
    for (const name of order) {
      const idx = src.indexOf(`<${name}`);
      expect(idx, `${name} missing or out of order`).toBeGreaterThan(last);
      last = idx;
    }
  });
});
