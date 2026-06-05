import type { Metadata, Viewport } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_URL = "https://roodtexas.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "ROOD Manufacturing | Custom firearm finishes & AR-15 parts · Lubbock, TX",
    template: "%s | ROOD Manufacturing",
  },
  description:
    "ROOD Manufacturing builds and finishes AR-15 platforms in Lubbock, Texas. Shop uppers, BCGs and parts, or send in your own firearm for a custom finish, a limited drop, or a complete flagship build.",
  keywords: [
    "ROOD Manufacturing",
    "custom firearm finish",
    "Cerakote",
    "AR-15 parts",
    "Lubbock gunsmith",
    "limited drops",
    "battleworn finish",
  ],
  openGraph: {
    title: "ROOD Manufacturing — we build it, we finish it",
    description:
      "Custom firearm finishes, limited drops, and complete flagship builds. Built in Lubbock, Texas.",
    url: SITE_URL,
    siteName: "ROOD Manufacturing",
    images: [{ url: "/img/cerakote-sig.jpg", width: 2000, height: 1517, alt: "Custom battleworn Cerakote finish" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ROOD Manufacturing",
    description: "Custom firearm finishes, limited drops, and flagship builds. Lubbock, TX.",
    images: ["/img/cerakote-sig.jpg"],
  },
  icons: { icon: "/assets/rood-badge-white.png" },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${oswald.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
