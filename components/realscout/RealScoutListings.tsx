import { Button } from "@/components/ui/button";
import {
  REALSCOUT_OFFICE_LISTINGS_HTML,
  REALSCOUT_SIMPLE_SEARCH_HTML,
  realScoutListingsUrl,
} from "@/lib/realscout";
import RealScoutScript from "@/components/realscout/RealScoutScript";
import { agentInfo } from "@/lib/site-config";

export default function RealScoutListings() {
  const realScoutHomeSearchUrl = realScoutListingsUrl();

  return (
    <section className="py-16 md:py-24 bg-ivory" id="featured-listings">
      <RealScoutScript />
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-terracotta">
              Live MLS
            </p>
            <h2 className="mt-3 font-display text-3xl italic text-ink md:text-5xl mb-4">
              Featured Centennial Hills Homes for Sale
            </h2>
            <p className="text-stone-600 text-lg">
              Live MLS listings in northwest Las Vegas — ZIP codes 89138, 89144, and 89135
            </p>
          </div>
          <Button asChild variant="outline" className="mt-4 md:mt-0 border-terracotta text-ink">
            <a href={realScoutHomeSearchUrl} target="_blank" rel="noopener noreferrer">
              View All Properties
            </a>
          </Button>
        </div>

        <div
          className="realscout-wrapper mb-10 flex justify-center"
          dangerouslySetInnerHTML={{ __html: REALSCOUT_SIMPLE_SEARCH_HTML() }}
        />

        <div
          className="realscout-office-listings-host w-full min-h-[240px]"
          dangerouslySetInnerHTML={{ __html: REALSCOUT_OFFICE_LISTINGS_HTML() }}
        />

        <p className="mt-8 text-center text-slate-600">
          Need a specific street in 89144, 89138, or 89135? Call{" "}
          <a href={agentInfo.phoneTel} className="font-semibold text-terracotta hover:underline">
            {agentInfo.phone}
          </a>{" "}
          for same-day showings, or{" "}
          <a
            href={realScoutHomeSearchUrl}
            className="font-semibold text-terracotta hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            search the full MLS
          </a>
          .
        </p>
      </div>
    </section>
  );
}
