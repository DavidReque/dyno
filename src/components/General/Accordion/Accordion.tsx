import React, { useState } from "react";
import { cn } from "@/lib/utils";

export interface AccordionItem {
  /** Identificador único del ítem */
  id: string;
  /** Título o encabezado del ítem */
  title: string;
  /** Contenido que se muestra al expandir el ítem */
  content: React.ReactNode;
}

export interface AccordionProps {
  /** Lista de ítems del accordion */
  items: AccordionItem[];
  /** Clases adicionales para el contenedor */
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({ items, className }) => {
  // Permite abrir o cerrar cada ítem de forma independiente
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div className={cn("border rounded-lg divide-y", className)}>
      {items.map((item) => (
        <div key={item.id}>
          <button
            onClick={() => toggleItem(item.id)}
            className="w-full px-4 py-2 text-left text-sm font-medium text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
          >
            {item.title}
          </button>
          <div
            className={cn(
              "px-4 py-2 text-sm text-gray-600 transition-all duration-300 overflow-hidden",
              openItems.has(item.id)
                ? "max-h-96 opacity-100"
                : "max-h-0 opacity-0"
            )}
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
};
