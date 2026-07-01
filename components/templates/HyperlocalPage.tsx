import type { FaqItem } from "@/lib/site-config";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageBreadcrumbs from "@/components/seo/PageBreadcrumbs";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import SchemaScript from "@/components/SchemaScript";
import {
  AnswerLeadSection,
  HyperlocalFaqSection,
  LocalBusinessCtaBar,
  PageHero,
  RealtorServicesGrid,
  SectionShell,
} from "@/components/sections/HyperlocalSections";
import { agentInfo } from "@/lib/site-config";
import { buildPageMetadata } from "@/lib/seo";
import {
  generateNeighborhoodSchema,
  generateServiceSchema,
  generateWebPageSchema,
  combineSchemas,
} from "@/lib/schema";

export type HyperlocalPageData = {
  slug: string;
  path: string;
  title: string;
  description: string;
  eyebrow?: string;
  heroSubtitle: string;
  image?: string;
  answerQuestion: string;
  answerText: string;
  answerBullets?: string[];
  body: string[];
  faqs: FaqItem[];
  serviceLinks?: Array<{ title: string; description: string; href: string }>;
  breadcrumbs: Array<{ name: string; href: string }>;
  schemaType: "service" | "place";
  placeName?: string;
  zipCodes?: string[];
};

export function hyperlocalMetadata(data: HyperlocalPageData): Metadata {
  return buildPageMetadata({
    title: data.title,
    description: data.description,
    path: data.path,
    keywords: [
      data.title,
      "Dr. Jan Duffy",
      "Centennial Hills REALTOR",
      "Las Vegas real estate",
      ...(data.zipCodes ?? []),
    ],
  });
}

export default function HyperlocalPage({ data }: { data: HyperlocalPageData }) {
  const serviceSchema =
    data.schemaType === "service"
      ? generateServiceSchema({
          name: data.title,
          description: data.description,
          url: data.path,
        })
      : null;

  const placeSchema =
    data.schemaType === "place" && data.placeName
      ? generateNeighborhoodSchema({
          name: data.placeName,
          slug: data.slug,
          description: data.description,
          containedIn: "Las Vegas, NV",
        })
      : null;

  const pageSchema = generateWebPageSchema({
    name: data.title,
    description: data.description,
    url: data.path,
  });

  const schemas = combineSchemas(
    pageSchema,
    ...(serviceSchema ? [serviceSchema] : []),
    ...(placeSchema ? [placeSchema] : []),
  );

  return (
    <>
      <SchemaScript schema={schemas} id={`schema-${data.slug}`} />
      <div className="pt-20">
        <div className="container mx-auto px-4 py-4 max-w-6xl">
          <PageBreadcrumbs items={data.breadcrumbs} />
        </div>

        <PageHero
          eyebrow={data.eyebrow ?? "Centennial Hills · Dr. Jan Duffy"}
          title={data.title}
          subtitle={data.heroSubtitle}
          image={data.image}
          imageAlt={data.title}
        />

        <AnswerLeadSection
          question={data.answerQuestion}
          answer={data.answerText}
          bullets={data.answerBullets}
        />

        <SectionShell
          eyebrow="Local expertise"
          title={`${data.title} — how Dr. Jan Duffy helps`}
          subtitle="Hyperlocal guidance backed by Berkshire Hathaway HomeServices for northwest Las Vegas buyers and sellers."
        >
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-5">
              {data.body.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="text-slate-700 leading-relaxed text-lg">
                  {paragraph}
                </p>
              ))}
              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href={agentInfo.phoneTel}
                  className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
                >
                  Call {agentInfo.phone}
                </Link>
                <Link
                  href="/contact"
                  className="rounded-lg border-2 border-slate-300 px-6 py-3 font-semibold hover:bg-slate-50"
                >
                  Free consultation
                </Link>
              </div>
            </div>
            {data.image ? (
              <div className="relative h-72 lg:h-96 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={data.image}
                  alt={data.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            ) : null}
          </div>
        </SectionShell>

        {data.serviceLinks && data.serviceLinks.length > 0 ? (
          <SectionShell
            eyebrow="Realtor services"
            title="Related services in Centennial Hills"
            className="bg-slate-50"
          >
            <RealtorServicesGrid services={data.serviceLinks} />
          </SectionShell>
        ) : null}

        <HyperlocalFaqSection faqs={data.faqs} schemaId={`faq-${data.slug}`} />

        <RealScoutListings />

        <LocalBusinessCtaBar />
      </div>
    </>
  );
}
