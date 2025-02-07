import React, { useState } from "react";
import { Switch } from "@/components/General/Switch/Switch";
import type { Meta, StoryFn } from "@storybook/react";

const meta: Meta<typeof Switch> = {
  title: "General/Switch",
  component: Switch,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;

const Template: StoryFn<typeof Switch> = (args) => {
  const [value, setValue] = useState(false);
  return <Switch {...args} checked={value} onChange={setValue} />;
};

export const Default = Template.bind({});
Default.args = {};
