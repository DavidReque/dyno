import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "../../../packages/components/General/Badge/Badge";

const meta = {
  title: "General/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Un componente Badge que muestra información o estado de forma visual.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["success", "error", "warning", "info"],
      description: "La variante visual del badge",
    },
    children: {
      control: "text",
      description: "Contenido del badge",
    },
    className: {
      control: false,
      description: "Clases CSS adicionales para el badge",
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: "Default Badge",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    children: "Success Badge",
  },
};

export const Error: Story = {
  args: {
    variant: "error",
    children: "Error Badge",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    children: "Warning Badge",
  },
};

export const Info: Story = {
  args: {
    variant: "info",
    children: "Info Badge",
  },
};
