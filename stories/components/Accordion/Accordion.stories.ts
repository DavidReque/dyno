import type { Meta, StoryObj } from "@storybook/react";
import { Accordion } from "../../../packages/components/General/Accordion/Accordion";

interface ItemData {
  id: number;
  title: string;
  content: string;
}

const items: ItemData[] = [
  {
    id: 1,
    title: "Accordion Item 1",
    content: "This is the content for item 1. It can include any React node.",
  },
  {
    id: 2,
    title: "Accordion Item 2",
    content:
      "Content for item 2 goes here. You can add more complex elements if needed.",
  },
  {
    id: 3,
    title: "Accordion Item 3",
    content: "Here is the content for item 3. Customize it as you like.",
  },
];

const meta = {
  title: "General/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Un componente Accordion que permite mostrar y ocultar contenido de forma organizada.",
      },
    },
  },
  argTypes: {
    items: {
      description: "Array de elementos para mostrar en el accordion",
      control: "object",
    },
    className: {
      control: false,
      description: "Clases CSS adicionales para el componente",
    },
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: {
    items,
  },
};
