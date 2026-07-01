import ServiceLandingPage, {
  serviceMetadata,
} from "@/components/templates/ServiceLandingPage";
import { legacyLandingPages } from "@/lib/legacy-landing-content";

const page = legacyLandingPages["best-schools-centennial-hills"];

export const metadata = serviceMetadata("best-schools-centennial-hills", page.title, page.description);

export default function Page() {
  return <ServiceLandingPage {...page} slug="best-schools-centennial-hills" />;
}
