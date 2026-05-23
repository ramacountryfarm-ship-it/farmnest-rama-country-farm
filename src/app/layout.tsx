import type { Metadata, Viewport } from "next";
import { Poppins, Outfit } from "next/font/google";
import "./globals.css";
import { BRAND } from "@/lib/constants";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
  preload: true,
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-outfit",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: `${BRAND.farmName} | ${BRAND.tagline}`,
  description:
    "Fresh desi country eggs directly from Rama Country Farm. Order now on WhatsApp. Follow us on Instagram and YouTube.",
  keywords: [
    "country eggs",
    "desi eggs",
    "farm fresh eggs",
    "Rama Country Farm",
    "nattu koli muttai",
    "organic eggs",
    "farm eggs",
  ],
  authors: [{ name: "Rama Country Farm" }],
  creator: "Rama Country Farm",
  metadataBase: new URL("https://farmnest.vercel.app"),
  openGraph: {
    title: `${BRAND.farmName} — ${BRAND.tagline}`,
    description:
      "Fresh desi country eggs. Order directly from the farm via WhatsApp.",
    url: "https://farmnest.vercel.app",
    siteName: BRAND.farmName,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rama Country Farm — Farm Fresh Desi Eggs",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND.farmName} — ${BRAND.tagline}`,
    description: "Fresh desi country eggs. Order directly from the farm.",
    images: ["/og-image.png"],
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#204d3a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${poppins.variable} ${outfit.variable}`}>
      <body className="font-poppins">{children}</body>
    </html>
  );
}
