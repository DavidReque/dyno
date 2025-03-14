import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "../../../packages/components/General/CheckBox/Checkbox";

const metaCheckbox = {
  title: "General/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    defaultChecked: { control: "boolean" },
    disabled: { control: "boolean" },
    className: { control: false },
    onChange: { action: "checked" },
  },
} satisfies Meta<typeof Checkbox>;

export default metaCheckbox;
type Story = StoryObj<typeof metaCheckbox>;

export const Default: Story = {
  args: {
    label: "Default Checkbox",
    defaultChecked: false,
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Checkbox",
    defaultChecked: false,
    disabled: true,
  },
};
