import React, { useState } from "react";
import type { Meta, StoryFn } from "@storybook/react";
import Pagination from "../../packages/components/General/Pagination/Pagination";

const meta: Meta<typeof Pagination> = {
  title: "General/Pagination",
  component: Pagination,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    className: { control: false },
  },
};

export default meta;

const Template: StoryFn<typeof Pagination> = (args) => {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <Pagination
      {...args}
      currentPage={currentPage}
      onPageChange={(page) => setCurrentPage(page)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  totalPages: 5,
};
