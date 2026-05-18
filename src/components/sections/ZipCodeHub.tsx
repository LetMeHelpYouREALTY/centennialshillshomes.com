import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { SITE } from "~/config/site";

const ZIP_LINKS = [
	{
		zip: "89144",
		href: "/centennial-hills",
		label: "Homes for sale in 89144 (Centennial Hills)",
		blurb:
			"Master-planned northwest Las Vegas with parks, shopping, and new construction.",
	},
	{
		zip: "89138",
		href: "/summerlin-west",
		label: "Homes for sale in 89138 (Summerlin West)",
		blurb:
			"Adjacent to Summerlin with golf, trails, and move-up luxury inventory.",
	},
	{
		zip: "89135",
		href: "/red-rock-country-club",
		label: "Homes for sale in 89135 (Red Rock area)",
		blurb: "Golf-course and guard-gated communities near Red Rock Canyon.",
	},
] as const;

export const ZipCodeHub = component$(() => {
	return (
		<section
			class="py-16 bg-slate-900 text-white"
			aria-labelledby="zip-hub-heading"
		>
			<div class="container mx-auto px-4">
				<h2 id="zip-hub-heading" class="text-3xl font-bold text-center mb-3">
					Search Centennial Hills by ZIP code
				</h2>
				<p class="text-slate-300 text-center max-w-2xl mx-auto mb-10">
					{SITE.agentName} serves northwest Las Vegas ZIP codes{" "}
					{SITE.zipCodes.join(", ")} with MLS listings, market analysis, and
					local neighborhood guides.
				</p>
				<div class="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
					{ZIP_LINKS.map((z) => (
						<Link
							key={z.zip}
							href={z.href}
							class="block p-6 rounded-xl bg-white/10 border border-white/20 hover:bg-white/15 hover:border-amber-400/50 transition-colors"
						>
							<span class="text-amber-400 font-mono text-sm font-bold">
								{z.zip}
							</span>
							<h3 class="text-lg font-semibold mt-2 mb-2">{z.label}</h3>
							<p class="text-slate-300 text-sm">{z.blurb}</p>
							<span class="inline-block mt-4 text-amber-400 text-sm font-medium">
								View neighborhood guide →
							</span>
						</Link>
					))}
				</div>
				<p class="text-center mt-8">
					<Link
						href="/properties"
						class="text-amber-400 font-semibold hover:text-amber-300 underline-offset-2 hover:underline"
					>
						Browse all MLS homes in Centennial Hills
					</Link>
				</p>
			</div>
		</section>
	);
});
