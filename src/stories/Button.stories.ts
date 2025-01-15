import { Button } from "@/components/atoms/Button/Button";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "ghost", "destructive"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    disabled: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    label: "Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    label: "Button",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    label: "Button",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    label: "Button",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    label: "Small Button",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    label: "Large Button",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Button",
    disabled: true,
  },
};
