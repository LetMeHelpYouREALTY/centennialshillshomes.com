import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import { agentInfo, agentStats, officeInfo, siteConfig, siteImages } from "@/lib/site-config";

export default function AgentBio() {
  const years = new Date().getFullYear() - agentStats.servingSince;

  return (
    <section className="bg-ink py-16 text-white md:py-24" id="about">
      <div className="container mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-terracotta-light">
            Your advisor
          </p>
          <h2 className="mt-3 font-display text-3xl md:text-5xl">
            {agentInfo.name}, Centennial Hills {agentInfo.title}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/85 md:text-lg">
            Since {agentStats.servingSince}, {agentInfo.name} has represented buyers and sellers
            across the ZIP codes that define this northwest Las Vegas practice —{" "}
            {siteConfig.zipCodes.join(", ")}. {years} years of on-the-ground work means disciplined
            negotiation and data-driven guidance from move-up homes through luxury listings.
          </p>
          <p className="mt-4 text-base leading-relaxed text-white/85 md:text-lg">
            As a {agentInfo.brokerage} agent, she offers same-day showings, complimentary market
            analysis, and a referral network that surfaces opportunities before they hit every
            portal.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={agentInfo.phoneTel}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-terracotta px-6 py-3.5 font-semibold text-ink no-underline hover:bg-terracotta-dark hover:text-white"
            >
              <Phone className="h-4 w-4" aria-hidden />
              Call {agentInfo.phone}
            </Link>
            <Link
              href="/market-analysis"
              className="inline-flex items-center justify-center rounded-xl border border-white/30 px-6 py-3.5 font-semibold text-white no-underline hover:bg-white/10"
            >
              Free Market Analysis
            </Link>
          </div>
          <p className="mt-6 text-sm text-white/60">
            License {agentInfo.license} · {officeInfo.address.full}
          </p>
        </div>
        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <Image
              src={siteImages.agentHero}
              alt={`${agentInfo.name} with northwest Las Vegas luxury homes`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-5 left-6 rounded-xl bg-terracotta px-5 py-4 shadow-xl">
            <p className="font-display text-2xl text-ink">{agentStats.volumeClosed}</p>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink/70">
              Total sales volume
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
