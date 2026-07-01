import ServiceLandingPage, {
  serviceMetadata,
} from "@/components/templates/ServiceLandingPage";
import { legacyLandingPages } from "@/lib/legacy-landing-content";

const page = legacyLandingPages["active-listings"];

export const metadata = serviceMetadata("active-listings", page.title, page.description);

export default function Page() {
  return <ServiceLandingPage {...page} slug="active-listings" />;
}
