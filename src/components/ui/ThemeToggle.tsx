"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2.5 rounded-full border border-gray-200/50 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/5 hover:border-accent-blue/30 transition-all duration-300 group"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <Sun className="w-4 h-4 text-gray-700 dark:text-gray-300 rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0 group-hover:text-accent-blue" />
      <Moon className="absolute top-2.5 left-2.5 w-4 h-4 text-gray-700 dark:text-gray-300 rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100 group-hover:text-accent-purple" />
    </button>
  );
}
