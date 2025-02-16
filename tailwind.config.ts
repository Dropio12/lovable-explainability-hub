
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#B8860B", // Dark golden color
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#1A1F2C", // Deep navy/black
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#D4AF37", // Metallic gold
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#4A4A4A", // Soft black
          foreground: "#ffffff",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      keyframes: {
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        gradient: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
        gradient: "gradient 15s ease infinite",
        "gradient-x": "gradient-x 15s ease infinite",
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(45deg, #B8860B, #D4AF37, #FFD700)',
        'gradient-dark': 'linear-gradient(45deg, #1A1F2C, #2A2F3C, #3A3F4C)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
