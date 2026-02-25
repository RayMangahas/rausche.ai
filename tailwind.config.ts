import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Sora", "sans-serif"],
        body: ["Sora", "sans-serif"],
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
