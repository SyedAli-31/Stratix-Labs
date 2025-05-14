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
        primary: "#7C3AED", // Brighter purple
        secondary: "#1E293B", // Slate dark blue (less harsh than #0f172a)
        background: "#111827", // Dark but slightly softer than pure black
        foreground: "#F9FAFB", // Very light text for high contrast
        card: {
          DEFAULT: "#1F2937", // Darker slate
          foreground: "#F1F5F9", // Soft white
        },
        popover: {
          DEFAULT: "#312E81", // Indigo tone
          foreground: "#E0E7FF",
        },
        muted: {
          DEFAULT: "#374151", // Cool gray
          foreground: "#D1D5DB",
        },
        accent: {
          DEFAULT: "#6366F1", // Indigo
          foreground: "#E0E7FF",
        },
        destructive: {
          DEFAULT: "#DC2626", // Brighter red
          foreground: "#FEE2E2",
        },
        border: "#334155", // Lighter border for visibility
        input: "#1E293B",
        ring: "#7C3AED", // Match updated primary
        chart: {
          1: "#7C3AED",
          2: "#8B5CF6",
          3: "#A78BFA",
          4: "#C4B5FD",
          5: "#DDD6FE",
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
    fontFamily: {
      sans: ["InterVariable", "sans-serif"],
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;