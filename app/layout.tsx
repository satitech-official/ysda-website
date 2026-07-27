import type { Metadata, Viewport } from "next";
import "./globals.css";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "ysda-website";
const basePath = process.env.GITHUB_ACTIONS === "true" ? `/${repositoryName}` : "";
const logoPath = `${basePath}/brand/ysda-logo-white.png`;

export const metadata: Metadata = {
  title: "Youth Sports Development Academy | YSDA Mhow Indore",
  description:
    "YSDA is a professionally managed sports academy established in 2021 in Mhow, Indore, associated with YSDFI for football, multi-sports coaching, camps, trials, tournaments and youth development.",
  keywords: [
    "YSDA",
    "Youth Sports Development Academy",
    "YSDA Mhow",
    "Youth Sports Development Federation of India",
    "YSDFI",
    "football academy Indore",
    "football academy Mhow",
    "sports academy Indore",
    "sports academy Mhow",
    "youth sports coaching",
    "multi sports academy India"
  ],
  openGraph: {
    title: "Youth Sports Development Academy | YSDA Mhow Indore",
    description:
      "Developing Talent. Building Character. Creating Champions. Professional football and multi-sports development in Mhow, Indore.",
    type: "website",
    locale: "en_IN"
  },
  icons: {
    icon: logoPath,
    apple: logoPath
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
      <body>{children}</body>
    </html>
  );
}
