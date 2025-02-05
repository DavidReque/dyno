import { Tabs } from "@/components/General/Tabs/Tabs";
import type { Meta, StoryObj } from "@storybook/react";
import { LucideRefreshCw } from "lucide-react";

const meta: Meta<typeof Tabs> = {
  title: "General/Tabs",
  component: Tabs,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: {
    tabs: [
      { id: "tab1", label: "Tab 1", content: <p>Contenido de Tab 1</p> },
      {
        id: "tab2",
        label: "Tab 2 with a long name",
        content: <p>Contenido de Tab 2</p>,
      },
      { id: "tab3", label: "Tab 3", content: <p>Contenido de Tab 3</p> },
      {
        id: "tab4",
        label: "Tab 4 with an icon",
        content: <p>Contenido de Tab 4</p>,
        icon: <LucideRefreshCw size={16} />,
      },
    ],
  },
};
