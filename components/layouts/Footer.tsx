import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Star, Calendar } from "lucide-react";
import { agentInfo, officeInfo, siteConfig, neighborhoods, agentStats } from "@/lib/site-config";
import { footerQuickLinks, footerServiceLinks } from "@/lib/navigation";

export default function Footer() {
  const year = new Date().getFullYear();
  const social = siteConfig.social;

  return (
    <footer className="border-t border-white/10 bg-ink text-white">
      <div className="border-b border-white/10 bg-ink">
        <div className="container mx-auto grid gap-3 px-4 py-8 sm:grid-cols-2 lg:grid-cols-4">
          <Link
            href={agentInfo.phoneTel}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-terracotta px-5 py-3.5 text-sm font-semibold text-ink no-underline hover:bg-terracotta-light"
          >
            <Phone className="h-4 w-4" aria-hidden />
            Call {agentInfo.phone}
          </Link>
          <a
            href={siteConfig.directionsUrl}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 px-5 py-3.5 text-sm font-semibold text-white no-underline hover:bg-white/10"
          >
            <MapPin className="h-4 w-4" aria-hidden />
            Get Directions
          </a>
          <a
            href={siteConfig.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 px-5 py-3.5 text-sm font-semibold text-white no-underline hover:bg-white/10"
          >
            <Star className="h-4 w-4 fill-terracotta-light text-terracotta-light" aria-hidden />
            View Google Reviews
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-semibold text-ink no-underline hover:bg-sand"
          >
            <Calendar className="h-4 w-4" aria-hidden />
            Schedule Consultation
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-2xl">{agentInfo.name}</p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-terracotta-light">
              {agentInfo.title} · Centennial Hills
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              {agentInfo.brokerage}
            </p>
            <p className="mt-2 text-sm text-white/55">License {agentInfo.license}</p>
            <p className="mt-3 inline-flex items-center gap-2 text-sm text-white/80">
              <Star className="h-4 w-4 fill-terracotta-light text-terracotta-light" aria-hidden />
              {agentStats.averageRating} from {agentStats.reviewCount}+ Google reviews
            </p>
            <div className="mt-5 flex gap-3">
              <a href={social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="rounded-lg bg-white/10 p-2 text-white/70 hover:bg-white/20 hover:text-white">
                <Facebook className="h-4 w-4" />
              </a>
              <a href={social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="rounded-lg bg-white/10 p-2 text-white/70 hover:bg-white/20 hover:text-white">
                <Instagram className="h-4 w-4" />
              </a>
              <a href={social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-lg bg-white/10 p-2 text-white/70 hover:bg-white/20 hover:text-white">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-terracotta-light">
              Centennial Hills Home Links
            </h3>
            <ul className="space-y-2">
              {footerQuickLinks.map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm text-white/70 hover:text-white">
                      {link.label}
                    </a>
                  ) : (
                    <Link href={link.href} className="text-sm text-white/70 hover:text-white">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-terracotta-light">
              Northwest Las Vegas Communities
            </h3>
            <ul className="space-y-2">
              {neighborhoods.slice(0, 6).map((n) => (
                <li key={n.slug}>
                  <Link href={`/neighborhoods/${n.slug}`} className="text-sm text-white/70 hover:text-white">
                    {n.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-terracotta-light">
              Contact Dr. Jan Duffy
            </h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-terracotta-light" />
                <Link href={agentInfo.phoneTel} className="hover:text-white">
                  {agentInfo.phone}
                </Link>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-terracotta-light" />
                <Link href={`mailto:${agentInfo.email}`} className="hover:text-white">
                  {agentInfo.email}
                </Link>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-terracotta-light" />
                {officeInfo.address.full}
              </li>
              <li>{siteConfig.hoursLabel}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {agentInfo.name}, {agentInfo.title}. All rights reserved. Equal Housing
            Opportunity. MLS information deemed reliable but not guaranteed.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/faq" className="hover:text-white">FAQ</Link>
            <Link href="/security-policy" className="hover:text-white">Privacy</Link>
            {footerServiceLinks.slice(0, 2).map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
