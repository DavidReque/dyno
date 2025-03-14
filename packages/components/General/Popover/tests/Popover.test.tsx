import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Popover from "../Popover";

global.ResizeObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};

describe("Popover Component", () => {
  test("renders the button content", () => {
    render(
      <Popover buttonContent="Open Popover" panelContent="Panel Content" />
    );
    expect(screen.getByText("Open Popover")).toBeInTheDocument();
  });

  test("panel is hidden by default", () => {
    render(
      <Popover buttonContent="Open Popover" panelContent="Panel Content" />
    );
    expect(screen.queryByText("Panel Content")).not.toBeInTheDocument();
  });

  test("shows panel content when button is clicked", async () => {
    render(
      <Popover buttonContent="Open Popover" panelContent="Panel Content" />
    );
    const user = userEvent.setup();
    const button = screen.getByText("Open Popover");

    await user.click(button);
    expect(screen.getByText("Panel Content")).toBeInTheDocument();
  });

  test("hides panel content when clicking outside", async () => {
    render(
      <Popover buttonContent="Open Popover" panelContent="Panel Content" />
    );
    const user = userEvent.setup();
    const button = screen.getByText("Open Popover");

    await user.click(button);
    expect(screen.getByText("Panel Content")).toBeInTheDocument();

    await user.click(document.body);

    await waitFor(() => {
      expect(screen.queryByText("Panel Content")).not.toBeInTheDocument();
    });
  });

  test("toggles panel when button is clicked again", async () => {
    render(
      <Popover buttonContent="Open Popover" panelContent="Panel Content" />
    );
    const user = userEvent.setup();
    const button = screen.getByText("Open Popover");

    await user.click(button);
    expect(screen.getByText("Panel Content")).toBeInTheDocument();

    await user.click(button);

    await waitFor(() => {
      expect(screen.queryByText("Panel Content")).not.toBeInTheDocument();
    });
  });
});
