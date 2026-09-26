import { Star, Phone, MapPin, ExternalLink } from "lucide-react";
import { agentInfo, agentStats, gbpReviews, officeInfo, siteConfig } from "@/lib/site-config";
import AgentPortrait from "@/components/AgentPortrait";

interface ReviewsSectionProps {
  title?: string;
  subtitle?: string;
  googleReviewsUrl?: string;
  className?: string;
}

export default function ReviewsSection({
  title = "Google Reviews for Dr. Jan Duffy in Centennial Hills",
  subtitle = "Verified Google ratings for Centennial Hills Real Estate in ZIP 89144.",
  googleReviewsUrl = siteConfig.googleReviewsUrl,
  className = "",
}: ReviewsSectionProps) {
  const snippets = [
    {
      label: "Google rating",
      value: `${gbpReviews.ratingValue}.0 / 5`,
      detail: "Google Business Profile",
    },
    {
      label: "Review count",
      value: `${gbpReviews.reviewCount}`,
      detail: "Google review on the Business Profile",
    },
    {
      label: "Office",
      value: officeInfo.address.zip,
      detail: officeInfo.address.full,
    },
  ];

  return (
    <section className={`bg-sand py-16 md:py-24 ${className}`} aria-labelledby="reviews-heading">
      <div className="container mx-auto px-4">
        <div className="mb-10 flex max-w-3xl items-center gap-5">
          <AgentPortrait size="lg" />
          <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-terracotta">
            Google reviews
          </p>
          <h2 id="reviews-heading" className="mt-3 font-display text-3xl italic text-ink md:text-5xl">
            {title}
          </h2>
          <p className="mt-4 text-lg text-stone-600">{subtitle}</p>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {snippets.map((snippet) => (
            <div
              key={snippet.label}
              className="rounded-2xl border border-terracotta/25 bg-ivory p-6 shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">
                {snippet.label}
              </p>
              <p className="mt-3 font-display text-3xl text-ink">{snippet.value}</p>
              <p className="mt-2 text-sm text-stone-600">{snippet.detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-start gap-4 rounded-2xl border border-stone-200 bg-white p-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex" aria-hidden>
              {[0, 1, 2, 3, 4].map((i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < Math.floor(agentStats.averageRating)
                      ? "fill-terracotta text-terracotta"
                      : "text-stone-300"
                  }`}
                />
              ))}
            </div>
            <p className="text-stone-700">
              {gbpReviews.label} for{" "}
              {agentInfo.name}, {agentInfo.title}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-terracotta px-5 py-2.5 text-sm font-semibold text-ink no-underline hover:bg-terracotta-dark"
            >
              View Google reviews
              <ExternalLink className="h-4 w-4" aria-hidden />
            </a>
            <a
              href={agentInfo.phoneTel}
              className="inline-flex items-center gap-2 rounded-xl border border-stone-300 px-5 py-2.5 text-sm font-semibold text-ink no-underline hover:bg-sand"
            >
              <Phone className="h-4 w-4" aria-hidden />
              Call {agentInfo.phone}
            </a>
            <a
              href={siteConfig.directionsUrl}
              className="inline-flex items-center gap-2 rounded-xl border border-stone-300 px-5 py-2.5 text-sm font-semibold text-ink no-underline hover:bg-sand"
            >
              <MapPin className="h-4 w-4" aria-hidden />
              Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
