import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import PageBreadcrumbs from "@/components/seo/PageBreadcrumbs";
import Link from "next/link";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { agentInfo, officeInfo, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildPageMetadata({
  title: "Terms of Service",
  description:
    "Terms of service for Centennial Hills Real Estate | Homes by Dr. Jan Duffy at centennialhillshomesforsale.com.",
  path: "/terms-of-service",
});

export default function TermsOfServicePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-20">
        <div className="container mx-auto px-4 py-4 max-w-4xl">
          <PageBreadcrumbs items={[{ name: "Terms of Service", href: "/terms-of-service" }]} />
        </div>

        <div className="container mx-auto max-w-4xl px-4 py-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Terms of Service</h1>
          <p className="text-slate-500 mb-8">Last Updated: February 14, 2026</p>

          <div className="prose prose-lg max-w-none text-slate-700 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-slate-900">Agreement to Terms</h2>
              <p>
                By accessing {siteConfig.url.replace("https://", "")}, you agree to these Terms of
                Service. If you do not agree, please do not use this website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900">Real Estate Services</h2>
              <p>
                {agentInfo.name}, License {agentInfo.license}, is a licensed REALTOR® with{" "}
                {agentInfo.brokerage}. Information on this site is for general purposes and does not
                constitute legal, financial, or tax advice.
              </p>
              <p>
                Property listings are provided through MLS/IDX feeds via RealScout and are deemed
                reliable but not guaranteed. All listings should be verified independently.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900">Fair Housing</h2>
              <p>
                We are committed to compliance with the Fair Housing Act and do not discriminate
                based on race, color, religion, sex, handicap, familial status, national origin, or
                any other protected class.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900">Intellectual Property</h2>
              <p>
                Content on this website, including text, images, and branding, is owned by{" "}
                {siteConfig.fullName} or used with permission. Unauthorized reproduction is
                prohibited.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900">Limitation of Liability</h2>
              <p>
                We strive for accuracy but make no warranties about completeness or timeliness of
                information. Use of this site is at your own risk. See our{" "}
                <Link href="/privacy-policy" className="text-blue-600 hover:underline">
                  Privacy Policy
                </Link>{" "}
                for data handling practices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900">Contact</h2>
              <div className="bg-slate-100 p-6 rounded-lg not-prose">
                <p className="font-semibold">{agentInfo.name}</p>
                <p>{agentInfo.brokerage}</p>
                <p>{officeInfo.address.full}</p>
                <p>
                  Phone:{" "}
                  <a href={agentInfo.phoneTel} className="text-blue-600 hover:underline">
                    {agentInfo.phone}
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
