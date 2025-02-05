import React from "react";
import { cn } from "@/lib/utils";

export interface ProgressProps {
  /** Valor actual del progreso */
  value: number;
  /** Valor máximo del progreso */
  max: number;
  /** Variante para determinar el color del progreso */
  variant?: "primary" | "secondary" | "success" | "warning" | "error";
  /** Clases adicionales */
  className?: string;
}

export const Progress: React.FC<ProgressProps> = ({
  value,
  max,
  variant = "primary",
  className,
}) => {
  // Calculamos el porcentaje de avance asegurándonos de que esté entre 0 y 100
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));

  // Clases para cada variante (siguiendo la paleta del Alert)
  const variantClasses: Record<string, string> = {
    primary: "bg-green-400",
    secondary: "bg-blue-400",
    success: "bg-green-500",
    warning: "bg-yellow-500",
    error: "bg-red-500",
  };

  return (
    <div
      className={cn(
        "w-full h-4 bg-gray-700 rounded-full overflow-hidden",
        className
      )}
    >
      <div
        className={cn(
          "h-full rounded-full transition-all duration-300",
          variantClasses[variant]
        )}
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};
