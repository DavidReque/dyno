import React from "react";
import { Accordion } from "@/components/General/Accordion/Accordion";
import type { Meta, StoryObj } from "@storybook/react";

interface ItemData {
  id: string;
  title: string;
  content: React.ReactNode;
}

const items: ItemData[] = [
  {
    id: "1",
    title: "Accordion Item 1",
    content: "This is the content for item 1. It can include any React node.",
  },
  {
    id: "2",
    title: "Accordion Item 2",
    content:
      "Content for item 2 goes here. You can add more complex elements if needed.",
  },
  {
    id: "3",
    title: "Accordion Item 3",
    content: "Here is the content for item 3. Customize it as you like.",
  },
];

const meta: Meta<typeof Accordion> = {
  title: "General/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    className: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: {
    items,
  },
};
