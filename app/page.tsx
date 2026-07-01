import HeroSection from "@/components/sections/HeroSection";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ReviewsSection from "@/components/sections/ReviewsSection";
import FAQSection from "@/components/sections/FAQSection";
import LocalMapSection from "@/components/sections/LocalMapSection";
import { LocalBusinessCtaBar } from "@/components/sections/HyperlocalSections";
import SchemaScript from "@/components/SchemaScript";
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
  return (
    <>
      <SchemaScript schema={generateFAQSchema(homeFaqs)} id="home-faq-schema" />
      <main>
        <HeroSection />

        <section className="py-10 bg-gradient-to-b from-blue-50/60 to-white border-b border-slate-200">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-blue-700 mb-2">
              Hyperlocal REALTOR® Services
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Who is the best REALTOR® in Centennial Hills?
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              Dr. Jan Duffy is a Top 1% Berkshire Hathaway HomeServices Nevada Properties REALTOR®
              (License {agentInfo.license}) serving ZIP codes 89135, 89138, and 89144 with same-day
              showings, complimentary market analysis, and 500+ closed transactions since 2008.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              <Link href="/realtor-services" className="text-blue-600 font-semibold hover:underline">
                View realtor services →
              </Link>
              <Link href="/centennial-hills-realtor" className="text-blue-600 font-semibold hover:underline">
                About Dr. Jan Duffy →
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Northwest Las Vegas Real Estate Expertise
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed">{valuePropositions.main}</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                { icon: Shield, title: "BHHS Nevada Properties", text: valuePropositions.trust },
                {
                  icon: Users,
                  title: "Hyperlocal Focus",
                  text: "Centennial Hills, Red Rock, The Ridges, Summerlin West & more",
                },
                {
                  icon: HomeIcon,
                  title: siteConfig.priceRange,
                  text: "Luxury & move-up homes in northwest Las Vegas",
                },
                {
                  icon: Phone,
                  title: "Same-Day Showings",
                  text: "Fast tours for qualified buyers",
                  link: "/same-day-showings",
                  linkLabel: "Schedule quickly",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="text-center p-6 rounded-2xl border border-slate-200 bg-slate-50/50"
                  >
                    <div className="bg-amber-500 rounded-xl p-3 w-14 h-14 mx-auto mb-4 flex items-center justify-center">
                      <Icon className="h-7 w-7 text-white" aria-hidden />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-slate-600 text-sm">
                      {item.link ? (
                        <>
                          <Link href={item.link} className="text-blue-600 hover:underline">
                            {item.linkLabel}
                          </Link>
                          {" — "}
                          {item.text}
                        </>
                      ) : (
                        item.text
                      )}
                    </p>
                  </div>
                );
              })}
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
                      alt={`${area.name} homes for sale near Centennial Hills`}
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
            <div className="flex flex-wrap justify-center gap-4 mt-8 text-sm font-semibold">
              <Link href="/neighborhoods" className="text-blue-600 hover:text-blue-700">
                All neighborhoods →
              </Link>
              <Link href="/zip-89144-homes-for-sale" className="text-blue-600 hover:text-blue-700">
                89144 homes →
              </Link>
              <Link href="/zip-89138-homes-for-sale" className="text-blue-600 hover:text-blue-700">
                89138 homes →
              </Link>
              <Link href="/zip-89135-homes-for-sale" className="text-blue-600 hover:text-blue-700">
                89135 homes →
              </Link>
            </div>
          </div>
        </section>

        <WhyChooseUs />
        <ReviewsSection />
        <FAQSection faqs={homeFaqs} title="Centennial Hills Real Estate FAQ" />
        <LocalMapSection />
        <LocalBusinessCtaBar />
      </main>
    </>
  );
}
