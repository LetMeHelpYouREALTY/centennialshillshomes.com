import ServiceLandingPage, {
  serviceMetadata,
} from "@/components/templates/ServiceLandingPage";
import { legacyLandingPages } from "@/lib/legacy-landing-content";

const page = legacyLandingPages["testimonials"];

export const metadata = serviceMetadata("testimonials", page.title, page.description);

export default function Page() {
  return <ServiceLandingPage {...page} slug="testimonials" />;
}
