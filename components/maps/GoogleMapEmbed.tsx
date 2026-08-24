import { officeInfo, siteConfig } from "@/lib/site-config";

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
        <div className="mt-8 overflow-hidden rounded-2xl border border-stone-200 shadow-sm">
          <iframe
            title={`Map to ${officeInfo.name} at ${officeInfo.address.full}`}
            src={siteConfig.mapEmbedUrl}
            className="h-[360px] w-full border-0 md:h-[420px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={siteConfig.directionsUrl}
            className="rounded-xl bg-terracotta px-5 py-2.5 text-sm font-semibold text-white no-underline hover:bg-terracotta-dark"
          >
            Directions
          </a>
          <a
            href={siteConfig.googleReviewsUrl}
            className="rounded-xl border border-stone-300 bg-white px-5 py-2.5 text-sm font-semibold text-ink no-underline hover:bg-stone-50"
          >
            Google Reviews
          </a>
        </div>
      </div>
    </section>
  );
}
