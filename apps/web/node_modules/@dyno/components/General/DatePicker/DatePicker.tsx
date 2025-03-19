import React, { useState, useRef, KeyboardEvent } from "react";
import { cn } from "../../../lib/utils";
import { CalendarIcon } from "../../../icons/CalendarIcon";

export interface DatePickerProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Etiqueta para el DatePicker */
  label?: string;
  /** Clases adicionales para el contenedor */
  className?: string;
  /** Ancho personalizado del componente */
  width?: string;
}

export const DatePicker: React.FC<DatePickerProps> = ({
  label,
  className,
  disabled,
  width,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleCalendarClick = () => {
    if (!disabled && inputRef.current) {
      inputRef.current.showPicker();
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (disabled) return;

    const currentDate = inputRef.current?.value
      ? new Date(inputRef.current.value)
      : new Date();

    switch (e.key) {
      case "ArrowLeft":
        e.preventDefault();
        currentDate.setDate(currentDate.getDate() - 1);
        break;
      case "ArrowRight":
        e.preventDefault();
        currentDate.setDate(currentDate.getDate() + 1);
        break;
      case "Enter":
        e.preventDefault();
        const event = new Event("change", { bubbles: true });
        inputRef.current?.dispatchEvent(event);
        break;
      default:
        return;
    }

    if (inputRef.current && (e.key === "ArrowLeft" || e.key === "ArrowRight")) {
      const formattedDate = currentDate.toISOString().split("T")[0];
      inputRef.current.value = formattedDate;
      const event = new Event("change", { bubbles: true });
      inputRef.current.dispatchEvent(event);
    }
  };

  return (
    <div
      className={cn(
        "flex flex-col space-y-2 transition-all duration-200 ease-in-out w-full",
        isFocused && "transform scale-[1.01]",
        className
      )}
      style={{ maxWidth: width || "100%" }}
    >
      {label && (
        <label
          className={cn(
            "text-sm font-medium transition-colors duration-200",
            "truncate",
            isFocused
              ? "text-[var(--color-primary)]"
              : "text-[var(--color-text)]"
          )}
        >
          {label}
        </label>
      )}
      <div className="relative group w-full">
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-r opacity-0 rounded-lg transition-opacity duration-200",
            "from-[var(--color-primary)]/10 to-[var(--color-primary)]/20",
            isFocused && "opacity-100"
          )}
        />
        <div className="relative flex items-center w-full">
          <input
            ref={inputRef}
            type="date"
            disabled={disabled}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onKeyDown={handleKeyDown}
            className={cn(
              "w-full px-4 py-2 rounded-lg border transition-all duration-200",
              "bg-[var(--color-background)]",
              "text-[var(--color-text)]",
              "placeholder-[var(--color-placeholder)]",
              "focus:outline-none focus:ring-2 focus:ring-[var(--color-focus)]",
              "border-[var(--color-border)]",
              "hover:border-[var(--color-primary)]",
              "peer min-w-0 flex-1 pr-10",
              "text-ellipsis overflow-hidden whitespace-nowrap",
              "appearance-none",
              "[&::-webkit-inner-spin-button]:appearance-none",
              "[&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:inset-0",
              disabled &&
                "bg-[var(--color-disabled)] cursor-not-allowed opacity-60",
              "peer min-w-0 flex-1"
            )}
            {...props}
          />
          <button
            type="button"
            onClick={handleCalendarClick}
            disabled={disabled}
            className={cn(
              "absolute right-2 p-1 rounded-md transition-all duration-200",
              "hover:bg-[var(--color-hover)]",
              "focus:outline-none focus:ring-2 focus:ring-[var(--color-focus)]",
              disabled && "cursor-not-allowed"
            )}
          >
            <CalendarIcon
              className={cn(
                "size-4 sm:size-5 transition-colors duration-200",
                isFocused
                  ? "text-[var(--color-primary)]"
                  : "text-[var(--color-placeholder)]",
                disabled && "opacity-60"
              )}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DatePicker;
