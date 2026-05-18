import { $, component$, useSignal } from "@builder.io/qwik";
import { SITE_IMAGES } from "~/config/site";

export interface OptimizedImageProps {
	src: string;
	alt: string;
	width?: number;
	height?: number;
	className?: string;
	loading?: "lazy" | "eager";
	priority?: boolean;
	caption?: string;
	title?: string;
}

export const OptimizedImage = component$<OptimizedImageProps>((props) => {
	const {
		src,
		alt,
		width,
		height,
		className = "",
		loading = "lazy",
		priority = false,
		caption,
		title,
	} = props;

	const imgSrc = useSignal(src);

	const onImgError = $(() => {
		if (imgSrc.value !== SITE_IMAGES.fallback) {
			imgSrc.value = SITE_IMAGES.fallback;
		}
	});

	return (
		<figure class="block">
			<img
				src={imgSrc.value}
				alt={alt}
				width={width}
				height={height}
				loading={priority ? "eager" : loading}
				title={title}
				class={`w-full h-auto object-cover ${className}`}
				decoding="async"
				onError$={onImgError}
			/>
			{caption && (
				<figcaption class="text-sm text-gray-600 mt-2 text-center italic">
					{caption}
				</figcaption>
			)}
		</figure>
	);
});
