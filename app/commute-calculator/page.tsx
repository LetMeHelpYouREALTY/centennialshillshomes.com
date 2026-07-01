import ServiceLandingPage, {
  serviceMetadata,
} from "@/components/templates/ServiceLandingPage";
import { legacyLandingPages } from "@/lib/legacy-landing-content";

const page = legacyLandingPages["commute-calculator"];

export const metadata = serviceMetadata("commute-calculator", page.title, page.description);

export default function Page() {
  return <ServiceLandingPage {...page} slug="commute-calculator" />;
}
