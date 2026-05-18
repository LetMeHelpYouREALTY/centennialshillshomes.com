import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Phone, MapPin } from "lucide-react";
import type { NeighborhoodPageData } from "@/lib/neighborhood-content";
import { agentInfo, siteConfig } from "@/lib/site-config";
import { buildPageMetadata } from "@/lib/seo";
import PageBreadcrumbs from "@/components/seo/PageBreadcrumbs";

export function neighborhoodMetadata(data: NeighborhoodPageData): Metadata {
  return buildPageMetadata({
    title: data.title,
    description: data.description,
    path: `/neighborhoods/${data.slug}`,
    keywords: [
      data.title,
      "Dr. Jan Duffy",
      "Centennial Hills REALTOR",
      "Las Vegas homes for sale",
      ...(data.zipCodes ?? []),
    ],
  });
}

export default function NeighborhoodPage({ data }: { data: NeighborhoodPageData }) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `Does Dr. Jan Duffy serve ${data.title.replace(" Homes for Sale", "")}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Yes. Dr. Jan Duffy specializes in northwest Las Vegas including ${data.title.replace(" Homes for Sale", "")}, with same-day showings and complimentary market analysis. Call ${agentInfo.phone}.`,
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main className="min-h-screen bg-slate-50">
        <div className="container mx-auto px-4 pt-24 pb-2 max-w-5xl">
          <PageBreadcrumbs
            items={[
              { name: "Neighborhoods", href: "/neighborhoods" },
              { name: data.title.replace(" Homes for Sale", ""), href: `/neighborhoods/${data.slug}` },
            ]}
          />
        </div>
        <section className="relative pt-4 pb-16 md:pt-8 md:pb-20 bg-slate-900 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-40">
            <Image src={data.image} alt={data.title} fill className="object-cover" priority sizes="100vw" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/60" />
          <div className="container mx-auto px-4 relative z-10 max-w-4xl">
            <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">
              {siteConfig.shortName}
            </p>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">{data.title}</h1>
            <p className="text-lg text-slate-200 mb-8">{data.heroSubtitle}</p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={agentInfo.phoneTel}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold"
              >
                <Phone className="h-5 w-5" />
                Call {agentInfo.phone}
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border-2 border-white/80 px-6 py-3 rounded-lg font-semibold hover:bg-white/10"
              >
                Schedule a tour
              </Link>
            </div>
          </div>
        </section>

        <section className="py-14 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              {data.highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-center text-sm font-medium text-slate-800"
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="prose prose-lg max-w-none text-slate-700 space-y-6">
              {data.body.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>
            {data.zipCodes ? (
              <p className="mt-8 flex items-center gap-2 text-slate-600">
                <MapPin className="h-5 w-5 text-blue-600 shrink-0" />
                ZIP codes served: {data.zipCodes.join(", ")}
              </p>
            ) : null}
          </div>
        </section>

        <RealScoutListings />
      </main>
      <Footer />
    </>
  );
}
