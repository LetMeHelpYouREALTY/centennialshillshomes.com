"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { agentInfo, siteConfig, siteImages } from "@/lib/site-config";
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
}: {
  group: NavGroup;
  isOpen: boolean;
  onOpen: () => void;
  onToggle: () => void;
  onClose: () => void;
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
        className="flex items-center gap-1 text-slate-700 hover:text-blue-600 font-medium text-sm px-2 py-1 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
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
          className="absolute top-full left-0 mt-2 w-72 rounded-xl border border-slate-200 bg-white shadow-xl py-2 z-50"
          onMouseLeave={onClose}
          role="menu"
        >
          {group.href ? (
            <Link
              href={group.href}
              className="block px-4 py-2 text-sm font-semibold text-blue-700 border-b border-slate-100 mb-1"
              onClick={onClose}
            >
              All {group.label} →
            </Link>
          ) : null}
          {group.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-4 py-2.5 hover:bg-blue-50 transition-colors"
              onClick={onClose}
              role="menuitem"
            >
              <span className="block text-sm font-medium text-slate-900">{link.label}</span>
              {link.description ? (
                <span className="block text-xs text-slate-500 mt-0.5">{link.description}</span>
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

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  const linkClass = (href: string) =>
    `text-sm font-medium transition-colors px-2 py-1 rounded-md ${
      pathname === href || (href !== "/" && pathname.startsWith(href))
        ? "text-blue-700 bg-blue-50"
        : "text-slate-700 hover:text-blue-600"
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-shadow ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <nav className="container mx-auto px-4" aria-label="Main navigation">
        <div className={`flex justify-between items-center ${isScrolled ? "py-2" : "py-3"}`}>
          <Link href="/" className="flex items-center gap-2.5 min-w-0 shrink-0">
            <Image
              src={siteImages.logo}
              alt={`${siteConfig.shortName} - ${agentInfo.name}`}
              width={40}
              height={40}
              className="h-9 w-9 shrink-0 rounded-md border border-slate-200 bg-white object-contain p-0.5"
            />
            <span className="hidden sm:flex flex-col leading-tight">
              <span className="text-base font-bold text-slate-900">{siteConfig.shortName}</span>
              <span className="text-xs text-slate-500">{agentInfo.name}, REALTOR®</span>
            </span>
          </Link>

          <div className="hidden xl:flex items-center gap-1">
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
              />
            ))}
            {mainNavLinks.slice(3).map((link) => (
              <Link key={link.href} href={link.href} className={linkClass(link.href)}>
                {link.label}
              </Link>
            ))}
            <Button asChild size="sm" className="ml-2 bg-blue-600 hover:bg-blue-700">
              <Link href={agentInfo.phoneTel} className="flex items-center gap-2">
                <Phone className="h-4 w-4" aria-hidden />
                {agentInfo.phone}
              </Link>
            </Button>
          </div>

          <div className="xl:hidden flex items-center gap-2">
            <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700">
              <Link href={agentInfo.phoneTel} aria-label={`Call ${agentInfo.phone}`}>
                <Phone className="h-4 w-4" />
              </Link>
            </Button>
            <button
              type="button"
              className="p-2 text-slate-700 rounded-md focus-visible:ring-2 focus-visible:ring-blue-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen ? (
          <div className="xl:hidden border-t border-slate-200 pb-6 max-h-[80vh] overflow-y-auto">
            <div className="pt-4 space-y-1">
              {mainNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block py-2.5 px-3 rounded-lg ${linkClass(link.href)}`}
                >
                  {link.label}
                </Link>
              ))}
              {navDropdownGroups.map((group) => (
                <div key={group.id} className="pt-3">
                  <p className="px-3 text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                    {group.label}
                  </p>
                  {group.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block py-2 px-3 text-sm text-slate-700 hover:bg-blue-50 rounded-lg"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              ))}
              <div className="pt-4 px-3">
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                  <Link href={agentInfo.phoneTel} className="flex items-center justify-center gap-2">
                    <Phone className="h-4 w-4" />
                    Call Dr. Jan: {agentInfo.phone}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        ) : null}
      </nav>
    </header>
  );
}
