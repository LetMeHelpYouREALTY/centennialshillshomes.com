import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
	return (
		<div class="min-h-screen bg-gray-50">
			{/* Hero Section */}
			<section class="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
				<div class="container mx-auto px-4">
					<div class="max-w-4xl mx-auto text-center">
						<h1 class="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
						<p class="text-xl text-blue-100">Your Privacy is Important to Us</p>
					</div>
				</div>
			</section>

			{/* Privacy Policy Content */}
			<section class="py-16">
				<div class="container mx-auto px-4">
					<div class="max-w-4xl mx-auto">
						<div class="bg-white rounded-lg shadow-lg p-8">
							<div class="prose max-w-none">
								<h2 class="text-2xl font-bold mb-6 text-gray-800">
									Information We Collect
								</h2>
								<p class="text-gray-700 mb-6">
									We collect information you provide directly to us, such as
									when you create an account, contact us, or request a market
									analysis. This may include your name, email address, phone
									number, and property preferences.
								</p>

								<h2 class="text-2xl font-bold mb-6 text-gray-800">
									How We Use Your Information
								</h2>
								<p class="text-gray-700 mb-6">
									We use the information we collect to provide you with real
									estate services, respond to your inquiries, and improve our
									website and services.
								</p>

								<h2 class="text-2xl font-bold mb-6 text-gray-800">
									Information Sharing
								</h2>
								<p class="text-gray-700 mb-6">
									We do not sell, trade, or otherwise transfer your personal
									information to third parties without your consent, except as
									described in this privacy policy.
								</p>

								<h2 class="text-2xl font-bold mb-6 text-gray-800">
									Contact Us
								</h2>
								<p class="text-gray-700 mb-6">
									If you have any questions about this privacy policy, please
									contact us at:
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
	title: "Privacy Policy | Dr. Jan Duffy Real Estate",
	meta: [
		{
			name: "description",
			content:
				"Privacy policy for Dr. Jan Duffy Real Estate. Learn how we protect your personal information.",
		},
		{
			name: "robots",
			content: "noindex, follow",
		},
	],
};
