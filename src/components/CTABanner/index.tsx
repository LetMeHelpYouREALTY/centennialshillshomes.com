import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { SITE } from "~/config/site";

export interface CTABannerProps {
	title: string;
	subtitle: string;
	primaryButtonText: string;
	primaryButtonLink: string;
	secondaryButtonText?: string;
	secondaryButtonLink?: string;
	phoneNumber?: string;
	backgroundColor?: "blue" | "green" | "purple";
}

export const CTABanner = component$<CTABannerProps>((props) => {
	const bgColor = props.backgroundColor || "blue";

	const colorClasses = {
		blue: "bg-blue-600",
		green: "bg-green-600",
		purple: "bg-purple-600",
	};

	const textColorClasses = {
		blue: "text-blue-600",
		green: "text-green-600",
		purple: "text-purple-600",
	};

	return (
		<section class={`py-16 ${colorClasses[bgColor]} text-white`}>
			<div class="container mx-auto px-4 text-center">
				<div class="max-w-4xl mx-auto">
					<h2 class="text-3xl md:text-4xl font-bold mb-4">{props.title}</h2>
					<p class="text-xl mb-8 text-blue-100">{props.subtitle}</p>
					<div class="flex flex-col sm:flex-row gap-4 justify-center">
						<Link
							href={props.primaryButtonLink}
							class={`bg-white ${textColorClasses[bgColor]} px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200`}
						>
							{props.primaryButtonText}
						</Link>
						{props.secondaryButtonText && props.secondaryButtonLink && (
							<Link
								href={props.secondaryButtonLink}
								class="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold text-lg"
							>
								{props.secondaryButtonText}
							</Link>
						)}
					</div>
					{(props.phoneNumber ?? SITE.phone) && (
						<div class="mt-8 text-blue-200">
							<p class="text-lg">
								<a href={`tel:${SITE.phoneTel}`} class="hover:underline">
									📞 {props.phoneNumber ?? SITE.phone}
								</a>{" "}
								| Daily 6 AM – 9 PM
							</p>
							<p class="text-sm">
								{SITE.address.streetAddress}, {SITE.address.addressLocality},{" "}
								{SITE.address.addressRegion} {SITE.address.postalCode}
							</p>
						</div>
					)}
				</div>
			</div>
		</section>
	);
});
