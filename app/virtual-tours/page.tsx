import ServiceLandingPage, {
  serviceMetadata,
} from "@/components/templates/ServiceLandingPage";
import { legacyLandingPages } from "@/lib/legacy-landing-content";

const page = legacyLandingPages["virtual-tours"];

export const metadata = serviceMetadata("virtual-tours", page.title, page.description);

export default function Page() {
  return <ServiceLandingPage {...page} slug="virtual-tours" />;
}
