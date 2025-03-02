import React from "react";
import { ThemeProvider } from "../src/theme/ThemeContext";
import "../src/app/globals.css";

export const ThemeDecorator = (Story: React.ComponentType) => {
  return (
    <ThemeProvider>
      <div className="p-6">
        <Story />
      </div>
    </ThemeProvider>
  );
};
