import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Switch } from "@/components/General/Switch/Switch";

describe("Switch Component", () => {
  test("renders in the 'off' state by default", () => {
    render(<Switch />);
    const switchButton = screen.getByRole("switch");
    // aria-checked="false" indica que está apagado
    expect(switchButton).toHaveAttribute("aria-checked", "false");
  });

  test("calls onChange with correct value when toggled", () => {
    const handleChange = jest.fn();
    render(<Switch onChange={handleChange} />);
    const switchButton = screen.getByRole("switch");

    fireEvent.click(switchButton);
    // Debe llamar con 'true' la primera vez
    expect(handleChange).toHaveBeenCalledWith(true);
  });

  test("respects the 'checked' prop if provided (controlado)", () => {
    const handleChange = jest.fn();
    const { rerender } = render(
      <Switch checked={false} onChange={handleChange} />
    );
    const switchButton = screen.getByRole("switch");

    expect(switchButton).toHaveAttribute("aria-checked", "false");

    fireEvent.click(switchButton);
    expect(handleChange).toHaveBeenCalledWith(true);

    rerender(<Switch checked={true} onChange={handleChange} />);
    expect(switchButton).toHaveAttribute("aria-checked", "true");
  });

  test("usa internal state si 'checked' no está definido (no controlado)", () => {
    render(<Switch />);
    const switchButton = screen.getByRole("switch");

    expect(switchButton).toHaveAttribute("aria-checked", "false");
    fireEvent.click(switchButton);
    expect(switchButton).toHaveAttribute("aria-checked", "true");
  });

  test("applies additional className if provided", () => {
    render(<Switch className="bg-red-500" />);
    const switchButton = screen.getByRole("switch");
    expect(switchButton).toHaveClass("bg-red-500");
  });
});
