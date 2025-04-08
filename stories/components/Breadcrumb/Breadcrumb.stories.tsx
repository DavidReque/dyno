import type { Meta, StoryObj } from "@storybook/react";
import { Breadcrumb } from "../../../packages/components/General/Breadcrumb/Breadcrumb";

const meta = {
  title: "General/Breadcrumb",
  component: Breadcrumb,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Un componente Breadcrumb que muestra la jerarquía de navegación.",
      },
    },
  },
  argTypes: {
    items: {
      control: "object",
      description: "Array de items para el breadcrumb",
    },
    className: {
      control: false,
      description: "Clases CSS adicionales para el breadcrumb",
    },
  },
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {
  args: {
    items: [
      { label: "Home", href: "/" },
      { label: "Library", href: "/library" },
      { label: "Current Page" },
    ],
  },
};

export const Simple: Story = {
  args: {
    items: [
      { label: "Dashboard", href: "/" },
      { label: "Projects", href: "/projects" },
      { label: "Project Alpha" },
    ],
  },
};
