import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps {
  /** Variante del badge */
  variant?: "success" | "error" | "warning" | "info";
  /** Contenido o texto del badge */
  children: React.ReactNode;
  /** Clases adicionales */
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = "info",
  children,
  className,
}) => {
  const variantClasses = {
    success: "bg-green-100 text-green-800",
    error: "bg-red-100 text-red-800",
    warning: "bg-yellow-100 text-yellow-800",
    info: "bg-blue-100 text-blue-800",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  );
};
