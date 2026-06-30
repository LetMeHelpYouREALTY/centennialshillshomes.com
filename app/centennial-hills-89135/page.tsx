import ServiceLandingPage, {
  serviceMetadata,
} from "@/components/templates/ServiceLandingPage";
import { legacyLandingPages } from "@/lib/legacy-landing-content";

const page = legacyLandingPages["centennial-hills-89135"];

export const metadata = serviceMetadata("centennial-hills-89135", page.title, page.description);

export default function Page() {
  return <ServiceLandingPage {...page} slug="centennial-hills-89135" />;
}
