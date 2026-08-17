"use client";

import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Brands } from "@/components/sections/Brands";
import { About } from "@/components/sections/About";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/layout/Footer";

const ParticleField = dynamic(
  () => import("@/components/three/ParticleField").then((mod) => mod.ParticleField),
  { ssr: false }
);

export default function Home() {
  return (
    <>
      {/* Full-screen 3D particle background */}
      <ParticleField />

      <Navbar />
      <main>
        <Hero />
        <Services />
        <Brands />
        <About />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
