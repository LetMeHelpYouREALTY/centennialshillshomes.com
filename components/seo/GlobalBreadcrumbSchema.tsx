import { headers } from "next/headers";
import SchemaScript from "@/components/SchemaScript";
import { getBreadcrumbSchemaItems } from "@/lib/breadcrumb-trail";
import { generateBreadcrumbSchema } from "@/lib/schema";

/**
 * Emits BreadcrumbList JSON-LD for every route except the homepage.
 */
export default async function GlobalBreadcrumbSchema() {
  const pathname = (await headers()).get("x-pathname") ?? "/";
  const items = getBreadcrumbSchemaItems(pathname);
  if (!items) {
    return null;
  }

  return (
    <SchemaScript schema={generateBreadcrumbSchema(items)} id="global-breadcrumb-schema" />
  );
}
