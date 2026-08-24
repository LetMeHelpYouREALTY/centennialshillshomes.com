import { Phone, MapPin, Calendar, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import PageBreadcrumbs from "@/components/seo/PageBreadcrumbs";
import PageLastUpdated from "@/components/seo/PageLastUpdated";
import SchemaScript from "@/components/SchemaScript";
import { buildPageMetadata } from "@/lib/seo";
import { listingTourFaqs } from "@/lib/market-copy";
import { agentInfo, officeInfo, siteConfig } from "@/lib/site-config";
import { combineSchemas, generateFAQSchema, generateWebPageSchema } from "@/lib/schema";
import { CONTENT_LAST_UPDATED_ISO } from "@/lib/content-freshness";
import { realScoutListingsUrl } from "@/lib/realscout";
import { agentHeadingLine } from "@/lib/heading-copy";

type PropertyPageProps = {
  params: Promise<{ id: string }>;
};

function listingLabel(id: string): string {
  const trimmed = id.replace(/[^a-zA-Z0-9_-]/g, "").slice(0, 48);
  return trimmed || "listing";
}

export async function generateMetadata({ params }: PropertyPageProps): Promise<Metadata> {
  const { id } = await params;
  const label = listingLabel(id);

  return buildPageMetadata({
    title: `Tour MLS Listing ${label} | Centennial Hills Homes`,
    description: `Request a showing for MLS listing ${label} in Centennial Hills and northwest Las Vegas (89144, 89138, 89135) with Dr. Jan Duffy, REALTOR®. Live MLS details via RealScout. Call (702) 903-1952.`,
    path: `/listings/${encodeURIComponent(id)}`,
    keywords: [
      "Centennial Hills homes for sale",
      "MLS listing Las Vegas",
      "89144 homes",
      "Dr. Jan Duffy",
    ],
  });
}

export default async function PropertyPage({ params }: PropertyPageProps) {
  const { id } = await params;
  const label = listingLabel(id);
  const mlsSearchUrl = realScoutListingsUrl();

  const schemas = combineSchemas(
    generateWebPageSchema({
      name: `Tour MLS listing ${label} in Centennial Hills`,
      description: `Schedule a showing for listing ${label} with Dr. Jan Duffy in Centennial Hills, Las Vegas.`,
      url: `/listings/${encodeURIComponent(id)}`,
      dateModified: CONTENT_LAST_UPDATED_ISO,
    }),
    generateFAQSchema(listingTourFaqs),
  );

  return (
    <>
      <SchemaScript schema={schemas} id="listing-tour-schema" />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto mb-6">
            <PageBreadcrumbs
              items={[
                { name: "Homes for Sale", href: "/listings" },
                { name: `Listing ${label}`, href: `/listings/${encodeURIComponent(id)}` },
              ]}
            />
          </div>

          <div className="max-w-4xl mx-auto mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
              Tour This Centennial Hills MLS Listing
            </h1>
            <p className="text-lg font-semibold text-blue-700 mb-4">{agentHeadingLine()}</p>
            <p className="text-slate-600 mb-6">
              Reference <span className="font-mono text-slate-900">{label}</span>. Live price, photos,
              beds, baths, and status come from the MLS through RealScout — this page does not use
              placeholder homes or invented prices.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <a href={agentInfo.phoneTel}>
                  <Phone className="h-4 w-4 mr-2" />
                  Call {agentInfo.phone} to schedule
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href={mlsSearchUrl} target="_blank" rel="noopener noreferrer">
                  <Search className="h-4 w-4 mr-2" />
                  Open live MLS search
                </a>
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-5xl mx-auto">
            <div className="md:col-span-2 space-y-6">
              <section className="bg-slate-50 rounded-lg p-6">
                <h2 className="text-2xl font-bold text-slate-900 mb-3">How showings work</h2>
                <ol className="list-decimal list-inside space-y-2 text-slate-700">
                  <li>Call or text {agentInfo.phone} with this listing reference.</li>
                  <li>Dr. Jan Duffy confirms MLS status and showing instructions.</li>
                  <li>Qualified buyers can often tour the same day in 89144, 89138, and 89135.</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Centennial Hills Homes for Sale FAQ</h2>
                <div className="space-y-4">
                  {listingTourFaqs.map((faq) => (
                    <div key={faq.question} className="bg-white border border-slate-200 rounded-lg p-6">
                      <h3 className="font-bold text-slate-900 mb-2">{faq.question}</h3>
                      <p className="text-slate-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <aside className="md:col-span-1">
              <div className="bg-white border border-slate-200 rounded-lg p-6 sticky top-24">
                <h2 className="text-xl font-bold text-slate-900 mb-4">Contact Dr. Jan Duffy</h2>
                <p className="text-slate-600 mb-1">{agentInfo.name}, {agentInfo.title}</p>
                <p className="text-sm text-slate-600 mb-4">{agentInfo.brokerage}</p>
                <p className="text-sm text-slate-600 mb-2 flex items-start">
                  <MapPin className="h-4 w-4 mr-2 mt-0.5 shrink-0" />
                  {officeInfo.address.full}
                </p>
                <p className="text-sm text-slate-600 mb-6 flex items-start">
                  <Calendar className="h-4 w-4 mr-2 mt-0.5 shrink-0" />
                  {siteConfig.hoursLabel}
                </p>
                <div className="space-y-3">
                  <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                    <a href={agentInfo.phoneTel}>Call {agentInfo.phone}</a>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <a href="/contact">Send a message</a>
                  </Button>
                </div>
              </div>
            </aside>
          </div>

          <PageLastUpdated />
        </div>
      </main>
      <RealScoutListings />
    </>
  );
}
