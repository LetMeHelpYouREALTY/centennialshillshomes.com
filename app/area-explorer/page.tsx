import ServiceLandingPage, {
  serviceMetadata,
} from "@/components/templates/ServiceLandingPage";
import { legacyLandingPages } from "@/lib/legacy-landing-content";

const page = legacyLandingPages["area-explorer"];

export const metadata = serviceMetadata("area-explorer", page.title, page.description);

export default function Page() {
  return <ServiceLandingPage {...page} slug="area-explorer" />;
}
