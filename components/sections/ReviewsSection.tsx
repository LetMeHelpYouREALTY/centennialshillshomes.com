import { Star } from "lucide-react";
import { agentInfo, agentStats, siteConfig } from "@/lib/site-config";

interface ReviewsSectionProps {
  title?: string;
  subtitle?: string;
  googleReviewsUrl?: string;
  className?: string;
}

export default function ReviewsSection({
  title = "Google Reviews for Dr. Jan Duffy in Centennial Hills",
  subtitle = "Verified client feedback is on Google — this site does not publish placeholder testimonials.",
  googleReviewsUrl = siteConfig.googleReviewsUrl,
  className = "",
}: ReviewsSectionProps) {
  return (
    <section className={`py-16 md:py-24 bg-slate-50 ${className}`} aria-labelledby="reviews-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <h2 id="reviews-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-slate-600">{subtitle}</p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex" aria-hidden>
              {[0, 1, 2, 3, 4].map((i) => (
                <Star
                  key={i}
                  className={`h-6 w-6 ${
                    i < Math.floor(agentStats.averageRating)
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-slate-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-lg font-semibold text-slate-900">{agentStats.averageRating}</span>
            <span className="text-slate-600">({agentStats.reviewCount}+ Google reviews)</span>
          </div>
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-slate-200 p-8 text-center">
          <p className="text-slate-700 mb-6">
            Read current reviews for {agentInfo.name} at {agentInfo.brokerage},{" "}
            {siteConfig.url.replace("https://", "")}. Call {agentInfo.phone} to discuss buying or
            selling in ZIP codes 89144, 89138, and 89135.
          </p>
          <a
            href={googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700"
          >
            View Google reviews
            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
          </a>
        </div>
      </div>
    </section>
  );
}
