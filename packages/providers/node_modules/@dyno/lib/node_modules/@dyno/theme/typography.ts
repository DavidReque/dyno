// Definiciones de fuentes
export const sans = {
  className: "font-sans",
  style: {
    fontFamily: "'Geist Sans', system-ui, -apple-system, sans-serif",
  },
  variable: "--font-sans",
};

export const mono = {
  className: "font-mono",
  style: {
    fontFamily: "'Geist Mono', monospace",
  },
  variable: "--font-mono",
};

// Clases de utilidad para tipografía
export const typography = {
  // Títulos
  h1: "text-4xl font-bold tracking-tight",
  h2: "text-3xl font-semibold tracking-tight",
  h3: "text-2xl font-semibold tracking-tight",
  h4: "text-xl font-semibold tracking-tight",
  h5: "text-lg font-semibold tracking-tight",
  h6: "text-base font-semibold tracking-tight",

  // Texto regular
  body1: "text-base",
  body2: "text-sm",
  body3: "text-xs",

  // Texto monoespaciado
  mono: "font-mono",

  // Texto con peso específico
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",

  // Texto con opacidad
  muted: "opacity-70",
  subtle: "opacity-50",

  p: "text-base leading-7",
  lead: "text-xl text-muted-foreground",
  large: "text-lg font-semibold",
  small: "text-sm font-medium leading-none",
  code: "font-mono",
} as const;

// Constantes de tipografía
export const fontTokens = {
  fontFamilyBase: "'Geist Sans', system-ui, -apple-system, sans-serif",
  fontFamilyMono: "'Geist Mono', monospace",
  fontSizeSm: "0.875rem", // 14px
  fontSizeMd: "1rem", // 16px
  fontSizeLg: "1.125rem", // 18px
  fontWeightRegular: 400,
  fontWeightSemibold: 600,
  fontWeightBold: 700,

  // Nueva estructura
  fontFamily: {
    sans: "'Geist Sans', system-ui, -apple-system, sans-serif",
    mono: "'Geist Mono', monospace",
  },
  fontSize: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
  },
  fontWeight: {
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
  },
};
