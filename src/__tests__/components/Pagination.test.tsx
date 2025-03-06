import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Pagination } from "@/components/General/Pagination/Pagination";
import "@testing-library/jest-dom";

describe("Pagination Component", () => {
  test("renders the correct number of page buttons", () => {
    render(
      <Pagination currentPage={2} totalPages={5} onPageChange={jest.fn()} />
    );
    // Debe haber 5 botones de páginas (sin contar Prev y Next)
    // Filtramos los botones que tienen un texto numérico
    const pageButtons = screen.getAllByRole("button").filter((btn) => {
      const pageNum = Number(btn.textContent);
      return !isNaN(pageNum);
    });
    expect(pageButtons).toHaveLength(5);
  });

  test("disables 'Prev' button on the first page", () => {
    render(
      <Pagination currentPage={1} totalPages={5} onPageChange={jest.fn()} />
    );
    const prevButton = screen.getByRole("button", { name: /prev/i });
    expect(prevButton).toBeDisabled();
  });

  test("disables 'Next' button on the last page", () => {
    render(
      <Pagination currentPage={5} totalPages={5} onPageChange={jest.fn()} />
    );
    const nextButton = screen.getByRole("button", { name: /next/i });
    expect(nextButton).toBeDisabled();
  });

  test("calls onPageChange with the correct page number when a page button is clicked", () => {
    const onPageChangeMock = jest.fn();
    render(
      <Pagination
        currentPage={2}
        totalPages={5}
        onPageChange={onPageChangeMock}
      />
    );
    // Hacemos clic en la página "4"
    const page4Button = screen.getByText("4");
    fireEvent.click(page4Button);
    expect(onPageChangeMock).toHaveBeenCalledWith(4);
  });

  test("calls onPageChange with currentPage - 1 when 'Prev' is clicked", () => {
    const onPageChangeMock = jest.fn();
    render(
      <Pagination
        currentPage={3}
        totalPages={5}
        onPageChange={onPageChangeMock}
      />
    );
    const prevButton = screen.getByRole("button", { name: /prev/i });
    fireEvent.click(prevButton);
    expect(onPageChangeMock).toHaveBeenCalledWith(2);
  });

  test("calls onPageChange with currentPage + 1 when 'Next' is clicked", () => {
    const onPageChangeMock = jest.fn();
    render(
      <Pagination
        currentPage={3}
        totalPages={5}
        onPageChange={onPageChangeMock}
      />
    );
    const nextButton = screen.getByRole("button", { name: /next/i });
    fireEvent.click(nextButton);
    expect(onPageChangeMock).toHaveBeenCalledWith(4);
  });

  test("applies the correct style for the current page button", () => {
    render(
      <Pagination currentPage={3} totalPages={5} onPageChange={jest.fn()} />
    );
    // Verificamos que el botón de la página 3 tenga la clase 'bg-green-400 text-white font-semibold'
    const currentPageButton = screen.getByText("3");
    expect(currentPageButton).toHaveClass(
      "bg-[var(--color-primary)]",
      "text-white",
      "font-semibold"
    );
  });
});
