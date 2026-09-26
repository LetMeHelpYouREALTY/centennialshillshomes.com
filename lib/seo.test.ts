import { describe, it, expect } from "vitest";
import { buildPageMetadata, pageCanonical, renderedSearchTitle, withSelfCanonical } from "./seo";
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

  it("brands the homepage once and strips a repeated brand from other titles", () => {
    const home = buildPageMetadata({
      title: siteConfig.fullName,
      description: siteConfig.description,
      path: "/",
    });
    expect(home.title).toEqual({ absolute: siteConfig.fullName });
    expect(home.openGraph && "title" in home.openGraph ? home.openGraph.title : "").toBe(
      siteConfig.fullName,
    );
    expect(home.openGraph && "siteName" in home.openGraph ? home.openGraph.siteName : "").toBe(
      siteConfig.fullName,
    );

    expect(renderedSearchTitle("Summerlin Homes for Sale | Dr. Jan Duffy, REALTOR®")).toBe(
      "Summerlin Homes for Sale | Homes by Dr. Jan Duffy",
    );
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
