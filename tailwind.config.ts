import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        farm: {
          green: {
            deep: "#204d3a",
            mid: "#2a6049",
            light: "#336b52",
            glow: "#1a3d2e",
          },
          gold: {
            DEFAULT: "#f0b322",
            light: "#f5c94e",
            dark: "#d4950f",
          },
        },
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        outfit: ["var(--font-outfit)", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.5s ease-out forwards",
        "pulse-gold": "pulseGold 3s ease-in-out infinite",
        "tap": "tap 0.15s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseGold: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.7", transform: "scale(1.05)" },
        },
      },
      backgroundImage: {
        "green-radial":
          "radial-gradient(ellipse at 50% 0%, #2a6049 0%, #204d3a 40%, #1a3d2e 100%)",
        "gold-glow":
          "radial-gradient(ellipse at center, rgba(240,179,34,0.18) 0%, transparent 70%)",
        "card-instagram":
          "linear-gradient(135deg, #833ab4 0%, #fd1d1d 50%, #fcb045 100%)",
        "card-youtube":
          "linear-gradient(135deg, #c4302b 0%, #ff0000 60%, #ff4040 100%)",
        "card-whatsapp":
          "linear-gradient(135deg, #075e54 0%, #128c7e 60%, #25d366 100%)",
      },
      boxShadow: {
        "card": "0 8px 32px rgba(0,0,0,0.35)",
        "card-hover": "0 16px 48px rgba(0,0,0,0.5)",
        "gold": "0 0 40px rgba(240,179,34,0.2)",
      },
    },
  },
  plugins: [],
};

export default config;
