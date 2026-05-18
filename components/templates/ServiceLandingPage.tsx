import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { agentInfo } from "@/lib/site-config";
import { buildPageMetadata } from "@/lib/seo";
import PageBreadcrumbs from "@/components/seo/PageBreadcrumbs";

export type ServiceLandingProps = {
  slug: string;
  title: string;
  description: string;
  heroSubtitle: string;
  image: string;
  widgetHtml?: string;
  body: string[];
};

export function serviceMetadata(
  slug: string,
  title: string,
  description: string,
): Metadata {
  return buildPageMetadata({
    title,
    description,
    path: `/${slug}`,
    keywords: [title, "Dr. Jan Duffy", "Centennial Hills", "Las Vegas real estate"],
  });
}

export default function ServiceLandingPage({
  slug,
  title,
  heroSubtitle,
  image,
  widgetHtml,
  body,
}: ServiceLandingProps) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-50 pt-20">
        <div className="container mx-auto px-4 py-4 max-w-5xl">
          <PageBreadcrumbs items={[{ name: title, href: `/${slug}` }]} />
        </div>
        <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-16 md:py-20">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">{title}</h1>
            <p className="text-lg text-blue-100">{heroSubtitle}</p>
          </div>
        </section>

        {widgetHtml ? (
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4 max-w-4xl">
              <div
                className="bg-slate-50 p-6 rounded-lg"
                dangerouslySetInnerHTML={{ __html: widgetHtml }}
              />
            </div>
          </section>
        ) : null}

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div className="space-y-6">
                {body.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 48)}
                    className="text-lg text-slate-700 leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
                <div className="flex flex-wrap gap-3 pt-4">
                  <Link
                    href={agentInfo.phoneTel}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
                  >
                    Call {agentInfo.phone}
                  </Link>
                  <Link
                    href="/contact"
                    className="px-6 py-3 border-2 border-slate-300 rounded-lg font-semibold hover:bg-white"
                  >
                    Contact Dr. Jan
                  </Link>
                </div>
              </div>
              <div className="relative h-72 lg:h-96 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
