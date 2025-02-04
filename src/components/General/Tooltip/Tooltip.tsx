import React, { useState } from "react";
import { cn } from "@/lib/utils";

export interface TooltipProps {
  /** Contenido del tooltip */
  text: string;
  /** Posición del tooltip respecto al elemento (top, bottom, left, right) */
  position?: "top" | "bottom" | "left" | "right";
  /** Elemento que dispara el tooltip */
  children: React.ReactNode;
  /** Clases adicionales */
  className?: string;
}

const positionClasses: Record<"top" | "bottom" | "left" | "right", string> = {
  top: "bottom-full mb-2 left-1/2 transform -translate-x-1/2",
  bottom: "top-full mt-2 left-1/2 transform -translate-x-1/2",
  left: "right-full mr-2 top-1/2 transform -translate-y-1/2",
  right: "left-full ml-2 top-1/2 transform -translate-y-1/2",
};

export const Tooltip: React.FC<TooltipProps> = ({
  text,
  position = "top",
  children,
  className,
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className={cn("relative inline-block", className)}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <div
          className={cn(
            "absolute z-10 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-90",
            positionClasses[position]
          )}
        >
          {text}
        </div>
      )}
    </div>
  );
};
