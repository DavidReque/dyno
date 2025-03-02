import React from "react";
import { cn } from "@/lib/utils";

export interface Column<T> {
  /** Texto del encabezado de la columna */
  header: React.ReactNode;
  /** Llave para acceder a la propiedad del objeto de datos */
  accessor: keyof T;
  /** Función opcional para renderizar la celda personalizada */
  cell?: (row: T, rowIndex?: number) => React.ReactNode;
}

export interface TableProps<T> {
  /** Array de columnas a mostrar */
  columns: Column<T>[];
  /** Array de datos a renderizar */
  data: T[];
  /** Clases adicionales para el contenedor de la tabla */
  className?: string;
}

export function Table<T extends object>({
  columns,
  data,
  className,
}: TableProps<T>) {
  return (
    <div className={cn("overflow-x-auto", className)}>
      <table
        className="min-w-full divide-y"
        style={{ borderColor: "var(--color-table-border)" }}
      >
        <thead>
          <tr style={{ backgroundColor: "var(--color-table-header-bg)" }}>
            {columns.map((column, index) => (
              <th
                key={index}
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                style={{ color: "var(--color-table-header-text)" }}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody
          className="divide-y"
          style={{
            backgroundColor: "var(--color-background)",
            borderColor: "var(--color-table-border)",
          }}
        >
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="transition-colors hover:bg-[var(--color-table-row-hover)]"
            >
              {columns.map((column, colIndex) => (
                <td
                  key={colIndex}
                  className="px-6 py-4 whitespace-nowrap text-sm"
                  style={{ color: "var(--color-table-text)" }}
                >
                  {column.cell
                    ? column.cell(row)
                    : String(row[column.accessor])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
