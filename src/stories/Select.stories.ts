import { Select } from "@/components/General/Select/Select";
import type { Meta, StoryObj } from "@storybook/react";
import { ChevronUp } from "lucide-react";

const meta = {
  title: "General/DropdownSelect",
  component: Select,
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
    options: {
      control: "object",
    },
    selectedValue: {
      control: "text",
    },
    placeholder: {
      control: "text",
    },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultOptions = [
  { value: "1", label: "Option 1" },
  { value: "2", label: "Option 2" },
  { value: "3", label: "Option 3" },
];

export const Default: Story = {
  args: {
    options: defaultOptions,
    placeholder: "Select an option",
  },
};

export const PrimaryVariant: Story = {
  args: {
    ...Default.args,
    variant: "primary",
  },
};

export const SecondaryVariant: Story = {
  args: {
    ...Default.args,
    variant: "secondary",
  },
};

export const GhostVariant: Story = {
  args: {
    ...Default.args,
    variant: "ghost",
  },
};

export const DestructiveVariant: Story = {
  args: {
    ...Default.args,
    variant: "destructive",
  },
};

export const SmallSize: Story = {
  args: {
    ...Default.args,
    size: "sm",
  },
};

export const LargeSize: Story = {
  args: {
    ...Default.args,
    size: "lg",
  },
};

export const DisabledState: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const CustomIcon: Story = {
  args: {
    ...Default.args,
    icon: ChevronUp,
  },
};
