import React from "react";
import { render, screen } from "@testing-library/react";
import { Avatar } from "@/components/General/Avatar/Avatar";

describe("Avatar Component", () => {
  it("renders the image when `src` is provided", () => {
    render(<Avatar src="https://example.com/avatar.jpg" alt="User Avatar" />);

    const img = screen.getByRole("img", { name: /User Avatar/i });
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "https://example.com/avatar.jpg");
  });

  it("renders the fallback text when `src` is not provided", () => {
    render(<Avatar alt="User Name" />);
    const fallback = screen.getByText("U");
    expect(fallback).toBeInTheDocument();
  });

  it("renders custom fallback text if provided", () => {
    render(<Avatar fallback="JD" />);
    const fallback = screen.getByText("JD");
    expect(fallback).toBeInTheDocument();
  });

  it("applies the correct size class", () => {
    const { rerender, container } = render(<Avatar size="sm" />);
    let avatarContainer = container.firstChild as HTMLElement;
    expect(avatarContainer).toHaveClass("w-8 h-8");

    rerender(<Avatar size="md" />);
    avatarContainer = container.firstChild as HTMLElement;
    expect(avatarContainer).toHaveClass("w-12 h-12");

    rerender(<Avatar size="lg" />);
    avatarContainer = container.firstChild as HTMLElement;
    expect(avatarContainer).toHaveClass("w-16 h-16");
  });

  it("applies additional className if provided", () => {
    const { container } = render(<Avatar className="border border-red-500" />);
    const avatarContainer = container.firstChild as HTMLElement;
    expect(avatarContainer).toHaveClass("border", "border-red-500");
  });
});
