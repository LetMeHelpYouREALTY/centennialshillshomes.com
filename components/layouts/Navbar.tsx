"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { agentInfo, siteConfig, siteImages } from "@/lib/site-config";

const mainNavLinks = [
  { href: "/", label: "Home" },
  { href: "/listings", label: "Listings" },
  { href: "/neighborhoods", label: "Neighborhoods" },
  { href: "/market-insights", label: "Market Insights" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const serviceLinks = [
  { href: "/buyers", label: "Home Buying" },
  { href: "/sellers", label: "Home Selling" },
  { href: "/luxury-home-sales", label: "Luxury Home Sales" },
  { href: "/market-analysis", label: "Market Analysis" },
  { href: "/same-day-showings", label: "Same-Day Showings" },
  { href: "/california-equity-buyers", label: "California Equity Buyers" },
  { href: "/corporate-relocations", label: "Corporate Relocations" },
  { href: "/investment-properties", label: "Investment Properties" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const logoClass = isScrolled
    ? "max-h-9 max-w-[120px]"
    : "max-h-11 max-w-[148px]";

  const closeMobile = () => setIsMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-sm shadow-sm transition-all duration-300 ${
        isScrolled ? "py-1.5" : "py-2.5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="flex min-w-0 shrink items-center gap-3"
            aria-label={`${siteConfig.shortName} — ${agentInfo.name}`}
          >
            <Image
              src={siteImages.logo}
              alt={`${siteConfig.shortName} — ${agentInfo.name}, ${agentInfo.brokerage}`}
              width={512}
              height={341}
              priority
              className={`h-auto w-auto shrink-0 object-contain transition-all ${logoClass}`}
            />
            <span className="hidden min-w-0 flex-col leading-tight md:flex">
              <span className="truncate text-sm font-bold text-slate-900 lg:text-base">
                {agentInfo.name}
              </span>
              <span className="truncate text-xs text-slate-600">
                {siteConfig.shortName}
              </span>
              <span className="truncate text-[11px] text-slate-500">
                {siteConfig.brandName}
              </span>
            </span>
          </Link>

          <nav className="hidden items-center space-x-4 lg:flex" aria-label="Main">
            {mainNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-700 transition-colors hover:text-blue-700"
              >
                {link.label}
              </Link>
            ))}

            <ServicesDropdown
              isOpen={isServicesOpen}
              onOpenChange={setIsServicesOpen}
            />

            <Button asChild className="bg-blue-700 hover:bg-blue-800">
              <Link href={agentInfo.phoneTel} className="flex items-center gap-2">
                <Phone className="h-4 w-4" aria-hidden="true" />
                <span className="hidden xl:inline">{agentInfo.phone}</span>
                <span className="xl:hidden">Call</span>
              </Link>
            </Button>
          </nav>

          <div className="flex items-center gap-2 lg:hidden">
            <Button asChild size="sm" className="bg-blue-700 hover:bg-blue-800">
              <Link href={agentInfo.phoneTel} aria-label={`Call ${agentInfo.name}`}>
                <Phone className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <button
              type="button"
              className="rounded-md p-1 text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X size={24} aria-hidden="true" />
              ) : (
                <Menu size={24} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <nav
            className="mt-3 border-t border-slate-200 pb-4 pt-3 lg:hidden"
            aria-label="Mobile"
          >
            <div className="mb-3 flex items-center gap-3 border-b border-slate-100 pb-3">
              <Image
                src={siteImages.logo}
                alt=""
                width={512}
                height={341}
                className="max-h-10 max-w-[120px] object-contain"
                aria-hidden
              />
              <div className="min-w-0 leading-tight">
                <p className="truncate text-sm font-bold text-slate-900">
                  {agentInfo.name}
                </p>
                <p className="truncate text-xs text-slate-600">
                  {siteConfig.brandName}
                </p>
              </div>
            </div>

            <div className="flex flex-col space-y-1">
              {mainNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded px-3 py-2 font-medium text-slate-700 transition-colors hover:bg-blue-50 hover:text-blue-700"
                  onClick={closeMobile}
                >
                  {link.label}
                </Link>
              ))}

              <div className="mt-2 border-t border-slate-200 pt-2">
                <span className="px-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Services
                </span>
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block rounded px-3 py-2 text-slate-700 transition-colors hover:bg-blue-50 hover:text-blue-700"
                    onClick={closeMobile}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <MobileCallCta onNavigate={closeMobile} />
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

function ServicesDropdown({
  isOpen,
  onOpenChange,
}: {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <div className="relative">
      <button
        type="button"
        className="flex items-center rounded-md px-2 py-1 text-sm font-medium text-slate-700 transition-colors hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
        onClick={() => onOpenChange(!isOpen)}
        onMouseEnter={() => onOpenChange(true)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onOpenChange(!isOpen);
          } else if (e.key === "Escape") {
            onOpenChange(false);
          }
        }}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        Services
        <ChevronDown className="ml-1 h-4 w-4" aria-hidden="true" />
      </button>

      {isOpen && (
        <div
          className="absolute left-0 top-full z-50 mt-2 w-56 rounded-lg bg-white py-2 shadow-lg ring-1 ring-slate-200"
          onMouseLeave={() => onOpenChange(false)}
          role="menu"
        >
          {serviceLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-700 focus-visible:bg-blue-50 focus-visible:text-blue-700 focus-visible:outline-none"
              onClick={() => onOpenChange(false)}
              role="menuitem"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function MobileCallCta({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="pt-4">
      <Button asChild className="w-full bg-blue-700 hover:bg-blue-800">
        <Link
          href={agentInfo.phoneTel}
          className="flex items-center justify-center gap-2"
          onClick={onNavigate}
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          Call {agentInfo.name}: {agentInfo.phone}
        </Link>
      </Button>
    </div>
  );
}
