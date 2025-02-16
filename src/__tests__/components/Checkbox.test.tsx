import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Checkbox } from "@/components/General/CheckBox/Checkbox";

describe("Checkbox Component", () => {
  test("renders checkbox with label", () => {
    render(<Checkbox label="Accept terms" />);
    expect(screen.getByText("Accept terms")).toBeInTheDocument();
  });

  test("checkbox is unchecked by default", () => {
    render(<Checkbox />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();
  });

  test("checkbox respects defaultChecked prop", () => {
    render(<Checkbox defaultChecked />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeChecked();
  });

  test("calls onChange handler when checked/unchecked", async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();
    render(<Checkbox onChange={handleChange} />);

    const checkbox = screen.getByRole("checkbox");

    await user.click(checkbox);
    expect(handleChange).toHaveBeenCalledWith(true);

    await user.click(checkbox);
    expect(handleChange).toHaveBeenCalledWith(false);
  });

  test("checkbox is disabled when disabled prop is true", async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();
    render(<Checkbox disabled onChange={handleChange} />);

    const checkbox = screen.getByRole("checkbox");

    expect(checkbox).toBeDisabled();
    await user.click(checkbox);

    expect(handleChange).not.toHaveBeenCalled();
  });
});
