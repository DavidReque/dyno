import React from "react";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

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
      className={cn("flex items-center text-sm", className)}
      aria-label="Breadcrumb"
    >
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          {item.href ? (
            <Link
              href={item.href}
              className="text-gray-300 hover:text-green-400 transition-colors duration-300"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-white font-semibold">{item.label}</span>
          )}
          {index < items.length - 1 && (
            <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
          )}
        </div>
      ))}
    </nav>
  );
};
