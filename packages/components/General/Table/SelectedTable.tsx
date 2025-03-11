import React, { useState } from "react";
import { TableProps, Column } from "@/components/General/Table/Table";
import { cn } from "@/lib/utils";

export interface SelectableTableProps<T> extends TableProps<T> {
  /** Callback que recibe la lista de elementos seleccionados */
  onSelectionChange?: (selected: T[]) => void;
}

export function SelectableTable<T extends object>({
  columns,
  data,
  className,
  onSelectionChange,
}: SelectableTableProps<T>) {
  const [selectedIndices, setSelectedIndices] = useState<Set<number>>(
    new Set()
  );

  const toggleSelect = (rowIndex: number) => {
    const newSet = new Set(selectedIndices);
    if (newSet.has(rowIndex)) {
      newSet.delete(rowIndex);
    } else {
      newSet.add(rowIndex);
    }
    setSelectedIndices(newSet);
    if (onSelectionChange) {
      onSelectionChange(data.filter((_, index) => newSet.has(index)));
    }
  };

  const toggleSelectAll = () => {
    if (selectedIndices.size === data.length) {
      setSelectedIndices(new Set());
      if (onSelectionChange) {
        onSelectionChange([]);
      }
    } else {
      const newSet = new Set<number>();
      data.forEach((_, index) => newSet.add(index));
      setSelectedIndices(newSet);
      if (onSelectionChange) {
        onSelectionChange(data);
      }
    }
  };

  const extendedColumns: Column<T>[] = [
    {
      header: (
        <input
          type="checkbox"
          checked={data.length > 0 && selectedIndices.size === data.length}
          onChange={toggleSelectAll}
          className="w-4 h-4 accent-[var(--color-primary)]"
        />
      ),
      accessor: "" as never,
      cell: (_row: T, rowIndex?: number) => {
        return (
          <input
            type="checkbox"
            checked={rowIndex !== undefined && selectedIndices.has(rowIndex)}
            onChange={() => rowIndex !== undefined && toggleSelect(rowIndex)}
            className="w-4 h-4 accent-[var(--color-primary)]"
          />
        );
      },
    },
    ...columns,
  ];

  return (
    <div className={cn("overflow-x-auto", className)}>
      <table
        className="min-w-full divide-y"
        style={{ borderColor: "var(--color-table-border)" }}
      >
        <thead>
          <tr style={{ backgroundColor: "var(--color-table-header-bg)" }}>
            {extendedColumns.map((column, index) => (
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
              className={cn(
                "transition-colors",
                selectedIndices.has(rowIndex)
                  ? "bg-[var(--color-table-selected-bg)]"
                  : "hover:bg-[var(--color-table-row-hover)]"
              )}
            >
              {extendedColumns.map((column, colIndex) => (
                <td
                  key={colIndex}
                  className="px-6 py-4 whitespace-nowrap text-sm"
                  style={{ color: "var(--color-table-text)" }}
                >
                  {column.cell
                    ? column.cell(row, rowIndex)
                    : String(row[column.accessor as keyof T])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
