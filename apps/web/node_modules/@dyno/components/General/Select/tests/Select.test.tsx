import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ChevronDown } from "lucide-react";
import { Select } from "../Select";

const mockOptions = [
  { value: "1", label: "Opción 1" },
  { value: "2", label: "Opción 2" },
  { value: "3", label: "Opción 3" },
];

describe("Select Component", () => {
  test("renderiza correctamente con placeholder", () => {
    render(<Select options={mockOptions} />);
    expect(screen.getByText("Select an option")).toBeInTheDocument();
  });

  test("muestra la opción seleccionada cuando se proporciona selectedValue", () => {
    render(<Select options={mockOptions} selectedValue="1" />);
    expect(screen.getByText("Opción 1")).toBeInTheDocument();
  });

  test("abre el dropdown al hacer clic", async () => {
    render(<Select options={mockOptions} />);
    const selectButton = screen.getByRole("combobox");

    await userEvent.click(selectButton);

    expect(screen.getByRole("listbox")).toBeInTheDocument();
    expect(screen.getByText("Opción 1")).toBeInTheDocument();
  });

  test("llama a onChange cuando se selecciona una opción", async () => {
    const handleChange = jest.fn();
    render(<Select options={mockOptions} onChange={handleChange} />);

    const selectButton = screen.getByRole("combobox");
    await userEvent.click(selectButton);

    const option = screen.getByText("Opción 1");
    await userEvent.click(option);

    expect(handleChange).toHaveBeenCalledWith("1");
  });

  test("maneja correctamente el estado deshabilitado", async () => {
    render(<Select options={mockOptions} disabled />);

    const selectButton = screen.getByRole("combobox");
    expect(selectButton).toBeDisabled();

    await userEvent.click(selectButton);
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
  });

  test("navega por las opciones usando el teclado", async () => {
    render(<Select options={mockOptions} />);

    const selectButton = screen.getByRole("combobox");
    selectButton.focus();

    // Abrir el dropdown
    await userEvent.keyboard("{Enter}");

    // Navegar hacia abajo
    await userEvent.keyboard("{ArrowDown}");
    expect(screen.getByText("Opción 1")).toHaveAttribute(
      "aria-selected",
      "true"
    );

    // Navegar hacia abajo de nuevo
    await userEvent.keyboard("{ArrowDown}");
    expect(screen.getByText("Opción 2")).toHaveAttribute(
      "aria-selected",
      "true"
    );

    // Navegar hacia arriba
    await userEvent.keyboard("{ArrowUp}");
    expect(screen.getByText("Opción 1")).toHaveAttribute(
      "aria-selected",
      "true"
    );
  });

  test("cierra el dropdown al presionar Escape", async () => {
    render(<Select options={mockOptions} />);

    const selectButton = screen.getByRole("combobox");
    await userEvent.click(selectButton);

    expect(screen.getByRole("listbox")).toBeInTheDocument();

    await userEvent.keyboard("{Escape}");
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
  });

  test("aplica las clases de variante correctamente", () => {
    const { container } = render(
      <Select options={mockOptions} variant="primary" />
    );
    const selectButton = container.firstChild as HTMLElement;

    expect(selectButton).toHaveStyle({
      borderColor: "var(--color-primary)",
      color: "var(--color-primary)",
    });
  });

  test("aplica las clases de tamaño correctamente", () => {
    const { container } = render(<Select options={mockOptions} size="lg" />);
    const selectButton = container.firstChild as HTMLElement;

    expect(selectButton).toHaveClass("text-lg", "px-4", "py-3.5");
  });

  test("muestra el icono personalizado cuando se proporciona", () => {
    render(<Select options={mockOptions} icon={ChevronDown} />);

    const icon = screen.getByRole("img", { hidden: true });
    expect(icon).toBeInTheDocument();
  });

  test("cierra el dropdown al hacer clic fuera", async () => {
    render(
      <div>
        <Select options={mockOptions} />
        <div data-testid="outside">Fuera del Select</div>
      </div>
    );

    const selectButton = screen.getByRole("combobox");
    await userEvent.click(selectButton);

    expect(screen.getByRole("listbox")).toBeInTheDocument();

    const outsideElement = screen.getByTestId("outside");
    await userEvent.click(outsideElement);

    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
  });
});
