"use client";

import { brands } from "@/lib/data";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const brandColors = [
  "group-hover:text-green-500",
  "group-hover:text-red-500",
  "group-hover:text-orange-500",
  "group-hover:text-blue-500",
  "group-hover:text-pink-500",
  "group-hover:text-indigo-500",
  "group-hover:text-yellow-500",
];

export function Brands() {
  return (
    <section id="brands" className="section-padding relative">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent-purple/5 dark:bg-accent-purple/3 rounded-full blur-3xl pointer-events-none" />

      <div className="container-wide mx-auto relative z-10">
        <AnimateOnScroll>
          <div className="mb-16 text-center">
            <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-accent-purple mb-4 block">
              Our Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Brands We Work With
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
              Trusted names. Quality products.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {brands.map((brand, index) => (
            <AnimateOnScroll key={brand.id} delay={index * 80}>
              <div className="group relative flex items-center justify-center p-8 lg:p-12 rounded-2xl glass-card gradient-border hover:shadow-xl hover:shadow-accent-blue/5 dark:hover:shadow-accent-blue/10 transition-all duration-500 hover:-translate-y-2 aspect-[4/3]">
                {/* 
                  Replace with actual brand logos:
                  <Image src={`/brands/${brand.id}.svg`} alt={brand.name} width={120} height={40} />
                */}
                <span className={`text-base lg:text-lg font-bold tracking-wide text-gray-300 dark:text-gray-600 ${brandColors[index]} transition-colors duration-500`}>
                  {brand.name}
                </span>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
