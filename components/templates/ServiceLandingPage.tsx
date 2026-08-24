import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { agentInfo } from "@/lib/site-config";
import { buildPageMetadata } from "@/lib/seo";
import PageBreadcrumbs from "@/components/seo/PageBreadcrumbs";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import SchemaScript from "@/components/SchemaScript";
import {
  AnswerLeadSection,
  HyperlocalFaqSection,
  LocalBusinessCtaBar,
  PageHero,
} from "@/components/sections/HyperlocalSections";
import { generateServiceSchema, generateWebPageSchema, combineSchemas } from "@/lib/schema";
import type { FaqItem } from "@/lib/site-config";

export type ServiceLandingProps = {
  slug: string;
  title: string;
  description: string;
  heroSubtitle: string;
  image: string;
  widgetHtml?: string;
  body: string[];
  faqs?: FaqItem[];
  answerQuestion?: string;
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

const defaultFaqs: FaqItem[] = [
  {
    question: "How do I get started with this service in Centennial Hills?",
    answer:
      "Call Dr. Jan Duffy at (702) 903-1952 or request a consultation online. Same-day responses for buyers and sellers in ZIP codes 89135, 89138, and 89144.",
  },
];

export default function ServiceLandingPage({
  slug,
  title,
  description,
  heroSubtitle,
  image,
  widgetHtml,
  body,
  faqs = defaultFaqs,
  answerQuestion,
}: ServiceLandingProps) {
  const schemas = combineSchemas(
    generateWebPageSchema({ name: title, description, url: `/${slug}` }),
    generateServiceSchema({ name: title, description, url: `/${slug}` }),
  );

  return (
    <>
      <SchemaScript schema={schemas} id={`service-${slug}`} />
      <div className="pt-20">
        <div className="container mx-auto px-4 py-4 max-w-6xl">
          <PageBreadcrumbs
            items={[
              { name: "Realtor Services", href: "/realtor-services" },
              { name: title, href: `/${slug}` },
            ]}
          />
        </div>

        <PageHero
          title={title}
          subtitle={heroSubtitle}
          image={image}
          imageAlt={title}
          place="Centennial Hills"
        />

        <AnswerLeadSection
          question={answerQuestion ?? `What is ${title} in Centennial Hills?`}
          answer={body[0] ?? description}
        />

        {widgetHtml ? (
          <section className="py-12 bg-white border-b border-slate-200">
            <div className="container mx-auto px-4 max-w-4xl">
              <div
                className="bg-slate-50 p-6 rounded-xl border border-slate-200"
                dangerouslySetInnerHTML={{ __html: widgetHtml }}
              />
            </div>
          </section>
        ) : null}

        <section className="py-14 md:py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
              {title} with Dr. Jan Duffy in Centennial Hills
            </h2>
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div className="space-y-5">
                {body.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)} className="text-lg text-slate-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
                <div className="flex flex-wrap gap-3 pt-2">
                  <Link
                    href={agentInfo.phoneTel}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
                  >
                    Call {agentInfo.phone}
                  </Link>
                  <Link
                    href="/contact"
                    className="px-6 py-3 border-2 border-slate-300 rounded-lg font-semibold hover:bg-slate-50"
                  >
                    Contact Dr. Jan
                  </Link>
                </div>
              </div>
              <div className="relative h-72 lg:h-96 rounded-2xl overflow-hidden shadow-lg">
                <Image src={image} alt={title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
            </div>
          </div>
        </section>

        <HyperlocalFaqSection faqs={faqs} title={`${title} — FAQ`} />
        <RealScoutListings />
        <LocalBusinessCtaBar />
      </div>
    </>
  );
}
