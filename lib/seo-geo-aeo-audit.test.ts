import { describe, expect, it } from "vitest";
import fs from "node:fs";
import path from "node:path";
import { findBrandLeaks, findDuplicateSearchTitles, GBP_NAME, LOGO_SUBTITLE, LOGO_TITLE } from "./seo-geo-aeo-audit";
import { generateRealEstateAgentSchema } from "./schema";
import { siteConfig } from "./site-config";

const root = path.resolve(__dirname, "..");

describe("SEO / GEO / AEO brand audit", () => {
  it("uses the Google Business Profile name as the logo", () => {
    const navbar = fs.readFileSync(path.join(root, "components/layouts/Navbar.tsx"), "utf8");
    expect(siteConfig.logoTitle).toBe(LOGO_TITLE);
    expect(siteConfig.logoSubtitle).toBe(LOGO_SUBTITLE);
    expect(siteConfig.fullName).toBe(GBP_NAME);
    expect(navbar).toContain("siteConfig.logoTitle");
    expect(navbar).toContain("siteConfig.logoSubtitle");
  });

  it("prints the brokerage and license only in the footer disclosure", () => {
    const footer = fs.readFileSync(path.join(root, "components/layouts/Footer.tsx"), "utf8");
    expect(footer).toContain("{agentInfo.brokerage} · License {agentInfo.license}");
    const leaks = findBrandLeaks(root);
    expect(leaks).toEqual([]);
  });

  it("gives Search Console one brand in each title", () => {
    expect(findDuplicateSearchTitles(root)).toEqual([]);
  });

  it("keeps the schema entity name aligned with the Business Profile", () => {
    const schema = generateRealEstateAgentSchema();
    expect(schema.name).toBe(GBP_NAME);
    expect(schema).not.toHaveProperty("aggregateRating");
  });
});
