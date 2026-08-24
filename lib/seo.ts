import type { Metadata } from "next";
import { siteConfig, siteImages, siteImageUrl } from "@/lib/site-config";

type PageSeoOptions = {
  /** Short page title (template adds brand line from layout) */
  title: string;
  description: string;
  /** Path only, e.g. `/contact` or `/neighborhoods/centennial-hills` */
  path: string;
  /** Extra keywords for this page */
  keywords?: string[];
  noIndex?: boolean;
};

/** Absolute canonical URL. Never trailing-slash except the homepage. */
export function pageCanonical(path: string): string {
  if (!path || path === "/") {
    return `${siteConfig.url}/`;
  }
  const withSlash = path.startsWith("/") ? path : `/${path}`;
  const trimmed = withSlash.replace(/\/+$/, "");
  return `${siteConfig.url}${trimmed}`;
}

/**
 * Attach a self-referencing canonical so child pages do not inherit `/` from the root layout.
 */
export function withSelfCanonical(path: string, metadata: Metadata): Metadata {
  const canonical = pageCanonical(path);
  return {
    ...metadata,
    alternates: {
      ...metadata.alternates,
      canonical,
    },
    openGraph: {
      ...metadata.openGraph,
      url: canonical,
    },
  };
}

/**
 * Consistent per-page metadata per Google SEO Starter Guide:
 * unique title, unique description, canonical URL, Open Graph / Twitter cards.
 */
export function buildPageMetadata({
  title,
  description,
  path,
  keywords = [],
  noIndex = false,
}: PageSeoOptions): Metadata {
  const canonical = pageCanonical(path);

  return {
    title,
    description,
    keywords: keywords.length > 0 ? keywords : undefined,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.brandLine,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: siteImageUrl(siteImages.ogDefault),
          width: 1200,
          height: 630,
          alt: `${siteConfig.shortName} — ${title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteImageUrl(siteImages.ogDefault)],
    },
    robots: noIndex
      ? { index: false, follow: true }
      : { index: true, follow: true },
  };
}

/** Paths that are thin heyberkshire carryovers — keep for links but de-prioritize in index */
export const secondaryIndexPaths = new Set([
  "/why-berkshire-hathaway",
  "/google-business",
  "/market-insights",
  "/market-update",
  "/55-plus-communities",
]);
