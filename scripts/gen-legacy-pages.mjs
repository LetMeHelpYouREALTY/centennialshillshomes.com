import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));

const slugs = [
  "homes-over-1m",
  "active-listings",
  "mls-search",
  "our-luxury-listings",
  "virtual-tours",
  "centennial-hills-luxury-homes",
  "centennial-hills-amenities",
  "golf-course-homes",
  "blog",
  "centennial-hills-homes",
  "centennial-hills-89135",
  "centennial-hills-89138",
  "centennial-hills-89144",
  "search",
  "area-explorer",
  "centennial-hills-vs-summerlin",
  "centennial-hills-schools",
  "best-schools-centennial-hills",
  "condos-centennial-hills",
  "northwest-las-vegas",
  "homes-under-400k",
  "homes-400k-600k",
  "luxury-estates",
  "buying-guide",
  "selling-guide",
  "move-up-buyers",
  "recent-sales",
  "testimonials",
  "press-media",
  "providence",
  "tule-springs",
  "sky-canyon",
  "centennial-hills-market-report",
  "local-business-optimization",
  "commute-calculator",
];

for (const slug of slugs) {
  const dir = path.join(root, "app", slug);
  fs.mkdirSync(dir, { recursive: true });
  const content = `import ServiceLandingPage, {
  serviceMetadata,
} from "@/components/templates/ServiceLandingPage";
import { legacyLandingPages } from "@/lib/legacy-landing-content";

const page = legacyLandingPages["${slug}"];

export const metadata = serviceMetadata("${slug}", page.title, page.description);

export default function Page() {
  return <ServiceLandingPage {...page} slug="${slug}" />;
}
`;
  fs.writeFileSync(path.join(dir, "page.tsx"), content);
  console.log("wrote legacy", slug);
}

const legalSlugs = [
  "privacy-policy",
  "privacy",
  "terms-of-service",
  "terms",
  "fair-housing",
  "accessibility",
];

for (const slug of legalSlugs) {
  const dir = path.join(root, "app", slug);
  fs.mkdirSync(dir, { recursive: true });
  const content = `import LegalPage, { legalMetadata } from "@/components/templates/LegalPage";
import { legalPages } from "@/lib/legal-content";

const page = legalPages["${slug}"];

export const metadata = legalMetadata(page);

export default function Page() {
  return <LegalPage page={page} />;
}
`;
  fs.writeFileSync(path.join(dir, "page.tsx"), content);
  console.log("wrote legal", slug);
}

console.log("Done. Calculator and blog category pages are hand-maintained.");
