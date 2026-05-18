import type { ReviewItem } from "@/lib/schema";

/** Homepage client testimonials — shared by UI and JSON-LD */
export const homepageReviews: ReviewItem[] = [
  {
    author: "Tom Sanders",
    rating: 5,
    reviewBody:
      "Dr. Duffy made our home buying experience seamless. Her knowledge of the Las Vegas market is unmatched, and she guided us through every step with professionalism and care.",
    datePublished: "2025-11-15",
  },
  {
    author: "Vitor Palmer",
    rating: 5,
    reviewBody:
      "We couldn't be happier with our new home! The entire process was smooth, and Dr. Duffy's attention to detail and negotiation skills saved us thousands. Highly recommend!",
    datePublished: "2025-10-22",
  },
  {
    author: "Emily Rodriguez",
    rating: 5,
    reviewBody:
      "As first-time homebuyers, we were nervous about the process. Dr. Duffy patiently explained everything and helped us find the perfect home in our budget. Thank you!",
    datePublished: "2025-09-08",
  },
];

export type HomepageReviewDisplay = {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  image?: string;
  date?: string;
};

export const homepageReviewsDisplay: HomepageReviewDisplay[] = [
  {
    id: 1,
    name: "Tom Sanders",
    location: "Las Vegas, NV",
    rating: 5,
    text: homepageReviews[0].reviewBody,
    image: "/Image/person1.jpeg",
    date: homepageReviews[0].datePublished,
  },
  {
    id: 2,
    name: "Vitor Palmer",
    location: "Henderson, NV",
    rating: 5,
    text: homepageReviews[1].reviewBody,
    image: "/Image/person_2-min.jpg",
    date: homepageReviews[1].datePublished,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    location: "Summerlin, NV",
    rating: 5,
    text: homepageReviews[2].reviewBody,
    image: "/Image/person_4-min.jpg",
    date: homepageReviews[2].datePublished,
  },
] as const;

export const homepageAggregateRating = {
  ratingValue: 4.9,
  reviewCount: 500,
  bestRating: 5,
  worstRating: 1,
};
