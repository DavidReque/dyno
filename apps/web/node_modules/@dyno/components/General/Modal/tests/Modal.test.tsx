import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Modal } from "../Modal";

describe("Modal Component", () => {
  test("renders the title and description", () => {
    render(
      <Modal
        isOpen={true}
        onClose={jest.fn()}
        title="Test Modal"
        description="Test Description"
      >
        <p>Modal Content</p>
      </Modal>
    );

    // Verificamos que el título y la descripción estén en el documento
    expect(screen.getByText(/Test Modal/i)).toBeInTheDocument();
    expect(screen.getByText(/Test Description/i)).toBeInTheDocument();
    expect(screen.getByText(/Modal Content/i)).toBeInTheDocument();
  });

  test("calls onClose when the close button is clicked", async () => {
    const onCloseMock = jest.fn();
    render(
      <Modal
        isOpen={true}
        onClose={onCloseMock}
        title="Test Modal"
        showCloseButton
      />
    );

    const user = userEvent.setup();
    const closeButton = screen.getByRole("button", { name: /close/i });
    await user.click(closeButton);

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  test("does not render when isOpen is false", () => {
    render(
      <Modal isOpen={false} onClose={jest.fn()} title="Invisible Modal" />
    );
    // Esperamos que el título NO se encuentre
    expect(screen.queryByText(/Invisible Modal/i)).not.toBeInTheDocument();
  });
});
