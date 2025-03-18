import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Spinner } from "../Spinner";

describe("Spinner Component", () => {
  it("renders with default props", () => {
    render(<Spinner />);
    const spinner = document.querySelector(".rounded-full.border-gray-200");
    expect(spinner).toBeInTheDocument();
    // Tamaño md por defecto => w-10 h-10
    expect(spinner).toHaveClass("w-10", "h-10");
  });

  it("applies the correct color class", () => {
    render(<Spinner color="border-t-red-500" />);
    const spinner = document.querySelector(".rounded-full");
    // Verifica que tenga la clase "border-t-red-500"
    expect(spinner).toHaveClass("border-t-red-500");
  });
});
