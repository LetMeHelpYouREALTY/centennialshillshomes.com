"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { siteConfig, siteImages } from "@/lib/site-config";

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const images = siteImages.hero;

  useEffect(() => {
    if (prefersReducedMotion) return;
    const intervalId = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [prefersReducedMotion, images.length]);

  return (
    <div className="relative w-full min-h-[85vh] overflow-hidden">
      <div className="absolute inset-0">
        {images.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 ${
              prefersReducedMotion ? "" : "transition-opacity duration-1000"
            } ${index === currentImage ? "opacity-100" : "opacity-0"}`}
          >
            <Image
              src={src}
              alt={`Centennial Hills real estate — ${siteConfig.shortName}`}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-slate-900/50" />
          </div>
        ))}
      </div>

      <div className="relative z-20 flex flex-col items-center justify-center min-h-[85vh] px-4 py-24 text-center">
        <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">
          {siteConfig.brandName} Nevada Properties
        </p>
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl">
          Centennial Hills Homes for Sale
          <br />
          <span className="text-amber-400">Dr. Jan Duffy, REALTOR®</span>
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
          Northwest Las Vegas luxury and move-up homes in ZIP codes 89135, 89138, and 89144.
          Same-day showings and complimentary market analysis.
        </p>

        <div className="realscout-wrapper mb-4 w-full max-w-xl">
          <div
            dangerouslySetInnerHTML={{
              __html: `<realscout-simple-search agent-encoded-id="${siteConfig.realScoutAgentId}"></realscout-simple-search>`,
            }}
          />
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-6 text-white/90 text-sm">
          <div>
            <span className="font-semibold">Top 1%</span> Las Vegas REALTOR®
          </div>
          <div>
            <span className="font-semibold">89135 · 89138 · 89144</span>
          </div>
          <div>
            <span className="font-semibold">{siteConfig.priceRange}</span> focus
          </div>
        </div>
      </div>
    </div>
  );
}

