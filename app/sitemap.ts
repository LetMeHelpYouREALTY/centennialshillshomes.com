import type { MetadataRoute } from "next";
import { sitemapPaths } from "@/lib/navigation";
import { sitemapExcludedRedirectSources } from "@/lib/gsc-legacy-redirects.js";
import { pageCanonical } from "@/lib/seo";

const excluded = new Set(sitemapExcludedRedirectSources);

/** Indexable URLs only — no trailing slashes (except homepage) and no 308 sources. */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return sitemapPaths
    .filter(({ path }) => !excluded.has(path))
    .map(({ path, priority, changeFrequency }) => ({
      url: pageCanonical(path || "/"),
      lastModified,
      changeFrequency,
      priority,
    }));
}
