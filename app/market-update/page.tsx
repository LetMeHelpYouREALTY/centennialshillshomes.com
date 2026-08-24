import RealScoutListings from "@/components/realscout/RealScoutListings";
import CurrentMarketBand from "@/components/seo/CurrentMarketBand";
import PageLastUpdated from "@/components/seo/PageLastUpdated";
import PageBreadcrumbs from "@/components/seo/PageBreadcrumbs";
import SchemaScript from "@/components/SchemaScript";
import Link from "next/link";
import { Phone, Calendar, Home as HomeIcon, DollarSign, ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { evergreenMarketFaqs } from "@/lib/market-copy";
import { CONTENT_LAST_UPDATED_ISO, CONTENT_LAST_UPDATED_LABEL } from "@/lib/content-freshness";
import { agentInfo, officeInfo, siteConfig } from "@/lib/site-config";
import { combineSchemas, generateFAQSchema, generateWebPageSchema } from "@/lib/schema";
import { agentHeadingLine, homesForSaleH1 } from "@/lib/heading-copy";

export const metadata: Metadata = buildPageMetadata({
  title: "Centennial Hills Market Update | Live MLS Analysis",
  description:
    "How Dr. Jan Duffy reads Centennial Hills and northwest Las Vegas market conditions using live MLS data for ZIP 89144, 89138, and 89135. Complimentary CMA. Call (702) 903-1952.",
  path: "/market-update",
  keywords: [
    "Centennial Hills market update",
    "89144 home prices",
    "Las Vegas MLS analysis",
    "Dr. Jan Duffy",
  ],
});

const faqs = evergreenMarketFaqs();

const schemas = combineSchemas(
  generateWebPageSchema({
    name: "Centennial Hills Las Vegas Market Update",
    description:
      "Evergreen guide to reading Centennial Hills inventory, pricing, and absorption from live MLS data.",
    url: "/market-update",
    datePublished: CONTENT_LAST_UPDATED_ISO,
    dateModified: CONTENT_LAST_UPDATED_ISO,
  }),
  generateFAQSchema(faqs),
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Centennial Hills Las Vegas Market Update",
    description:
      "How Dr. Jan Duffy analyzes Centennial Hills, 89144, 89138, and 89135 using current MLS listings — not a stale weekly dashboard.",
    datePublished: CONTENT_LAST_UPDATED_ISO,
    dateModified: CONTENT_LAST_UPDATED_ISO,
    author: {
      "@type": "Person",
      name: agentInfo.name,
      jobTitle: agentInfo.title,
    },
    publisher: {
      "@type": "RealEstateAgent",
      name: agentInfo.brokerage,
      url: siteConfig.url,
    },
    mainEntityOfPage: `${siteConfig.url}/market-update`,
  },
);

export default function MarketUpdatePage() {
  return (
    <>
      <SchemaScript schema={schemas} id="market-update-schema" />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-6">
            <PageBreadcrumbs
              items={[
                { name: "Market Analysis", href: "/market-analysis" },
                { name: "Weekly Update", href: "/market-update" },
              ]}
            />
          </div>

          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Calendar className="h-4 w-4 mr-2" />
              Live MLS review · {CONTENT_LAST_UPDATED_LABEL}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              {homesForSaleH1("Centennial Hills")} Market Update
            </h1>
            <p className="text-lg font-semibold text-blue-700 mb-4">{agentHeadingLine()}</p>
            <p className="text-xl text-slate-600">
              Inventory, days on market, and sold comps for ZIP codes 89144, 89138, and 89135 —
              pulled from the MLS when you request them, not invented for a dashboard.
            </p>
          </div>

          <CurrentMarketBand area="Centennial Hills" zipLabel="89144, 89138, 89135" />

          <section className="mb-16 max-w-4xl mx-auto prose prose-lg text-slate-700">
            <h2>How Dr. Jan Duffy reads this week&apos;s MLS</h2>
            <p>
              Valley-wide headlines hide what matters on a specific street in Centennial Hills.
              Dr. Jan Duffy, REALTOR® with {agentInfo.brokerage}, reviews active listings, pending
              sales, and closed comps in the same subdivision and price band as your home — then
              explains list-to-sale ratios and days on market in plain language.
            </p>
            <p>
              California relocators, move-up sellers, and 55+ buyers in northwest Las Vegas do not
              share one &quot;median.&quot; A complimentary CMA from this office uses the address you
              care about, not a placeholder statistic from last winter.
            </p>
            <p>
              Office: {officeInfo.address.full}. Hours: {siteConfig.hoursLabel}. Call{" "}
              {agentInfo.phone}.
            </p>
          </section>

          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
              What a current CMA includes
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white border-2 border-green-200 rounded-xl p-8">
                <div className="flex items-center mb-4">
                  <HomeIcon className="h-6 w-6 text-green-600 mr-3" />
                  <h3 className="text-xl font-bold text-slate-900">For buyers</h3>
                </div>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Active Centennial Hills inventory matching your beds, baths, and budget
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Recent sold comps so you do not overpay on the offer
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Same-day showing plan for 89144, 89138, and 89135
                  </li>
                </ul>
              </div>
              <div className="bg-white border-2 border-blue-200 rounded-xl p-8">
                <div className="flex items-center mb-4">
                  <DollarSign className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-bold text-slate-900">For sellers</h3>
                </div>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    Pricing from current solds on your street and similar square footage
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    Days-on-market context so the list price is competitive
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    Berkshire Hathaway HomeServices marketing reach for qualified buyers
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Centennial Hills Market FAQ
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.question} className="bg-slate-50 rounded-lg p-6">
                  <h3 className="font-bold text-slate-900 mb-2">{faq.question}</h3>
                  <p className="text-slate-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="text-center bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get a complimentary Centennial Hills CMA
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Call Dr. Jan Duffy for live MLS numbers on your address — not a placeholder chart.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={agentInfo.phoneTel}
                className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-50"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call {agentInfo.phone}
              </a>
              <Link
                href="/market-analysis"
                className="inline-flex items-center justify-center bg-blue-500 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-400"
              >
                Market analysis
              </Link>
            </div>
            <p className="mt-4 text-blue-200 text-sm">{agentInfo.brokerage}</p>
          </section>
          <PageLastUpdated />
        </div>
      </main>
      <RealScoutListings />
    </>
  );
}
