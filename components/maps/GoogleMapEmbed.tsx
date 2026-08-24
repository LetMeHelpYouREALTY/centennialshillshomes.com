import { Phone } from "lucide-react";
import { officeInfo, siteConfig } from "@/lib/site-config";

const OSM_EMBED = `https://www.openstreetmap.org/export/embed.html?bbox=${officeInfo.coordinates.lng - 0.015}%2C${officeInfo.coordinates.lat - 0.012}%2C${officeInfo.coordinates.lng + 0.015}%2C${officeInfo.coordinates.lat + 0.012}&layer=mapnik&marker=${officeInfo.coordinates.lat}%2C${officeInfo.coordinates.lng}`;

export default function GoogleMapEmbed() {
  return (
    <section className="bg-sand py-16 md:py-20" id="location">
      <div className="container mx-auto max-w-6xl px-4">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-terracotta">
          Visit the office
        </p>
        <h2 className="mt-3 font-display text-3xl italic text-ink md:text-4xl">
          Dr. Jan Duffy Office in Centennial Hills, 89144
        </h2>
        <p className="mt-3 max-w-2xl text-stone-600">
          {officeInfo.address.full}. {siteConfig.hoursLabel}. Call, get directions, or read Google
          reviews before you visit.
        </p>
        <div className="mt-8 grid gap-6 lg:grid-cols-5">
          <div className="overflow-hidden rounded-2xl border border-stone-200 shadow-sm lg:col-span-3">
            <iframe
              title={`Map to ${officeInfo.name} at ${officeInfo.address.full}`}
              src={OSM_EMBED}
              className="h-[320px] w-full border-0 md:h-[400px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="rounded-2xl border border-terracotta/20 bg-ivory p-6 lg:col-span-2">
            <p className="font-display text-2xl text-ink">{officeInfo.name}</p>
            <p className="mt-3 text-stone-700">{officeInfo.address.full}</p>
            <p className="mt-2 text-sm text-stone-500">{siteConfig.hoursLabel}</p>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href={officeInfo.phoneTel}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-terracotta px-5 py-2.5 text-sm font-semibold text-ink no-underline hover:bg-terracotta-dark"
              >
                <Phone className="h-4 w-4" aria-hidden />
                Call {officeInfo.phone}
              </a>
              <a
                href={siteConfig.directionsUrl}
                className="rounded-xl border border-stone-300 bg-white px-5 py-2.5 text-center text-sm font-semibold text-ink no-underline hover:bg-stone-50"
              >
                Directions
              </a>
              <a
                href={siteConfig.googleReviewsUrl}
                className="rounded-xl border border-stone-300 bg-white px-5 py-2.5 text-center text-sm font-semibold text-ink no-underline hover:bg-stone-50"
              >
                Google Reviews
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
