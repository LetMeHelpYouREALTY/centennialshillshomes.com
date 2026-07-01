import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import PageBreadcrumbs from "@/components/seo/PageBreadcrumbs";
import Link from "next/link";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { agentInfo, officeInfo, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildPageMetadata({
  title: "Privacy Policy",
  description:
    "Privacy policy for Centennial Hills Real Estate | Homes by Dr. Jan Duffy at centennialhillshomesforsale.com.",
  path: "/privacy-policy",
  noIndex: false,
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-20">
        <div className="container mx-auto px-4 py-4 max-w-4xl">
          <PageBreadcrumbs items={[{ name: "Privacy Policy", href: "/privacy-policy" }]} />
        </div>

        <div className="container mx-auto max-w-4xl px-4 py-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Privacy Policy</h1>
          <p className="text-slate-500 mb-8">Last Updated: February 14, 2026</p>

          <div className="prose prose-lg max-w-none text-slate-700 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-slate-900">Introduction</h2>
              <p>
                {siteConfig.fullName} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is
                committed to protecting your privacy. This Privacy Policy explains how we collect,
                use, disclose, and safeguard your information when you visit{" "}
                {siteConfig.url.replace("https://", "")} and use our services.
              </p>
              <p>
                Real estate transactions involve sensitive personal and financial information. We
                take our responsibility to protect this information seriously.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900">Information We Collect</h2>
              <p>We may collect information you provide directly, including when you:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Request a home valuation or market analysis</li>
                <li>Contact us through website forms</li>
                <li>Subscribe to our newsletter or blog</li>
                <li>Schedule showings or consultations</li>
                <li>Use our AI chat or lead capture tools</li>
              </ul>
              <p className="mt-4">
                This may include your name, email address, phone number, property address, and
                transaction preferences.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900">How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide real estate services and respond to inquiries</li>
                <li>Send market updates and property alerts (with your consent)</li>
                <li>Improve our website and user experience</li>
                <li>Comply with legal and regulatory requirements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900">Third-Party Services</h2>
              <p>We use trusted third-party services including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Vercel (hosting)</li>
                <li>Cloudflare (CDN and security)</li>
                <li>Follow Up Boss (CRM)</li>
                <li>RealScout (MLS/IDX listings)</li>
                <li>Calendly (scheduling)</li>
                <li>Google Analytics</li>
              </ul>
              <p className="mt-4">
                Each service maintains its own privacy practices. See our{" "}
                <Link href="/security-policy" className="text-blue-600 hover:underline">
                  Security Policy
                </Link>{" "}
                for more details.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900">Your Rights</h2>
              <p>
                Depending on your location, you may have rights to access, correct, or delete your
                personal information. Contact us to exercise these rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900">Contact Us</h2>
              <div className="bg-slate-100 p-6 rounded-lg not-prose">
                <p className="font-semibold">{agentInfo.name}</p>
                <p>{agentInfo.brokerage}</p>
                <p>{officeInfo.address.full}</p>
                <p>
                  Email:{" "}
                  <a
                    href={`mailto:${agentInfo.email}`}
                    className="text-blue-600 hover:underline"
                  >
                    {agentInfo.email}
                  </a>
                </p>
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
