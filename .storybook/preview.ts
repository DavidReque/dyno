import type { Preview } from "@storybook/react";
import "./preview.css";
import { ThemeDecorator } from "./ThemeDecorator";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      disable: true,
      default: "light",
    },
  },
  decorators: [ThemeDecorator],
};

export default preview;
