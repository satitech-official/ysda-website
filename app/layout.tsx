import type { Metadata, Viewport } from "next";
import VideoPosterPathFix from "../components/VideoPosterPathFix";
import "./globals.css";

const configuredBasePath = String(process.env.GITHUB_PAGES_BASE_PATH ?? "").trim();
const staticBasePath =
  !configuredBasePath || configuredBasePath === "/"
    ? ""
    : `/${configuredBasePath.replace(/^\/+|\/+$/g, "")}`;

export const metadata: Metadata = {
  title: "Youth Sports Development Academy | YSDA Football Academy Mhow Indore",
  description:
    "Youth Sports Development Academy (YSDA) is a football-focused academy in Mhow, Indore offering structured football coaching, grassroots development, technical training, goalkeeping, fitness, trials, camps and competitive exposure.",
  keywords: [
    "YSDA",
    "Youth Sports Development Academy",
    "YSDA Football Academy",
    "YSDA Mhow",
    "football academy Indore",
    "football academy Mhow",
    "football coaching Indore",
    "football coaching Mhow",
    "youth football coaching",
    "grassroots football India",
    "football training academy"
  ],
  openGraph: {
    title: "Youth Sports Development Academy | YSDA Football Academy",
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
        <VideoPosterPathFix basePath={staticBasePath} />
        {children}
      </body>
    </html>
  );
}
