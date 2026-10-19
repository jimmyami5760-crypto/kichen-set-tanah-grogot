import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#140e0a",
          deep: "#0c0806",
          soft: "#1f1712",
        },
        walnut: {
          DEFAULT: "#2d1f16",
          light: "#3e2b1f",
          dark: "#20150e",
          card: "#35261d",
        },
        oak: {
          DEFAULT: "#7e5f43",
          light: "#9c7a5a",
          dark: "#614731",
        },
        gold: {
          DEFAULT: "#c69c47",
          light: "#e2c27b",
          dark: "#987228",
          hover: "#b38936",
          muted: "rgba(198, 156, 71, 0.15)",
        },
        cream: {
          DEFAULT: "#f8f4ed",
          dark: "#eee6d8",
          muted: "#e3d8c6",
          light: "#fdfbf8",
        },
        forest: {
          DEFAULT: "#1f3829",
          light: "#2f523c",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      boxShadow: {
        subtle: "0 2px 8px -2px rgba(20, 14, 10, 0.06)",
        soft: "0 10px 30px -10px rgba(20, 14, 10, 0.12)",
        card: "0 12px 32px -8px rgba(20, 14, 10, 0.1), 0 2px 8px -2px rgba(20, 14, 10, 0.04)",
        elevated: "0 20px 42px -12px rgba(20, 14, 10, 0.18), 0 6px 16px -4px rgba(20, 14, 10, 0.08)",
        "glow-gold": "0 0 30px rgba(198, 156, 71, 0.28)",
      },
    },
  },
  plugins: [],
};

export default config;
