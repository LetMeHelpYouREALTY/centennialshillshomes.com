import { siteConfig } from "@/lib/site-config";

const PRODUCTION_ORIGIN = siteConfig.url.replace(/\/$/, "");

/**
 * Canonical site origin for metadata, schema, and OG tags.
 * Always uses the production domain — never Vercel preview URLs.
 */
export function getSiteOrigin(): string {
  return PRODUCTION_ORIGIN;
}

export function getSiteUrl(path = ""): string {
  const normalized = path.startsWith("/") ? path : path ? `/${path}` : "";
  return `${PRODUCTION_ORIGIN}${normalized || ""}`;
}

export function isVercelPreview(): boolean {
  return process.env.VERCEL_ENV === "preview";
}
