import { useState } from "react";
import { cn } from "@/lib/utils"; // Asegúrate de que tienes esta función utilitaria o reemplázala con clsx o classNames

interface AccordionItem {
  id: number;
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export function Accordion({ items }: AccordionProps) {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className="border rounded-lg shadow-sm bg-white">
      {items.map((item) => {
        const isOpen = openItem === item.id;

        return (
          <div key={item.id} className="border-b last:border-none">
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full flex items-center justify-between px-5 py-3 text-left text-sm font-semibold text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition"
            >
              {item.title}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={cn(
                  "h-5 w-5 text-gray-600 transition-transform duration-200 ease-out",
                  isOpen ? "rotate-180" : "rotate-0"
                )}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>

            <div
              className={cn(
                "overflow-hidden transition-all duration-200 ease-out px-5 text-sm text-gray-600",
                isOpen
                  ? "max-h-96 py-3 opacity-100 visible"
                  : "max-h-0 py-0 opacity-0 invisible"
              )}
            >
              {item.content}
            </div>
          </div>
        );
      })}
    </div>
  );
}
