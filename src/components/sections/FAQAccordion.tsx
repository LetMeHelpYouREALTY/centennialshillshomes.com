import { component$ } from "@builder.io/qwik";
import type { FaqItem } from "~/config/site";

export interface FAQAccordionProps {
	items: FaqItem[];
	title?: string;
	subtitle?: string;
}

/** Visible FAQ — pairs with FAQPageSchema; uses native details for a11y + crawlability */
export const FAQAccordion = component$<FAQAccordionProps>((props) => {
	const title = props.title ?? "Frequently Asked Questions";
	const subtitle =
		props.subtitle ??
		"Answers about Centennial Hills real estate, showings, and working with Dr. Jan Duffy.";

	return (
		<section class="py-20 bg-white" aria-labelledby="faq-section-title">
			<div class="container mx-auto px-4 max-w-4xl">
				<div class="text-center mb-12">
					<h2
						id="faq-section-title"
						class="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
					>
						{title}
					</h2>
					<p class="text-lg text-slate-600">{subtitle}</p>
				</div>
				<div class="space-y-3">
					{props.items.map((item, index) => (
						<details
							key={index}
							class="group rounded-xl border border-slate-200 bg-slate-50 open:bg-white open:shadow-md transition-shadow"
						>
							<summary class="cursor-pointer list-none px-6 py-4 font-semibold text-slate-900 flex justify-between items-center gap-4">
								<span>{item.question}</span>
								<span
									class="text-amber-600 text-xl shrink-0 group-open:rotate-45 transition-transform"
									aria-hidden="true"
								>
									+
								</span>
							</summary>
							<div class="px-6 pb-5 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
								{item.answer}
							</div>
						</details>
					))}
				</div>
			</div>
		</section>
	);
});
