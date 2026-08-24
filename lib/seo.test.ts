import { describe, it, expect } from "vitest";
import { buildPageMetadata, pageCanonical, withSelfCanonical } from "./seo";
import { siteConfig } from "./site-config";

describe("pageCanonical", () => {
  it("uses the www HTTPS origin with a trailing slash only on the homepage", () => {
    expect(pageCanonical("/")).toBe(`${siteConfig.url}/`);
    expect(pageCanonical("")).toBe(`${siteConfig.url}/`);
    expect(pageCanonical("/listings")).toBe(`${siteConfig.url}/listings`);
    expect(pageCanonical("/listings/")).toBe(`${siteConfig.url}/listings`);
    expect(pageCanonical("/55-plus-communities/solera-anthem")).toBe(
      `${siteConfig.url}/55-plus-communities/solera-anthem`,
    );
  });
});

describe("buildPageMetadata", () => {
  it("sets a self-referencing canonical, not the homepage", () => {
    const metadata = buildPageMetadata({
      title: "Solera at Anthem Homes for Sale",
      description: "Guard-gated 55+ community in Henderson.",
      path: "/55-plus-communities/solera-anthem",
    });

    expect(metadata.alternates?.canonical).toBe(
      `${siteConfig.url}/55-plus-communities/solera-anthem`,
    );
    expect(metadata.alternates?.canonical).not.toBe(`${siteConfig.url}/`);
  });
});

describe("withSelfCanonical", () => {
  it("overrides an inherited homepage canonical", () => {
    const metadata = withSelfCanonical("/listings", {
      title: "Listings",
      alternates: { canonical: "/" },
    });

    expect(metadata.alternates?.canonical).toBe(`${siteConfig.url}/listings`);
  });
});
