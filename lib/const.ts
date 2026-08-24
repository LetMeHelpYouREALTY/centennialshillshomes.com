import { homeFaqs } from "@/lib/site-config";

/** Real Centennial Hills FAQs — replaces the unused Upstash Redis dummy FAQ. */
export const dummyData = {
  faq: homeFaqs.map((item, index) => [`${index + 1}. ${item.question}`, item.answer] as [string, string]),
};

export { dummyData as centennialHillsFaqData };
