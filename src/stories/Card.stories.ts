import { Card } from "@/components/General/Card/Card";
import type { Meta, StoryObj } from "@storybook/react";
import { User, Bell, FileText } from "lucide-react";

const meta = {
  title: "General/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "ghost", "outline"],
    },
    title: {
      control: "text",
    },
    subtitle: {
      control: "text",
    },
    icon: {
      control: false, // Icons cannot be controlled via Storybook's UI
    },
    footer: {
      control: false, // Footer content is typically custom
    },
    className: {
      control: false, // ClassName is for advanced customization
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Default Card",
    subtitle: "This is a default card.",
    children: "This is the main content of the card.",
  },
};

export const Outlined: Story = {
  args: {
    title: "Outlined Card",
    subtitle: "This card has a border outline.",
    variant: "outline",
    children: "This is the main content of the outlined card.",
  },
};

export const Ghost: Story = {
  args: {
    title: "Ghost Card",
    subtitle: "This card has a subtle hover effect.",
    variant: "ghost",
    children: "This is the main content of the ghost card.",
  },
};

export const WithIcon: Story = {
  args: {
    title: "Card with Icon",
    subtitle: "This card displays an icon next to the title.",
    icon: User,
    children: "The icon enhances the visual appeal of the card.",
  },
};

export const WithFooter: Story = {
  args: {
    title: "Card with Footer",
    subtitle: "This card includes a footer section.",
    children: "This is the main content of the card.",
    footer: "Learn More",
  },
};

export const NotificationCard: Story = {
  args: {
    title: "Notifications",
    subtitle: "You have 5 unread notifications.",
    icon: Bell,
    variant: "default",
    children: [
      "New message from John",
      "Meeting at 3 PM",
      "System update available",
    ].join(", "),
    footer: "View All",
  },
};

export const FileCard: Story = {
  args: {
    title: "File Upload",
    subtitle: "Manage your uploaded files.",
    icon: FileText,
    variant: "outline",
    children: ["Document.pdf", "Presentation.pptx", "Spreadsheet.xlsx"].join(
      ", "
    ),
    footer: "Upload More",
  },
};
