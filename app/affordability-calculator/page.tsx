import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import AffordabilityCalculator from "@/components/tools/AffordabilityCalculator";
import PageBreadcrumbs from "@/components/seo/PageBreadcrumbs";
import Link from "next/link";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { agentInfo } from "@/lib/site-config";

export const metadata: Metadata = buildPageMetadata({
  title: "Affordability Calculator — How Much Home Can You Afford?",
  description:
    "Calculate how much home you can afford based on income, debt, and down payment. Free affordability calculator for Las Vegas and Centennial Hills buyers.",
  path: "/affordability-calculator",
  keywords: [
    "affordability calculator Las Vegas",
    "how much home can I afford",
    "Centennial Hills buyer",
    "Dr. Jan Duffy",
  ],
});

export default function AffordabilityCalculatorPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-50 pt-20">
        <div className="container mx-auto px-4 py-4 max-w-5xl">
          <PageBreadcrumbs
            items={[{ name: "Affordability Calculator", href: "/affordability-calculator" }]}
          />
        </div>

        <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-16 md:py-20">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Affordability Calculator</h1>
            <p className="text-lg text-blue-100">
              How much home can you afford in Las Vegas? Estimate based on the 28% housing guideline.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <AffordabilityCalculator />
            <p className="mt-8 text-slate-600 text-center">
              Also try our{" "}
              <Link href="/mortgage-calculator" className="text-blue-600 hover:underline">
                mortgage calculator
              </Link>{" "}
              or call{" "}
              <Link href={agentInfo.phoneTel} className="text-blue-600 hover:underline">
                {agentInfo.phone}
              </Link>{" "}
              for lender referrals.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
