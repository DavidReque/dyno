import type { Meta, StoryObj } from "@storybook/react";
import DatePicker from "../../../packages/components/General/DatePicker/DatePicker";

const meta: Meta<typeof DatePicker> = {
  title: "General/DatePicker",
  component: DatePicker,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    className: { control: false },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
  args: {
    label: "Select Date",
  },
};

export const Disabled: Story = {
  args: {
    label: "Select Date",
    disabled: true,
  },
};
