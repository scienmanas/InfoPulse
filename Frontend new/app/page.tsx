import Image from "next/image";
import { Footer } from "@/app/ui/landing/Footer";
import { Hero } from "@/app/ui/landing/Hero";
import { Metadata } from "next";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between scroll-smooth gap-24">
      <Hero />
      <Footer />
    </main>
  );
}
