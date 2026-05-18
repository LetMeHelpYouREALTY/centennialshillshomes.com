import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const slugs = [
  "centennial-hills",
  "red-rock-country-club",
  "the-ridges",
  "summerlin-west",
  "lone-mountain",
  "north-las-vegas",
];

for (const slug of slugs) {
  const dir = path.join(root, "app", "neighborhoods", slug);
  fs.mkdirSync(dir, { recursive: true });
  const content = `import NeighborhoodPage, {
  neighborhoodMetadata,
} from "@/components/templates/NeighborhoodPage";
import { neighborhoodPages } from "@/lib/neighborhood-content";

const data = neighborhoodPages["${slug}"];

export const metadata = neighborhoodMetadata(data);

export default function Page() {
  return <NeighborhoodPage data={data} />;
}
`;
  fs.writeFileSync(path.join(dir, "page.tsx"), content);
  console.log("wrote neighborhoods/" + slug);
}
