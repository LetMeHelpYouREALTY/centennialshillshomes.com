"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { agentInfo, siteConfig } from "@/lib/site-config";
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
          overlay ? "text-white/90 hover:text-white" : "text-ink/80 hover:text-terracotta"
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
          className="absolute top-full left-0 z-50 mt-2 w-72 rounded-xl border border-stone-200 bg-white py-2 shadow-xl"
          onMouseLeave={onClose}
          role="menu"
        >
          {group.href ? (
            <Link
              href={group.href}
              className="mb-1 block border-b border-stone-100 px-4 py-2 text-sm font-semibold text-terracotta"
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
      active ? "text-terracotta" : "text-ink/80 hover:text-terracotta"
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
              Centennial Hills
            </span>
          </Link>

          <div className="hidden items-center gap-1 xl:flex">
            {mainNavLinks.slice(0, 3).map((link) => (
              <Link key={link.href} href={link.href} className={linkClass(link.href)}>
                {link.label}
              </Link>
            ))}
            {navDropdownGroups.map((group) => (
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
            {mainNavLinks.slice(3).map((link) => (
              <Link key={link.href} href={link.href} className={linkClass(link.href)}>
                {link.label}
              </Link>
            ))}
            <Link
              href={agentInfo.phoneTel}
              className={`ml-2 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ${
                overlay
                  ? "bg-white/15 text-white hover:bg-white/25"
                  : "bg-terracotta text-white hover:bg-terracotta-dark"
              }`}
            >
              <Phone className="h-4 w-4" aria-hidden />
              {agentInfo.phone}
            </Link>
          </div>

          <div className="flex items-center gap-2 xl:hidden">
            <Link
              href={agentInfo.phoneTel}
              aria-label={`Call ${agentInfo.phone}`}
              className={`rounded-full p-2 ${overlay ? "text-white" : "bg-terracotta text-white"}`}
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
          <div className="max-h-[80vh] overflow-y-auto border-t border-stone-200 bg-sand pb-6 xl:hidden">
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
              <div className="px-3 pt-4">
                <Link
                  href={agentInfo.phoneTel}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-terracotta px-4 py-3 font-semibold text-white"
                >
                  <Phone className="h-4 w-4" />
                  Call {agentInfo.name.split(" ").slice(-1)}: {agentInfo.phone}
                </Link>
              </div>
            </div>
          </div>
        ) : null}
      </nav>
    </header>
  );
}
