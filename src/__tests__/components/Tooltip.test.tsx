import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { Tooltip } from "@/components/General/Tooltip/Tooltip";

describe("Tooltip Component", () => {
  test("renders children correctly", () => {
    render(
      <Tooltip text="Tooltip Text">
        <button>Hover me</button>
      </Tooltip>
    );
    expect(screen.getByText("Hover me")).toBeInTheDocument();
    // Tooltip no se muestra inicialmente
    expect(screen.queryByText("Tooltip Text")).not.toBeInTheDocument();
  });

  test("shows tooltip text on mouse enter and hides on mouse leave", async () => {
    const user = userEvent.setup();
    render(
      <Tooltip text="Tooltip Text">
        <button>Hover me</button>
      </Tooltip>
    );

    const trigger = screen.getByText("Hover me");
    await user.hover(trigger);
    expect(screen.getByText("Tooltip Text")).toBeInTheDocument();

    await user.unhover(trigger);
    expect(screen.queryByText("Tooltip Text")).not.toBeInTheDocument();
  });

  test("positions the tooltip correctly (e.g., top)", async () => {
    render(
      <Tooltip text="Tooltip Text" position="top">
        <button>Hover me</button>
      </Tooltip>
    );
    const user = userEvent.setup();
    const trigger = screen.getByText("Hover me");

    await user.hover(trigger);
    const tooltip = screen.getByText("Tooltip Text");

    expect(tooltip).toHaveClass("bottom-full");
  });
});
