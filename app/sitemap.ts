import type { MetadataRoute } from "next";
import { sitemapPaths } from "@/lib/navigation";
import { siteConfig } from "@/lib/site-config";

/** Full sitemap — all indexable Centennial Hills & northwest Las Vegas pages */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const lastModified = new Date();

  return sitemapPaths.map(({ path, priority, changeFrequency }) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
