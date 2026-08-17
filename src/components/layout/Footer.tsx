import { siteConfig, navLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative border-t border-gray-200/10 dark:border-white/5">
      <div className="container-wide mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-10 md:gap-8 items-start">
          {/* Brand */}
          <div>
            <span className="text-base font-bold text-gray-900 dark:text-white block">
              {siteConfig.companyName}
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-500 tracking-wide mt-1 block">
              Distribution • Trading • Export
            </span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-6 md:justify-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-accent-blue transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-2 md:items-end">
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-sm text-gray-500 dark:text-gray-400 hover:text-accent-blue transition-colors duration-200"
            >
              {siteConfig.email}
            </a>
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="text-sm text-gray-500 dark:text-gray-400 hover:text-accent-blue transition-colors duration-200"
            >
              {siteConfig.phone}
            </a>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 dark:text-gray-400 hover:text-accent-emerald transition-colors duration-200"
            >
              WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-200/10 dark:border-white/5">
          <p className="text-xs text-gray-400 dark:text-gray-600 text-center">
            © 2023 {siteConfig.companyName}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
