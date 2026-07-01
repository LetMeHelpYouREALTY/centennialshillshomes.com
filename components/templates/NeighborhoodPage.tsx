import RealScoutListings from "@/components/realscout/RealScoutListings";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Phone, MapPin } from "lucide-react";
import type { NeighborhoodPageData } from "@/lib/neighborhood-content";
import { agentInfo, siteConfig } from "@/lib/site-config";
import { buildPageMetadata } from "@/lib/seo";
import PageBreadcrumbs from "@/components/seo/PageBreadcrumbs";
import SchemaScript from "@/components/SchemaScript";
import {
  AnswerLeadSection,
  HyperlocalFaqSection,
  LocalBusinessCtaBar,
} from "@/components/sections/HyperlocalSections";
import {
  generateNeighborhoodSchema,
  generateWebPageSchema,
  combineSchemas,
} from "@/lib/schema";
import type { FaqItem } from "@/lib/site-config";

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

function neighborhoodFaqs(data: NeighborhoodPageData): FaqItem[] {
  const area = data.title.replace(" Homes for Sale", "");
  return [
    {
      question: `Does Dr. Jan Duffy serve ${area}?`,
      answer: `Yes. Dr. Jan Duffy specializes in ${area} and northwest Las Vegas with same-day showings, complimentary market analysis, and Berkshire Hathaway HomeServices representation. Call ${agentInfo.phone}.`,
    },
    {
      question: `What is the home price range in ${area}?`,
      answer: `Pricing varies by subdivision and season. Dr. Jan Duffy provides a complimentary CMA with current ${area} comps and absorption trends for your specific criteria.`,
    },
    {
      question: `How do I schedule a showing in ${area}?`,
      answer: `Call (702) 903-1952 for same-day showings in ${area}. Executive clients receive flexible evening and weekend tour scheduling.`,
    },
  ];
}

export default function NeighborhoodPage({ data }: { data: NeighborhoodPageData }) {
  const faqs = neighborhoodFaqs(data);
  const schemas = combineSchemas(
    generateWebPageSchema({
      name: data.title,
      description: data.description,
      url: `/neighborhoods/${data.slug}`,
    }),
    generateNeighborhoodSchema({
      name: data.title.replace(" Homes for Sale", ""),
      slug: data.slug,
      description: data.description,
      containedIn: "Las Vegas, NV",
    }),
  );

  return (
    <>
      <SchemaScript schema={schemas} id={`neighborhood-${data.slug}`} />
      <div className="pt-20">
        <div className="container mx-auto px-4 py-4 max-w-6xl">
          <PageBreadcrumbs
            items={[
              { name: "Neighborhoods", href: "/neighborhoods" },
              {
                name: data.title.replace(" Homes for Sale", ""),
                href: `/neighborhoods/${data.slug}`,
              },
            ]}
          />
        </div>

        <section className="relative pb-16 md:pb-20 bg-slate-900 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-40">
            <Image src={data.image} alt={data.title} fill className="object-cover" priority sizes="100vw" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/80 to-blue-950/70" />
          <div className="container mx-auto px-4 relative z-10 max-w-4xl pt-8">
            <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">
              {siteConfig.shortName}
            </p>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">{data.title}</h1>
            <p className="text-lg text-slate-200 mb-8 max-w-2xl">{data.heroSubtitle}</p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={agentInfo.phoneTel}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold"
              >
                <Phone className="h-5 w-5" aria-hidden />
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

        <AnswerLeadSection
          question={`Why buy or sell in ${data.title.replace(" Homes for Sale", "")}?`}
          answer={data.body[0] ?? data.heroSubtitle}
          bullets={data.highlights}
        />

        <section className="py-14 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="prose prose-lg max-w-none text-slate-700 space-y-6">
              {data.body.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
            {data.zipCodes ? (
              <p className="mt-8 flex items-center gap-2 text-slate-600">
                <MapPin className="h-5 w-5 text-blue-600 shrink-0" aria-hidden />
                ZIP codes served: {data.zipCodes.join(", ")}
              </p>
            ) : null}
          </div>
        </section>

        <HyperlocalFaqSection faqs={faqs} title={`${data.title.replace(" Homes for Sale", "")} — FAQ`} />
        <RealScoutListings />
        <LocalBusinessCtaBar />
      </div>
    </>
  );
}
