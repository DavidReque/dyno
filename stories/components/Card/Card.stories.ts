import type { Meta, StoryObj } from "@storybook/react";
import { User, Bell, FileText } from "lucide-react";
import { Card } from "../../../packages/components/General/Card/Card";

const meta = {
  title: "General/Card",
  component: Card,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Un componente Card que agrupa contenido relacionado en un contenedor visual.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "ghost", "outline"],
      description: "La variante visual de la card",
    },
    title: {
      control: "text",
      description: "Título de la card",
    },
    subtitle: {
      control: "text",
      description: "Subtítulo de la card",
    },
    icon: {
      control: false,
      description: "Icono opcional para la card",
    },
    footer: {
      control: false,
      description: "Contenido del footer de la card",
    },
    className: {
      control: false,
      description: "Clases CSS adicionales para la card",
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: "Default Card",
    subtitle: "This is a default card.",
    children: "This is the main content of the card.",
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
    children: ["Document.pdf", "Presentation.pptx", "Spreadsheet.xlsx"].join(
      ", "
    ),
    footer: "Upload More",
  },
};
