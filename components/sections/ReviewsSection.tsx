"use client";

import { Star, Quote } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import {
  homepageAggregateRating,
  homepageReviewsDisplay,
} from "@/lib/reviews";

export type Review = import("@/lib/reviews").HomepageReviewDisplay;

export const defaultReviews = homepageReviewsDisplay;
export const aggregateRating = homepageAggregateRating;

interface ReviewsSectionProps {
  reviews?: readonly Review[];
  title?: string;
  subtitle?: string;
  googleReviewsUrl?: string;
  className?: string;
}

export default function ReviewsSection({
  reviews = homepageReviewsDisplay,
  title = "What Our Clients Say",
  subtitle = "Client feedback from buyers and sellers in Centennial Hills and northwest Las Vegas",
  googleReviewsUrl = siteConfig.googleReviewsUrl,
  className = "",
}: ReviewsSectionProps) {
  return (
    <section className={`py-16 md:py-24 bg-slate-50 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">{subtitle}</p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-6 w-6 ${
                    i < Math.floor(aggregateRating.ratingValue)
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-slate-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-lg font-semibold text-slate-900">
              {aggregateRating.ratingValue}
            </span>
            <span className="text-slate-600">({aggregateRating.reviewCount}+ reviews)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review) => (
            <article
              key={review.id}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 flex-shrink-0">
                  {review.image ? (
                    <Image
                      src={review.image}
                      alt={review.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-slate-200 flex items-center justify-center">
                      <span className="text-slate-400 text-sm">{review.name[0]}</span>
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">{review.name}</h3>
                  <p className="text-sm text-slate-600">{review.location}</p>
                </div>
              </div>

              <div className="flex items-center mb-4" aria-label={`${review.rating} out of 5 stars`}>
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-slate-300"
                    }`}
                  />
                ))}
              </div>

              <div className="relative">
                <Quote className="absolute -top-2 -left-2 h-8 w-8 text-blue-100" aria-hidden />
                <p className="text-slate-700 relative z-10 pl-4">{review.text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href={googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
          >
            Read More Reviews on Google
            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
          </a>
        </div>
      </div>
    </section>
  );
}

export function getReviewSchemaData(reviews: Review[]) {
  return reviews.map((review) => ({
    author: review.name,
    rating: review.rating,
    text: review.text,
    date: review.date,
  }));
}
