import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "../../../packages/components/General/Avatar/Avatar";

const meta = {
  title: "General/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Un componente Avatar que representa visualmente a un usuario o entidad.",
      },
    },
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "El tamaño del avatar",
    },
    src: {
      control: "text",
      description: "URL de la imagen del avatar",
    },
    alt: {
      control: "text",
      description: "Texto alternativo para la imagen",
    },
    fallback: {
      control: "text",
      description: "Texto a mostrar cuando no hay imagen disponible",
    },
    className: {
      control: false,
      description: "Clases CSS adicionales para el avatar",
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    src: "https://api.dicebear.com/9.x/croodles/svg",
    alt: "Avatar",
    size: "md",
  },
};

export const FallbackAvatar: Story = {
  args: {
    alt: "John Doe",
    size: "lg",
    fallback: "JD",
  },
};

export const SmallAvatar: Story = {
  args: {
    src: "https://api.dicebear.com/9.x/adventurer-neutral/svg",
    alt: "Small Avatar",
    size: "sm",
  },
};
