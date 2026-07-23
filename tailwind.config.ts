import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ysdaBlue: "#0B5CFF",
        skyPulse: "#20B7FF",
        champRed: "#EF233C",
        flame: "#FF7A1A",
        gold: "#FFD23F",
        turf: "#20B15A",
        ink: "#172033"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 24px 80px rgba(11, 92, 255, 0.22)",
        warm: "0 20px 70px rgba(255, 122, 26, 0.22)"
      },
      backgroundImage: {
        "sport-gradient":
          "linear-gradient(135deg, #0B5CFF 0%, #20B7FF 34%, #FF7A1A 68%, #FFD23F 100%)",
        "field-lines":
          "radial-gradient(circle at 20% 20%, rgba(255, 210, 63, 0.22), transparent 25%), radial-gradient(circle at 80% 12%, rgba(32, 177, 90, 0.18), transparent 28%), linear-gradient(120deg, rgba(11,92,255,0.10), rgba(255,255,255,0.9))"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-16px)" }
        },
        pulseRing: {
          "0%": { transform: "scale(0.92)", opacity: "0.72" },
          "100%": { transform: "scale(1.55)", opacity: "0" }
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" }
        }
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        pulseRing: "pulseRing 1.8s ease-out infinite",
        shimmer: "shimmer 8s ease infinite"
      }
    }
  },
  plugins: []
};

export default config;
