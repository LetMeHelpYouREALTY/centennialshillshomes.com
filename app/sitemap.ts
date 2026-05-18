import type { MetadataRoute } from "next";
import { neighborhoods, services, siteConfig } from "@/lib/site-config";

/** Primary Centennial Hills URLs — aligned with Google sitemap best practices */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const lastModified = new Date();

  const core: Array<{ path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"] }> = [
    { path: "", priority: 1, changeFrequency: "weekly" },
    { path: "/listings", priority: 0.9, changeFrequency: "daily" },
    { path: "/neighborhoods", priority: 0.9, changeFrequency: "weekly" },
    { path: "/about", priority: 0.85, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.85, changeFrequency: "monthly" },
    { path: "/faq", priority: 0.75, changeFrequency: "monthly" },
    { path: "/market-insights", priority: 0.75, changeFrequency: "weekly" },
    { path: "/buyers", priority: 0.8, changeFrequency: "monthly" },
    { path: "/sellers", priority: 0.8, changeFrequency: "monthly" },
  ];

  const servicePaths = services.map((s) => ({
    path: `/${s.slug}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }));

  const neighborhoodPaths = neighborhoods.map((n) => ({
    path: `/neighborhoods/${n.slug}`,
    priority: 0.85,
    changeFrequency: "weekly" as const,
  }));

  const all = [...core, ...servicePaths, ...neighborhoodPaths];

  return all.map(({ path, priority, changeFrequency }) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
