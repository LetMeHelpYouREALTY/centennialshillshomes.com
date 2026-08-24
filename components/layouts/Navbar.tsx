"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown, Search, Star, Clock } from "lucide-react";
import { agentInfo, agentStats, siteConfig } from "@/lib/site-config";
import {
  mainNavLinks,
  navDropdownGroups,
  type NavGroup,
} from "@/lib/navigation";

function NavDropdown({
  group,
  isOpen,
  onOpen,
  onToggle,
  onClose,
  overlay,
}: {
  group: NavGroup;
  isOpen: boolean;
  onOpen: () => void;
  onToggle: () => void;
  onClose: () => void;
  overlay: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    }
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        className={`flex items-center gap-1 px-2 py-1 text-sm font-medium rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta ${
          overlay ? "text-white/90 hover:text-white" : "text-ink/80 hover:text-terracotta-dark"
        }`}
        onClick={onToggle}
        onMouseEnter={onOpen}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {group.label}
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen ? (
        <div
          className="absolute top-full left-0 z-50 mt-2 w-72 rounded-xl border border-stone-200 bg-ivory py-2 shadow-xl"
          onMouseLeave={onClose}
          role="menu"
        >
          {group.href ? (
            <Link
              href={group.href}
              className="mb-1 block border-b border-stone-100 px-4 py-2 text-sm font-semibold text-terracotta-dark"
              onClick={onClose}
            >
              All {group.label} →
            </Link>
          ) : null}
          {group.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-4 py-2.5 transition-colors hover:bg-sand"
              onClick={onClose}
              role="menuitem"
            >
              <span className="block text-sm font-medium text-ink">{link.label}</span>
              {link.description ? (
                <span className="mt-0.5 block text-xs text-stone-500">{link.description}</span>
              ) : null}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const isHome = pathname === "/";
  const overlay = isHome && !isScrolled && !isMobileMenuOpen;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  const linkClass = (href: string) => {
    const active = pathname === href || (href !== "/" && pathname.startsWith(href));
    if (overlay) {
      return `text-sm font-medium px-2 py-1 rounded-md ${
        active ? "text-white" : "text-white/80 hover:text-white"
      }`;
    }
    return `text-sm font-medium px-2 py-1 rounded-md ${
      active ? "text-terracotta-dark" : "text-ink/80 hover:text-terracotta-dark"
    }`;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        overlay
          ? "bg-transparent border-b border-transparent"
          : "bg-sand/95 backdrop-blur-md border-b border-stone-200/80 shadow-sm"
      }`}
    >
      <div
        className={`hidden lg:block ${
          overlay ? "border-b border-white/15 bg-ink/25" : "border-b border-terracotta/20 bg-ink text-white"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-1.5">
          <p
            className={`text-[11px] font-semibold uppercase tracking-[0.18em] ${
              overlay ? "text-white/80" : "text-terracotta-light"
            }`}
          >
            Northwest Las Vegas · {siteConfig.brandName}
          </p>
          <div
            className={`flex items-center gap-5 text-[11px] font-semibold uppercase tracking-[0.14em] ${
              overlay ? "text-white/80" : "text-white/80"
            }`}
          >
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3 w-3" aria-hidden />
              {siteConfig.hoursLabel}
            </span>
            <a
              href={siteConfig.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-terracotta-light"
            >
              <Star className="h-3 w-3 fill-terracotta-light text-terracotta-light" aria-hidden />
              {agentStats.averageRating} Google reviews
            </a>
            <Link href={agentInfo.phoneTel} className="hover:text-terracotta-light">
              {agentInfo.phone}
            </Link>
          </div>
        </div>
      </div>

      <nav className="container mx-auto px-4" aria-label="Main navigation">
        <div className={`flex items-center justify-between ${isScrolled ? "py-2" : "py-3"}`}>
          <Link href="/" className="flex min-w-0 shrink-0 flex-col leading-tight">
            <span className={`font-display text-lg ${overlay ? "text-white" : "text-ink"}`}>
              {agentInfo.name}
            </span>
            <span
              className={`text-[10px] font-semibold uppercase tracking-[0.22em] ${
                overlay ? "text-white/70" : "text-stone-500"
              }`}
            >
              Centennial Hills REALTOR®
            </span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {mainNavLinks
              .filter((link) =>
                ["/", "/listings", "/neighborhoods", "/about", "/contact"].includes(link.href),
              )
              .map((link) => (
                <Link key={link.href} href={link.href} className={linkClass(link.href)}>
                  {link.label}
                </Link>
              ))}
            {navDropdownGroups
              .filter((group) => group.id === "buyers" || group.id === "sellers")
              .map((group) => (
                <NavDropdown
                  key={group.id}
                  group={group}
                  isOpen={openDropdown === group.id}
                  onOpen={() => setOpenDropdown(group.id)}
                  onToggle={() =>
                    setOpenDropdown((prev) => (prev === group.id ? null : group.id))
                  }
                  onClose={() => setOpenDropdown(null)}
                  overlay={overlay}
                />
              ))}
            <NavDropdown
              group={{
                id: "more",
                label: "More",
                href: "/realtor-services",
                links: [
                  {
                    href: "/realtor-services",
                    label: "Realtor Services",
                    description: "Buyer, seller, and luxury representation",
                  },
                  ...navDropdownGroups
                    .filter((group) => group.id !== "buyers" && group.id !== "sellers")
                    .flatMap((group) => group.links),
                ],
              }}
              isOpen={openDropdown === "more"}
              onOpen={() => setOpenDropdown("more")}
              onToggle={() =>
                setOpenDropdown((prev) => (prev === "more" ? null : "more"))
              }
              onClose={() => setOpenDropdown(null)}
              overlay={overlay}
            />
            <Link
              href="/listings"
              className={`ml-2 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ${
                overlay
                  ? "border border-white/40 text-white hover:bg-white/15"
                  : "border border-ink/15 text-ink hover:bg-white"
              }`}
            >
              <Search className="h-4 w-4" aria-hidden />
              Search listings
            </Link>
            <Link
              href={agentInfo.phoneTel}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ${
                overlay
                  ? "bg-terracotta text-ink hover:bg-terracotta-light"
                  : "bg-terracotta text-ink hover:bg-terracotta-dark hover:text-white"
              }`}
            >
              <Phone className="h-4 w-4" aria-hidden />
              Call {agentInfo.phone}
            </Link>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href="/listings"
              aria-label="Search Centennial Hills listings"
              className={`rounded-full p-2 ${overlay ? "text-white" : "text-ink"}`}
            >
              <Search className="h-4 w-4" />
            </Link>
            <Link
              href={agentInfo.phoneTel}
              aria-label={`Call ${agentInfo.phone}`}
              className={`rounded-full p-2 ${overlay ? "text-white" : "bg-terracotta text-ink"}`}
            >
              <Phone className="h-4 w-4" />
            </Link>
            <button
              type="button"
              className={`rounded-md p-2 focus-visible:ring-2 focus-visible:ring-terracotta ${
                overlay ? "text-white" : "text-ink"
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen ? (
          <div className="max-h-[80vh] overflow-y-auto border-t border-stone-200 bg-sand pb-6 lg:hidden">
            <div className="space-y-1 pt-4">
              {mainNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-ink hover:bg-white"
                >
                  {link.label}
                </Link>
              ))}
              {navDropdownGroups.map((group) => (
                <div key={group.id} className="pt-3">
                  <p className="mb-1 px-3 text-xs font-bold uppercase tracking-wider text-stone-500">
                    {group.label}
                  </p>
                  {group.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block rounded-lg px-3 py-2 text-sm text-ink hover:bg-white"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              ))}
              <div className="grid gap-2 px-3 pt-4">
                <Link
                  href="/listings"
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-ink/15 bg-white px-4 py-3 font-semibold text-ink"
                >
                  <Search className="h-4 w-4" />
                  Search Centennial Hills listings
                </Link>
                <Link
                  href={agentInfo.phoneTel}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-terracotta px-4 py-3 font-semibold text-ink"
                >
                  <Phone className="h-4 w-4" />
                  Call {agentInfo.name.split(" ").slice(-1)}: {agentInfo.phone}
                </Link>
                <a
                  href={siteConfig.googleReviewsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-terracotta-dark"
                >
                  <Star className="h-4 w-4" />
                  {agentStats.averageRating} Google reviews
                </a>
              </div>
            </div>
          </div>
        ) : null}
      </nav>
    </header>
  );
}
