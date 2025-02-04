import React from "react";
import { cn } from "@/lib/utils";

export interface Column<T> {
  /** Texto del encabezado de la columna */
  header: string;
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
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((column, index) => (
              <th
                key={index}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column, colIndex) => (
                <td
                  key={colIndex}
                  className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
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
