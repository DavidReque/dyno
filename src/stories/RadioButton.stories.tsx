import { RadioButton } from "@/components/atoms/RadioButton/RadioButton";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Atoms/RadioButton",
  component: RadioButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    value: { control: "text" },
    defaultChecked: { control: "boolean" },
    disabled: { control: "boolean" },
    className: { control: false },
    onChange: { action: "selected" },
  },
} satisfies Meta<typeof RadioButton>;

export default meta;

export const RadioDefault: StoryObj<typeof meta> = {
  args: {
    label: "Default RadioButton",
    value: "default",
    defaultChecked: false,
  },
};

export const RadioDisabled: StoryObj<typeof meta> = {
  args: {
    label: "Disabled RadioButton",
    value: "disabled",
    defaultChecked: false,
    disabled: true,
  },
};