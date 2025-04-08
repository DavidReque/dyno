import type { Meta, StoryObj } from "@storybook/react";
import { Search, X } from "lucide-react";
import { Input } from "../../../packages/components/General/Input/Input";

const meta = {
  title: "General/Input",
  component: Input,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Un componente Input que permite a los usuarios ingresar texto y datos en formularios.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "withButton", "file", "disabled", "withLabel"],
      description: "La variante visual del input",
    },
    disabled: {
      control: "boolean",
      description: "Si el input está deshabilitado",
    },
    error: {
      control: "boolean",
      description: "Si el input muestra un estado de error",
    },
    leadingIcon: {
      control: false,
      description: "Icono opcional para mostrar al inicio del input",
    },
    trailingIcon: {
      control: false,
      description: "Icono opcional para mostrar al final del input",
    },
    onButtonClick: {
      action: "button clicked",
      description: "Función llamada cuando se hace clic en el botón del input",
    },
    label: {
      control: "text",
      description: "Etiqueta opcional para el input",
    },
    placeholder: {
      control: "text",
      description: "Texto de placeholder para el input",
    },
    className: {
      control: false,
      description: "Clases CSS adicionales para el input",
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "Enter text...",
  },
};

export const WithButton: Story = {
  args: {
    variant: "withButton",
    placeholder: "Enter text",
    label: "Input with Button",
    buttonText: "Go",
  },
};

export const FileInput: Story = {
  args: {
    variant: "file",
    type: "file",
    label: "File Input",
  },
};

export const WithLeadingIcon: Story = {
  args: {
    leadingIcon: Search,
    placeholder: "Search...",
    label: "Input with Leading Icon",
  },
};

export const WithTrailingIcon: Story = {
  args: {
    trailingIcon: X,
    placeholder: "Enter text",
    label: "Input with Trailing Icon",
  },
};

export const ErrorState: Story = {
  args: {
    error: true,
    placeholder: "Enter text",
    label: "Error Input",
    title: "This field is required",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: "Disabled input",
    label: "Disabled Input",
  },
};
