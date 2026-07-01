import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { agentInfo, officeInfo, siteConfig } from "@/lib/site-config";
import {
  footerQuickLinks,
  footerServiceLinks,
} from "@/lib/navigation";
import { neighborhoods } from "@/lib/site-config";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const social = siteConfig.social;

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <h3 className="font-bold text-xl mb-3">{siteConfig.brandName}</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4 max-w-md">
              Dr. Jan Duffy is your Centennial Hills REALTOR® — hyperlocal expertise in ZIP codes
              89135, 89138, and 89144 with Berkshire Hathaway HomeServices Nevada Properties.
            </p>
            <div className="flex gap-3">
              <a
                href={social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider text-slate-300 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {footerQuickLinks.map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider text-slate-300 mb-4">
              Realtor Services
            </h3>
            <ul className="space-y-2">
              {footerServiceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider text-slate-300 mb-4">
              Neighborhoods
            </h3>
            <ul className="space-y-2">
              {neighborhoods.slice(0, 8).map((n) => (
                <li key={n.slug}>
                  <Link
                    href={`/neighborhoods/${n.slug}`}
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    {n.name} homes
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/neighborhoods"
                  className="text-blue-400 hover:text-blue-300 text-sm font-medium"
                >
                  View all neighborhoods →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-bold text-lg mb-3">Contact Dr. Jan Duffy</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-blue-400 shrink-0 mt-0.5" />
                {officeInfo.address.full}
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-blue-400 shrink-0" />
                <Link href={agentInfo.phoneTel} className="hover:text-white">
                  {agentInfo.phone}
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-blue-400 shrink-0" />
                <Link href={`mailto:${agentInfo.email}`} className="hover:text-white">
                  {agentInfo.email}
                </Link>
              </li>
              <li>{siteConfig.hoursLabel}</li>
            </ul>
          </div>
          <div className="flex flex-wrap gap-3 items-start md:justify-end">
            <Link
              href={agentInfo.phoneTel}
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold hover:bg-blue-500"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </Link>
            <Link
              href={siteConfig.directionsUrl}
              className="inline-flex items-center gap-2 rounded-lg border border-slate-600 px-5 py-2.5 text-sm font-semibold hover:bg-slate-800"
            >
              Directions
            </Link>
            <Link
              href={siteConfig.googleReviewsUrl}
              className="inline-flex items-center gap-2 rounded-lg border border-slate-600 px-5 py-2.5 text-sm font-semibold hover:bg-slate-800"
            >
              Google Reviews
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-800 text-center md:text-left">
          <p className="text-slate-500 text-sm">
            © {currentYear} {agentInfo.brokerage}. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs mt-2">
            {agentInfo.name}, REALTOR® | License {agentInfo.license} | Equal Housing Opportunity
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-3 text-xs text-slate-500">
            <Link href="/faq" className="hover:text-white">
              FAQ
            </Link>
            <Link href="/security-policy" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/sitemap.xml" className="hover:text-white">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
