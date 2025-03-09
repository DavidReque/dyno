import React, { useState } from "react";
import { Button } from "@/components/General/Button/Button";
import { Modal } from "@/components/General/Modal/Modal";
import type { Meta, StoryFn } from "@storybook/react";

const meta: Meta<typeof Modal> = {
  title: "General/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    showCloseButton: { control: "boolean" },
  },
};

export default meta;

const Template: StoryFn<typeof Modal> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: "Modal Title",
  description: "This is a modal description text.",
  children: (onClose: () => void) => (
    <div className="space-y-4">
      Modal content goes here...
      <div className="flex justify-end space-x-2">
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={() => {}}>
          Confirm
        </Button>
      </div>
    </div>
  ),
};

export const SmallSize = Template.bind({});
SmallSize.args = {
  ...Default.args,
  size: "sm",
};

export const LargeSize = Template.bind({});
LargeSize.args = {
  ...Default.args,
  size: "lg",
};

export const WithoutDescription = Template.bind({});
WithoutDescription.args = {
  ...Default.args,
  description: undefined,
};

export const CustomContent = Template.bind({});
CustomContent.args = {
  ...Default.args,
  children: () => (
    <div className="space-y-4">
      <input
        type="text"
        className="w-full px-3 py-2 border rounded-lg"
        placeholder="Enter something..."
      />
      <div className="flex justify-end gap-2">
        <Button variant="destructive">Delete</Button>
        <Button variant="primary">Save</Button>
      </div>
    </div>
  ),
};
