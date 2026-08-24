import { describe, it, expect } from "vitest";
import {
  expandRedirects,
  gscLegacyRedirects,
  sitemapExcludedRedirectSources,
} from "./gsc-legacy-redirects.js";

const gscNotFoundExamples = [
  "/index.html",
  "/homes-over-1m",
  "/corporate-relocation-services",
  "/active-listings",
  "/our-luxury-listings",
  "/virtual-tours",
  "/centennial-hills",
  "/centennial-hills-luxury-homes",
  "/first-time-homebuyers",
  "/centennial-hills-new-construction",
  "/summerlin",
  "/mls-search",
  "/centennial-hills-amenities",
  "/blog",
  "/golf-course-homes",
  "/centennial-hills-homes",
  "/luxury-home-buyers",
  "/area-explorer",
  "/summerlin-west",
];

describe("gscLegacyRedirects", () => {
  it("maps every Search Console 404 example to a live page", () => {
    const bySource = new Map(gscLegacyRedirects.map((rule) => [rule.source, rule.destination]));

    for (const source of gscNotFoundExamples) {
      expect(bySource.has(source)).toBe(true);
      expect(bySource.get(source)).not.toBe(source);
    }
  });

  it("expands slash variants so /blog/ and /blog both 308", () => {
    const expanded = expandRedirects(gscLegacyRedirects);
    const sources = expanded.map((rule) => rule.source);

    expect(sources).toContain("/blog");
    expect(sources).toContain("/blog/");
    expect(sources).toContain("/index.html");
    expect(sources).not.toContain("/index.html/");
    expect(expanded.every((rule) => rule.permanent === true)).toBe(true);
  });

  it("does not send live MLS search to a dead /mls-search URL", () => {
    expect(gscLegacyRedirects.find((rule) => rule.source === "/listings")).toBeUndefined();
    expect(
      gscLegacyRedirects.find((rule) => rule.source === "/mls-search")?.destination,
    ).toBe("/listings");
  });

  it("keeps redirected duplicates out of the sitemap exclusion list shape", () => {
    expect(sitemapExcludedRedirectSources).toContain("/luxury-homes");
    expect(sitemapExcludedRedirectSources).toContain("/neighborhoods/summerlin");
  });
});
