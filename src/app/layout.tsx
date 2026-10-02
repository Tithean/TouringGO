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
  title: "TouringGO",
  description: "Explore attractions in Cambodia",
  icons: {
    icon: siteIcon.src,
    shortcut: siteIcon.src,
    apple: siteIcon.src,
  },
  openGraph: {
    title: "Touring-GO",
    description: "Tour website",
    url: "https://touringgo.vercel.app/",
    type: "website",
    images: [
      {
        url: "/openG.png",
        width: 1200,
        height: 630,
        alt: "openGraph",
      },
    ],
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
