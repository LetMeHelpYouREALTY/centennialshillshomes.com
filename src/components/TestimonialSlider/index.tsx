import { $, component$, useSignal } from "@builder.io/qwik";
import { TestimonialCard } from "~/components/TestimonialCard";

export interface TestimonialSliderProps {}

export const TestimonialSlider = component$<TestimonialSliderProps>((props) => {
	const currentSlide = useSignal(0);

	const testimonials = [
		{
			name: "Sarah Chen",
			rating: 5,
			text: "Dr. Duffy's expertise in luxury properties is unmatched. She helped us find our dream home in Red Rock Country Club within weeks of our initial consultation. Her attention to detail and market knowledge made all the difference.",
			location: "Red Rock Country Club",
		},
		{
			name: "Michael Rodriguez",
			rating: 5,
			text: "As California equity buyers, we needed someone who understood our unique situation. Dr. Duffy exceeded all expectations, providing seamless guidance through our relocation process. Highly recommend!",
			location: "The Ridges",
		},
		{
			name: "Jennifer Thompson",
			rating: 5,
			text: "Professional, knowledgeable, and available 24/7. Dr. Duffy made our corporate relocation seamless and stress-free. Her same-day showing capability was exactly what we needed as busy executives.",
			location: "Summerlin West",
		},
		{
			name: "David Kim",
			rating: 5,
			text: "Dr. Duffy's complimentary market analysis was incredibly detailed and accurate. She helped us sell our luxury home above asking price in just 3 weeks. Her marketing strategies are top-notch.",
			location: "Centennial Hills",
		},
		{
			name: "Lisa Martinez",
			rating: 5,
			text: "From start to finish, Dr. Duffy provided exceptional service. Her understanding of the luxury market and ability to negotiate on our behalf resulted in the perfect home for our family.",
			location: "Lone Mountain",
		},
		{
			name: "Robert Johnson",
			rating: 5,
			text: "Dr. Duffy's investment property guidance was invaluable. She helped us identify the perfect luxury rental property that has exceeded our ROI expectations. Her market insights are spot-on.",
			location: "North Las Vegas",
		},
	];

	const nextSlide = $(() => {
		currentSlide.value = (currentSlide.value + 1) % testimonials.length;
	});

	const prevSlide = $(() => {
		currentSlide.value =
			currentSlide.value === 0
				? testimonials.length - 1
				: currentSlide.value - 1;
	});

	const goToSlide = $((index: number) => {
		currentSlide.value = index;
	});

	return (
		<section class="py-16 bg-blue-50">
			<div class="container mx-auto px-4">
				<div class="max-w-6xl mx-auto">
					<div class="text-center mb-12">
						<h2 class="text-3xl font-bold mb-4 text-gray-800">
							What Our Luxury Clients Say
						</h2>
						<p class="text-lg text-gray-600">
							Real testimonials from satisfied clients across Las Vegas's
							premier communities
						</p>
					</div>

					{/* Slider Container */}
					<div class="relative">
						{/* Navigation Arrows */}
						<button
							class="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white text-blue-600 p-3 rounded-full shadow-lg hover:bg-blue-50 transition-colors z-10"
							onClick$={prevSlide}
						>
							<svg
								class="w-6 h-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M15 19l-7-7 7-7"
								/>
							</svg>
						</button>
						<button
							class="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white text-blue-600 p-3 rounded-full shadow-lg hover:bg-blue-50 transition-colors z-10"
							onClick$={nextSlide}
						>
							<svg
								class="w-6 h-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9 5l7 7-7 7"
								/>
							</svg>
						</button>

						{/* Testimonials Grid */}
						<div class="overflow-hidden">
							<div
								class="flex transition-transform duration-500 ease-in-out"
								style={{
									transform: `translateX(-${currentSlide.value * 33.333}%)`,
								}}
							>
								{testimonials.map((testimonial, index) => (
									<div key={index} class="w-1/3 flex-shrink-0 px-4">
										<TestimonialCard
											name={testimonial.name}
											rating={testimonial.rating}
											text={testimonial.text}
											location={testimonial.location}
										/>
									</div>
								))}
							</div>
						</div>
					</div>

					{/* Dots Indicator */}
					<div class="flex justify-center mt-8 space-x-2">
						{testimonials.map((_, index) => (
							<button
								key={index}
								class={`w-3 h-3 rounded-full transition-colors ${
									index === currentSlide.value
										? "bg-blue-600"
										: "bg-gray-300 hover:bg-gray-400"
								}`}
								onClick$={() => goToSlide(index)}
							/>
						))}
					</div>

					{/* Auto-play indicator */}
					<div class="text-center mt-6">
						<p class="text-sm text-gray-500">
							Click the arrows or dots to navigate • Auto-advancing every 5
							seconds
						</p>
					</div>
				</div>
			</div>
		</section>
	);
});
