import React from "react";
import { render, screen } from "@testing-library/react";
import { Badge } from "../Badge";
import { Colors } from "../../../../theme/tokens";

describe("Badge Component", () => {
  it("renders children content correctly", () => {
    render(<Badge>Test Badge</Badge>);
    expect(screen.getByText("Test Badge")).toBeInTheDocument();
  });

  it("applies the default info variant when no variant is provided", () => {
    const { container } = render(<Badge>Default Badge</Badge>);
    const badge = container.firstChild as HTMLElement;

    expect(badge).toHaveStyle({
      backgroundColor: Colors.infoBg,
      color: Colors.infoText,
    });
  });

  it("applies the correct styles for each variant", () => {
    const variants = {
      success: { backgroundColor: Colors.successBg, color: Colors.successText },
      error: { backgroundColor: Colors.errorBg, color: Colors.errorText },
      warning: { backgroundColor: Colors.warningBg, color: Colors.warningText },
      info: { backgroundColor: Colors.infoBg, color: Colors.infoText },
    };

    Object.entries(variants).forEach(([variant, styles]) => {
      const { container } = render(
        <Badge variant={variant as "success" | "error" | "warning" | "info"}>
          {variant} Badge
        </Badge>
      );
      const badge = container.firstChild as HTMLElement;

      expect(badge).toHaveStyle(styles);
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
      "font-bold"
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
