import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Typography } from "@/theme/typography";
import { Colors } from "@/theme/tokens";

export interface BreadcrumbItem {
  /** Texto que se muestra para el ítem */
  label: string;
  /** URL para navegar (opcional). Si se omite, se mostrará como el ítem activo */
  href?: string;
}

export interface BreadcrumbProps {
  /** Array de ítems del breadcrumb */
  items: BreadcrumbItem[];
  /** Clases adicionales para el contenedor */
  className?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className }) => {
  return (
    <nav
      className={cn("flex items-center", className)}
      aria-label="Breadcrumb"
      style={{
        fontSize: Typography.fontSizeSm,
      }}
    >
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          {item.href ? (
            <Link
              href={item.href}
              className={cn(
                "transition-colors duration-300 hover:text-[#4ADE80]",
                "text-[#9CA3AF]"
              )}
              tabIndex={0}
            >
              {item.label}
            </Link>
          ) : (
            <span
              style={{
                color: Colors.white,
                fontWeight: Typography.fontWeightSemibold,
              }}
            >
              {item.label}
            </span>
          )}
          {index < items.length - 1 && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 mx-2"
              style={{
                color: Colors.gray400,
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          )}
        </div>
      ))}
    </nav>
  );
};
