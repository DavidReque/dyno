import { Colors } from "../../theme/tokens";

export type Theme = "light" | "dark";

export const THEME_COLORS = {
  light: {
    background: Colors.white,
    text: Colors.neutral900,
    border: Colors.neutral200,
    primary: Colors.primary500,
    secondary: Colors.secondary600,
  },
  dark: {
    background: Colors.neutral900,
    text: Colors.neutral100,
    border: Colors.neutral700,
    primary: Colors.primary400,
    secondary: Colors.secondary400,
  },
} as const;

export const THEME_LABELS = {
  light: "Cambiar a modo oscuro",
  dark: "Cambiar a modo claro",
} as const;

export function getSystemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function setThemeColors(theme: Theme, colors: Record<string, string>) {
  const root = document.documentElement;

  // Aplicar colores
  Object.entries(colors).forEach(([key, value]) => {
    root.style.setProperty(`--color-${key}`, value);
  });

  // Establecer el atributo data-theme
  root.setAttribute("data-theme", theme);
}
