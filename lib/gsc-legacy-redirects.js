/**
 * Google Search Console legacy URLs (Not found 404 + Crawled-not-indexed dead paths).
 * Next.js `permanent: true` sends 308, which Google treats like a 301.
 * Trailing-slash variants are expanded so Googlebot does not 404 after a slash hop.
 *
 * @typedef {{ source: string, destination: string }} LegacyRedirect
 */

/** @type {LegacyRedirect[]} */
const gscLegacyRedirects = [
  { source: "/index.html", destination: "/" },
  { source: "/homes-over-1m", destination: "/luxury-home-sales" },
  { source: "/corporate-relocation-services", destination: "/corporate-relocations" },
  { source: "/active-listings", destination: "/listings" },
  { source: "/our-luxury-listings", destination: "/luxury-home-sales" },
  { source: "/virtual-tours", destination: "/listings" },
  { source: "/centennial-hills", destination: "/neighborhoods/centennial-hills" },
  { source: "/centennial-hills-luxury-homes", destination: "/luxury-home-sales" },
  { source: "/first-time-homebuyers", destination: "/buyers/first-time-buyers" },
  { source: "/centennial-hills-new-construction", destination: "/new-construction" },
  { source: "/summerlin", destination: "/neighborhoods/summerlin-west" },
  { source: "/mls-search", destination: "/listings" },
  { source: "/centennial-hills-amenities", destination: "/neighborhoods/centennial-hills" },
  { source: "/blog", destination: "/market-insights" },
  { source: "/golf-course-homes", destination: "/neighborhoods/red-rock-country-club" },
  { source: "/centennial-hills-homes", destination: "/neighborhoods/centennial-hills" },
  { source: "/luxury-home-buyers", destination: "/buyers/luxury-homes-las-vegas" },
  { source: "/area-explorer", destination: "/neighborhoods" },
  { source: "/summerlin-west", destination: "/neighborhoods/summerlin-west" },
  { source: "/seo-improvements", destination: "/" },
  { source: "/tule-springs.html", destination: "/neighborhoods/centennial-hills" },
  { source: "/skye-canyon.html", destination: "/neighborhoods/skye-canyon" },
];

/** Sitemap paths that 308 to another live URL — do not list them as indexable. */
const sitemapExcludedRedirectSources = [
  "/home-valuation",
  "/luxury-homes",
  "/market-report",
  "/neighborhoods/summerlin",
];

/**
 * @param {LegacyRedirect[]} rules
 * @returns {Array<{ source: string, destination: string, permanent: true }>}
 */
function expandRedirects(rules) {
  /** @type {Array<{ source: string, destination: string, permanent: true }>} */
  const out = [];
  const seen = new Set();

  for (const rule of rules) {
    const add = (source) => {
      if (seen.has(source)) return;
      seen.add(source);
      out.push({ source, destination: rule.destination, permanent: true });
    };

    add(rule.source);
    if (!rule.source.includes(".") && !rule.source.endsWith("/")) {
      add(`${rule.source}/`);
    }
  }

  return out;
}

module.exports = {
  gscLegacyRedirects,
  sitemapExcludedRedirectSources,
  expandRedirects,
};
