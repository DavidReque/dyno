import React from "react";
import { render, screen } from "@testing-library/react";
import { Badge } from "@/components/General/Badge/Badge";

describe("Badge Component", () => {
  it("renders children content correctly", () => {
    render(<Badge>Test Badge</Badge>);
    expect(screen.getByText("Test Badge")).toBeInTheDocument();
  });

  it("applies the default info variant when no variant is provided", () => {
    const { container } = render(<Badge>Default Badge</Badge>);
    const badge = container.firstChild as HTMLElement;
    expect(badge).toHaveClass("bg-blue-100", "text-blue-800");
  });

  it("applies the correct classes for each variant", () => {
    const variants = {
      success: ["bg-green-100", "text-green-800"],
      error: ["bg-red-100", "text-red-800"],
      warning: ["bg-yellow-100", "text-yellow-800"],
      info: ["bg-blue-100", "text-blue-800"],
    };

    Object.entries(variants).forEach(([variant, classes]) => {
      const { container } = render(
        <Badge variant={variant as "success" | "error" | "warning" | "info"}>
          {variant} Badge
        </Badge>
      );
      const badge = container.firstChild as HTMLElement;
      classes.forEach((className) => {
        expect(badge).toHaveClass(className);
      });
    });
  });

  it("applies base classes to all badges", () => {
    const { container } = render(<Badge>Base Classes Test</Badge>);
    const badge = container.firstChild as HTMLElement;
    expect(badge).toHaveClass(
      "inline-flex",
      "items-center",
      "px-2",
      "py-1",
      "rounded-full",
      "text-xs",
      "font-semibold"
    );
  });

  it("applies additional className if provided", () => {
    const { container } = render(
      <Badge className="custom-class">Custom Badge</Badge>
    );
    const badge = container.firstChild as HTMLElement;
    expect(badge).toHaveClass("custom-class");
  });

  it("renders with React nodes as children", () => {
    render(
      <Badge>
        <span>Icon</span>
        <span>Text</span>
      </Badge>
    );
    expect(screen.getByText("Icon")).toBeInTheDocument();
    expect(screen.getByText("Text")).toBeInTheDocument();
  });
});
