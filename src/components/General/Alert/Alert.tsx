import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Colors } from "@/theme/tokens";

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
  const alertRef = useRef<HTMLDivElement>(null);

  const variantStyles = {
    success: {
      backgroundColor: Colors.successBg,
      border: `1px solid ${Colors.successText}`,
      color: Colors.successText,
    },
    error: {
      backgroundColor: Colors.errorBg,
      border: `1px solid ${Colors.errorText}`,
      color: Colors.errorText,
    },
    warning: {
      backgroundColor: Colors.warningBg,
      border: `1px solid ${Colors.warningText}`,
      color: Colors.warningText,
    },
    info: {
      backgroundColor: Colors.infoBg,
      border: `1px solid ${Colors.infoText}`,
      color: Colors.infoText,
    },
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && dismissible) {
        handleClose();
      }
    };

    if (dismissible) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      if (dismissible) {
        document.removeEventListener("keydown", handleKeyDown);
      }
    };
  }, [dismissible]);

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      ref={alertRef}
      role="alert"
      style={variantStyles[variant]}
      className={cn(
        "p-4 rounded-lg flex items-center justify-between space-x-3",
        className
      )}
    >
      <div className="flex-1">{message}</div>
      {dismissible && (
        <button
          onClick={handleClose}
          className="text-neutral-500 hover:text-neutral-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded"
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
