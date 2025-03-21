import type { Meta, StoryObj } from "@storybook/react";
import { Breadcrumb } from "../../../packages/components/General/Breadcrumb/Breadcrumb";

const meta: Meta<typeof Breadcrumb> = {
  title: "General/Breadcrumb",
  component: Breadcrumb,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    className: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {
  args: {
    items: [
      { label: "Home", href: "/" },
      { label: "Library", href: "/library" },
      { label: "Data", href: "/library/data" },
      { label: "Current Page" },
    ],
  },
};

export const Simple: Story = {
  args: {
    items: [
      { label: "Dashboard", href: "/" },
      { label: "Projects", href: "/projects" },
      { label: "Project Alpha" },
    ],
  },
};
