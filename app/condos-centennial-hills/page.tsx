import ServiceLandingPage, {
  serviceMetadata,
} from "@/components/templates/ServiceLandingPage";
import { legacyLandingPages } from "@/lib/legacy-landing-content";

const page = legacyLandingPages["condos-centennial-hills"];

export const metadata = serviceMetadata("condos-centennial-hills", page.title, page.description);

export default function Page() {
  return <ServiceLandingPage {...page} slug="condos-centennial-hills" />;
}
