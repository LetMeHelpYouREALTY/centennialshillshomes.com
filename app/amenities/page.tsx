import type { Metadata } from "next";
import Link from "next/link";
import PageBreadcrumbs from "@/components/seo/PageBreadcrumbs";
import SchemaScript from "@/components/SchemaScript";
import {
  HyperlocalFaqSection,
  LocalBusinessCtaBar,
} from "@/components/sections/HyperlocalSections";
import {
  amenitiesFaqs,
  amenityWrittenSections,
  communityAmenitiesConfig,
  curatedPlaces,
} from "@/lib/community-amenities";
import { agentInfo, siteConfig } from "@/lib/site-config";
import { buildPageMetadata } from "@/lib/seo";
import {
  combineSchemas,
  generateBreadcrumbSchema,
  generateCommunityCenterPlaceSchema,
  generateFeaturedPlacesItemListSchema,
  generateWebPageSchema,
} from "@/lib/schema";
import AmenityMap from "@/components/maps/AmenityMap";
import { Phone } from "lucide-react";

const pageTitle = `Nearby Amenities in ${communityAmenitiesConfig.communityName}, Las Vegas`;
const pageDescription =
  "Interactive map and guide to parks, dining, grocery, healthcare, schools, and shopping near Centennial Hills, Las Vegas (89135, 89138, 89144). Dr. Jan Duffy, northwest Las Vegas REALTOR®. Call (702) 903-1952.";

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: communityAmenitiesConfig.amenitiesPagePath,
  keywords: [
    "Centennial Hills amenities",
    "nearby restaurants Centennial Hills",
    "grocery stores 89144",
    "parks northwest Las Vegas",
    "Dr. Jan Duffy",
  ],
});

export default function AmenitiesPage() {
  const { communityName, city, center, amenitiesPagePath } = communityAmenitiesConfig;

  const agentAreaExtension = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": `${siteConfig.url}#organization`,
    areaServed: { "@type": "Place", name: `${communityName}, ${city}, NV` },
  };

  const schemas = combineSchemas(
    generateWebPageSchema({
      name: pageTitle,
      description: pageDescription,
      url: amenitiesPagePath,
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Nearby Amenities", url: amenitiesPagePath },
    ]),
    generateFeaturedPlacesItemListSchema(
      curatedPlaces.map((p) => ({
        name: p.name,
        address: p.address,
        schemaType: p.schemaType,
      })),
      `Featured places near ${communityName}`,
    ),
    generateCommunityCenterPlaceSchema({
      name: `${communityName}, ${city}`,
      description: `Hyperlocal amenity guide for ${communityName} in northwest Las Vegas.`,
      lat: center.lat,
      lng: center.lng,
      pagePath: amenitiesPagePath,
    }),
    agentAreaExtension,
  );

  return (
    <>
      <SchemaScript schema={schemas} id="amenities-page-schema" />
      <div className="pt-20">
        <div className="container mx-auto max-w-6xl px-4 py-4">
          <PageBreadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Nearby Amenities", href: amenitiesPagePath },
            ]}
          />
        </div>

        <section className="border-b border-stone-200 bg-gradient-to-b from-sand to-ivory py-12 md:py-16">
          <div className="container mx-auto max-w-4xl px-4">
            <p className="text-xs font-bold uppercase tracking-widest text-terracotta-dark mb-2">
              Centennial Hills · {siteConfig.zipCodes.join(" · ")}
            </p>
            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">{pageTitle}</h1>
            <p className="text-lg text-slate-700 leading-relaxed">
              {communityName} sits in northwest {city} with quick access to US-95, the 215 Beltway, Summerlin, and Red
              Rock Canyon. Use the interactive map below to explore dining, parks, grocery, healthcare, schools, and
              shopping — then call Dr. Jan Duffy for same-day showings in ZIP codes{" "}
              {communityAmenitiesConfig.zipCodes.join(", ")}.
            </p>
            <p className="mt-4 text-sm text-stone-600">
              Map center: {center.label} ({center.address}). Coordinates used for search: {center.lat.toFixed(4)},{" "}
              {center.lng.toFixed(4)}.
            </p>
          </div>
        </section>

        <section className="py-14 bg-white" aria-labelledby="amenity-map-heading">
          <div className="container mx-auto max-w-6xl px-4">
            <h2 id="amenity-map-heading" className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
              Interactive amenity map
            </h2>
            <AmenityMap compact={false} showCuratedList />
          </div>
        </section>

        <section className="py-14 bg-slate-50" aria-labelledby="amenity-guide-heading">
          <div className="container mx-auto max-w-4xl px-4">
            <h2 id="amenity-guide-heading" className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
              Local guide by category
            </h2>
            <div className="space-y-10">
              {amenityWrittenSections.map((section) => (
                <article key={section.id} id={section.id}>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{section.title}</h3>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)} className="text-slate-700 leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </article>
              ))}
            </div>
          </div>
        </section>

        <HyperlocalFaqSection faqs={amenitiesFaqs} title={`${communityName} amenities FAQ`} schemaId="amenities-faq" />

        <section className="py-14 bg-white border-t border-stone-200">
          <div className="container mx-auto max-w-4xl px-4 text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Tour homes near these amenities</h2>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Dr. Jan Duffy is a {agentInfo.title} with {agentInfo.brokerage}. License {agentInfo.license}. Office:{" "}
              {siteConfig.hoursLabel}.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={agentInfo.phoneTel}
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
              >
                <Phone className="h-5 w-5" aria-hidden />
                Call {agentInfo.phone}
              </a>
              <Link
                href="/buy-home-centennial-hills"
                className="rounded-lg border-2 border-slate-300 px-6 py-3 font-semibold hover:bg-slate-50"
              >
                Buy in Centennial Hills
              </Link>
              <Link
                href="/listings"
                className="rounded-lg border-2 border-slate-300 px-6 py-3 font-semibold hover:bg-slate-50"
              >
                Search listings
              </Link>
            </div>
          </div>
        </section>

        <LocalBusinessCtaBar />
      </div>
    </>
  );
}
