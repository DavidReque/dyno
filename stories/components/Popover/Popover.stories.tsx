import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Popover from "../../../packages/components/General/Popover/Popover";

const meta: Meta<typeof Popover> = {
  title: "General/Popover",
  component: Popover,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    className: { control: false },
    panelClassName: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  args: {
    buttonContent: "Open Popover",
    panelContent: (
      <div>
        <p>This is the popover content.</p>
      </div>
    ),
  },
};

export const WithCustomContent: Story = {
  args: {
    buttonContent: "Options",
    panelContent: (
      <div>
        <ul className="space-y-1">
          <li className="px-2 py-1 rounded">Option 1</li>
          <li className="px-2 py-1 rounded">Option 2</li>
          <li className="px-2 py-1 rounded">Option 3</li>
        </ul>
      </div>
    ),
  },
};
