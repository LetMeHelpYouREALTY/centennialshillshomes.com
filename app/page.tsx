import HomeHero from "@/components/home/HomeHero";
import StatsBand from "@/components/home/StatsBand";
import NeighborhoodGrid from "@/components/home/NeighborhoodGrid";
import AgentBio from "@/components/home/AgentBio";
import CtaBanner from "@/components/home/CtaBanner";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ReviewsSection from "@/components/sections/ReviewsSection";
import FAQSection from "@/components/sections/FAQSection";
import GoogleMapEmbed from "@/components/maps/GoogleMapEmbed";
import { LocalBusinessCtaBar } from "@/components/sections/HyperlocalSections";
import SchemaScript from "@/components/SchemaScript";
import type { Metadata } from "next";
import { homeFaqs, siteConfig } from "@/lib/site-config";
import { buildPageMetadata } from "@/lib/seo";
import { generateFAQSchema } from "@/lib/schema";

export const metadata: Metadata = buildPageMetadata({
  title: siteConfig.fullName,
  description: siteConfig.description,
  path: "/",
  keywords: [
    "Centennial Hills homes for sale",
    "89138 homes",
    "89144 real estate",
    "89135 Las Vegas",
    "Dr. Jan Duffy",
    "northwest Las Vegas REALTOR",
    "Summerlin West",
    "Red Rock Country Club",
  ],
});

export default function Home() {
  // Trust and community first (reviews + neighborhoods), then live MLS,
  // then advisor proof, FAQ, and visit/CTA — for SEO and buyer engagement.
  return (
    <>
      <SchemaScript schema={generateFAQSchema(homeFaqs)} id="home-faq-schema" />
      <main>
        <HomeHero />
        <StatsBand />
        <ReviewsSection />
        <NeighborhoodGrid />
        <RealScoutListings />
        <AgentBio />
        <WhyChooseUs />
        <FAQSection
          faqs={homeFaqs}
          title="Centennial Hills Real Estate FAQ"
          subtitle="Direct answers for buyers and sellers in ZIP codes 89135, 89138, and 89144"
        />
        <GoogleMapEmbed />
        <CtaBanner />
        <LocalBusinessCtaBar />
      </main>
    </>
  );
}
