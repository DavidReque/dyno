import React from "react";
import { Table, Column, TableProps } from "@/components/General/Table/Table";
import { PaginatedTable } from "@/components/General/Table/PaginatedTable";
import type { Meta, StoryObj } from "@storybook/react";
import { SelectableTable } from "@/components/General/Table/SelectedTable";

interface Person {
  name: string;
  age: number;
  email: string;
}

const columns: Column<Person>[] = [
  {
    header: "Name",
    accessor: "name",
  },
  {
    header: "Age",
    accessor: "age",
  },
  {
    header: "Email",
    accessor: "email",
  },
];

const data: Person[] = [
  { name: "Juan Pérez", age: 28, email: "juan.perez@example.com" },
  { name: "María López", age: 34, email: "maria.lopez@example.com" },
  { name: "Carlos Ruiz", age: 42, email: "carlos.ruiz@example.com" },
  { name: "Ana García", age: 30, email: "ana.garcia@example.com" },
  { name: "Luis Gómez", age: 37, email: "luis.gomez@example.com" },
];

const meta: Meta<TableProps<Person>> = {
  title: "General/Table",
  component: Table,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    className: { control: false },
  },
};

export default meta;
type Story = StoryObj<TableProps<Person>>;

export const Default: Story = {
  args: {
    columns,
    data,
  },
};

export const WithCustomCell: Story = {
  args: {
    columns: [
      {
        header: "Name",
        accessor: "name",
      },
      {
        header: "Age",
        accessor: "age",
        cell: (row: Person) => (
          <span className="font-bold">{row.age} years</span>
        ),
      },
      {
        header: "Email",
        accessor: "email",
      },
    ],
    data,
  },
};

export const Paginated: Story = {
  render: () => <PaginatedTable columns={columns} data={data} pageSize={3} />,
};

export const Selectable: Story = {
  render: () => (
    <SelectableTable
      columns={columns}
      data={data}
      onSelectionChange={(selected) => console.log("Selected rows:", selected)}
    />
  ),
};
