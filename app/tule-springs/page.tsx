import ServiceLandingPage, {
  serviceMetadata,
} from "@/components/templates/ServiceLandingPage";
import { legacyLandingPages } from "@/lib/legacy-landing-content";

const page = legacyLandingPages["tule-springs"];

export const metadata = serviceMetadata("tule-springs", page.title, page.description);

export default function Page() {
  return <ServiceLandingPage {...page} slug="tule-springs" />;
}
