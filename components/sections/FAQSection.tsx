"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { homeFaqs } from "@/lib/site-config";

export interface FAQ {
  question: string;
  answer: string;
}

export const defaultFaqs: FAQ[] = homeFaqs;

interface FAQSectionProps {
  /** Custom FAQs to display (defaults to defaultFaqs) */
  faqs?: FAQ[];
  /** Custom title for the section */
  title?: string;
  /** Custom subtitle for the section */
  subtitle?: string;
  /** Whether to include JSON-LD schema (handled separately by FAQSchema component) */
  className?: string;
}

export default function FAQSection({
  faqs = defaultFaqs,
  title = "Centennial Hills Homes for Sale FAQ",
  subtitle = "Direct answers for buyers and sellers in ZIP codes 89135, 89138, and 89144",
  className = "",
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`py-16 md:py-24 bg-ivory ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-terracotta">
            Buyer questions
          </p>
          <h2 className="mt-3 font-display text-3xl italic text-ink md:text-5xl mb-4">
            {title}
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-terracotta/20 rounded-lg mb-4 overflow-hidden bg-white"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-sand transition-colors"
              >
                <span className="font-semibold text-ink pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-terracotta-dark flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-stone-400 flex-shrink-0" />
                )}
              </button>
              <div
                className={`px-6 py-4 bg-sand/60 border-t border-terracotta/15 ${
                  openIndex === index ? "block" : "hidden"
                }`}
              >
                <p className="text-stone-700">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Helper to generate FAQ schema data from FAQ array
 * Use with FAQSchema component: <FAQSchema faqs={getFAQSchemaData(faqs)} />
 */
export function getFAQSchemaData(faqs: FAQ[]) {
  return faqs.map((faq) => ({
    question: faq.question,
    answer: faq.answer,
  }));
}
