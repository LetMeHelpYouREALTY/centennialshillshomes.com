import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AmenityMap from "@/components/maps/AmenityMap";
import { communityAmenitiesConfig } from "@/lib/community-amenities";

type NearbyAmenitiesSectionProps = {
  compact?: boolean;
  className?: string;
};

export default function NearbyAmenitiesSection({
  compact = true,
  className = "",
}: NearbyAmenitiesSectionProps) {
  const { communityName, city, amenitiesPagePath } = communityAmenitiesConfig;

  return (
    <section
      className={`bg-sand py-16 md:py-20 ${className}`}
      id="whats-nearby"
      aria-labelledby="whats-nearby-heading"
    >
      <div className="container mx-auto max-w-6xl px-4">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-terracotta">What&apos;s nearby</p>
        <h2 id="whats-nearby-heading" className="mt-3 font-display text-3xl italic text-ink md:text-4xl">
          Life near {communityName}, {city}
        </h2>
        <p className="mt-3 max-w-2xl text-stone-600">
          Explore restaurants, parks, grocery, healthcare, schools, and more around northwest Las Vegas ZIP codes{" "}
          {communityAmenitiesConfig.zipCodes.join(", ")}. Switch categories on the map, then dive into the full amenity
          guide with Dr. Jan Duffy.
        </p>
        <div className="mt-8">
          <AmenityMap compact={compact} showCuratedList={!compact} />
        </div>
        <div className="mt-8">
          <Link
            href={amenitiesPagePath}
            className="inline-flex items-center gap-2 rounded-xl bg-terracotta px-5 py-2.5 text-sm font-semibold text-ink no-underline hover:bg-terracotta-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
          >
            Full nearby amenities guide
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
