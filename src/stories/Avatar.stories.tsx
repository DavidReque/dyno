import { Avatar } from "@/components/General/Avatar/Avatar";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Avatar> = {
  title: "General/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
    className: { control: false },
  },
};

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
