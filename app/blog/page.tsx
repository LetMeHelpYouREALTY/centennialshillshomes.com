import ServiceLandingPage, {
  serviceMetadata,
} from "@/components/templates/ServiceLandingPage";
import { legacyLandingPages } from "@/lib/legacy-landing-content";

const page = legacyLandingPages["blog"];

export const metadata = serviceMetadata("blog", page.title, page.description);

export default function Page() {
  return <ServiceLandingPage {...page} slug="blog" />;
}
