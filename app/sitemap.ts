import type { MetadataRoute } from "next";
import { neighborhoods, services, siteConfig } from "@/lib/site-config";

/** Primary Centennial Hills URLs — aligned with Google sitemap best practices */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const lastModified = new Date();

  const core: Array<{ path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"] }> = [
    { path: "", priority: 1, changeFrequency: "weekly" },
    { path: "/listings", priority: 0.9, changeFrequency: "daily" },
    { path: "/centennial-hills-homes-for-sale", priority: 0.95, changeFrequency: "daily" },
    { path: "/neighborhoods", priority: 0.9, changeFrequency: "weekly" },
    { path: "/about", priority: 0.85, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.85, changeFrequency: "monthly" },
    { path: "/faq", priority: 0.75, changeFrequency: "monthly" },
    { path: "/buyers", priority: 0.8, changeFrequency: "monthly" },
    { path: "/sellers", priority: 0.8, changeFrequency: "monthly" },
    { path: "/blog", priority: 0.75, changeFrequency: "weekly" },
    { path: "/mortgage-calculator", priority: 0.7, changeFrequency: "monthly" },
  ];

  const zipAndLanding: Array<{ path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"] }> = [
    { path: "/centennial-hills-89135", priority: 0.85, changeFrequency: "weekly" },
    { path: "/centennial-hills-89138", priority: 0.85, changeFrequency: "weekly" },
    { path: "/centennial-hills-89144", priority: 0.85, changeFrequency: "weekly" },
    { path: "/centennial-hills-new-construction", priority: 0.8, changeFrequency: "weekly" },
    { path: "/centennial-hills-market-report", priority: 0.8, changeFrequency: "weekly" },
    { path: "/centennial-hills-schools", priority: 0.75, changeFrequency: "monthly" },
    { path: "/centennial-hills-vs-summerlin", priority: 0.75, changeFrequency: "monthly" },
    { path: "/buying-guide", priority: 0.75, changeFrequency: "monthly" },
    { path: "/selling-guide", priority: 0.75, changeFrequency: "monthly" },
    { path: "/moving-guide", priority: 0.75, changeFrequency: "monthly" },
    { path: "/centennial-hills-luxury-homes", priority: 0.85, changeFrequency: "weekly" },
    { path: "/affordability-calculator", priority: 0.7, changeFrequency: "monthly" },
    { path: "/commute-calculator", priority: 0.65, changeFrequency: "monthly" },
    { path: "/homes-under-400k", priority: 0.8, changeFrequency: "weekly" },
    { path: "/homes-400k-600k", priority: 0.85, changeFrequency: "weekly" },
    { path: "/homes-over-1m", priority: 0.8, changeFrequency: "weekly" },
    { path: "/aliante", priority: 0.75, changeFrequency: "weekly" },
    { path: "/providence", priority: 0.8, changeFrequency: "weekly" },
    { path: "/fair-housing", priority: 0.3, changeFrequency: "yearly" },
    { path: "/accessibility", priority: 0.3, changeFrequency: "yearly" },
    { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/terms-of-service", priority: 0.3, changeFrequency: "yearly" },
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

  const all = [...core, ...zipAndLanding, ...servicePaths, ...neighborhoodPaths];

  return all.map(({ path, priority, changeFrequency }) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
