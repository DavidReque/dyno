import { useState, useRef, useEffect } from "react";
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
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Inicializar refs para cada botón de acordeón
  useEffect(() => {
    buttonRefs.current = buttonRefs.current.slice(0, items.length);
  }, [items.length]);

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
    id: number,
    index: number
  ) => {
    switch (e.key) {
      case "Enter":
      case " ":
        e.preventDefault();
        toggleItem(id);
        break;
      case "ArrowDown":
        e.preventDefault();
        const nextIndex = (index + 1) % items.length;
        buttonRefs.current[nextIndex]?.focus();
        setFocusedIndex(nextIndex);
        break;
      case "ArrowUp":
        e.preventDefault();
        const prevIndex = (index - 1 + items.length) % items.length;
        buttonRefs.current[prevIndex]?.focus();
        setFocusedIndex(prevIndex);
        break;
      case "Home":
        e.preventDefault();
        buttonRefs.current[0]?.focus();
        setFocusedIndex(0);
        break;
      case "End":
        e.preventDefault();
        buttonRefs.current[items.length - 1]?.focus();
        setFocusedIndex(items.length - 1);
        break;
    }
  };

  return (
    <div
      className={cn("border rounded-lg shadow-sm", className)}
      style={{
        backgroundColor: "var(--color-background)",
        borderColor: "var(--color-border)",
      }}
      role="region"
      aria-label="Acordeón"
    >
      {items.map((item, index) => {
        const itemIsOpen = isOpen(item.id);

        return (
          <div
            key={item.id}
            className="border-b last:border-none"
            style={{ borderColor: "var(--color-border)" }}
          >
            <button
              ref={(el) => {
                buttonRefs.current[index] = el;
              }}
              id={`accordion-button-${item.id}`}
              aria-expanded={itemIsOpen}
              aria-controls={`accordion-content-${item.id}`}
              onClick={() => toggleItem(item.id)}
              onKeyDown={(e) => handleKeyDown(e, item.id, index)}
              onFocus={() => setFocusedIndex(index)}
              className={cn(
                "w-full flex items-center justify-between transition",
                "focus:outline-none hover-effect",
                focusedIndex === index ? "ring-2 ring-opacity-50" : ""
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
