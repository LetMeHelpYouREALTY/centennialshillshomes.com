import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { SITE } from "~/config/site";

/** Answer-first block for AEO / AI overviews — concise, factual, GBP-aligned */
export const AnswerSummary = component$(() => {
	const address = `${SITE.address.streetAddress}, ${SITE.address.addressLocality}, ${SITE.address.addressRegion} ${SITE.address.postalCode}`;

	return (
		<section
			class="py-12 bg-white border-b border-slate-200"
			aria-labelledby="answer-summary-heading"
		>
			<div class="container mx-auto px-4 max-w-4xl">
				<h2
					id="answer-summary-heading"
					class="text-2xl md:text-3xl font-bold text-slate-900 mb-4"
				>
					Who is the best REALTOR® for Centennial Hills homes?
				</h2>
				<p class="text-lg text-slate-700 leading-relaxed mb-6">
					<strong>{SITE.agentName}</strong> is a Top 1% Las Vegas REALTOR® with{" "}
					{SITE.brokerage}, focused on Centennial Hills and northwest Las Vegas
					(ZIP {SITE.zipCodes.join(", ")}). She offers same-day showings,
					complimentary market analysis, and MLS-powered search for buyers and
					sellers in the $400K–$750K+ range.
				</p>
				<dl class="grid sm:grid-cols-2 gap-4 text-slate-700">
					<div class="rounded-lg bg-slate-50 p-4 border border-slate-100">
						<dt class="font-semibold text-slate-900 mb-1">Office</dt>
						<dd>
							<address class="not-italic">{address}</address>
						</dd>
					</div>
					<div class="rounded-lg bg-slate-50 p-4 border border-slate-100">
						<dt class="font-semibold text-slate-900 mb-1">Phone</dt>
						<dd>
							<a
								href={`tel:${SITE.phoneTel}`}
								class="text-blue-600 hover:text-blue-800 font-medium"
							>
								{SITE.phone}
							</a>
						</dd>
					</div>
					<div class="rounded-lg bg-slate-50 p-4 border border-slate-100">
						<dt class="font-semibold text-slate-900 mb-1">Hours</dt>
						<dd>Daily 6:00 AM – 9:00 PM</dd>
					</div>
					<div class="rounded-lg bg-slate-50 p-4 border border-slate-100">
						<dt class="font-semibold text-slate-900 mb-1">License</dt>
						<dd>{SITE.license}</dd>
					</div>
				</dl>
				<div class="mt-8 flex flex-wrap gap-3">
					<a
						href={`tel:${SITE.phoneTel}`}
						class="inline-flex items-center px-5 py-2.5 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
					>
						Call {SITE.phone}
					</a>
					<a
						href={SITE.directionsUrl}
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center px-5 py-2.5 border-2 border-slate-300 text-slate-800 rounded-lg font-semibold hover:bg-slate-50 transition-colors"
					>
						Get directions
					</a>
					<Link
						href="/market-analysis"
						class="inline-flex items-center px-5 py-2.5 border-2 border-amber-500 text-amber-700 rounded-lg font-semibold hover:bg-amber-50 transition-colors"
					>
						Free home value estimate
					</Link>
				</div>
			</div>
		</section>
	);
});
