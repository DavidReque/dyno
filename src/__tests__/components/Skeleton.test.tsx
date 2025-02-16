import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import {
  CardSkeleton,
  CodeSkeleton,
  FormSkeleton,
  IconSkeleton,
  ListSkeleton,
  ParagraphSkeleton,
  TableSkeleton,
} from "@/components/General/Skeleton/Skeleton";

describe("Skeleton Components", () => {
  it("renders CardSkeleton correctly", () => {
    render(<CardSkeleton />);
    const skeletonBlocks = screen.getAllByTestId("skeleton-block");
    expect(skeletonBlocks.length).toBeGreaterThan(0);
  });

  it("renders FormSkeleton correctly", () => {
    render(<FormSkeleton />);
    // Por ejemplo, esperamos varios divs con la clase animate-pulse
    expect(
      screen.getByText("", { selector: ".animate-pulse" })
    ).toBeInTheDocument();
  });

  it("renders CodeSkeleton correctly", () => {
    render(<CodeSkeleton />);
    // Verifica que se muestre el contenedor con la clase "font-mono"
    expect(document.querySelector(".font-mono")).toBeInTheDocument();
  });

  it("renders IconSkeleton with correct size", () => {
    render(<IconSkeleton className="w-8 h-8" />);
    const icon = document.querySelector(".w-8.h-8");
    expect(icon).toBeInTheDocument();
  });

  it("renders ListSkeleton with default count", () => {
    render(<ListSkeleton />);
    // Por defecto, count=5 => 5 lineas
    const lines = document.querySelectorAll(".bg-gray-300");
    expect(lines.length).toBe(5);
  });

  it("renders TableSkeleton with default rows", () => {
    render(<TableSkeleton />);
    // Por defecto, rows=5 => 5 <tr> en el tbody
    const rows = document.querySelectorAll("tbody tr");
    expect(rows.length).toBe(5);
  });

  it("renders ParagraphSkeleton with default lines", () => {
    render(<ParagraphSkeleton />);
    // Por defecto, lines=3 => 3 divs
    const lines = document.querySelectorAll(".bg-gray-300");
    expect(lines.length).toBe(3);
  });
});
