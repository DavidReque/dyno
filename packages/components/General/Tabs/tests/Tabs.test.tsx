import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Tabs, { Tab } from "../Tabs";

describe("Tabs Component", () => {
  const tabs: Tab[] = [
    { id: "tab1", label: "Tab 1", content: <div>Content 1</div> },
    { id: "tab2", label: "Tab 2", content: <div>Content 2</div> },
    { id: "tab3", label: "Tab 3", content: <div>Content 3</div> },
  ];

  test("renders all tab labels", () => {
    render(<Tabs tabs={tabs} />);

    tabs.forEach((tab) => {
      expect(screen.getByText(tab.label)).toBeInTheDocument();
    });
  });

  test("displays the first tab's content by default", () => {
    render(<Tabs tabs={tabs} />);
    expect(screen.getByText("Content 1")).toBeInTheDocument();
  });

  test("applies active styles correctly", () => {
    render(<Tabs tabs={tabs} />);

    const tab1 = screen.getByText("Tab 1");
    const tab2 = screen.getByText("Tab 2");

    // Tab 1 debe estar activo por defecto
    expect(tab1).toHaveClass("font-semibold");
    expect(tab2).not.toHaveClass("font-semibold");

    // Hacemos click en el tab 2
    fireEvent.click(tab2);

    // Tab 2 debe tener la clase activa ahora
    expect(tab2).toHaveClass("font-semibold");
    expect(tab1).not.toHaveClass("font-semibold");
  });
});
