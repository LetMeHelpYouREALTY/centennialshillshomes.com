import { component$, Slot, useStyles$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import { useLocation } from '@builder.io/qwik-city';

import Header from '~/components/navigation/header';
import Footer from '~/components/navigation/footer';
import Breadcrumbs from '~/components/navigation/breadcrumbs';
import ScrollToTop from '~/components/navigation/scroll-to-top';
import ConsultationCta from '~/components/sections/consultation-cta';

import styles from './styles.css?inline';

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

/** Pages that already end with their own cta-section */
const PAGE_HAS_OWN_CTA = new Set([
  '/',
  '/contact',
  '/homes-400k-600k',
  '/centennial-hills-schools',
  '/best-schools-centennial-hills',
  '/selling-guide',
  '/centennial-hills',
  '/red-rock-country-club',
  '/affordability-calculator',
  '/luxury-home-sales',
  '/about',
  '/lone-mountain',
  '/summerlin-west',
  '/summerlin',
  '/centennial-hills-market-report',
  '/centennial-hills-homes',
  '/centennial-hills-vs-summerlin',
  '/golf-course-homes',
  '/centennial-hills-89135',
  '/the-ridges',
  '/buy-a-home',
  '/homes-under-400k',
  '/properties',
  '/homes-over-1m',
  '/faq',
  '/condos-centennial-hills',
  '/commute-calculator',
  '/moving-guide',
  '/buying-guide',
  '/blog/category/buyer-guide',
  '/blog/category/market-updates',
  '/move-up-buyers',
  '/california-equity-buyers',
  '/our-luxury-listings',
  '/market-reports',
  '/sell-a-home',
  '/corporate-relocation-services',
  '/mortgage-calculator',
  '/centennial-hills-amenities',
]);

export default component$(() => {
  useStyles$(styles);
  const loc = useLocation();
  const path = loc.url.pathname.replace(/\/$/, '') || '/';
  const showGlobalCta =
    !PAGE_HAS_OWN_CTA.has(path) && !path.startsWith('/demo');

  return (
    <>
      <Header />
      <Breadcrumbs />
      <main class="main-content">
        <Slot />
      </main>
      {showGlobalCta && <ConsultationCta />}
      <Footer />
      <ScrollToTop />
    </>
  );
});
