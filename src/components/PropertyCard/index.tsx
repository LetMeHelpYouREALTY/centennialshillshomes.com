import { $, component$, useSignal } from "@builder.io/qwik";
import { SITE_IMAGES } from "~/config/site";

export interface PropertyCardProps {
	title: string;
	price: string;
	bedrooms: string;
	bathrooms: string;
	sqft: string;
	address: string;
	image: string;
}

export const PropertyCard = component$<PropertyCardProps>((props) => {
	const imgSrc = useSignal(props.image);

	const onImgError = $(() => {
		if (imgSrc.value !== SITE_IMAGES.fallback) {
			imgSrc.value = SITE_IMAGES.fallback;
		}
	});

	return (
		<div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
			<img
				src={imgSrc.value}
				alt={props.title}
				width={400}
				height={300}
				loading="lazy"
				class="w-full h-48 object-cover"
				onError$={onImgError}
			/>
			<div class="p-6">
				<h3 class="text-xl font-semibold mb-2 text-gray-800">{props.title}</h3>
				<div class="text-2xl font-bold text-blue-600 mb-4">{props.price}</div>
				<div class="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
					<span>🛏️ {props.bedrooms} beds</span>
					<span>🚿 {props.bathrooms} baths</span>
					<span>📐 {props.sqft} sqft</span>
				</div>
				<p class="text-gray-600 text-sm">{props.address}</p>
				<button class="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
					View Details
				</button>
			</div>
		</div>
	);
});
