import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Typography } from "@/components/General/Typography/Typography";

describe("Typography Component", () => {
  test("renders the correct HTML element", () => {
    const { rerender } = render(<Typography as="h1">Heading</Typography>);
    // Verificamos que sea un <h1>
    const heading = screen.getByText("Heading");
    expect(heading.tagName).toBe("H1");

    rerender(<Typography as="span">Span Text</Typography>);
    const spanText = screen.getByText("Span Text");
    expect(spanText.tagName).toBe("SPAN");
  });

  test("applies the correct variant classes", () => {
    const { container, rerender } = render(
      <Typography variant="h1">Title</Typography>
    );
    expect(container.firstChild).toHaveClass("text-4xl");

    rerender(<Typography variant="blockquote">Quote</Typography>);
    expect(container.firstChild).toHaveClass("mt-6", "border-l-2", "italic");
  });

  test("applies the correct weight classes", () => {
    const { container, rerender } = render(
      <Typography weight="bold">Bold Text</Typography>
    );
    expect(container.firstChild).toHaveClass("font-bold");

    rerender(<Typography weight="extrabold">ExtraBold Text</Typography>);
    expect(container.firstChild).toHaveClass("font-extrabold");
  });

  test("applies the correct color classes", () => {
    const { container, rerender } = render(
      <Typography color="primary">Colored Text</Typography>
    );
    expect(container.firstChild).toHaveClass("text-white");

    rerender(<Typography color="success">Success Text</Typography>);
    expect(container.firstChild).toHaveClass("text-green-600");
  });

  test("renders children text", () => {
    render(<Typography>Some Text</Typography>);
    expect(screen.getByText("Some Text")).toBeInTheDocument();
  });
});
