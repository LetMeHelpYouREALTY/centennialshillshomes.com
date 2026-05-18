import { component$, Slot, useStyles$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { Footer } from "~/components/Footer";
import { Navigation } from "~/components/Navigation";
import { StickyEngagementBar } from "~/components/StickyEngagementBar";

import styles from "./styles.css?inline";

export const useServerTimeLoader = routeLoader$(() => {
	return {
		date: new Date().toISOString(),
	};
});

export default component$(() => {
	useStyles$(styles);
	return (
		<>
			<head>
				{/* RealScout Web Components */}
				<script
					src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
					type="module"
				/>

				{/* RealScout Widget Styles - Global Configuration */}
				<style
					dangerouslySetInnerHTML={`
						/* Office Listings Widget */
						realscout-office-listings {
							--rs-listing-divider-color: #0e64c8;
							width: 100%;
						}

						/* Advanced Search Widget */
						realscout-advanced-search {
							--rs-as-button-text-color: #ffffff;
							--rs-as-background-color: #ffffff;
							--rs-as-button-color: rgb(35, 93, 137);
							--rs-as-widget-width: 500px !important;
						}

						/* Home Value Widget */
						realscout-home-value {
							--rs-hvw-background-color: #ffffff;
							--rs-hvw-title-color: #000000;
							--rs-hvw-subtitle-color: rgba(28, 30, 38, 0.5);
							--rs-hvw-primary-button-text-color: #ffffff;
							--rs-hvw-primary-button-color: rgb(35, 93, 137);
							--rs-hvw-secondary-button-text-color: rgb(35, 93, 137);
							--rs-hvw-secondary-button-color: #ffffff;
							--rs-hvw-widget-width: auto;
						}

						/* Simple Search Widget */
						realscout-simple-search {
							--rs-ss-font-primary-color: #6a6d72;
							--rs-ss-searchbar-border-color: hsl(0, 0%, 80%);
							--rs-ss-box-shadow: 0 10px 15px -3px #0000001a;
							--rs-ss-widget-width: 500px !important;
						}

						/* Your Listings Widget */
						realscout-your-listings {
							--rs-listing-divider-color: rgb(101, 141, 172);
							width: 100%;
						}

						/* Responsive adjustments */
						@media (max-width: 768px) {
							realscout-advanced-search,
							realscout-simple-search {
								--rs-ss-widget-width: 100% !important;
								--rs-as-widget-width: 100% !important;
							}
						}
					`}
				/>
			</head>
			<Navigation />
			<main>
				<Slot />
			</main>
			<Footer />
			<StickyEngagementBar />
		</>
	);
});
