import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "@/components/General/Button/Button";

describe("Button Component", () => {
  test("renders with the correct label", () => {
    render(<Button label="Click Me" />);
    // Verificamos que el texto "Click Me" esté en el documento
    expect(screen.getByText(/Click Me/i)).toBeInTheDocument();
  });

  test("calls onClick handler when clicked", async () => {
    const handleClick = jest.fn();
    render(<Button label="Click Me" onClick={handleClick} />);

    const user = userEvent.setup();
    // Buscamos el botón por su role e identificamos por el nombre
    const button = screen.getByRole("button", { name: /Click Me/i });
    await user.click(button);

    // Verificamos que se llamó la función
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("renders children if label is not provided", () => {
    render(<Button>Child Content</Button>);
    expect(screen.getByText(/Child Content/i)).toBeInTheDocument();
  });

  test("is disabled when the disabled prop is true", async () => {
    const handleClick = jest.fn();
    render(<Button label="Disabled" onClick={handleClick} disabled />);

    const user = userEvent.setup();
    const button = screen.getByRole("button", { name: /Disabled/i });

    // Verificamos que el botón está deshabilitado
    expect(button).toBeDisabled();

    // Intentamos hacer click y comprobamos que no se llama la función
    await user.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });
});
