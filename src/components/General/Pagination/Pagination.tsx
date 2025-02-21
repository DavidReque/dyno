import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export interface PaginationProps {
  /** Página actual (1-indexada) */
  currentPage: number;
  /** Total de páginas */
  totalPages: number;
  /** Callback que se invoca al cambiar de página */
  onPageChange: (page: number) => void;
  /** Clases adicionales */
  className?: string;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  className,
}) => {
  // Generamos un array con las páginas
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handleKeyDown = (e: React.KeyboardEvent, action: () => void) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      action();
    }
  };

  return (
    <div
      className={cn(
        "flex items-center justify-center space-x-2 p-4 bg-[#0D1B2A] rounded-lg",
        className
      )}
    >
      <button
        onKeyDown={(e) => handleKeyDown(e, () => onPageChange(currentPage - 1))}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 text-sm text-gray-400 bg-gray-700 hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed rounded"
        tabIndex={0}
      >
        Prev
      </button>
      {pages.map((page) => (
        <motion.button
          onKeyDown={(e) => handleKeyDown(e, () => onPageChange(page))}
          key={page}
          onClick={() => onPageChange(page)}
          className={cn(
            "px-3 py-1 text-sm rounded transition-colors duration-300",
            page === currentPage
              ? "bg-green-400 text-white font-semibold"
              : "bg-gray-700 text-gray-300 hover:bg-gray-600"
          )}
          whileTap={{ scale: 0.95 }}
          aria-label={`Page ${page}`}
          aria-current={page === currentPage ? "page" : undefined}
          tabIndex={0}
        >
          {page}
        </motion.button>
      ))}

      <button
        onKeyDown={(e) => handleKeyDown(e, () => onPageChange(currentPage + 1))}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 text-sm text-gray-400 bg-gray-700 hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed rounded"
        aria-label="Next page"
        tabIndex={0}
      >
        Next
      </button>
    </div>
  );
};
