import { Input } from "@/components/General/Input/Input";
import type { Meta, StoryObj } from "@storybook/react";
import { Search, X } from "lucide-react";

const meta = {
  title: "General/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "withButton", "file", "disabled", "withLabel"],
    },
    disabled: {
      control: "boolean",
    },
    error: {
      control: "boolean",
    },
    leadingIcon: {
      control: false, // Icons cannot be controlled via Storybook's UI
    },
    trailingIcon: {
      control: false,
    },
    onButtonClick: {
      action: "button clicked", // For tracking the button click in "withButton" variant
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Enter text",
    label: "Default Input",
  },
};

export const WithButton: Story = {
  args: {
    variant: "withButton",
    placeholder: "Enter text",
    label: "Input with Button",
    buttonText: "Go",
  },
};

export const FileInput: Story = {
  args: {
    variant: "file",
    type: "file",
    label: "File Input",
  },
};

export const WithLeadingIcon: Story = {
  args: {
    leadingIcon: Search,
    placeholder: "Search...",
    label: "Input with Leading Icon",
  },
};

export const WithTrailingIcon: Story = {
  args: {
    trailingIcon: X,
    placeholder: "Enter text",
    label: "Input with Trailing Icon",
  },
};

export const ErrorState: Story = {
  args: {
    error: true,
    placeholder: "Enter text",
    label: "Error Input",
    title: "This field is required",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: "Disabled input",
    label: "Disabled Input",
  },
};

export const WithLabel: Story = {
  args: {
    variant: "withLabel",
    placeholder: "Enter text",
    label: "Labeled Input",
  },
};
