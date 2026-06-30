import ServiceLandingPage, {
  serviceMetadata,
} from "@/components/templates/ServiceLandingPage";
import { legacyLandingPages } from "@/lib/legacy-landing-content";

const page = legacyLandingPages["centennial-hills-luxury-homes"];

export const metadata = serviceMetadata("centennial-hills-luxury-homes", page.title, page.description);

export default function Page() {
  return <ServiceLandingPage {...page} slug="centennial-hills-luxury-homes" />;
}
