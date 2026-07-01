import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import PageBreadcrumbs from "@/components/seo/PageBreadcrumbs";
import { buildPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export type LegalSection = {
  heading: string;
  paragraphs: string[];
  list?: string[];
};

export type LegalPageContent = {
  title: string;
  description: string;
  slug: string;
  lastUpdated: string;
  sections: LegalSection[];
};

export function legalMetadata(page: LegalPageContent): Metadata {
  return buildPageMetadata({
    title: page.title,
    description: page.description,
    path: `/${page.slug}`,
  });
}

export default function LegalPage({ page }: { page: LegalPageContent }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-20">
        <div className="container mx-auto px-4 py-4 max-w-4xl">
          <PageBreadcrumbs items={[{ name: page.title, href: `/${page.slug}` }]} />
        </div>
        <div className="container mx-auto px-4 pb-16 max-w-4xl">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">{page.title}</h1>
          <p className="text-slate-500 mb-10">Last updated: {page.lastUpdated}</p>
          <div className="prose prose-slate max-w-none space-y-10">
            {page.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">{section.heading}</h2>
                {section.paragraphs.map((p) => (
                  <p key={p.slice(0, 40)} className="text-slate-700 leading-relaxed mb-4">
                    {p}
                  </p>
                ))}
                {section.list ? (
                  <ul className="list-disc pl-6 text-slate-700 space-y-2">
                    {section.list.map((item) => (
                      <li key={item.slice(0, 40)}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
