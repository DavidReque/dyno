import React from "react";
import { Colors } from "../../../theme/tokens";
import { cn } from "../../../lib/utils";

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
  const variantStyles = {
    success: {
      backgroundColor: Colors.successBg,
      color: Colors.successText,
    },
    error: {
      backgroundColor: Colors.errorBg,
      color: Colors.errorText,
    },
    warning: {
      backgroundColor: Colors.warningBg,
      color: Colors.warningText,
    },
    info: {
      backgroundColor: Colors.infoBg,
      color: Colors.infoText,
    },
  };

  return (
    <span
      style={variantStyles[variant]}
      className={cn(
        "inline-flex items-center px-2 py-1 rounded-full text-xs font-bold",
        className
      )}
    >
      {children}
    </span>
  );
};
