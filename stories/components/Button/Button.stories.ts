import type { Meta, StoryObj } from "@storybook/react";
import { File } from "lucide-react";
import { Button } from "../../../packages/components/General/Button/Button";

const meta = {
  title: "General/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Un componente Button que permite a los usuarios realizar acciones en la interfaz.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "ghost", "destructive"],
      description: "La variante visual del botón",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "El tamaño del botón",
    },
    disabled: {
      control: "boolean",
      description: "Si el botón está deshabilitado",
    },
    icon: {
      control: false,
      description: "Icono opcional para mostrar en el botón",
    },
    className: {
      control: false,
      description: "Clases CSS adicionales para el botón",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Button",
  },
};

export const Primary: Story = {
  args: {
    variant: "primary",
    label: "Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    label: "Button",
  },
};

export const Rounded: Story = {
  args: {
    size: "md",
    label: "Rounded",
    variant: "rounded",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    label: "Button",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    label: "Button",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    label: "Small Button",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    label: "Large Button",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Button",
    disabled: true,
  },
};

export const WithIcon: Story = {
  args: {
    variant: "rounded",
    size: "md",
    label: "File",
    icon: File,
  },
};
