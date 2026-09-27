import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import siteIcon from "@/assets/TouringGO_Logo.png";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // 1. Base URL required for resolving social share images to absolute URLs
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://touringgo.com"
  ),

  // 2. Browser tab title with template support for dynamic child pages
  title: {
    default: "TouringGO - Cambodia Tourist Attractions",
    template: "%s | TouringGO",
  },
  description:
    "Discover amazing places, book unforgettable experiences, and explore the world with TouringGO.",
  keywords: [
    "Tourist attractions",
    "Cambodia",
    "Travel",
    "Tours",
    "Vacation",
    "Angkor Wat",
  ],

  // 3. Browser favicons and touch icons
  icons: {
    icon: siteIcon.src,
    shortcut: siteIcon.src,
    apple: siteIcon.src,
  },

  // 4. OpenGraph metadata for social sharing (Facebook, Telegram, WhatsApp, LinkedIn)
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "TouringGO",
    title: "TouringGO - Cambodia Tourist Attractions",
    description:
      "Discover amazing places, book unforgettable experiences, and explore the world with TouringGO.",
    images: [
      {
        url: "/storeThumbnail.png",
        width: 1200,
        height: 630,
        alt: "TouringGO - Cambodia Tourist Attractions",
      },
    ],
  },

  // 5. Twitter / X Card preview configuration
  twitter: {
    card: "summary_large_image",
    title: "TouringGO - Cambodia Tourist Attractions",
    description:
      "Discover amazing places, book unforgettable experiences, and explore the world with TouringGO.",
    images: ["/storeThumbnail.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body
        className={`${geistMono.variable} min-h-screen bg-slate-100 text-slate-900`}
      >
        <div className="min-h-screen bg-white m-auto">
          <Header />
          <main className="relative">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
