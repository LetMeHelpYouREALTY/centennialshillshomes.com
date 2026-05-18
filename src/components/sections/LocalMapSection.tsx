import { component$ } from "@builder.io/qwik";
import { SITE } from "~/config/site";

export const LocalMapSection = component$(() => {
	const addressLine = `${SITE.address.streetAddress}, ${SITE.address.addressLocality}, ${SITE.address.addressRegion} ${SITE.address.postalCode}`;

	return (
		<section class="py-16 bg-slate-50" aria-labelledby="office-map-heading">
			<div class="container mx-auto px-4">
				<div class="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
					<div>
						<h2
							id="office-map-heading"
							class="text-3xl font-bold text-slate-900 mb-4"
						>
							Visit the {SITE.agentName} office
						</h2>
						<p class="text-slate-600 mb-6 leading-relaxed">
							Meet in person at our northwest Las Vegas office — same address as
							our Google Business Profile. Schedule a buyer consultation,
							listing appointment, or market review.
						</p>
						<address class="not-italic text-slate-800 mb-6 block">
							<strong class="block text-lg">{SITE.brokerage}</strong>
							{addressLine}
						</address>
						<p class="text-slate-600 mb-2">
							<strong>Hours:</strong> Daily 6:00 AM – 9:00 PM
						</p>
						<p class="text-slate-600 mb-8">
							<strong>Phone:</strong>{" "}
							<a
								href={`tel:${SITE.phoneTel}`}
								class="text-blue-600 font-semibold hover:underline"
							>
								{SITE.phone}
							</a>
						</p>
						<div class="flex flex-wrap gap-3">
							<a
								href={`tel:${SITE.phoneTel}`}
								class="px-5 py-2.5 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
							>
								Call now
							</a>
							<a
								href={SITE.directionsUrl}
								target="_blank"
								rel="noopener noreferrer"
								class="px-5 py-2.5 border-2 border-slate-300 rounded-lg font-semibold hover:bg-white"
							>
								Directions
							</a>
							<a
								href={`mailto:${SITE.email}`}
								class="px-5 py-2.5 border-2 border-slate-300 rounded-lg font-semibold hover:bg-white"
							>
								Email
							</a>
						</div>
					</div>
					<div class="rounded-xl overflow-hidden shadow-lg border border-slate-200 min-h-[320px]">
						<iframe
							title={`Map: ${addressLine}`}
							src={SITE.mapEmbedUrl}
							width="100%"
							height="400"
							style="border:0"
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							allowFullscreen
						/>
					</div>
				</div>
			</div>
		</section>
	);
});
