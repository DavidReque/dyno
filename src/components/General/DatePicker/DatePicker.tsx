import React, { useState, useRef } from "react";
import { cn } from "@/lib/utils";

export interface DatePickerProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Etiqueta para el DatePicker */
  label?: string;
  /** Clases adicionales para el contenedor */
  className?: string;
}

export const DatePicker: React.FC<DatePickerProps> = ({
  label,
  className,
  disabled,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleCalendarClick = () => {
    if (!disabled && inputRef.current) {
      inputRef.current.showPicker();
    }
  };

  return (
    <div
      className={cn(
        "flex flex-col space-y-2 transition-all duration-200 ease-in-out",
        isFocused && "transform scale-[1.01]",
        className
      )}
    >
      {label && (
        <label
          className={cn(
            "text-sm font-medium transition-colors duration-200",
            isFocused
              ? "text-green-600 dark:text-green-400"
              : "text-gray-700 dark:text-gray-300"
          )}
        >
          {label}
        </label>
      )}
      <div className="relative group">
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 opacity-0 rounded-lg transition-opacity duration-200",
            isFocused && "opacity-100"
          )}
        />
        <div className="relative flex items-center">
          <input
            ref={inputRef}
            type="date"
            disabled={disabled}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={cn(
              "w-full px-4 py-2 rounded-lg border transition-all duration-200",
              "bg-white dark:bg-gray-800",
              "text-gray-700 dark:text-gray-200",
              "placeholder-gray-400 dark:placeholder-gray-500",
              "focus:outline-none focus:ring-2 focus:ring-green-400/50 dark:focus:ring-green-500/50",
              "border-gray-200 dark:border-gray-700",
              "hover:border-green-300 dark:hover:border-green-600",
              disabled &&
                "bg-gray-100 dark:bg-gray-900 cursor-not-allowed opacity-60",
              "peer"
            )}
            {...props}
          />
          <button
            type="button"
            onClick={handleCalendarClick}
            disabled={disabled}
            className={cn(
              "absolute right-2 p-1 rounded-md transition-all duration-200",
              "hover:bg-green-50 dark:hover:bg-green-900/30",
              "focus:outline-none focus:ring-2 focus:ring-green-400/50 dark:focus:ring-green-500/50",
              disabled && "cursor-not-allowed"
            )}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={cn(
                "size-6 transition-colors duration-200",
                isFocused
                  ? "text-green-500 dark:text-green-400"
                  : "text-gray-400 dark:text-gray-500",
                disabled && "opacity-60"
              )}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DatePicker;
