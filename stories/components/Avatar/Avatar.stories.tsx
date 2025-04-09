import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "../../../packages/components/General/Avatar/Avatar";

const meta = {
  title: "General/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "An Avatar component that visually represents a user or entity.",
      },
    },
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "The size of the avatar",
    },
    src: {
      control: "text",
      description: "URL of the avatar image",
    },
    alt: {
      control: "text",
      description: "Alternative text for the image",
    },
    fallback: {
      control: "text",
      description: "Text to display when no image is available",
    },
    className: {
      control: false,
      description: "Additional CSS classes for the avatar",
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    src: "https://api.dicebear.com/9.x/croodles/svg",
    alt: "Avatar",
    size: "md",
  },
};

export const FallbackAvatar: Story = {
  args: {
    alt: "John Doe",
    size: "lg",
    fallback: "JD",
  },
};

export const SmallAvatar: Story = {
  args: {
    src: "https://api.dicebear.com/9.x/adventurer-neutral/svg",
    alt: "Small Avatar",
    size: "sm",
  },
};
