import { Accordion } from "@/components/General/Accordion/Accordion";
import { render, screen, fireEvent } from "@testing-library/react";

const items = [
  { id: 1, title: "Item 1", content: "Content 1" },
  { id: 2, title: "Item 2", content: "Content 2" },
];

describe("Accordion Component", () => {
  it("renders all accordion items", () => {
    render(<Accordion items={items} />);

    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
    expect(screen.queryByText("Content 1")).not.toBeVisible();
    expect(screen.queryByText("Content 2")).not.toBeVisible();
  });

  it("expands on first click and collapses on second click", async () => {
    render(<Accordion items={items} />);
    const item1Button = screen.getByText("Item 1");

    // Expandir
    fireEvent.click(item1Button);
    expect(screen.getByText("Content 1")).toBeVisible();

    // Colapsar
    fireEvent.click(item1Button);
    expect(screen.queryByText("Content 1")).not.toBeVisible();
  });

  it("clicking an item does not affect others", () => {
    render(<Accordion items={items} />);
    const item1Button = screen.getByText("Item 1");
    const item2Button = screen.getByText("Item 2");

    fireEvent.click(item1Button);
    expect(screen.getByText("Content 1")).toBeVisible();
    expect(screen.queryByText("Content 2")).not.toBeVisible();

    fireEvent.click(item2Button);
    expect(screen.getByText("Content 2")).toBeVisible();
    expect(screen.getByText("Content 1")).toBeVisible();
  });
});
