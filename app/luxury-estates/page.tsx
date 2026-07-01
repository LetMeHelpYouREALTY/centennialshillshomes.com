import ServiceLandingPage, {
  serviceMetadata,
} from "@/components/templates/ServiceLandingPage";
import { legacyLandingPages } from "@/lib/legacy-landing-content";

const page = legacyLandingPages["luxury-estates"];

export const metadata = serviceMetadata("luxury-estates", page.title, page.description);

export default function Page() {
  return <ServiceLandingPage {...page} slug="luxury-estates" />;
}
