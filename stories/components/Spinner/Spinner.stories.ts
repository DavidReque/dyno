import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "../../../packages/components/General/Spinner/Spinner";

const meta: Meta<typeof Spinner> = {
  title: "General/Spinner",
  component: Spinner,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
    color: { control: "text" },
    className: { control: false },
  },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {
    size: "md",
    color: "border-t-green-400",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    color: "border-t-blue-400",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    color: "border-t-red-400",
  },
};
