import { agentInfo, officeInfo, siteConfig } from "@/lib/site-config";
import type { LegalPageContent } from "@/components/templates/LegalPage";

const lastUpdated = "June 30, 2026";

const sharedContact = [
  `Phone: ${agentInfo.phone}`,
  `Email: ${agentInfo.email}`,
  `Office: ${officeInfo.address.full}`,
];

export const legalPages: Record<string, LegalPageContent> = {
  "privacy-policy": {
    title: "Privacy Policy",
    description: `Privacy policy for ${siteConfig.url}. How Dr. Jan Duffy collects and protects your information.`,
    slug: "privacy-policy",
    lastUpdated,
    sections: [
      {
        heading: "Introduction",
        paragraphs: [
          `${siteConfig.fullName} ("we," "our," or "us") is committed to protecting your privacy. This policy explains how we collect, use, and safeguard information when you visit ${siteConfig.url} or use our real estate services.`,
          "Real estate transactions involve sensitive personal and financial information. We take our responsibility to protect this data seriously.",
        ],
      },
      {
        heading: "Information We Collect",
        paragraphs: ["We may collect information you provide directly and information collected automatically:"],
        list: [
          "Name, email, phone number, and mailing address",
          "Property preferences and transaction details",
          "Communications when you contact us or schedule showings",
          "Website usage data such as pages visited and device type",
        ],
      },
      {
        heading: "How We Use Your Information",
        paragraphs: [
          "We use your information to provide real estate services, respond to inquiries, send property updates you request, and improve our website.",
          "We do not sell your personal information to third parties.",
        ],
      },
      {
        heading: "Contact Us",
        paragraphs: ["For privacy questions or requests, contact us:", ...sharedContact],
      },
    ],
  },
  privacy: {
    title: "Privacy",
    description: `Privacy information for ${siteConfig.name}.`,
    slug: "privacy",
    lastUpdated,
    sections: [
      {
        heading: "Privacy Overview",
        paragraphs: [
          "This page summarizes our privacy practices. For the full policy, see our Privacy Policy page.",
          "We collect only information necessary to provide real estate services and honor your communication preferences.",
        ],
      },
      {
        heading: "Contact",
        paragraphs: sharedContact,
      },
    ],
  },
  "terms-of-service": {
    title: "Terms of Service",
    description: `Terms of service for using ${siteConfig.url} and Dr. Jan Duffy real estate services.`,
    slug: "terms-of-service",
    lastUpdated,
    sections: [
      {
        heading: "Acceptance of Terms",
        paragraphs: [
          `By accessing ${siteConfig.url}, you agree to these Terms of Service. If you do not agree, please do not use this website.`,
          "This site is operated by Dr. Jan Duffy, REALTOR®, with Berkshire Hathaway HomeServices Nevada Properties.",
        ],
      },
      {
        heading: "Real Estate Services",
        paragraphs: [
          "Property information is deemed reliable but not guaranteed. All listings are subject to prior sale, change, or withdrawal.",
          "Dr. Jan Duffy is licensed in Nevada (License S.0197614.LLC). Brokerage services are provided through Berkshire Hathaway HomeServices Nevada Properties.",
        ],
      },
      {
        heading: "Limitation of Liability",
        paragraphs: [
          "We strive for accuracy but make no warranties about website content. Use of this site is at your own risk.",
        ],
      },
      {
        heading: "Contact",
        paragraphs: sharedContact,
      },
    ],
  },
  terms: {
    title: "Terms",
    description: `Website terms for ${siteConfig.name}.`,
    slug: "terms",
    lastUpdated,
    sections: [
      {
        heading: "Website Terms",
        paragraphs: [
          "Use of this website constitutes acceptance of our Terms of Service. MLS data is provided for personal, non-commercial use.",
        ],
      },
      {
        heading: "Contact",
        paragraphs: sharedContact,
      },
    ],
  },
  "fair-housing": {
    title: "Fair Housing Statement",
    description:
      "Fair housing commitment for Dr. Jan Duffy and Berkshire Hathaway HomeServices Nevada Properties.",
    slug: "fair-housing",
    lastUpdated,
    sections: [
      {
        heading: "Our Commitment",
        paragraphs: [
          `${siteConfig.fullName} is committed to equal professional service regardless of race, color, religion, sex, handicap, familial status, national origin, or any other protected class.`,
          "Fair housing is a fundamental principle guiding all our real estate services.",
        ],
      },
      {
        heading: "Fair Housing Act",
        paragraphs: ["The Fair Housing Act prohibits discrimination in housing based on:"],
        list: [
          "Race or color",
          "Religion",
          "National origin",
          "Sex (including gender identity)",
          "Familial status",
          "Disability",
        ],
      },
      {
        heading: "Reporting Discrimination",
        paragraphs: [
          "If you believe you have experienced housing discrimination, contact the U.S. Department of Housing and Urban Development (HUD) at 1-800-669-9777 or hud.gov/fairhousing.",
        ],
      },
    ],
  },
  accessibility: {
    title: "Accessibility Statement",
    description: `Accessibility commitment for ${siteConfig.url}.`,
    slug: "accessibility",
    lastUpdated,
    sections: [
      {
        heading: "Our Commitment",
        paragraphs: [
          "We are committed to ensuring digital accessibility for people with disabilities. We continually improve the user experience for everyone.",
        ],
      },
      {
        heading: "Feedback",
        paragraphs: [
          "If you encounter accessibility barriers on our website, please contact us and we will work to provide the information you need in an alternative format.",
          ...sharedContact,
        ],
      },
    ],
  },
};

export const legalPageSlugs = Object.keys(legalPages);
