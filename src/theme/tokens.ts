export const Colors = {
  // Colores primarios (verdes)
  primary300: "#86EFAC", // green-300 para focus rings
  primary400: "#4ADE80", // green-400
  primary500: "#22C55E", // green-500
  primary600: "#16A34A", // green-600

  // Colores secundarios
  secondary400: "#3B82F6",
  secondary600: "#2563EB",

  // Colores destructivos (rojos)
  destructive300: "#FCA5A5", // red-300 para focus rings error
  destructive500: "#EF4444", // red-500
  destructive600: "#DC2626", // red-600

  // Grises
  gray300: "#D1D5DB", // border-gray-300
  gray400: "#9CA3AF",

  // Estados de éxito/error/advertencia
  successBg: "#E9F5EE",
  successText: "#256C3A",
  errorBg: "#FDECEC",
  errorText: "#C62828",
  warningBg: "#FFF8E1",
  warningText: "#EF6C00",
  infoBg: "#E3F2FD",
  infoText: "#1976D2",

  // Escala de neutrales
  neutral100: "#f5f5f5",
  neutral200: "#e5e5e5", // bg disabled
  neutral300: "#d4d4d4",
  neutral400: "#a3a3a3", // text placeholder
  neutral500: "#737373", // text disabled
  neutral600: "#525252",
  neutral700: "#374151", // dark mode disabled
  neutral800: "#262626",

  // Base
  white: "#ffffff",
  black: "#000000",

  // Semantic tokens para Input
  input: {
    border: "#D1D5DB", // gray-300
    text: "#212121", // neutral-800
    placeholder: "#a3a3a3", // neutral-400
    focus: "#4ADE80", // primary400
    error: "#EF5350", // destructive500
    errorFocus: "#FCA5A5", // destructive300
    disabled: {
      bg: "#e5e5e5", // neutral-200
      text: "#737373", // neutral-500
      darkBg: "#374151", // neutral-700
      darkText: "#a3a3a3", // neutral-400
    },
  },
};
