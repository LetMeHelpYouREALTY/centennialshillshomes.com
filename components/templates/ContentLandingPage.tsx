import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import PageBreadcrumbs from "@/components/seo/PageBreadcrumbs";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Phone, MapPin } from "lucide-react";
import type { ContentLandingData } from "@/lib/landing-content";
import { agentInfo, siteConfig } from "@/lib/site-config";
import { buildPageMetadata } from "@/lib/seo";

export function contentLandingMetadata(data: ContentLandingData): Metadata {
  return buildPageMetadata({
    title: data.title,
    description: data.description,
    path: `/${data.slug}`,
    keywords: [
      data.title,
      "Dr. Jan Duffy",
      "Centennial Hills",
      "Las Vegas real estate",
      ...(data.zipCode ? [data.zipCode] : []),
    ],
  });
}

export default function ContentLandingPage({ data }: { data: ContentLandingData }) {
  const crumbs = data.breadcrumbs ?? [{ name: data.title, href: `/${data.slug}` }];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-50">
        <div className="container mx-auto px-4 pt-24 pb-2 max-w-5xl">
          <PageBreadcrumbs items={crumbs} />
        </div>

        <section className="relative pt-4 pb-16 md:pt-8 md:pb-20 bg-slate-900 text-white overflow-hidden">
          {data.image ? (
            <>
              <div className="absolute inset-0 opacity-40">
                <Image
                  src={data.image}
                  alt={data.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="100vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/60" />
            </>
          ) : null}
          <div className="container mx-auto px-4 relative z-10 max-w-4xl">
            <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">
              {siteConfig.shortName}
            </p>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">{data.title}</h1>
            <p className="text-lg text-slate-200 mb-8">{data.heroSubtitle}</p>
            {data.zipCode ? (
              <p className="flex items-center gap-2 text-slate-300 mb-6">
                <MapPin className="h-5 w-5 text-amber-400 shrink-0" />
                ZIP code {data.zipCode}
              </p>
            ) : null}
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

        {data.widgetHtml ? (
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4 max-w-5xl">
              <div dangerouslySetInnerHTML={{ __html: data.widgetHtml }} />
            </div>
          </section>
        ) : null}

        <section className="py-14 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="space-y-10">
              {data.sections.map((section) => (
                <div key={section.heading ?? section.paragraphs[0]?.slice(0, 48)}>
                  {section.heading ? (
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">{section.heading}</h2>
                  ) : null}
                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 48)}
                      className="text-lg text-slate-700 leading-relaxed mb-4"
                    >
                      {paragraph}
                    </p>
                  ))}
                  {section.list ? (
                    <ul className="list-disc pl-6 space-y-2 text-slate-700">
                      {section.list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </section>

        {data.showListings ? <RealScoutListings /> : null}
      </main>
      <Footer />
    </>
  );
}
