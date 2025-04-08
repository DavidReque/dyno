import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "../../../packages/components/General/Alert/Alert";

const meta = {
  title: "General/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Un componente Alert que muestra mensajes importantes al usuario.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["success", "error", "warning", "info"],
      description: "La variante visual de la alerta",
    },
    message: {
      control: "text",
      description: "El mensaje a mostrar en la alerta",
    },
    dismissible: {
      control: "boolean",
      description: "Si la alerta puede ser cerrada por el usuario",
    },
    onClose: {
      action: "closed",
      description: "Función llamada cuando se cierra la alerta",
    },
    className: {
      control: false,
      description: "Clases CSS adicionales para la alerta",
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {
    message: "This is a default alert message",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    message: "This is a success alert!",
    dismissible: true,
  },
};

export const Error: Story = {
  args: {
    variant: "error",
    message: "This is an error alert!",
    dismissible: true,
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    message: "This is a warning alert!",
    dismissible: true,
  },
};

export const Info: Story = {
  args: {
    variant: "info",
    message: "This is an info alert!",
    dismissible: true,
  },
};
