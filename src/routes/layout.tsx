import { component$, Slot, useStyles$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { Footer } from "~/components/Footer";
import { Navigation } from "~/components/Navigation";

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
			<Navigation />
			<main>
				<Slot />
			</main>
			<Footer />
		</>
	);
});
