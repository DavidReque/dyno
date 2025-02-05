import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./.storybook/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: {
          50: "#E5F4FF",
          100: "#CCE9FF",
          500: "#0091FF",
          600: "#0074CC",
          700: "#005799",
        },
        destructive: {
          500: "#FF3333",
          600: "#CC2929",
          700: "#991F1F",
        },
      },
    },
  },
  plugins: [],
};

export default config;
