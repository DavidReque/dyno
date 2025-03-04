import { Inter, Poppins } from "next/font/google";

// Fuente principal
export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Fuente secundaria para títulos
export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

// Clases de utilidad para tipografía
export const typography = {
  // Títulos
  h1: "font-poppins text-4xl font-bold tracking-tight",
  h2: "font-poppins text-3xl font-semibold tracking-tight",
  h3: "font-poppins text-2xl font-semibold tracking-tight",
  h4: "font-poppins text-xl font-semibold tracking-tight",
  h5: "font-poppins text-lg font-semibold tracking-tight",
  h6: "font-poppins text-base font-semibold tracking-tight",

  // Texto regular
  body1: "font-inter text-base",
  body2: "font-inter text-sm",
  body3: "font-inter text-xs",

  // Texto con peso específico
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",

  // Texto con opacidad
  muted: "opacity-70",
  subtle: "opacity-50",
};

export const Typography = {
  fontFamilyBase: "'Inter', sans-serif",
  fontSizeSm: "0.875rem", // 14px
  fontSizeMd: "1rem", // 16px
  fontSizeLg: "1.125rem", // 18px
  fontWeightRegular: 400,
  fontWeightSemibold: 600,
  fontWeightBold: 700,
};
