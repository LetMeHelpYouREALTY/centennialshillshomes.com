import ServiceLandingPage, {
  serviceMetadata,
} from "@/components/templates/ServiceLandingPage";
import { legacyLandingPages } from "@/lib/legacy-landing-content";

const page = legacyLandingPages["selling-guide"];

export const metadata = serviceMetadata("selling-guide", page.title, page.description);

export default function Page() {
  return <ServiceLandingPage {...page} slug="selling-guide" />;
}
