// TableComponents.test.tsx
import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Table, TableProps, Column } from "@/components/General/Table/Table";
import { PaginatedTable } from "@/components/General/Table/PaginatedTable";
import { SelectableTable } from "@/components/General/Table/SelectedTable";

// Ejemplo de tipo de datos
interface Person {
  name: string;
  age: number;
  email: string;
}

// Definimos columnas para la tabla
const columns: Column<Person>[] = [
  { header: "Name", accessor: "name" },
  { header: "Age", accessor: "age" },
  { header: "Email", accessor: "email" },
];

// Datos de ejemplo
const data: Person[] = [
  { name: "Alice", age: 25, email: "alice@example.com" },
  { name: "Bob", age: 30, email: "bob@example.com" },
  { name: "Charlie", age: 40, email: "charlie@example.com" },
  { name: "Diana", age: 35, email: "diana@example.com" },
];

describe("Table Components", () => {
  it("renders Table with correct data", () => {
    const props: TableProps<Person> = {
      columns,
      data,
    };
    render(<Table {...props} />);
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Age")).toBeInTheDocument();
    expect(screen.getByText("Email")).toBeInTheDocument();

    // Verificamos algunas celdas de datos
    expect(screen.getByText("Alice")).toBeInTheDocument();
    expect(screen.getByText("bob@example.com")).toBeInTheDocument();
  });

  it("paginates data in PaginatedTable", () => {
    render(
      <PaginatedTable<Person> columns={columns} data={data} pageSize={2} />
    );

    expect(screen.getByText("Alice")).toBeInTheDocument();
    expect(screen.getByText("Bob")).toBeInTheDocument();
    expect(screen.queryByText("Charlie")).not.toBeInTheDocument();

    const [, nextButton] = screen.getAllByRole("button");
    fireEvent.click(nextButton);

    // Ahora deben aparecer "Charlie" y "Diana"
    expect(screen.getByText("Charlie")).toBeInTheDocument();
    expect(screen.getByText("Diana")).toBeInTheDocument();
    expect(screen.queryByText("Alice")).not.toBeInTheDocument();
  });

  it("allows row selection in SelectableTable", async () => {
    const handleSelectionChange = jest.fn();
    render(
      <SelectableTable<Person>
        columns={columns}
        data={data}
        onSelectionChange={handleSelectionChange}
      />
    );

    const checkboxes = screen.getAllByRole("checkbox");
    const rowCheckbox1 = checkboxes[1];
    const rowCheckbox2 = checkboxes[2];

    fireEvent.click(rowCheckbox1);
    await waitFor(() =>
      expect(handleSelectionChange).toHaveBeenCalledWith([data[0]])
    );

    fireEvent.click(rowCheckbox2);
    await waitFor(() =>
      expect(handleSelectionChange).toHaveBeenCalledWith([data[0], data[1]])
    );
  });
});
