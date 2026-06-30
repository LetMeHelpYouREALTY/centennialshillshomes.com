import ServiceLandingPage, {
  serviceMetadata,
} from "@/components/templates/ServiceLandingPage";
import { legacyLandingPages } from "@/lib/legacy-landing-content";

const page = legacyLandingPages["centennial-hills-amenities"];

export const metadata = serviceMetadata("centennial-hills-amenities", page.title, page.description);

export default function Page() {
  return <ServiceLandingPage {...page} slug="centennial-hills-amenities" />;
}
