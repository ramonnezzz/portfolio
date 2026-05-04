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
        ink: "#071013",
        panel: "#0d171b",
        line: "rgba(181, 235, 255, 0.14)",
        cyan: "#36d7ff",
        mint: "#71f5b6"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space)", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 40px rgba(54, 215, 255, 0.16)"
      },
      backgroundImage: {
        "tech-grid":
          "linear-gradient(rgba(181, 235, 255, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(181, 235, 255, 0.06) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
