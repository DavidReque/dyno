import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Card } from "@/components/General/Card/Card";
import { MyArrowIcon } from "@/icons/MyArrowIcon";

describe("Card Component", () => {
  test("renders title and subtitle", () => {
    render(<Card title="Test Title" subtitle="Test Subtitle" />);
    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Subtitle")).toBeInTheDocument();
  });

  test("renders children content", () => {
    render(<Card>Card Content</Card>);
    expect(screen.getByText("Card Content")).toBeInTheDocument();
  });

  test("renders footer if provided", () => {
    render(<Card footer="Footer Content" />);
    expect(screen.getByText("Footer Content")).toBeInTheDocument();
  });

  test("applies correct variant classes", () => {
    const { container, rerender } = render(<Card variant="default" />);
    // 'default' => Debería tener 'bg-white' y 'shadow-sm'
    expect(container.firstChild).toHaveClass("bg-white", "shadow-sm");

    rerender(<Card variant="ghost" />);
    // 'ghost' => Debería tener 'bg-transparent'
    expect(container.firstChild).toHaveClass("bg-transparent");

    rerender(<Card variant="outline" />);
    // 'outline' => Debería tener 'border'
    expect(container.firstChild).toHaveClass("border");
  });

  test("renders icon if provided", () => {
    render(<Card icon={MyArrowIcon} />);
    const icon = screen.getByTestId("card-icon");
    expect(icon).toBeInTheDocument();
    // Podrías verificar el path:
    expect(icon).toHaveAttribute("stroke", "currentColor");
  });

  test("calls onClick if provided", async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();
    render(<Card onClick={handleClick}>Clickable Card</Card>);

    await user.click(screen.getByText("Clickable Card"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
