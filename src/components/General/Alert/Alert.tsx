import React, { useState } from "react";
import { cn } from "@/lib/utils";

export interface AlertProps {
  /** Tipo de alerta */
  variant?: "success" | "error" | "warning" | "info";
  /** Contenido o mensaje de la alerta */
  message: React.ReactNode;
  /** Si es true, se muestra un botón para cerrar la alerta */
  dismissible?: boolean;
  /** Callback que se ejecuta al cerrar la alerta */
  onClose?: () => void;
  /** Clases adicionales */
  className?: string;
}

export const Alert: React.FC<AlertProps> = ({
  variant = "info",
  message,
  dismissible = false,
  onClose,
  className,
}) => {
  const [visible, setVisible] = useState(true);

  const variantClasses = {
    success: "bg-green-100 border border-green-500 text-green-800",
    error: "bg-red-100 border border-red-500 text-red-800",
    warning: "bg-yellow-100 border border-yellow-500 text-yellow-800",
    info: "bg-blue-100 border border-blue-500 text-blue-800",
  };

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className={cn(
        "p-4 rounded-lg flex items-center justify-between space-x-3",
        variantClasses[variant],
        className
      )}
    >
      <div className="flex-1">{message}</div>
      {dismissible && (
        <button
          onClick={handleClose}
          className="text-neutral-500 hover:text-neutral-700"
          aria-label="Close alert"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
    </div>
  );
};
