import Link from "next/link";
import SchemaScript from "@/components/SchemaScript";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export type BreadcrumbItem = {
  name: string;
  href: string;
};

type PageBreadcrumbsProps = {
  items: BreadcrumbItem[];
  className?: string;
};

export default function PageBreadcrumbs({ items, className = "" }: PageBreadcrumbsProps) {
  const schemaItems = [
    { name: "Home", url: siteConfig.url },
    ...items.map((item) => ({
      name: item.name,
      url: item.href.startsWith("http") ? item.href : `${siteConfig.url}${item.href}`,
    })),
  ];

  return (
    <>
      <SchemaScript schema={generateBreadcrumbSchema(schemaItems)} id="breadcrumb-schema" />
      <nav aria-label="Breadcrumb" className={`text-sm text-slate-600 ${className}`}>
        <ol className="flex flex-wrap items-center gap-1">
          <li>
            <Link href="/" className="hover:text-blue-600 font-medium">
              Home
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={item.href} className="flex items-center gap-1">
              <span aria-hidden className="text-slate-400">
                /
              </span>
              {index === items.length - 1 ? (
                <span className="text-slate-900 font-medium" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link href={item.href} className="hover:text-blue-600 font-medium">
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
