"use client";

import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

export function CTA() {
  return (
    <section
      id="contact"
      className="relative py-28 md:py-36 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-200 to-dark" />

      {/* Gradient orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent-blue/10 rounded-full blur-3xl animate-glow" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent-purple/10 rounded-full blur-3xl animate-glow" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
      }} />

      <div className="container-wide mx-auto relative z-10 text-center">
        <AnimateOnScroll>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            <span className="text-white">Let&apos;s Build Business</span>
            <br />
            <span className="gradient-text">Together.</span>
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll delay={150}>
          <p className="text-gray-400 text-base md:text-lg mb-10 max-w-md mx-auto">
            Looking for a reliable distribution, trading or export partner?
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={300}>
          <a
            href="mailto:enlargeassociate@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-accent-blue to-accent-purple text-white text-sm font-medium hover:shadow-xl hover:shadow-accent-blue/25 hover:-translate-y-1 transition-all duration-300"
          >
            Start a Conversation →
          </a>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
