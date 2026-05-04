import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#100607",
        panel: "#1a0d0d",
        line: "rgba(255, 98, 70, 0.18)",
        cyan: "#ff3b2f",
        mint: "#f5b45f"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space)", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 48px rgba(255, 59, 47, 0.2)"
      },
      backgroundImage: {
        "tech-grid":
          "linear-gradient(rgba(255, 98, 70, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 98, 70, 0.08) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
