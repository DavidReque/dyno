import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "../../../packages/components/General/Tooltip/Tooltip";

const meta: Meta<typeof Tooltip> = {
  title: "General/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    text: { control: "text" },
    position: {
      control: "select",
      options: ["top", "bottom", "left", "right"],
    },
    className: { control: false },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "This is a tooltip",
    position: "top",
    children: <span className="px-2 py-1 border rounded">Hover me</span>,
  },
};

export const Bottom: Story = {
  args: {
    text: "Tooltip on bottom",
    position: "bottom",
    children: <span className="px-2 py-1 border rounded">Hover me</span>,
  },
};

export const Left: Story = {
  args: {
    text: "Tooltip on left",
    position: "left",
    children: <span className="px-2 py-1 border rounded">Hover me</span>,
  },
};

export const Right: Story = {
  args: {
    text: "Tooltip on right",
    position: "right",
    children: <span className="px-2 py-1 border rounded">Hover me</span>,
  },
};
