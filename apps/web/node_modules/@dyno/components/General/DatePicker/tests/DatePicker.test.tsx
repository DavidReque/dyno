import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import DatePicker from "../DatePicker";

describe("DatePicker Component", () => {
  it("renders correctly with label", () => {
    render(<DatePicker label="Select Date" />);
    expect(screen.getByText("Select Date")).toBeInTheDocument();
  });

  it("renders the calendar icon button", () => {
    render(<DatePicker />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("calls showPicker() when calendar button is clicked", () => {
    render(<DatePicker />);
    const input = screen.getByDisplayValue("") as HTMLInputElement;
    const calendarButton = screen.getByRole("button");

    input.showPicker = jest.fn();

    fireEvent.click(calendarButton);
    expect(input.showPicker).toHaveBeenCalled();
  });

  it("applies focus styles when focused", () => {
    render(<DatePicker />);
    const input = screen.getByDisplayValue("");

    fireEvent.focus(input);
    expect(input).toHaveClass("focus:ring-2");
  });

  it("disables input and button when disabled prop is passed", () => {
    render(<DatePicker disabled />);
    const input = screen.getByDisplayValue("");
    const button = screen.getByRole("button");

    expect(input).toBeDisabled();
    expect(button).toBeDisabled();
  });
});
