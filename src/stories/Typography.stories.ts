import { Typography } from "@/components/General/Typography/Typography";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Typography> = {
  title: "General/Typography",
  component: Typography,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "display",
        "h1",
        "h2",
        "h3",
        "h4",
        "body1",
        "body2",
        "caption",
        "overline",
      ],
    },
    weight: {
      control: "select",
      options: ["regular", "medium", "semibold", "bold"],
    },
    color: {
      control: "select",
      options: [
        "default",
        "primary",
        "secondary",
        "success",
        "error",
        "warning",
      ],
    },
    as: {
      control: "select",
      options: ["h1", "h2", "h3", "h4", "h5", "h6", "p", "span"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Display: Story = {
  args: {
    variant: "display",
    children: "Display Text",
  },
};

export const Heading1: Story = {
  args: {
    variant: "h1",
    weight: "extrabold",
    children: "Heading 1",
  },
};

export const Heading2: Story = {
  args: {
    variant: "h2",
    weight: "semibold",
    children: "Heading 2",
  },
};

export const Body1: Story = {
  args: {
    variant: "body1",
    children:
      "Body 1 text for main content. This is a longer example to show how the text wraps and the line height works.",
  },
};

export const blockquote: Story = {
  args: {
    variant: "blockquote",
    children:
      "Body 1 text for main content. This is a longer example to show how the text wraps and the line height works.",
  },
};

export const Caption: Story = {
  args: {
    variant: "caption",
    children: "Caption text for small details",
  },
};

export const Code: Story = {
  args: {
    variant: "code",
    children: "pnpm install",
    color: "primary",
  },
};
