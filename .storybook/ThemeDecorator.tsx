import React from "react";
import { ThemeProvider } from "../packages/providers/theme/ThemeContext";
import "../apps/web/src/app/globals.css";

export const ThemeDecorator = (Story: React.ComponentType) => {
  return (
    <ThemeProvider>
      <div className="p-6">
        <Story />
      </div>
    </ThemeProvider>
  );
};
