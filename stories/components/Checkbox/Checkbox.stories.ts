import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "../../../packages/components/General/CheckBox/Checkbox";

const meta = {
  title: "General/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Un componente Checkbox que permite a los usuarios seleccionar una opción.",
      },
    },
  },
  argTypes: {
    label: {
      control: "text",
      description: "Etiqueta del checkbox",
    },
    defaultChecked: {
      control: "boolean",
      description: "Estado inicial del checkbox",
    },
    disabled: {
      control: "boolean",
      description: "Si el checkbox está deshabilitado",
    },
    className: {
      control: false,
      description: "Clases CSS adicionales para el checkbox",
    },
    onChange: {
      action: "checked",
      description: "Función llamada cuando cambia el estado del checkbox",
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: "Default Checkbox",
    defaultChecked: false,
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Checkbox",
    defaultChecked: false,
    disabled: true,
  },
};
