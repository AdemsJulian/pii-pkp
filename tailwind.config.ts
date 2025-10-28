import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        brand: {
          midnight: "#0F172A",
          navy: "#032B60",
          blue: "#0055A4",
          sky: "#39A0F5",
          slate: "#5F6B7C",
          fog: "#F4F6FB",
        },
        accent: {
          gold: "#F6C244",
          mint: "#A9E5D9",
        },
      },
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        card: "0 20px 45px -35px rgba(3, 43, 96, 0.45)",
        floating: "0 24px 60px -40px rgba(0, 85, 164, 0.55)",
      },
      backgroundImage: {
        "grid-light":
          "linear-gradient(90deg, rgba(3,43,96,0.05) 1px, transparent 0), linear-gradient(180deg, rgba(3,43,96,0.05) 1px, transparent 0)",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translate3d(0, 20px, 0)" },
          "100%": { opacity: "1", transform: "translate3d(0, 0, 0)" },
        },
      },
      animation: {
        "fade-in-up": "fadeInUp 0.65s ease-out both",
      },
    },
  },
  plugins: [],
};
export default config;
