import React, { useState } from "react";
import type { Meta, StoryFn } from "@storybook/react";
import Pagination from "../../../packages/components/General/Pagination/Pagination";

const meta: Meta<typeof Pagination> = {
  title: "General/Pagination",
  component: Pagination,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Un componente de paginación que permite navegar entre diferentes páginas de contenido.",
      },
    },
  },
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
      onPageChange={(page: number) => setCurrentPage(page)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  totalPages: 5,
};
