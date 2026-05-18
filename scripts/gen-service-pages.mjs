import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const slugs = [
  "luxury-home-sales",
  "market-analysis",
  "same-day-showings",
  "california-equity-buyers",
  "corporate-relocations",
  "investment-properties",
];

for (const slug of slugs) {
  const dir = path.join(root, "app", slug);
  fs.mkdirSync(dir, { recursive: true });
  const content = `import ServiceLandingPage, {
  serviceMetadata,
} from "@/components/templates/ServiceLandingPage";
import { servicePages } from "@/lib/service-content";

const page = servicePages["${slug}"];

export const metadata = serviceMetadata("${slug}", page.title, page.description);

export default function Page() {
  return <ServiceLandingPage {...page} slug="${slug}" />;
}
`;
  fs.writeFileSync(path.join(dir, "page.tsx"), content);
  console.log("wrote", slug);
}
