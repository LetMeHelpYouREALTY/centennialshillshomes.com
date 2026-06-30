import ServiceLandingPage, {
  serviceMetadata,
} from "@/components/templates/ServiceLandingPage";
import { legacyLandingPages } from "@/lib/legacy-landing-content";

const page = legacyLandingPages["search"];

export const metadata = serviceMetadata("search", page.title, page.description);

export default function Page() {
  return <ServiceLandingPage {...page} slug="search" />;
}
