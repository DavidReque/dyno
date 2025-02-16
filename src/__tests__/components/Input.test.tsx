import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Input } from "@/components/General/Input/Input";
import "@testing-library/jest-dom";
import { LeadingIcon } from "@/icons/LeadingIcon";
import { TrailingIcon } from "@/icons/TrailingIcon";

describe("Input Component", () => {
  test("renders label if provided", () => {
    render(<Input label="Username" />);
    expect(screen.getByText("Username")).toBeInTheDocument();
  });

  test("renders placeholder if provided", () => {
    render(<Input placeholder="Enter text here" />);
    const input = screen.getByPlaceholderText("Enter text here");
    expect(input).toBeInTheDocument();
  });

  test("renders leading icon if provided", () => {
    render(<Input leadingIcon={LeadingIcon} />);
    expect(screen.getByTestId("leading-icon")).toBeInTheDocument();
  });

  test("renders trailing icon if provided", () => {
    render(<Input trailingIcon={TrailingIcon} />);
    expect(screen.getByTestId("trailing-icon")).toBeInTheDocument();
  });

  test("shows error message if error is true", () => {
    render(<Input error title="Invalid input" />);
    expect(screen.getByText("Invalid input")).toBeInTheDocument();
  });

  test("does not show error message if error is false", () => {
    render(<Input title="Some message" />);
    // El mensaje solo se muestra si error = true
    expect(screen.queryByText("Some message")).not.toBeInTheDocument();
  });

  test("disables input if disabled prop is true", () => {
    render(<Input disabled />);
    const input = screen.getByRole("textbox");
    expect(input).toBeDisabled();
  });

  test("disables input if variant is 'disabled'", () => {
    render(<Input variant="disabled" />);
    const input = screen.getByRole("textbox");
    expect(input).toBeDisabled();
  });

  test("renders button if variant is 'withButton' and buttonText is provided", () => {
    render(<Input variant="withButton" buttonText="Go" />);
    expect(screen.getByText("Go")).toBeInTheDocument();
  });

  test("calls onButtonClick when 'withButton' button is clicked", () => {
    const handleClick = jest.fn();
    render(
      <Input
        variant="withButton"
        buttonText="Search"
        onButtonClick={handleClick}
      />
    );
    fireEvent.click(screen.getByText("Search"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("withLabel variant adds margin-bottom", () => {
    const { container } = render(<Input variant="withLabel" label="Email" />);
    // Observamos que si variant=withLabel => "mb-4" se aplica al contenedor
    expect(container.firstChild).toHaveClass("mb-4");
  });
});
