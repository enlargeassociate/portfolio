"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig, navLinks } from "@/lib/data";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/70 dark:bg-dark-100/70 backdrop-blur-2xl shadow-lg shadow-black/5 dark:shadow-black/20 border-b border-gray-200/50 dark:border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="container-wide mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex flex-col">
            <span className="text-base font-bold tracking-tight text-gray-900 dark:text-white">
              {siteConfig.companyName}
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400 font-medium">
              {siteConfig.tagline}
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <ThemeToggle />
            <a
              href="#contact"
              className="text-sm font-medium text-white px-5 py-2.5 rounded-full bg-gradient-to-r from-accent-blue to-accent-purple hover:shadow-lg hover:shadow-accent-blue/25 hover:-translate-y-0.5 transition-all duration-300"
            >
              Contact Us →
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-900 dark:text-white"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-dark-100/95 backdrop-blur-2xl border-b border-gray-200/50 dark:border-white/5 transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-base text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="inline-block mt-4 text-sm font-medium text-white bg-gradient-to-r from-accent-blue to-accent-purple px-6 py-3 rounded-full"
          >
            Contact Us →
          </a>
        </div>
      </div>
    </nav>
  );
}
