import { component$ } from "@builder.io/qwik";

export interface FAQItem {
	question: string;
	answer: string;
}

export interface FAQPageSchemaProps {
	items: FAQItem[];
}

export const FAQPageSchema = component$<FAQPageSchemaProps>(({ items }) => {
	const schema = {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: items.map((item) => ({
			"@type": "Question",
			name: item.question,
			acceptedAnswer: {
				"@type": "Answer",
				text: item.answer,
			},
		})),
	};

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={JSON.stringify(schema)}
		/>
	);
});
