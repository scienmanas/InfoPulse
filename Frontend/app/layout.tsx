import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/app/ui/landing/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "InfoPulse | Home",
  description: "All in one news app. enjoy your dialy dose of news.",
};

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
        <section id="home">{children}</section>
      </body>
    </html>
  );
}
