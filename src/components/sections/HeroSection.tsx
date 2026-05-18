import { component$ } from "@builder.io/qwik";
import { SITE, SITE_IMAGES } from "~/config/site";

export const HeroSection = component$(() => {
	return (
		<section class="hero-dark relative -mt-20 flex min-h-[88vh] flex-col justify-center overflow-hidden">
			<img
				src={SITE_IMAGES.communities.centennialHills}
				alt="Centennial Hills luxury homes, Las Vegas"
				width={1920}
				height={1080}
				class="absolute inset-0 h-full w-full object-cover"
				fetchPriority="high"
			/>
			<div class="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-900/75 to-slate-900/90" />

			<div class="relative z-10 container mx-auto px-4 py-24 text-center md:py-28">
				<p class="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-amber-400 md:text-sm">
					{SITE.brokerage}
				</p>
				<h1 class="mb-4 text-3xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
					Find Your Dream Home in
					<br />
					<span class="text-blue-400">Centennial Hills</span>
				</h1>
				<p class="mx-auto mb-8 max-w-2xl text-base text-white/90 md:text-xl">
					{SITE.agentName} — Top 1% Las Vegas REALTOR®. Luxury homes in ZIP{" "}
					{SITE.zipCodes.join(", ")} with same-day showings and free market
					analysis.
				</p>

				<div class="realscout-wrapper mx-auto mb-6 max-w-lg">
					<realscout-simple-search
						agent-encoded-id={SITE.realScoutAgentId}
					/>
				</div>

				<div class="flex flex-wrap justify-center gap-6 text-sm text-white/90">
					<div>
						<span class="font-semibold text-white">Top 1%</span> REALTOR®
					</div>
					<div>
						<span class="font-semibold text-white">Since 2008</span> in Las Vegas
					</motion.div>
					<div>
						<span class="font-semibold text-white">Same-day</span> showings
					</motion.div>
				</motion.div>
			</motion.div>
		</section>
	);
});
