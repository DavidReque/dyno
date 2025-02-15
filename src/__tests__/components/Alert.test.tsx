import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Alert } from "@/components/General/Alert/Alert";

describe("Alert Component", () => {
  test("renders with the correct message", () => {
    render(<Alert message="Test Alert" />);
    expect(screen.getByText(/Test Alert/i)).toBeInTheDocument();
  });

  test("applies the correct variant classes", () => {
    const { container } = render(
      <Alert message="Success Alert" variant="success" />
    );
    expect(container.firstChild).toHaveClass(
      "bg-green-100 border border-green-500 text-green-800"
    );
  });

  test("renders close button when dismissible is true", () => {
    render(<Alert message="Dismissible Alert" dismissible />);
    const closeButton = screen.getByRole("button", { name: /close alert/i });
    expect(closeButton).toBeInTheDocument();
  });

  test("calls onClose and hides the alert when close button is clicked", async () => {
    const onCloseMock = jest.fn();
    render(<Alert message="Close Me" dismissible onClose={onCloseMock} />);

    const user = userEvent.setup();
    const closeButton = screen.getByRole("button", { name: /close alert/i });
    await user.click(closeButton);

    expect(onCloseMock).toHaveBeenCalledTimes(1);

    expect(screen.queryByText(/Close Me/i)).not.toBeInTheDocument();
  });

  test("does not render close button if dismissible is false", () => {
    render(<Alert message="No Close Button" />);
    expect(screen.queryByRole("button", { name: /close alert/i })).toBeNull();
  });
});
