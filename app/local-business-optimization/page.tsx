import ServiceLandingPage, {
  serviceMetadata,
} from "@/components/templates/ServiceLandingPage";
import { legacyLandingPages } from "@/lib/legacy-landing-content";

const page = legacyLandingPages["local-business-optimization"];

export const metadata = serviceMetadata("local-business-optimization", page.title, page.description);

export default function Page() {
  return <ServiceLandingPage {...page} slug="local-business-optimization" />;
}
