import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));

/** Slugs migrated from Qwik src/routes/ to Next.js app/ */
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
  console.log("wrote", slug);
}
