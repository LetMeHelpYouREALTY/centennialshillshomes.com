import Link from "next/link";
import Image from "next/image";
import { agentInfo, siteImages } from "@/lib/site-config";

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <Image
        src={siteImages.hero[1] ?? siteImages.hero[0]}
        alt="Twilight over northwest Las Vegas homes near Centennial Hills"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-ink/70" />
      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center text-white">
        <h2 className="font-display text-3xl italic md:text-5xl">
          Ready to Find Your Perfect Home?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base text-white/85 md:text-lg">
          Same-day showings available. Complimentary market analysis included. No pressure — just
          hyperlocal expertise working for you.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href={agentInfo.phoneTel}
            className="inline-flex min-w-[200px] items-center justify-center rounded-xl bg-terracotta px-6 py-3.5 font-semibold text-white no-underline hover:bg-terracotta-dark"
          >
            Schedule a Showing
          </Link>
          <Link
            href="/listings"
            className="inline-flex min-w-[200px] items-center justify-center rounded-xl border border-white/40 px-6 py-3.5 font-semibold text-white no-underline hover:bg-white/10"
          >
            View All Listings
          </Link>
        </div>
      </div>
    </section>
  );
}
