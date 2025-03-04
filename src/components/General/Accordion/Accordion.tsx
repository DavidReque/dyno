import { useState } from "react";
import { cn } from "@/lib/utils";

interface AccordionItem {
  id: number;
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
  defaultOpenItem?: number | null;
  allowMultiple?: boolean;
  className?: string;
}

export function Accordion({
  items,
  defaultOpenItem = null,
  allowMultiple = false,
  className,
}: AccordionProps) {
  const [openItems, setOpenItems] = useState<number[]>(
    defaultOpenItem !== null ? [defaultOpenItem] : []
  );

  const isOpen = (id: number) => openItems.includes(id);

  const toggleItem = (id: number) => {
    if (allowMultiple) {
      setOpenItems(
        isOpen(id)
          ? openItems.filter((itemId) => itemId !== id)
          : [...openItems, id]
      );
    } else {
      setOpenItems(isOpen(id) ? [] : [id]);
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLButtonElement>,
    id: number
  ) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleItem(id);
    }
  };

  return (
    <div
      className={cn("border rounded-lg shadow-sm", className)}
      style={{
        backgroundColor: "var(--color-background)",
        borderColor: "var(--color-border)",
      }}
    >
      {items.map((item) => {
        const itemIsOpen = isOpen(item.id);

        return (
          <div
            key={item.id}
            className="border-b last:border-none"
            style={{ borderColor: "var(--color-border)" }}
          >
            <button
              id={`accordion-button-${item.id}`}
              aria-expanded={itemIsOpen}
              aria-controls={`accordion-content-${item.id}`}
              onClick={() => toggleItem(item.id)}
              onKeyDown={(e) => handleKeyDown(e, item.id)}
              className={cn(
                "w-full flex items-center justify-between transition",
                "focus:outline-none hover-effect"
              )}
              style={{
                padding: "0.75rem 1rem",
                color: "var(--color-text)",
                fontSize: "0.875rem",
                fontWeight: 600,
              }}
            >
              {item.title}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                aria-hidden="true"
                className={cn(
                  "h-5 w-5 transition-transform duration-200 ease-out",
                  itemIsOpen ? "rotate-180" : "rotate-0"
                )}
                style={{ color: "var(--color-text)" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
            <div
              id={`accordion-content-${item.id}`}
              role="region"
              aria-labelledby={`accordion-button-${item.id}`}
              className={cn(
                "overflow-hidden transition-all duration-200 ease-out",
                itemIsOpen
                  ? "max-h-96 opacity-100 visible"
                  : "max-h-0 opacity-0 invisible"
              )}
              style={{
                padding: itemIsOpen ? "0.75rem 1rem" : 0,
                fontSize: "0.875rem",
                color: "var(--color-text)",
              }}
            >
              {item.content}
            </div>
          </div>
        );
      })}
    </div>
  );
}
