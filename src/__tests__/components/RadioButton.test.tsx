import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { RadioButton } from "@/components/General/RadioButton/RadioButton";

describe("RadioButton Component", () => {
  it("renders label if provided", () => {
    render(<RadioButton label="Option A" value="A" />);
    expect(screen.getByText("Option A")).toBeInTheDocument();
  });

  it("is checked by default if `defaultChecked` is true", () => {
    render(<RadioButton label="Option B" value="B" defaultChecked />);
    const radio = screen.getByRole("radio", { name: "Option B" });
    expect(radio).toBeChecked();
  });

  it("calls onChange with correct value when clicked", () => {
    const handleChange = jest.fn();
    render(<RadioButton label="Option C" value="C" onChange={handleChange} />);
    const radio = screen.getByRole("radio", { name: "Option C" });
    fireEvent.click(radio);
    expect(handleChange).toHaveBeenCalledWith("C");
  });

  it("is disabled when the disabled prop is true", () => {
    render(<RadioButton label="Option D" value="D" disabled />);
    const radio = screen.getByRole("radio", { name: "Option D" });
    expect(radio).toBeDisabled();
  });

  it("changes state on click if not disabled", () => {
    render(<RadioButton label="Option E" value="E" />);
    const radio = screen.getByRole("radio", { name: "Option E" });
    expect(radio).not.toBeChecked();
    fireEvent.click(radio);
    expect(radio).toBeChecked();
  });
});
