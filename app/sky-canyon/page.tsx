import ServiceLandingPage, {
  serviceMetadata,
} from "@/components/templates/ServiceLandingPage";
import { legacyLandingPages } from "@/lib/legacy-landing-content";

const page = legacyLandingPages["sky-canyon"];

export const metadata = serviceMetadata("sky-canyon", page.title, page.description);

export default function Page() {
  return <ServiceLandingPage {...page} slug="sky-canyon" />;
}
