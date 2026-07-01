import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import PageBreadcrumbs from "@/components/seo/PageBreadcrumbs";
import { buildPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import type { ReactNode } from "react";

type CalculatorPageProps = {
  slug: string;
  title: string;
  description: string;
  heroSubtitle: string;
  children: ReactNode;
};

export function calculatorMetadata(
  slug: string,
  title: string,
  description: string,
): Metadata {
  return buildPageMetadata({
    title,
    description,
    path: `/${slug}`,
    keywords: [title, "calculator", "Dr. Jan Duffy", "Centennial Hills", "Las Vegas"],
  });
}

export default function CalculatorPage({
  slug,
  title,
  heroSubtitle,
  children,
}: CalculatorPageProps) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-50 pt-20">
        <div className="container mx-auto px-4 py-4 max-w-4xl">
          <PageBreadcrumbs items={[{ name: title, href: `/${slug}` }]} />
        </div>
        <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-14">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">{title}</h1>
            <p className="text-lg text-blue-100">{heroSubtitle}</p>
          </div>
        </section>
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">{children}</div>
        </section>
      </main>
      <Footer />
    </>
  );
}
