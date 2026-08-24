import { describe, it, expect } from "vitest";
import sitemap from "../app/sitemap";
import { sitemapExcludedRedirectSources } from "./gsc-legacy-redirects.js";
import { pageCanonical } from "./seo";
import { siteConfig } from "./site-config";

describe("sitemap", () => {
  it("emits www HTTPS URLs without trailing slashes except the homepage", () => {
    const entries = sitemap();
    const urls = entries.map((entry) => entry.url);

    expect(urls).toContain(`${siteConfig.url}/`);
    expect(urls).toContain(pageCanonical("/listings"));
    expect(urls).toContain(pageCanonical("/55-plus-communities/solera-anthem"));
    expect(urls).toContain(pageCanonical("/investment-properties"));
    expect(urls).toContain(pageCanonical("/luxury-home-sales"));
    expect(urls).toContain(pageCanonical("/faq"));

    for (const url of urls) {
      if (url !== `${siteConfig.url}/`) {
        expect(url.endsWith("/")).toBe(false);
      }
    }
  });

  it("omits URLs that 308 to another live page", () => {
    const urls = sitemap().map((entry) => entry.url);
    for (const path of sitemapExcludedRedirectSources) {
      expect(urls).not.toContain(pageCanonical(path));
    }
  });
});
