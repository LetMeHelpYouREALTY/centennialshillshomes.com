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
 * Brand suffixes the root layout already appends via `title.template`.
 * Google Search Central (title links, updated 2025-12-10) rewrites titles
 * that repeat the site name.
 */
const REDUNDANT_TITLE_SUFFIXES = [
  ` | ${siteConfig.brandLine}`,
  ` | ${siteConfig.brandName}`,
  " | Dr. Jan Duffy, REALTOR®",
  " | Centennial Hills REALTOR®",
  " | Dr. Jan Duffy",
  " | Centennial Hills Homes",
] as const;

/**
 * One topic, then one brand. The full Business Profile name is absolute so
 * the layout template does not append the subtitle a second time.
 */
export function searchDocumentTitle(raw: string): { title: string; absolute: boolean } {
  let title = raw.trim().replace(/\s+/g, " ");
  if (title === siteConfig.fullName) {
    return { title: siteConfig.fullName, absolute: true };
  }

  let guard = 0;
  while (guard < REDUNDANT_TITLE_SUFFIXES.length) {
    guard += 1;
    const suffix = REDUNDANT_TITLE_SUFFIXES.find(
      (item) => title.endsWith(item) && title.length > item.length,
    );
    if (!suffix) break;
    title = title.slice(0, -suffix.length).trim();
  }

  if (title === siteConfig.fullName || title === siteConfig.brandName) {
    return { title: siteConfig.fullName, absolute: true };
  }

  return { title, absolute: false };
}

/** Title link Google should be able to show without rewriting a repeated brand. */
export function renderedSearchTitle(raw: string): string {
  const doc = searchDocumentTitle(raw);
  return doc.absolute ? doc.title : `${doc.title} | ${siteConfig.brandLine}`;
}

/**
 * Consistent per-page metadata per Google Search Central:
 * unique title, unique description, canonical URL, Open Graph / Twitter cards.
 * Current title-link guidance (2025-12-10): brand the title once.
 */
export function buildPageMetadata({
  title,
  description,
  path,
  keywords = [],
  noIndex = false,
}: PageSeoOptions): Metadata {
  const canonical = pageCanonical(path);
  const doc = searchDocumentTitle(title);
  const rendered = renderedSearchTitle(title);

  return {
    title: doc.absolute ? { absolute: doc.title } : doc.title,
    description,
    keywords: keywords.length > 0 ? keywords : undefined,
    alternates: {
      canonical,
    },
    openGraph: {
      title: rendered,
      description,
      url: canonical,
      siteName: siteConfig.fullName,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: siteImageUrl(siteImages.ogDefault),
          width: 1200,
          height: 630,
          alt: `${siteConfig.fullName} — ${doc.title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: rendered,
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
