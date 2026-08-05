import type { Metadata, Viewport } from "next";
import VideoPosterPathFix from "../components/VideoPosterPathFix";
import "./globals.css";

const siteUrl = "https://ysdasports.com";
const staticBasePath = "";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Youth Sports Development Academy | YSDA Mhow Indore",
    template: "%s | YSDA"
  },
  description:
    "YSDA is a professionally managed football academy established in 2021 in Mhow, Indore, associated with YSDFI for football coaching, camps, trials, tournaments and youth development.",
  keywords: [
    "YSDA",
    "Youth Sports Development Academy",
    "YSDA Mhow",
    "Youth Sports Development Federation of India",
    "YSDFI",
    "football academy Indore",
    "football academy Mhow",
    "football coaching Indore",
    "football coaching Mhow",
    "youth football coaching",
    "football academy India"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Youth Sports Development Academy | YSDA Mhow Indore",
    description:
      "Developing Talent. Building Character. Creating Champions. Professional football development in Mhow, Indore.",
    url: siteUrl,
    siteName: "Youth Sports Development Academy",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/ysda-football-team-award.png",
        width: 1200,
        height: 630,
        alt: "Youth Sports Development Academy football team"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Youth Sports Development Academy | YSDA Mhow Indore",
    description: "Professional football coaching and youth development in Mhow, Indore.",
    images: ["/ysda-football-team-award.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  icons: {
    icon: `${staticBasePath}/brand/ysda-logo-white.png`,
    apple: `${staticBasePath}/brand/ysda-logo-white.png`
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0B5CFF"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <VideoPosterPathFix basePath={staticBasePath} />
        {children}
      </body>
    </html>
  );
}
