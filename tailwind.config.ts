import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6D28D9", // Purple
        secondary: "#0f172a", // Dark blue
        background: "#0B1120", // Dark background
        foreground: "#FFFFFF", // Light text on dark
        card: {
          DEFAULT: "#1E293B", // Slate-like card
          foreground: "#F8FAFC", // Text on card
        },
        popover: {
          DEFAULT: "#1E1B4B",
          foreground: "#E0E7FF",
        },
        muted: {
          DEFAULT: "#334155",
          foreground: "#CBD5E1",
        },
        accent: {
          DEFAULT: "#4C1D95",
          foreground: "#F3E8FF",
        },
        destructive: {
          DEFAULT: "#7F1D1D",
          foreground: "#FEE2E2",
        },
        border: "#1E293B",
        input: "#1E293B",
        ring: "#6D28D9",
        chart: {
          1: "#6D28D9",
          2: "#9333EA",
          3: "#7C3AED",
          4: "#8B5CF6",
          5: "#A78BFA",
        },
      },
      borderRadius: {
        lg: "0.5rem",
        md: "0.375rem",
        sm: "0.25rem",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
