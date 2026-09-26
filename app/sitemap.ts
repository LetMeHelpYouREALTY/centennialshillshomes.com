import type { MetadataRoute } from "next";
import { sitemapPaths } from "@/lib/navigation";
import { sitemapExcludedRedirectSources } from "@/lib/gsc-legacy-redirects.js";
import { SEARCH_METADATA_UPDATED_ISO } from "@/lib/content-freshness";
import { pageCanonical } from "@/lib/seo";

const excluded = new Set(sitemapExcludedRedirectSources);

/**
 * Indexable URLs only — no trailing slashes (except homepage) and no 308 sources.
 * Google ignores priority and changefreq (sitemap docs, 2026-07-08).
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(`${SEARCH_METADATA_UPDATED_ISO}T00:00:00.000Z`);

  return sitemapPaths
    .filter(({ path }) => !excluded.has(path))
    .map(({ path }) => ({
      url: pageCanonical(path || "/"),
      lastModified,
    }));
}
