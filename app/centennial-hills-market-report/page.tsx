import ServiceLandingPage, {
  serviceMetadata,
} from "@/components/templates/ServiceLandingPage";
import { legacyLandingPages } from "@/lib/legacy-landing-content";

const page = legacyLandingPages["centennial-hills-market-report"];

export const metadata = serviceMetadata("centennial-hills-market-report", page.title, page.description);

export default function Page() {
  return <ServiceLandingPage {...page} slug="centennial-hills-market-report" />;
}
