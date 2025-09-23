import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export interface HeroSectionProps {}

export const HeroSection = component$<HeroSectionProps>((props) => {
	return (
		<section class="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
			<div class="container mx-auto px-4">
				<div class="max-w-4xl mx-auto text-center">
					<h1 class="text-5xl md:text-6xl font-bold mb-6">
						Centennial Hills Real Estate
					</h1>
					<p class="text-xl md:text-2xl mb-8 text-blue-100">
						Homes by Dr. Jan Duffy | Luxury Real Estate Specialist
					</p>
					<p class="text-lg mb-8 text-blue-200">
						Serving West Summerlin's Premier Neighborhoods • 30+ Years Expertise
						• Luxury Homes $400K-$750K
					</p>
					<div class="flex flex-col sm:flex-row gap-4 justify-center">
						<Link
							href="/properties"
							class="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg"
						>
							Browse Luxury Properties
						</Link>
						<Link
							href="/contact"
							class="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold text-lg"
						>
							Free Market Analysis
						</Link>
					</div>
					<div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
						<div>
							<div class="text-3xl font-bold text-blue-200">30+</div>
							<div class="text-blue-100">Years Experience</div>
						</div>
						<div>
							<div class="text-3xl font-bold text-blue-200">Top 1%</div>
							<div class="text-blue-100">Las Vegas REALTOR®</div>
						</div>
						<div>
							<div class="text-3xl font-bold text-blue-200">24/7</div>
							<div class="text-blue-100">Available</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
});
