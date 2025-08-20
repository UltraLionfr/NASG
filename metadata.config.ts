import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Auth Secret Generator",
  description:
    "Generate cryptographically secure secrets for your Next.js apps. No data is stored or transmitted.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Auth Secret Generator",
    description:
      "Generate cryptographically secure secrets for your Next.js apps. No data is stored or transmitted.",
    url: "https://nasg.ultralion.xyz",
    siteName: "Auth Secret Generator",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Auth Secret Generator",
    description:
      "Generate cryptographically secure secrets for your Next.js apps. No data is stored or transmitted.",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0f172a",
};