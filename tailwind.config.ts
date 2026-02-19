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
        soft: {
          purple: "#9B6BC2",
          "purple-dark": "#7B4FA2",
          "purple-deep": "#4A3070",
          "purple-deeper": "#2D2254",
          lavender: "#C9A0DC",
          "lavender-light": "#E8DCF4",
          "lavender-bg": "#F8F4FC",
          "lavender-border": "#EDE8F4",
          gold: "#F5D580",
          "gold-warm": "#D6A87F",
          muted: "#8B7FAE",
          "muted-light": "#B0A6CC",
          "text-secondary": "#9B8EC2",
          online: "#4CAF50",
        },
      },
      fontFamily: {
        display: ["Quicksand", "sans-serif"],
        body: ["Nunito", "DM Sans", "-apple-system", "sans-serif"],
      },
      borderRadius: {
        "soft": "16px",
        "softer": "18px",
        "softest": "24px",
      },
    },
  },
  plugins: [],
};

export default config;
