"use client";

import { ArrowRight } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

export function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="container-wide mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <AnimateOnScroll>
            <div>
              <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-accent-emerald mb-4 block">
                About Us
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                <span className="text-gray-900 dark:text-white">Reliable Trade.</span>
                <br />
                <span className="gradient-text">Stronger Connections.</span>
              </h2>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <div className="space-y-6 p-8 rounded-2xl glass-card">
              <p className="text-base lg:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                We connect quality FMCG products with the right markets through
                dependable distribution, trading and export solutions.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-medium text-accent-blue hover:text-accent-purple transition-colors duration-300 group"
              >
                About Our Business
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
