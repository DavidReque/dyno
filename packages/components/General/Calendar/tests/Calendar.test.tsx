import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Calendar } from "../Calendar";

// Mock framer-motion to avoid animation-related issues in tests
jest.mock("framer-motion", () => ({
  motion: {
    div: ({
      children,
      ...props
    }: {
      children: React.ReactNode;
      [key: string]: unknown;
    }) => <div {...props}>{children}</div>,
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => (
    <>{children}</>
  ),
}));

describe("Calendar Component", () => {
  // Mock date to ensure consistent testing
  const mockDate = new Date(2024, 1, 1); // February 1, 2024

  beforeAll(() => {
    jest.useFakeTimers();
    jest.setSystemTime(mockDate);
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it("renders the calendar with correct initial month and year", () => {
    render(<Calendar />);
    expect(screen.getByText("February 2024")).toBeInTheDocument();
  });

  it("renders all days of the week", () => {
    render(<Calendar />);
    const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    weekDays.forEach((day) => {
      expect(screen.getByText(day)).toBeInTheDocument();
    });
  });

  it("renders the correct number of days for the current month", () => {
    render(<Calendar />);
    // February 2024 has 29 days (leap year)
    const dayButtons = screen
      .getAllByRole("button")
      .filter((button) => !["<", ">"].includes(button.textContent || ""));
    expect(dayButtons).toHaveLength(29);
  });

  it("navigates to previous month when clicking previous button", () => {
    render(<Calendar />);
    const prevButton = screen.getByText("<");

    fireEvent.click(prevButton);
    expect(screen.getByText("January 2024")).toBeInTheDocument();
  });

  it("navigates to next month when clicking next button", () => {
    render(<Calendar />);
    const nextButton = screen.getByText(">");

    fireEvent.click(nextButton);
    expect(screen.getByText("March 2024")).toBeInTheDocument();
  });

  it("calls onDateSelect callback with correct date when clicking a day", () => {
    const onDateSelect = jest.fn();
    render(<Calendar onDateSelect={onDateSelect} />);

    const dayButton = screen.getByText("15");
    fireEvent.click(dayButton);

    expect(onDateSelect).toHaveBeenCalledWith(new Date(2024, 1, 15));
  });

  it("applies custom className to container when provided", () => {
    const { container } = render(<Calendar className="custom-class" />);
    expect(container.firstChild).toHaveClass("custom-class");
  });

  it("renders correct number of blank spaces before first day", () => {
    render(<Calendar />);
    // February 1, 2024 starts on Thursday (4 blank spaces needed)
    const calendarGrid = screen.getByText("1").parentElement;
    const blanks = calendarGrid?.querySelectorAll(".h-8:empty");
    expect(blanks).toHaveLength(4);
  });

  it("maintains consistent grid layout when changing months", () => {
    render(<Calendar />);
    const nextButton = screen.getByText(">");

    // Check initial grid
    let calendarGrid = screen.getByText("1").parentElement;
    expect(calendarGrid).toHaveClass("grid", "grid-cols-7");

    // Change month and check grid
    fireEvent.click(nextButton);
    calendarGrid = screen.getByText("1").parentElement;
    expect(calendarGrid).toHaveClass("grid", "grid-cols-7");
  });

  it("handles leap year correctly", () => {
    render(<Calendar />);
    // February 2024 is a leap year, should have 29 days
    const day29 = screen.getByText("29");
    expect(day29).toBeInTheDocument();
  });

  it("applies hover styles to day buttons", () => {
    render(<Calendar />);
    const dayButton = screen.getByText("1");
    fireEvent.mouseOver(dayButton);
    expect(dayButton).toHaveStyle({ backgroundColor: "var(--color-hover)" });
    fireEvent.mouseOut(dayButton);
    expect(dayButton).toHaveStyle({ backgroundColor: "transparent" });
  });

  it("maintains fixed container height to prevent layout shifts", () => {
    render(<Calendar />);
    const heightContainer = screen.getByTestId("calendar-grid-container");
    expect(heightContainer).toBeInTheDocument();
    expect(heightContainer).toHaveClass("min-h-[150px]");
  });
});
