import React, { useState } from "react";
import type { Meta, StoryFn } from "@storybook/react";
import { Switch } from "../../../packages/components/General/Switch/Switch";

const meta: Meta<typeof Switch> = {
  title: "General/Switch",
  component: Switch,
  parameters: { layout: "centered" },
};

export default meta;

const Template: StoryFn<typeof Switch> = (args) => {
  const [value, setValue] = useState(false);
  return <Switch {...args} checked={value} onChange={setValue} />;
};

export const Default = Template.bind({});
Default.args = {};
