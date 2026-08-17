"use client";

import dynamic from "next/dynamic";
import { Button } from "@/components/ui/Button";

const TradeGlobe = dynamic(
  () => import("@/components/three/TradeGlobe").then((mod) => mod.TradeGlobe),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full min-h-[350px] md:min-h-[550px] flex items-center justify-center">
        <div className="w-40 h-40 rounded-full bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 animate-pulse" />
      </div>
    ),
  }
);

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent-blue/10 dark:bg-accent-blue/5 rounded-full blur-3xl animate-glow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-purple/10 dark:bg-accent-purple/5 rounded-full blur-3xl animate-glow" />

      <div className="container-wide mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-4 items-center">
          {/* Left content */}
          <div className="space-y-8">
            {/* Label */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-accent-blue to-accent-purple animate-pulse" />
              <span className="text-[11px] uppercase tracking-[0.15em] font-semibold text-gray-600 dark:text-gray-300">
                Distribution • Trading • Export
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight">
              <span className="text-gray-900 dark:text-white">Connecting Brands.</span>
              <br />
              <span className="gradient-text">Expanding Markets.</span>
            </h1>

            {/* Supporting text */}
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-md leading-relaxed">
              Reliable distribution, trading and export solutions for quality
              FMCG products across global markets.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Button href="#brands" variant="primary" showArrow>
                Explore Brands
              </Button>
              <Button href="#contact" variant="secondary">
                Get in Touch
              </Button>
            </div>
          </div>

          {/* Right - 3D Globe */}
          <div className="relative">
            <TradeGlobe />
          </div>
        </div>
      </div>
    </section>
  );
}
