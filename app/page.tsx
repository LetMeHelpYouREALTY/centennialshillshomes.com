import Navbar from "@/components/layouts/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ReviewsSection from "@/components/sections/ReviewsSection";
import FAQSection from "@/components/sections/FAQSection";
import LocalMapSection from "@/components/sections/LocalMapSection";
import Footer from "@/components/layouts/Footer";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Home as HomeIcon, Shield, Users, Phone } from "lucide-react";
import {
  siteConfig,
  agentInfo,
  neighborhoods,
  homeFaqs,
  valuePropositions,
} from "@/lib/site-config";
import { buildPageMetadata } from "@/lib/seo";

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

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: `${agentInfo.name} - ${agentInfo.brokerage}`,
  url: siteConfig.url,
  telephone: agentInfo.phoneTel.replace("tel:", ""),
  email: agentInfo.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "1490 Center Crossing Rd",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89144",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homeFaqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main>
        <HeroSection />

        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Northwest Las Vegas Real Estate Expertise
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed">
                {valuePropositions.main}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="text-center p-6">
                <div className="bg-amber-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">BHHS Nevada Properties</h3>
                <p className="text-slate-600 text-sm">{valuePropositions.trust}</p>
              </div>
              <div className="text-center p-6">
                <div className="bg-amber-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Hyperlocal Focus</h3>
                <p className="text-slate-600 text-sm">
                  Centennial Hills, Red Rock, The Ridges, Summerlin West & more
                </p>
              </div>
              <div className="text-center p-6">
                <div className="bg-amber-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <HomeIcon className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">{siteConfig.priceRange}</h3>
                <p className="text-slate-600 text-sm">Luxury & move-up homes in northwest Las Vegas</p>
              </div>
              <div className="text-center p-6">
                <div className="bg-amber-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Phone className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Same-Day Showings</h3>
                <p className="text-slate-600 text-sm">
                  <Link href="/same-day-showings" className="text-blue-600 hover:underline">
                    Schedule quickly
                  </Link>{" "}
                  for qualified buyers
                </p>
              </div>
            </div>
          </div>
        </section>

        <RealScoutListings />

        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Communities Near Centennial Hills
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Explore northwest Las Vegas neighborhoods Dr. Jan Duffy serves
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {neighborhoods.map((area) => (
                <Link
                  key={area.slug}
                  href={`/neighborhoods/${area.slug}`}
                  className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-100"
                >
                  <div className="relative h-44">
                    <Image
                      src={area.image}
                      alt={`${area.name} homes for sale`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-slate-900 group-hover:text-blue-600">
                      {area.name}
                    </h3>
                    <p className="text-sm text-slate-600 mt-1 line-clamp-2">{area.description}</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/neighborhoods" className="text-blue-600 hover:text-blue-700 font-semibold">
                View all neighborhoods →
              </Link>
            </div>
          </div>
        </section>

        <WhyChooseUs />
        <ReviewsSection />
        <FAQSection faqs={homeFaqs} title="Centennial Hills Real Estate FAQ" />
        <LocalMapSection />

        <section className="py-16 md:py-20 bg-blue-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Buy or Sell in Centennial Hills?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Call {agentInfo.name} for same-day showings, complimentary market analysis, and
              executive-level service in northwest Las Vegas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={agentInfo.phoneTel}
                className="inline-flex items-center justify-center bg-white text-blue-700 px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-50 transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call {agentInfo.phone}
              </a>
              <Link
                href="/contact"
                className="inline-block bg-blue-800 hover:bg-blue-900 text-white px-8 py-4 rounded-md font-bold text-lg transition-colors"
              >
                Send a Message
              </Link>
            </div>
            <p className="mt-6 text-blue-200 text-sm">
              {agentInfo.name} | License {agentInfo.license} | {agentInfo.brokerage}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
