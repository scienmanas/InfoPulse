import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { Navbar } from "@/app/ui/landing/Navbar";
import type { Viewport } from 'next'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "InfoPulse | Home",
  description: "All in one news app. Enjoy your dialy dose of news.",
  openGraph: {
    title: "InfoPulse | Home",
    description: "All in one news app. Enjoy your daily dose of news.",
    url: "https://info-pulse-six.vercel.app",
    type: "website",
    images: [
      {
        url: "/assets/misc/banner.png",
        width: 800,
        height: 600,
        alt: "InfoPulse",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@ScientistManas",
    title: "InfoPulse | Home",
    description: "All in one news app. Enjoy your daily dose of news.",
    images: ["/assets/misc/banner.png'"],
  },
};

export const viewport: Viewport = {
  themeColor: "#05472A",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} scroll-smooth`}>
        <nav className="z-40 fixed w-full flex items-center justify-center">
          <Navbar />
        </nav>
        <section className="w-full" id="home">
          {children}
        </section>
        <Analytics />
      </body>
    </html>
  );
}
