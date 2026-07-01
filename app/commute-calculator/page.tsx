import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import CommuteWidget from "@/components/tools/CommuteWidget";
import PageBreadcrumbs from "@/components/seo/PageBreadcrumbs";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Commute Calculator — Las Vegas Travel Times",
  description:
    "Plan your daily commute from Las Vegas and Centennial Hills neighborhoods to work, school, or other destinations.",
  path: "/commute-calculator",
  keywords: [
    "commute calculator Las Vegas",
    "Centennial Hills commute",
    "travel time Las Vegas",
  ],
});

const commuteTips = [
  {
    title: "Peak Hours",
    text: "Las Vegas traffic is typically heaviest 7–9 AM and 5–7 PM on weekdays. Consider flexible hours when possible.",
  },
  {
    title: "Alternative Routes",
    text: "Multiple freeway options (I-15, I-215, US-95) and surface streets — always have backup routes planned.",
  },
  {
    title: "Public Transit",
    text: "RTC buses serve most areas; the Las Vegas Monorail connects Strip corridors to downtown.",
  },
  {
    title: "Weather",
    text: "Monsoon season (July–September) can impact drive times — plan extra buffer during summer storms.",
  },
];

export default function CommuteCalculatorPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-50 pt-20">
        <div className="container mx-auto px-4 py-4 max-w-5xl">
          <PageBreadcrumbs items={[{ name: "Commute Calculator", href: "/commute-calculator" }]} />
        </div>

        <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-16 md:py-20">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Commute Calculator</h1>
            <p className="text-lg text-blue-100">
              Plan travel times from potential northwest Las Vegas homes to your destinations
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <CommuteWidget />
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
              Commute Planning Tips
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {commuteTips.map((tip) => (
                <div key={tip.title} className="rounded-lg border border-slate-200 p-6 bg-slate-50">
                  <h3 className="font-semibold text-slate-900 mb-2">{tip.title}</h3>
                  <p className="text-slate-600">{tip.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
