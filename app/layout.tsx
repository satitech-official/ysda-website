import type { Metadata, Viewport } from "next";
import VideoPosterPathFix from "../components/VideoPosterPathFix";
import "./globals.css";

const staticBasePath = process.env.NODE_ENV === "production" ? "/ysda-website" : "";

export const metadata: Metadata = {
  title: "Youth Sports Development Academy | YSDA Mhow Indore",
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
  openGraph: {
    title: "Youth Sports Development Academy | YSDA Mhow Indore",
    description:
      "Developing Talent. Building Character. Creating Champions. Professional football development in Mhow, Indore.",
    type: "website",
    locale: "en_IN"
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
        <VideoPosterPathFix basePath={basePath} />
        {children}
      </body>
    </html>
  );
}
