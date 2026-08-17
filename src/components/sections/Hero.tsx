"use client";

import { Button } from "@/components/ui/Button";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Subtle background effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent-blue/10 dark:bg-accent-blue/5 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-accent-purple/10 dark:bg-accent-purple/5 rounded-full blur-[100px] animate-float" style={{ animationDelay: "-3s" }} />

      {/* Dot grid background */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04]" style={{
        backgroundImage: `radial-gradient(circle, rgba(59,130,246,0.4) 1px, transparent 1px)`,
        backgroundSize: "40px 40px",
      }} />

      <div className="container-wide mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-6 items-center">
          {/* Left — text content */}
          <div className="space-y-8 text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-card">
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-pulse" />
                <div className="w-1.5 h-1.5 rounded-full bg-accent-purple animate-pulse" style={{ animationDelay: "0.2s" }} />
                <div className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse" style={{ animationDelay: "0.4s" }} />
              </div>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-semibold text-gray-600 dark:text-gray-300">
                Distribution • Trading • Export
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.0] tracking-tight">
              <span className="text-gray-900 dark:text-white">Connecting</span>
              <br />
              <span className="gradient-text">Brands.</span>
              <br />
              <span className="text-gray-700 dark:text-gray-200">Expanding Markets.</span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400 max-w-md leading-relaxed">
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

          {/* Right — empty space where globe was, keeps layout balanced */}
          <div className="hidden lg:block" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <a href="#services" className="flex flex-col items-center gap-2 text-gray-400 dark:text-gray-500 hover:text-accent-blue transition-colors duration-300">
          <span className="text-[10px] uppercase tracking-widest font-medium">Scroll</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
