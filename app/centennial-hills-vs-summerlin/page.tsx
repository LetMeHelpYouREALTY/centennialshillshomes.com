import ServiceLandingPage, {
  serviceMetadata,
} from "@/components/templates/ServiceLandingPage";
import { legacyLandingPages } from "@/lib/legacy-landing-content";

const page = legacyLandingPages["centennial-hills-vs-summerlin"];

export const metadata = serviceMetadata("centennial-hills-vs-summerlin", page.title, page.description);

export default function Page() {
  return <ServiceLandingPage {...page} slug="centennial-hills-vs-summerlin" />;
}
