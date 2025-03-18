import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../../lib/utils";

export interface SpinnerProps {
  /** Tamaño del spinner: sm, md o lg */
  size?: "md";
  /** Clase Tailwind para el color del borde superior, p.ej. "border-t-green-400" */
  color?: string;
  /** Clases adicionales */
  className?: string;
}

const sizeClasses: Record<NonNullable<SpinnerProps["size"]>, string> = {
  md: "w-10 h-10",
};

export const Spinner: React.FC<SpinnerProps> = ({
  size = "md",
  color = "border-t-green-400",
  className,
}) => {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <motion.div
        className={cn(
          sizeClasses[size],
          "border-4 border-solid rounded-full border-gray-200",
          color
        )}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      />
    </div>
  );
};
