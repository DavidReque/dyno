import type { Config } from "tailwindcss";
import { Colors } from "./src/theme/tokens";

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
          300: Colors.primary300,
          400: Colors.primary400,
          500: Colors.primary500,
          600: Colors.primary600,
        },
        secondary: {
          400: Colors.secondary400,
          600: Colors.secondary600,
        },
        destructive: {
          300: Colors.destructive300,
          500: Colors.destructive500,
          600: Colors.destructive600,
        },
        gray: {
          300: Colors.gray300,
          400: Colors.gray400,
        },
        neutral: {
          100: Colors.neutral100,
          200: Colors.neutral200,
          300: Colors.neutral300,
          400: Colors.neutral400,
          500: Colors.neutral500,
          600: Colors.neutral600,
          700: Colors.neutral700,
          800: Colors.neutral800,
        },
        white: Colors.white,
        black: Colors.black,
      },
    },
  },
  plugins: [],
};

export default config;
