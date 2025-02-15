import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "@/components/General/Button/Button";
//import { Search } from "lucide-react";

describe("Button Component", () => {
  test("calls onClick handler when clicked", async () => {
    const handleClick = jest.fn();
    render(<Button label="Click Me" onClick={handleClick} />);

    const user = userEvent.setup();
    // search for the button by its role and identify by name
    const button = screen.getByRole("button", { name: /Click Me/i });
    await user.click(button);

    // we verify that the function was called
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

    // we verify that the button is disabled
    expect(button).toBeDisabled();

    // we try to click and check that the function is not called
    await user.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  test("applies correct variant class", () => {
    const { container } = render(<Button label="Primary" variant="primary" />);
    expect(container.firstChild).toHaveClass("bg-green-400 text-white");
  });

  test("applies correct size class", () => {
    const { container } = render(<Button label="Large" size="lg" />);
    expect(container.firstChild).toHaveClass("text-md px-6 py-3 rounded-lg");
  });

  /*test("renders icon when provided", () => {
    render(<Button label="Search" icon={Search} />);
    expect(screen.getByRole("img")).toBeInTheDocument();
  });*/
});
