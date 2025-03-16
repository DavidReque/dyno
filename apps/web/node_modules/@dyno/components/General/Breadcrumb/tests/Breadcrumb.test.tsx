import React from "react";
import { render, screen } from "@testing-library/react";
import { Breadcrumb } from "../Breadcrumb";
import { fontTokens } from "../../../../theme/typography";

// Mock Next.js Link component
jest.mock("next/link", () => {
  const MockLink: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>> = ({
    children,
    ...props
  }) => <a {...props}>{children}</a>;
  MockLink.displayName = "MockLink";
  return MockLink;
});

describe("Breadcrumb Component", () => {
  const mockItems = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Current Page" },
  ];

  it("renders all breadcrumb items", () => {
    render(<Breadcrumb items={mockItems} />);
    mockItems.forEach((item) => {
      expect(screen.getByText(item.label)).toBeInTheDocument();
    });
  });

  it("renders the correct number of separators", () => {
    const { container } = render(<Breadcrumb items={mockItems} />);
    const separators = container.querySelectorAll("svg");
    expect(separators).toHaveLength(mockItems.length - 1);
  });

  it("renders links for items with href and spans for items without href", () => {
    render(<Breadcrumb items={mockItems} />);
    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(2);
    expect(links[0]).toHaveAttribute("href", "/");
    expect(links[1]).toHaveAttribute("href", "/products");

    const currentPage = screen.getByText("Current Page");
    expect(currentPage.tagName).toBe("SPAN");
  });

  it("applies the correct styles to links and current item", () => {
    render(<Breadcrumb items={mockItems} />);

    // Los links deben tener las clases definidas en el componente:
    // "transition-colors", "duration-300", "hover:text-[var(--color-primary)]", "text-[var(--color-placeholder)]"
    const links = screen.getAllByRole("link");
    links.forEach((link) => {
      expect(link).toHaveClass(
        "transition-colors",
        "duration-300",
        "hover:text-[var(--color-primary)]",
        "text-[var(--color-placeholder)]"
      );
    });

    // La página actual se renderiza en un span con inline style para color y fontWeight
    const currentPage = screen.getByText("Current Page");
    expect(currentPage).toHaveStyle({
      color: "var(--color-text)",
      fontWeight: fontTokens.fontWeightSemibold.toString(),
    });
  });

  it("applies additional className to the nav element if provided", () => {
    const { container } = render(
      <Breadcrumb items={mockItems} className="custom-class" />
    );
    const nav = container.firstChild as HTMLElement;
    expect(nav).toHaveClass("custom-class");
  });

  it("applies base classes to the nav element", () => {
    const { container } = render(<Breadcrumb items={mockItems} />);
    const nav = container.firstChild as HTMLElement;
    expect(nav).toHaveClass("flex", "items-center");
    expect(nav).toHaveStyle({ fontSize: fontTokens.fontSizeSm });
  });

  it("sets the correct aria-label on the nav element", () => {
    render(<Breadcrumb items={mockItems} />);
    const nav = screen.getByRole("navigation");
    expect(nav).toHaveAttribute("aria-label", "Breadcrumb");
  });

  it("renders correctly with a single item", () => {
    const singleItem = [{ label: "Home" }];
    const { container } = render(<Breadcrumb items={singleItem} />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    const separators = container.querySelectorAll("svg");
    expect(separators).toHaveLength(0);
  });

  it("renders correctly with empty items array", () => {
    const { container } = render(<Breadcrumb items={[]} />);
    const nav = container.firstChild as HTMLElement;
    expect(nav).toBeInTheDocument();
    expect(nav.children).toHaveLength(0);
  });
});
