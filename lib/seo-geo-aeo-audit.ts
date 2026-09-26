import fs from "node:fs";
import path from "node:path";

/**
 * SEO / GEO / AEO audit.
 *
 * This audit improves by adding a check below after a finding. A check stays
 * in place so the same leak cannot come back on the next run.
 *
 * Visible rule: "Berkshire Hathaway HomeServices" and Nevada license
 * S.0197614.LLC appear only in the footer disclosure. The footer is on every
 * page, which keeps the brokerage on each page. JSON-LD may still name the
 * supervising brokerage as parentOrganization.
 */

export const LOGO_TITLE = "Centennial Hills Real Estate";
export const LOGO_SUBTITLE = "Homes by Dr. Jan Duffy";
export const GBP_NAME = `${LOGO_TITLE} | ${LOGO_SUBTITLE}`;

const SCAN_ROOTS = ["app", "components", "lib", "src"];

/** Files allowed to contain the brokerage name or license literal. */
const ALLOW_FILES = new Set([
  "components/layouts/Footer.tsx",
  "lib/schema.ts",
  "lib/site-config.ts",
  "lib/seo-geo-aeo-audit.ts",
  "lib/seo-geo-aeo-audit.test.ts",
]);

/** Identifiers that print the brokerage or license. Footer only. */
const LEAK_IDENTIFIERS = [
  "agentInfo.brokerage",
  "agentInfo.license",
  "officeInfo.name",
  "businessInfo.license",
];

export type AuditHit = {
  file: string;
  line: number;
  text: string;
};

function walk(dir: string, out: string[]) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === "node_modules" || entry.name === ".next" || entry.name.startsWith(".")) {
      continue;
    }
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (/\.(tsx|ts|js|jsx)$/.test(entry.name)) out.push(full);
  }
}

function rel(file: string, root: string) {
  return path.relative(root, file).split(path.sep).join("/");
}

/**
 * Title strings that already include a brand. The layout template appends
 * " | Homes by Dr. Jan Duffy", so these would repeat the name in Search Console.
 * The full Business Profile name is allowed only as `title: { absolute: ... }`.
 * Add a suffix here when a new repeated brand shows up.
 */
const DUPLICATE_TITLE_SUFFIXES = [
  " | Homes by Dr. Jan Duffy",
  " | Centennial Hills Real Estate",
  " | Dr. Jan Duffy, REALTOR®",
  " | Centennial Hills REALTOR®",
  " | Dr. Jan Duffy",
  " | Centennial Hills Homes",
];

/** Old brand endings. Open Graph titles may end with the Business Profile subtitle. */
const STALE_TITLE_SUFFIXES = DUPLICATE_TITLE_SUFFIXES.filter(
  (suffix) => suffix !== " | Homes by Dr. Jan Duffy",
);

function lineIndent(text: string): number {
  return text.match(/^\s*/)?.[0].length ?? 0;
}

export function findDuplicateSearchTitles(repoRoot: string): AuditHit[] {
  const files: string[] = [];
  walk(path.join(repoRoot, "app"), files);
  const hits: AuditHit[] = [];

  for (const file of files) {
    const relative = rel(file, repoRoot);
    const lines = fs.readFileSync(file, "utf8").split(/\r?\n/);
    lines.forEach((text, index) => {
      const previous = index > 0 ? lines[index - 1] : "";
      const quotedOnThisLine = /^\s*(?:title:\s*)?["'][^"']+["']/.test(text);
      if (!quotedOnThisLine) return;

      const isTitle =
        /^\s*title:\s*["']/.test(text) ||
        (/^\s*title:\s*$/.test(previous) && /^\s*["']/.test(text));
      if (!isTitle || text.includes("absolute:")) return;

      const value = text.match(/["']([^"']+)["']/)?.[1];
      if (!value) return;

      const indent = /^\s*title:/.test(text) ? lineIndent(text) : lineIndent(previous);
      const isPageTitle = indent <= 2;

      if (isPageTitle) {
        if (value === GBP_NAME || DUPLICATE_TITLE_SUFFIXES.some((suffix) => value.endsWith(suffix))) {
          hits.push({ file: relative, line: index + 1, text: text.trim() });
        }
        return;
      }

      if (STALE_TITLE_SUFFIXES.some((suffix) => value.endsWith(suffix))) {
        hits.push({ file: relative, line: index + 1, text: text.trim() });
      }
    });
  }

  return hits;
}

export function findBrandLeaks(repoRoot: string): AuditHit[] {
  const files: string[] = [];
  for (const folder of SCAN_ROOTS) walk(path.join(repoRoot, folder), files);

  const hits: AuditHit[] = [];
  for (const file of files) {
    const relative = rel(file, repoRoot);
    if (ALLOW_FILES.has(relative) || relative.endsWith(".test.ts") || relative.endsWith(".test.tsx")) {
      continue;
    }
    const lines = fs.readFileSync(file, "utf8").split(/\r?\n/);
    lines.forEach((text, index) => {
      const brokerage =
        /Berkshire Hathaway|\bBerkshire\b|\bBHHS\b|\bHathaway\b|\bBuffett\b|S\.0197614|HomeServices agent|a national brokerage/.test(text) ||
        LEAK_IDENTIFIERS.some((id) => text.includes(id));
      if (!brokerage) return;
      if (relative === "lib/gbp-schema.ts" && /^\s*license:/.test(text)) return;
      hits.push({ file: relative, line: index + 1, text: text.trim() });
    });
  }
  return hits;
}
