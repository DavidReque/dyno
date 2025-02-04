import { Alert } from "@/components/General/Alert/Alert";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Alert> = {
  title: "General/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["success", "error", "warning", "info"],
    },
    message: { control: "text" },
    dismissible: { control: "boolean" },
    onClose: { action: "closed" },
    className: { control: false },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

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
