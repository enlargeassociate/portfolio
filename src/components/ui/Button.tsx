import { ArrowRight } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "white";
  showArrow?: boolean;
  className?: string;
}

export function Button({
  children,
  href = "#",
  variant = "primary",
  showArrow = false,
  className = "",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium transition-all duration-300 ease-out group";

  const variants = {
    primary:
      "bg-gradient-to-r from-accent-blue to-accent-purple text-white hover:shadow-lg hover:shadow-accent-blue/25 hover:-translate-y-0.5",
    secondary:
      "border border-gray-200/50 dark:border-white/10 text-gray-900 dark:text-white hover:border-accent-blue/50 dark:hover:border-accent-blue/50 hover:bg-accent-blue/5 dark:hover:bg-accent-blue/10 hover:-translate-y-0.5",
    white:
      "bg-white text-gray-900 hover:bg-gray-50 hover:shadow-lg hover:-translate-y-0.5",
  };

  return (
    <a
      href={href}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
      {showArrow && (
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </a>
  );
}
