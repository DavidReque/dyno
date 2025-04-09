import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "../../../packages/components/General/Spinner/Spinner";

const meta: Meta<typeof Spinner> = {
  title: "General/Spinner",
  component: Spinner,
  parameters: {
    layout: "centered",
  },
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
