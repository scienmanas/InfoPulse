import Image from "next/image";
import { Footer } from "@/app/ui/landing/Footer";
import { Hero } from "@/app/ui/landing/Hero";
import { News } from "@/app/ui/landing/News";
import { Metadata } from "next";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between scroll-smooth gap-16">
      <Hero />
      <News />
      <Footer />
    </main>
  );
}
