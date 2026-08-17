"use client";

import { Truck, ArrowLeftRight, Globe } from "lucide-react";
import { services } from "@/lib/data";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const iconMap = {
  Truck,
  ArrowLeftRight,
  Globe,
};

const gradients = [
  "from-accent-blue to-accent-cyan",
  "from-accent-purple to-accent-pink",
  "from-accent-emerald to-accent-cyan",
];

export function Services() {
  return (
    <section id="services" className="section-padding relative">
      <div className="container-wide mx-auto">
        <AnimateOnScroll>
          <div className="mb-16">
            <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-accent-blue mb-4 block">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              What We Do
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <AnimateOnScroll key={service.title} delay={index * 150}>
                <div className="group relative p-8 lg:p-10 rounded-2xl glass-card gradient-border hover:shadow-xl hover:shadow-accent-blue/5 dark:hover:shadow-accent-blue/10 transition-all duration-500 hover:-translate-y-2">
                  <div className="relative z-10">
                    <div className={`w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br ${gradients[index]} mb-6 shadow-lg shadow-accent-blue/20 group-hover:scale-110 transition-transform duration-500`}>
                      <Icon className="w-5 h-5 text-white" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
