import Link from "next/link";
import { ArrowRight, MapPin, Phone, Star } from "lucide-react";
import { agentInfo, officeInfo, siteConfig, agentStats } from "@/lib/site-config";
import type { FaqItem } from "@/lib/site-config";
import SchemaScript from "@/components/SchemaScript";
import { generateFAQSchema } from "@/lib/schema";
import { AGENT_HEADING, agentHeadingLine, includesAgentName } from "@/lib/heading-copy";

type SectionShellProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
};

export function SectionShell({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
  dark = false,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={`py-14 md:py-20 ${dark ? "bg-slate-900 text-white" : "bg-white"} ${className}`}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        {eyebrow ? (
          <p className="text-amber-500 text-xs font-bold uppercase tracking-[0.2em] mb-3">
            {eyebrow}
          </p>
        ) : null}
        <div className="mb-10 md:mb-12 max-w-3xl">
          <h2 className={`text-2xl md:text-4xl font-bold mb-3 ${dark ? "text-white" : "text-slate-900"}`}>
            {title}
          </h2>
          {subtitle ? (
            <p className={`text-lg leading-relaxed ${dark ? "text-slate-300" : "text-slate-600"}`}>
              {subtitle}
            </p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}

type AnswerLeadProps = {
  question: string;
  answer: string;
  bullets?: string[];
};

/** AEO-first answer block — direct answer in first 40–80 words for AI extraction */
export function AnswerLeadSection({ question, answer, bullets }: AnswerLeadProps) {
  return (
    <section className="border-b border-slate-200 bg-gradient-to-b from-blue-50/80 to-white py-10 md:py-14">
      <div className="container mx-auto px-4 max-w-4xl">
        <p className="text-xs font-bold uppercase tracking-widest text-blue-700 mb-2">
          Quick answer · Centennial Hills · {AGENT_HEADING}
        </p>
        <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">{question}</h2>
        <p className="text-lg text-slate-700 leading-relaxed mb-6">{answer}</p>
        {bullets && bullets.length > 0 ? (
          <ul className="grid sm:grid-cols-2 gap-3">
            {bullets.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm"
              >
                <MapPin className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
}

type HyperlocalFaqProps = {
  title?: string;
  faqs: FaqItem[];
  schemaId?: string;
};

export function HyperlocalFaqSection({
  title = "Centennial Hills Homes for Sale FAQ",
  faqs,
  schemaId = "page-faq-schema",
}: HyperlocalFaqProps) {
  return (
    <SectionShell
      id="faq"
      eyebrow="Answer Engine Ready"
      title={title}
      subtitle="Direct answers for buyers and sellers in ZIP codes 89135, 89138, and 89144 — structured for Google and AI search."
      className="bg-slate-50"
    >
      <SchemaScript schema={generateFAQSchema(faqs)} id={schemaId} />
      <div className="space-y-4 max-w-4xl">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="group rounded-xl border border-slate-200 bg-white shadow-sm open:shadow-md transition-shadow"
          >
            <summary className="cursor-pointer list-none px-5 py-4 font-semibold text-slate-900 flex items-center justify-between gap-4">
              {faq.question}
              <ArrowRight className="h-4 w-4 text-blue-600 shrink-0 transition-transform group-open:rotate-90" />
            </summary>
            <div className="px-5 pb-5 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
              {faq.answer}
            </div>
          </details>
        ))}
      </div>
    </SectionShell>
  );
}

type ServiceCard = {
  title: string;
  description: string;
  href: string;
};

export function RealtorServicesGrid({ services }: { services: ServiceCard[] }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {services.map((service) => (
        <Link
          key={service.href}
          href={service.href}
          className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:border-blue-300 hover:shadow-md transition-all"
        >
          <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-700">
            {service.title}
          </h3>
          <p className="text-sm text-slate-600 mb-4 leading-relaxed">{service.description}</p>
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600">
            Learn more <ArrowRight className="h-4 w-4" />
          </span>
        </Link>
      ))}
    </div>
  );
}

export function LocalBusinessCtaBar() {
  return (
    <section className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-2">
              {siteConfig.brandName}
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Work with Dr. Jan Duffy, Centennial Hills REALTOR®
            </h2>
            <p className="text-slate-300 mb-4 leading-relaxed">
              Licensed Nevada REALTOR® {agentInfo.license}. Serving northwest Las Vegas buyers and
              sellers with same-day showings, complimentary market analysis, and Berkshire Hathaway
              HomeServices backing.
            </p>
            <div className="flex items-center gap-2 text-amber-400 mb-6">
              <Star className="h-5 w-5 fill-current" aria-hidden />
              <span className="font-semibold">
                {agentStats.averageRating} · {agentStats.reviewCount}+ Google reviews
              </span>
            </div>
            <p className="text-sm text-slate-400 flex items-start gap-2">
              <MapPin className="h-4 w-4 shrink-0 mt-0.5" aria-hidden />
              {officeInfo.address.full} · {siteConfig.hoursLabel}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
            <Link
              href={agentInfo.phoneTel}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-4 font-semibold hover:bg-blue-500 transition-colors"
            >
              <Phone className="h-5 w-5" aria-hidden />
              Call {agentInfo.phone}
            </Link>
            <Link
              href={siteConfig.directionsUrl}
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 px-6 py-4 font-semibold hover:bg-white/10 transition-colors"
            >
              Get Directions
            </Link>
            <Link
              href={siteConfig.googleReviewsUrl}
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 px-6 py-4 font-semibold hover:bg-white/10 transition-colors"
            >
              View Google Reviews
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white text-slate-900 px-6 py-4 font-semibold hover:bg-slate-100 transition-colors"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt,
  place,
}: {
  eyebrow?: string;
  title: string;
  subtitle: string;
  image?: string;
  imageAlt?: string;
  place?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-slate-900 text-white">
      {image ? (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center opacity-35"
            style={{ backgroundImage: `url(${image})` }}
            role="img"
            aria-label={imageAlt ?? title}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/85 to-blue-950/80" />
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900" />
      )}
      <div className="container relative z-10 mx-auto px-4 py-16 md:py-24 max-w-4xl">
        {eyebrow ? (
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
          {title}
          {!includesAgentName(title) ? (
            <span className="mt-2 block text-xl md:text-2xl font-semibold text-amber-400">
              {agentHeadingLine(place)}
            </span>
          ) : null}
        </h1>
        <p className="text-lg md:text-xl text-slate-200 leading-relaxed max-w-3xl">{subtitle}</p>
      </div>
    </section>
  );
}
