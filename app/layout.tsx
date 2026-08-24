import "./globals.css";

import React from "react";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Script from "next/script";
import { GeistSans } from "geist/font/sans";
import { Fraunces } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { cn } from "lib/utils";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import SchemaScript from "@/components/SchemaScript";
import {
  generateRealEstateAgentSchema,
  generateWebSiteSchema,
  combineSchemas,
} from "@/lib/schema";
import { siteConfig, siteImages, siteImageUrl } from "@/lib/site-config";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const AIChatWidget = dynamic(() => import("@/components/chat/AIChatWidget"), {
  ssr: false,
});
const CalendlyBadge = dynamic(() => import("@/components/calendly/CalendlyBadge"), {
  ssr: false,
});

const title = siteConfig.fullName;
const description = siteConfig.description;
const url = siteConfig.url;

export const metadata: Metadata = {
  title: {
    default: title,
    template: `%s | ${siteConfig.brandLine}`,
  },
  description,
  metadataBase: new URL(url),
  keywords: [
    "Centennial Hills homes for sale",
    "89138 homes",
    "89144 real estate",
    "89135 Las Vegas",
    "Dr. Jan Duffy",
    "northwest Las Vegas REALTOR",
    "Berkshire Hathaway HomeServices",
    "Red Rock Country Club",
    "Summerlin West",
  ],
  openGraph: {
    title,
    description,
    url,
    siteName: siteConfig.brandLine,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: siteImageUrl(siteImages.ogDefault),
        width: 1200,
        height: 630,
        alt: siteConfig.fullName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [siteImageUrl(siteImages.ogDefault)],
  },
  icons: {
    icon: "/favicon-32x32.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Combined site-wide schemas using the schema utility
const siteWideSchemas = combineSchemas(
  generateRealEstateAgentSchema(),
  generateWebSiteSchema()
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth antialiased" style={{ colorScheme: 'light' }}>
      <head>
        <meta name="color-scheme" content="light" />
        {/* Site-wide JSON-LD Schema: RealEstateAgent + WebSite */}
        <SchemaScript schema={siteWideSchemas} id="site-schema" />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WB5DLLZ4C6"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WB5DLLZ4C6');
          `}
        </Script>
      </head>
      <body
        className={cn(
          GeistSans.variable,
          fraunces.variable,
          "font-sans antialiased bg-sand text-sm md:text-base text-ink",
        )}
      >
        <Navbar />
        {children}
        <Footer />
        <AIChatWidget />
        <CalendlyBadge />
        <Analytics />
      </body>
    </html>
  );
}
