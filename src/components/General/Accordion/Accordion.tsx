import { useState } from "react";
import { cn } from "@/lib/utils";
import { Colors } from "@/theme/tokens";
import { Typography } from "@/theme/typography";
import { Spacing } from "@/theme/spacing";

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

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLButtonElement>,
    id: number
  ) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setOpenItem(openItem === id ? null : id);
    }
  };

  return (
    <div
      className="border rounded-lg shadow-sm"
      style={{
        backgroundColor: Colors.white,
        fontFamily: Typography.fontFamilyBase,
      }}
    >
      {items.map((item) => {
        const isOpen = openItem === item.id;

        return (
          <div key={item.id} className="border-b last:border-none">
            <button
              id={`accordion-button-${item.id}`}
              aria-expanded={isOpen}
              aria-controls={`accordion-content-${item.id}`}
              onClick={() => setOpenItem(openItem === item.id ? null : item.id)}
              onKeyDown={(e) => handleKeyDown(e, item.id)}
              className="w-full flex items-center justify-between hover:bg-neutral-100 focus:outline-none focus:bg-neutral-100 transition"
              style={{
                padding: `${Spacing.sm} ${Spacing.md}`,
                color: Colors.neutral800,
                fontSize: Typography.fontSizeSm,
                fontWeight: Typography.fontWeightSemibold,
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
                  isOpen ? "rotate-180" : "rotate-0"
                )}
                style={{ color: Colors.neutral800 }}
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
                isOpen
                  ? "max-h-96 opacity-100 visible"
                  : "max-h-0 opacity-0 invisible"
              )}
              style={{
                padding: isOpen ? `${Spacing.sm} ${Spacing.md}` : 0,
                fontSize: Typography.fontSizeSm,
                color: Colors.neutral800,
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
