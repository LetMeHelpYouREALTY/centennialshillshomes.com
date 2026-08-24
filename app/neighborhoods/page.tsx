import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin } from "lucide-react";
import type { Metadata } from "next";
import { agentInfo, neighborhoods, siteConfig } from "@/lib/site-config";
import { buildPageMetadata } from "@/lib/seo";
import PageBreadcrumbs from "@/components/seo/PageBreadcrumbs";
import { LocalBusinessCtaBar } from "@/components/sections/HyperlocalSections";
import { zipNav } from "@/lib/navigation";

export const metadata: Metadata = buildPageMetadata({
  title: "Centennial Hills Neighborhoods | Dr. Jan Duffy, REALTOR®",
  description:
    "Explore northwest Las Vegas communities near Centennial Hills — Red Rock Country Club, The Ridges, Summerlin West, Lone Mountain, Henderson, and more. Dr. Jan Duffy, REALTOR®. Call (702) 903-1952.",
  path: "/neighborhoods",
  keywords: [
    "Centennial Hills neighborhoods",
    "northwest Las Vegas communities",
    "Red Rock Country Club homes",
    "Summerlin West real estate",
    "89144 homes",
    "89138 homes",
    "89135 homes",
  ],
});

export default function NeighborhoodsPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-20">
      <div className="container mx-auto px-4 pb-4 max-w-6xl">
        <PageBreadcrumbs items={[{ name: "Neighborhoods", href: "/neighborhoods" }]} />
      </div>

      <section className="py-12 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-700 mb-2">
            Hyperlocal guides
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            Centennial Hills & Northwest Las Vegas Neighborhoods
          </h1>
          <p className="text-lg text-slate-600 mb-6 leading-relaxed">
            Dr. Jan Duffy serves Centennial Hills and adjacent luxury and move-up communities in ZIP
            codes {siteConfig.zipCodes.join(", ")} — with Place and FAQ schema on every guide for
            Google and AI search visibility.
          </p>
          <a
            href={agentInfo.phoneTel}
            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline"
          >
            <Phone className="h-5 w-5" aria-hidden />
            {agentInfo.phone}
          </a>
        </div>
      </section>

      <section className="py-8 bg-blue-50 border-b border-blue-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-lg font-bold text-slate-900 mb-4 text-center">
            Centennial Hills Homes by ZIP: 89144, 89138, 89135
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {zipNav.links.map((z) => (
              <Link
                key={z.href}
                href={z.href}
                className="rounded-lg bg-white border border-blue-200 px-5 py-3 text-sm font-semibold text-blue-800 hover:bg-blue-100 transition-colors"
              >
                {z.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {neighborhoods.map((area) => (
              <Link
                key={area.slug}
                href={`/neighborhoods/${area.slug}`}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg border border-slate-100 transition-all hover:border-blue-200"
              >
                <div className="relative h-48">
                  <Image
                    src={area.image}
                    alt={`${area.name} homes for sale — Centennial Hills area`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <h2 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 mb-2">
                    {area.name}
                  </h2>
                  <p className="text-slate-600 text-sm mb-3 leading-relaxed">{area.description}</p>
                  <p className="text-xs text-slate-500 flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" aria-hidden />
                    {area.highlights.slice(0, 2).join(" · ")}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <RealScoutListings />
      <LocalBusinessCtaBar />
    </main>
  );
}
