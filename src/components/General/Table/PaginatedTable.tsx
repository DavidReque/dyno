import React, { useState } from "react";
import { Table, TableProps } from "@/components/General/Table/Table";
import { cn } from "@/lib/utils";

export interface PaginatedTableProps<T> extends TableProps<T> {
  /** Número de filas por página */
  pageSize?: number;
}

export function PaginatedTable<T extends object>({
  columns,
  data,
  className,
  pageSize = 2,
}: PaginatedTableProps<T>) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / pageSize);

  const paginatedData = data.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const buttonStyles = {
    backgroundColor: "var(--color-pagination-bg)",
    borderColor: "var(--color-pagination-border)",
    color: "var(--color-pagination-text)",
  };

  const buttonDisabledStyles = {
    ...buttonStyles,
    opacity: 0.5,
    cursor: "not-allowed",
  };

  return (
    <div className={cn("space-y-4", className)}>
      <Table columns={columns} data={paginatedData} />
      <div className="flex justify-center items-center gap-4 mt-4">
        <button
          className="px-4 py-2 text-sm font-medium rounded-md transition-colors"
          onClick={handlePrev}
          disabled={currentPage === 1}
          style={currentPage === 1 ? buttonDisabledStyles : buttonStyles}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
        </button>
        <span
          className="text-sm font-medium"
          style={{ color: "var(--color-pagination-text)" }}
        >
          {currentPage} / {totalPages}
        </span>
        <button
          className="px-4 py-2 text-sm font-medium rounded-md transition-colors"
          onClick={handleNext}
          disabled={currentPage === totalPages}
          style={
            currentPage === totalPages ? buttonDisabledStyles : buttonStyles
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
