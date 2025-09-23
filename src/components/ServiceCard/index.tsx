import { component$ } from "@builder.io/qwik";

export interface ServiceCardProps {
	title: string;
	description: string;
	icon: string;
}

export const ServiceCard = component$<ServiceCardProps>((props) => {
	return (
		<div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
			<div class="text-4xl mb-4 text-center">{props.icon}</div>
			<h3 class="text-xl font-semibold mb-3 text-gray-800 text-center">
				{props.title}
			</h3>
			<p class="text-gray-600 text-center">{props.description}</p>
		</div>
	);
});
