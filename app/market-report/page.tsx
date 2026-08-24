import RealScoutListings from "@/components/realscout/RealScoutListings";
import CurrentMarketBand from "@/components/seo/CurrentMarketBand";
import PageLastUpdated from "@/components/seo/PageLastUpdated";
import PageBreadcrumbs from "@/components/seo/PageBreadcrumbs";
import SchemaScript from "@/components/SchemaScript";
import Link from "next/link";
import { Phone, Home, DollarSign, BarChart } from "lucide-react";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { evergreenMarketFaqs } from "@/lib/market-copy";
import { CONTENT_LAST_UPDATED_ISO, CONTENT_LAST_UPDATED_LABEL } from "@/lib/content-freshness";
import { agentInfo, officeInfo, siteConfig } from "@/lib/site-config";
import { combineSchemas, generateFAQSchema, generateWebPageSchema } from "@/lib/schema";
import { agentHeadingLine } from "@/lib/heading-copy";

export const metadata: Metadata = buildPageMetadata({
  title: "Centennial Hills Market Report | Complimentary CMA",
  description:
    "Request a current Centennial Hills market report from Dr. Jan Duffy. Live MLS comps for 89144, 89138, and 89135 — no invented January snapshots. Call (702) 903-1952.",
  path: "/market-report",
  keywords: [
    "Centennial Hills market report",
    "Las Vegas home prices",
    "89144 CMA",
    "Berkshire Hathaway HomeServices",
  ],
});

const faqs = evergreenMarketFaqs();
const areaLinks = [
  { area: "Centennial Hills", href: "/neighborhoods/centennial-hills", zip: "89144" },
  { area: "Summerlin West", href: "/neighborhoods/summerlin-west", zip: "89135" },
  { area: "Lone Mountain", href: "/neighborhoods/lone-mountain", zip: "89129" },
  { area: "Skye Canyon", href: "/neighborhoods/skye-canyon", zip: "89166" },
  { area: "North Las Vegas", href: "/neighborhoods/north-las-vegas", zip: "89131–89149" },
  { area: "The Ridges", href: "/neighborhoods/the-ridges", zip: "89135" },
];

const schemas = combineSchemas(
  generateWebPageSchema({
    name: "Centennial Hills Market Report",
    description: "How to get a live MLS market report for Centennial Hills and northwest Las Vegas.",
    url: "/market-report",
    dateModified: CONTENT_LAST_UPDATED_ISO,
  }),
  generateFAQSchema(faqs),
);

export default function MarketReportPage() {
  return (
    <>
      <SchemaScript schema={schemas} id="market-report-schema" />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-6">
            <PageBreadcrumbs
              items={[
                { name: "Market Analysis", href: "/market-analysis" },
                { name: "Market Report", href: "/market-report" },
              ]}
            />
          </div>

          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Berkshire Hathaway HomeServices · {CONTENT_LAST_UPDATED_LABEL}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Centennial Hills Market Report
            </h1>
            <p className="text-lg font-semibold text-blue-700 mb-4">{agentHeadingLine()}</p>
            <p className="text-xl text-slate-600">
              Expert analysis from {agentInfo.brokerage} using current MLS listings — not a frozen
              January dashboard.
            </p>
          </div>

          <CurrentMarketBand area="Northwest Las Vegas" zipLabel="89144, 89138, 89135" />

          <section className="mb-16 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Request pricing by community
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {areaLinks.map((item) => (
                <Link
                  key={item.area}
                  href={item.href}
                  className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <h3 className="font-bold text-lg text-slate-900 mb-2">{item.area}</h3>
                  <p className="text-slate-600 text-sm mb-3">ZIP {item.zip}</p>
                  <p className="text-blue-600 font-semibold text-sm">Live listings + complimentary CMA →</p>
                </Link>
              ))}
            </div>
          </section>

          <section className="mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Expert market analysis
            </h2>
            <div className="bg-slate-50 rounded-lg p-8">
              <blockquote className="text-lg text-slate-700 italic mb-6">
                &quot;I price Centennial Hills homes from the MLS street by street. A valley median
                does not tell you what a 2,200-square-foot home in 89144 will appraise for this week.
                Call me and I will send the comps.&quot;
              </blockquote>
              <cite className="text-slate-900 font-semibold">
                — {agentInfo.name}, {agentInfo.brokerage}
              </cite>
            </div>
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-4 flex items-center">
                  <Home className="h-5 w-5 text-blue-600 mr-2" />
                  For buyers
                </h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• Pre-approval before touring 89144 / 89138 / 89135</li>
                  <li>• Offer strategy from current sold comps</li>
                  <li>• New-construction contract review at no extra buyer fee</li>
                </ul>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-4 flex items-center">
                  <DollarSign className="h-5 w-5 text-green-600 mr-2" />
                  For sellers
                </h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• List price from active competition on your street</li>
                  <li>• Staging and photo plan before going live</li>
                  <li>• BHHS marketing to local and out-of-state buyers</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Key trends we watch in the MLS
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <BarChart className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">California equity buyers</h3>
                <p className="text-slate-600 text-sm">
                  Relocators often compare Summerlin West and Centennial Hills to coastal California
                  housing costs. Dr. Jan Duffy maps commute, HOA, and lot size — not school ratings as
                  a selling pitch.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Home className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">New construction</h3>
                <p className="text-slate-600 text-sm">
                  Builder incentives change by community and month. We track current credits and
                  rate buydowns when you are under a specific lot reservation.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <DollarSign className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Luxury northwest</h3>
                <p className="text-slate-600 text-sm">
                  Guard-gated inventory in The Ridges and Red Rock Country Club is priced from live
                  comps. Call {agentInfo.phone} for a confidential listing consultation.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Market questions we hear
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get a personalized market report</h2>
            <p className="text-xl text-blue-100 mb-8">
              {officeInfo.address.full} · {siteConfig.hoursLabel}
            </p>
            <a
              href={agentInfo.phoneTel}
              className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-50"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call {agentInfo.phone}
            </a>
          </section>
          <PageLastUpdated />
        </div>
      </main>
      <RealScoutListings />
    </>
  );
}
