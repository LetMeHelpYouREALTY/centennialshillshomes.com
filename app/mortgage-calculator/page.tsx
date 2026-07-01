import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import MortgageCalculator from "@/components/tools/MortgageCalculator";
import PageBreadcrumbs from "@/components/seo/PageBreadcrumbs";
import Link from "next/link";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { agentInfo } from "@/lib/site-config";

export const metadata: Metadata = buildPageMetadata({
  title: "Mortgage Calculator — Estimate Your Monthly Payment",
  description:
    "Free mortgage calculator to estimate monthly payments, interest, and total cost for your Las Vegas home purchase. Dr. Jan Duffy, Centennial Hills REALTOR®.",
  path: "/mortgage-calculator",
  keywords: [
    "mortgage calculator Las Vegas",
    "monthly payment estimate",
    "Centennial Hills home loan",
    "Dr. Jan Duffy",
  ],
});

export default function MortgageCalculatorPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-50 pt-20">
        <div className="container mx-auto px-4 py-4 max-w-5xl">
          <PageBreadcrumbs items={[{ name: "Mortgage Calculator", href: "/mortgage-calculator" }]} />
        </div>

        <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-16 md:py-20">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Mortgage Calculator</h1>
            <p className="text-lg text-blue-100">
              Estimate monthly payments, total interest, and affordability for your Las Vegas home
              purchase
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <MortgageCalculator />

            <div className="mt-12 space-y-6 text-slate-700">
              <h2 className="text-2xl font-bold text-slate-900">Understanding Your Mortgage</h2>
              <p className="text-lg leading-relaxed">
                This calculator provides estimates based on principal, interest, and loan term. Your
                actual payment may vary based on property taxes, homeowners insurance, HOA fees, and
                other factors.
              </p>
              <p className="text-lg leading-relaxed">
                Contact{" "}
                <Link href="/about" className="text-blue-600 hover:underline">
                  Dr. Jan Duffy
                </Link>{" "}
                for personalized mortgage guidance and trusted lender referrals who understand the
                Las Vegas market. Call{" "}
                <Link href={agentInfo.phoneTel} className="text-blue-600 hover:underline">
                  {agentInfo.phone}
                </Link>
                .
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
