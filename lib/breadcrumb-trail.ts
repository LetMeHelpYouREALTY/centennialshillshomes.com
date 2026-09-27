import { hyperlocalPages } from "@/lib/hyperlocal-content";
import { neighborhoodPages } from "@/lib/neighborhood-content";
import {
  footerQuickLinks,
  footerServiceLinks,
  mainNavLinks,
  navDropdownGroups,
} from "@/lib/navigation";
import type { BreadcrumbItem } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

function absoluteUrl(path: string): string {
  if (path.startsWith("http")) {
    return path;
  }
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (normalized === "/") {
    return `${siteConfig.url}/`;
  }
  return `${siteConfig.url}${normalized.replace(/\/+$/, "")}`;
}

function buildPathLabelMap(): Map<string, string> {
  const map = new Map<string, string>();
  const add = (href: string, label: string) => {
    if (!href.startsWith("http")) {
      map.set(href.replace(/\/+$/, "") || "/", label);
    }
  };

  for (const link of mainNavLinks) {
    add(link.href, link.label);
  }
  for (const group of navDropdownGroups) {
    if (group.href) {
      add(group.href, group.label);
    }
    for (const link of group.links) {
      add(link.href, link.label);
    }
  }
  for (const link of [...footerQuickLinks, ...footerServiceLinks]) {
    add(link.href, link.label);
  }

  add("/about", "About Dr. Jan Duffy");
  add("/services", "Services");
  add("/security-policy", "Security Policy");
  add("/why-berkshire-hathaway", "Why Berkshire Hathaway");
  add("/realtor-services", "Realtor Services");
  add("/luxury-homes", "Luxury Homes");

  return map;
}

const PATH_LABELS = buildPathLabelMap();

function titleFromSlug(slug: string): string {
  return slug
    .split("-")
    .map((word) => {
      if (word === "55") {
        return "55+";
      }
      if (word.length <= 3 && /^\d+$/.test(word)) {
        return word;
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

function labelForPath(path: string): string | undefined {
  const normalized = path.replace(/\/+$/, "") || "/";
  return PATH_LABELS.get(normalized);
}

/**
 * Breadcrumb trail for JSON-LD (includes Home). Returns null on the homepage.
 */
export function getBreadcrumbSchemaItems(pathname: string): BreadcrumbItem[] | null {
  const pathOnly = pathname.split("?")[0].replace(/\/+$/, "") || "/";
  if (pathOnly === "/") {
    return null;
  }

  const home: BreadcrumbItem = { name: "Home", url: absoluteUrl("/") };

  const hyperSlug = pathOnly.slice(1);
  if (hyperlocalPages[hyperSlug]) {
    const page = hyperlocalPages[hyperSlug];
    return [
      home,
      ...page.breadcrumbs.map((item) => ({
        name: item.name,
        url: absoluteUrl(item.href),
      })),
    ];
  }

  const neighborhoodMatch = pathOnly.match(/^\/neighborhoods\/([^/]+)$/);
  if (neighborhoodMatch) {
    const slug = neighborhoodMatch[1];
    const data = neighborhoodPages[slug];
    const name = data ? data.title.replace(" Homes for Sale", "") : titleFromSlug(slug);
    return [
      home,
      { name: "Neighborhoods", url: absoluteUrl("/neighborhoods") },
      { name, url: absoluteUrl(pathOnly) },
    ];
  }

  if (pathOnly === "/neighborhoods") {
    return [home, { name: "Neighborhoods", url: absoluteUrl("/neighborhoods") }];
  }

  if (pathOnly.startsWith("/55-plus-communities")) {
    const segments = pathOnly.split("/").filter(Boolean);
    const items: BreadcrumbItem[] = [home];
    let accum = "";
    for (let i = 0; i < segments.length; i += 1) {
      accum += `/${segments[i]}`;
      const label =
        labelForPath(accum) ??
        (segments[i] === "55-plus-communities" ? "55+ Communities" : titleFromSlug(segments[i]));
      items.push({ name: label, url: absoluteUrl(accum) });
    }
    return items;
  }

  const listingMatch = pathOnly.match(/^\/listings\/([^/]+)$/);
  if (listingMatch) {
    const id = listingMatch[1];
    const label = id.replace(/[^a-zA-Z0-9_-]/g, "").slice(0, 48) || "listing";
    return [
      home,
      { name: "Homes for Sale", url: absoluteUrl("/listings") },
      { name: `Listing ${label}`, url: absoluteUrl(pathOnly) },
    ];
  }

  const directLabel = labelForPath(pathOnly);
  if (directLabel) {
    const segments = pathOnly.split("/").filter(Boolean);
    if (segments.length === 1) {
      return [home, { name: directLabel, url: absoluteUrl(pathOnly) }];
    }
    const parentPath = `/${segments.slice(0, -1).join("/")}`;
    const parentLabel = labelForPath(parentPath) ?? titleFromSlug(segments[segments.length - 2]);
    return [
      home,
      { name: parentLabel, url: absoluteUrl(parentPath) },
      { name: directLabel, url: absoluteUrl(pathOnly) },
    ];
  }

  const segments = pathOnly.split("/").filter(Boolean);
  if (segments.length === 0) {
    return null;
  }

  const items: BreadcrumbItem[] = [home];
  let accum = "";
  for (const segment of segments) {
    accum += `/${segment}`;
    items.push({
      name: labelForPath(accum) ?? titleFromSlug(segment),
      url: absoluteUrl(accum),
    });
  }
  return items;
}
