import type { Metadata, Viewport } from "next";
import "./globals.css";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "ysda-website";
const basePath = process.env.GITHUB_ACTIONS === "true" ? `/${repositoryName}` : "";
const logoPath = `${basePath}/brand/ysda-logo-white.png`;

export const metadata: Metadata = {
  title: "Youth Sports Development Academy | YSDA Indore",
  description:
    "Premium multi-sports and football academy in Indore offering youth coaching, fitness, tournaments, events, and player development programs.",
  keywords: [
    "YSDA",
    "Youth Sports Development Academy",
    "football academy Indore",
    "sports academy Indore",
    "youth sports coaching",
    "multi sports academy India"
  ],
  openGraph: {
    title: "Youth Sports Development Academy | YSDA Indore",
    description:
      "Developing today's talent, creating tomorrow's champions through football and multi-sports coaching in Indore.",
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
