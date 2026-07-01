import ServiceLandingPage, {
  serviceMetadata,
} from "@/components/templates/ServiceLandingPage";
import { legacyLandingPages } from "@/lib/legacy-landing-content";

const page = legacyLandingPages["mls-search"];

export const metadata = serviceMetadata("mls-search", page.title, page.description);

export default function Page() {
  return <ServiceLandingPage {...page} slug="mls-search" />;
}
