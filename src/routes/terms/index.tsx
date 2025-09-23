import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
	return (
		<div class="min-h-screen bg-gray-50">
			{/* Hero Section */}
			<section class="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
				<div class="container mx-auto px-4">
					<div class="max-w-4xl mx-auto text-center">
						<h1 class="text-4xl md:text-5xl font-bold mb-6">
							Terms of Service
						</h1>
						<p class="text-xl text-blue-100">
							Terms and Conditions for Our Services
						</p>
					</div>
				</div>
			</section>

			{/* Terms Content */}
			<section class="py-16">
				<div class="container mx-auto px-4">
					<div class="max-w-4xl mx-auto">
						<div class="bg-white rounded-lg shadow-lg p-8">
							<div class="prose max-w-none">
								<h2 class="text-2xl font-bold mb-6 text-gray-800">
									Real Estate Services
								</h2>
								<p class="text-gray-700 mb-6">
									Dr. Jan Duffy provides professional real estate services
									including property sales, purchases, market analysis, and
									consultation services in the Las Vegas area.
								</p>

								<h2 class="text-2xl font-bold mb-6 text-gray-800">
									Client Responsibilities
								</h2>
								<p class="text-gray-700 mb-6">
									Clients are responsible for providing accurate information and
									cooperating with the real estate process. All transactions are
									subject to applicable laws and regulations.
								</p>

								<h2 class="text-2xl font-bold mb-6 text-gray-800">
									Limitation of Liability
								</h2>
								<p class="text-gray-700 mb-6">
									While we strive to provide accurate information, we cannot
									guarantee the accuracy of all property information or market
									data. Clients should verify all information independently.
								</p>

								<h2 class="text-2xl font-bold mb-6 text-gray-800">
									Contact Information
								</h2>
								<p class="text-gray-700 mb-6">
									For questions about these terms, please contact:
								</p>
								<div class="bg-blue-50 p-6 rounded-lg">
									<p class="text-gray-700">
										<strong>Dr. Jan Duffy</strong>
										<br />
										Phone: (702) 903-1952
										<br />
										Email: info@centennialshillshomes.com
										<br />
										Address: 1490 Center Crossing Rd, Las Vegas, NV 89144
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
});

export const head: DocumentHead = {
	title: "Terms of Service | Dr. Jan Duffy Real Estate",
	meta: [
		{
			name: "description",
			content:
				"Terms of service for Dr. Jan Duffy Real Estate. Learn about our service terms and conditions.",
		},
		{
			name: "robots",
			content: "noindex, follow",
		},
	],
};
