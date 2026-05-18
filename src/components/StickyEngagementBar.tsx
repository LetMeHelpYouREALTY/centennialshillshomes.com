import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { SITE } from "~/config/site";

/** Mobile-first sticky bar: call, search, contact — boosts engagement + local CTR */
export const StickyEngagementBar = component$(() => {
	return (
		<div
			class="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-slate-900/95 backdrop-blur border-t border-slate-700 safe-area-pb"
			role="navigation"
			aria-label="Quick actions"
		>
			<div class="grid grid-cols-3 divide-x divide-slate-700">
				<a
					href={`tel:${SITE.phoneTel}`}
					class="flex flex-col items-center justify-center py-3 text-white hover:bg-slate-800 transition-colors"
				>
					<span class="text-lg" aria-hidden="true">
						📞
					</span>
					<span class="text-xs font-semibold mt-0.5">Call</span>
				</a>
				<Link
					href="/properties"
					class="flex flex-col items-center justify-center py-3 text-amber-400 hover:bg-slate-800 transition-colors"
				>
					<span class="text-lg" aria-hidden="true">
						🏠
					</span>
					<span class="text-xs font-semibold mt-0.5">Search</span>
				</Link>
				<Link
					href="/contact"
					class="flex flex-col items-center justify-center py-3 text-white hover:bg-slate-800 transition-colors"
				>
					<span class="text-lg" aria-hidden="true">
						✉️
					</span>
					<span class="text-xs font-semibold mt-0.5">Contact</span>
				</Link>
			</div>
		</div>
	);
});
