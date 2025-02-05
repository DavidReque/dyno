import { Progress } from "@/components/General/Progress/Progress";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Progress> = {
  title: "General/Progress",
  component: Progress,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    value: { control: "number" },
    max: { control: "number" },
    variant: {
      control: "select",
      options: ["primary", "secondary", "success", "warning", "error"],
    },
    className: { control: false },
  },
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  args: {
    value: 40,
    max: 100,
    variant: "primary",
    // Agregamos una clase para forzar un ancho en el story
    className: "w-96",
  },
};

export const WarningProgress: Story = {
  args: {
    value: 70,
    max: 100,
    variant: "warning",
    className: "w-96",
  },
};

export const ErrorProgress: Story = {
  args: {
    value: 90,
    max: 100,
    variant: "error",
    className: "w-96",
  },
};

export const SecondaryProgress: Story = {
  args: {
    value: 50,
    max: 100,
    variant: "secondary",
    className: "w-96",
  },
};

export const SuccessProgress: Story = {
  args: {
    value: 100,
    max: 100,
    variant: "success",
    className: "w-96",
  },
};
