import { component$ } from "@builder.io/qwik";

export interface TestimonialCardProps {
	name: string;
	rating: number;
	text: string;
	location: string;
}

export const TestimonialCard = component$<TestimonialCardProps>((props) => {
	return (
		<div class="bg-white p-6 rounded-lg shadow-lg">
			<div class="flex mb-4">
				{Array.from({ length: props.rating }, (_, i) => (
					<span key={i} class="text-yellow-400 text-xl">
						★
					</span>
				))}
			</div>
			<p class="text-gray-700 mb-4 italic">"{props.text}"</p>
			<div class="border-t pt-4">
				<div class="font-semibold text-gray-800">{props.name}</div>
				<div class="text-sm text-gray-600">{props.location}</div>
			</div>
		</div>
	);
});
