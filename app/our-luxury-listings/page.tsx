import ServiceLandingPage, {
  serviceMetadata,
} from "@/components/templates/ServiceLandingPage";
import { legacyLandingPages } from "@/lib/legacy-landing-content";

const page = legacyLandingPages["our-luxury-listings"];

export const metadata = serviceMetadata("our-luxury-listings", page.title, page.description);

export default function Page() {
  return <ServiceLandingPage {...page} slug="our-luxury-listings" />;
}
