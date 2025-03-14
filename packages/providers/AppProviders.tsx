import React from "react";
import { ThemeProvider } from "./theme/ThemeContext";

interface AppProvidersProps {
  children: React.ReactNode;
}

export const AppProviders: React.FC<AppProvidersProps> = ({ children }) => {
  return (
    <ThemeProvider>
      {/* Aquí se pueden agregar más providers en el futuro */}
      {children}
    </ThemeProvider>
  );
};
