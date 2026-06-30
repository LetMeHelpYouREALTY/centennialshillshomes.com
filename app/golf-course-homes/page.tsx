import ServiceLandingPage, {
  serviceMetadata,
} from "@/components/templates/ServiceLandingPage";
import { legacyLandingPages } from "@/lib/legacy-landing-content";

const page = legacyLandingPages["golf-course-homes"];

export const metadata = serviceMetadata("golf-course-homes", page.title, page.description);

export default function Page() {
  return <ServiceLandingPage {...page} slug="golf-course-homes" />;
}
