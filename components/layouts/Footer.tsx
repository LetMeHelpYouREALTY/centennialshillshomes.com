import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { agentInfo, officeInfo, siteConfig, neighborhoods } from "@/lib/site-config";
import { footerQuickLinks, footerServiceLinks } from "@/lib/navigation";

export default function Footer() {
  const year = new Date().getFullYear();
  const social = siteConfig.social;

  return (
    <footer className="border-t border-white/10 bg-ink text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-2xl">{agentInfo.name}</p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
              {agentInfo.title}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              {agentInfo.brokerage}
            </p>
            <p className="mt-2 text-sm text-white/55">License {agentInfo.license}</p>
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
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-white/70">
              Quick Links
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
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-white/70">
              Communities
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
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-white/70">
              Contact
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
