import ServiceLandingPage, {
  serviceMetadata,
} from "@/components/templates/ServiceLandingPage";
import { legacyLandingPages } from "@/lib/legacy-landing-content";

const page = legacyLandingPages["providence"];

export const metadata = serviceMetadata("providence", page.title, page.description);

export default function Page() {
  return <ServiceLandingPage {...page} slug="providence" />;
}
