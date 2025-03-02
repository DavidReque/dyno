import { cn } from "@/lib/utils";
import React, { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: "default" | "withButton" | "file" | "disabled" | "withLabel";
  leadingIcon?: React.FC<React.SVGProps<SVGSVGElement>>;
  trailingIcon?: React.FC<React.SVGProps<SVGSVGElement>>;
  error?: boolean;
  label?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

export const Input: React.FC<InputProps> = ({
  variant = "default",
  leadingIcon: LeadingIcon,
  trailingIcon: TrailingIcon,
  error = false,
  label,
  buttonText,
  onButtonClick,
  className,
  disabled = false,
  ...props
}) => {
  const baseStyles = cn(
    "w-full px-4 py-2.5 text-sm border rounded-xl transition-all duration-300 shadow-md hover:shadow-lg",
    "focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-opacity-50",
    "placeholder-neutral-400",
    // Soporte para modo oscuro
    "bg-white text-neutral-800 dark:bg-neutral-800 dark:text-neutral-100"
  );

  const variantStyles = {
    default: cn(
      error
        ? "border-destructive-500 focus:border-destructive-500 focus:ring-destructive-300"
        : "border-gray-300 focus:border-primary-500",
      disabled &&
        "bg-neutral-200 text-neutral-500 cursor-not-allowed dark:bg-neutral-700 dark:text-neutral-400"
    ),
    withButton: "rounded-r-none border-r-0",
    file: cn(
      "file:mr-4 file:py-2 file:px-4",
      "file:rounded-lg file:border-0",
      "file:text-sm file:font-semibold",
      "file:bg-primary-500 file:text-white",
      "file:hover:bg-primary-600",
      "file:transition-colors file:duration-300",
      "file:cursor-pointer",
      "text-neutral-500 placeholder-neutral-400"
    ),
    disabled:
      "bg-neutral-200 text-neutral-500 cursor-not-allowed dark:bg-neutral-700 dark:text-neutral-400",
    withLabel: "mt-2",
  };

  const iconStyles = cn(
    "absolute top-1/2 -translate-y-1/2",
    "text-neutral-500 transition-colors duration-200"
  );

  return (
    <div className={cn("w-full group", variant === "withLabel" && "mb-4")}>
      {label && (
        <label
          className={cn(
            "block mb-2 text-sm font-medium transition-colors duration-200",
            error
              ? "text-destructive-500"
              : "text-neutral-700 dark:text-neutral-400 group-focus-within:text-primary-500"
          )}
        >
          {label}
        </label>
      )}

      <div className="relative flex">
        {LeadingIcon && (
          <LeadingIcon
            className={cn(
              iconStyles,
              "left-3",
              "group-focus-within:text-primary-500"
            )}
          />
        )}

        <input
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              console.log("Enter pressed");
            } else if (e.key === "Escape") {
              e.currentTarget.value = "";
            }
          }}
          className={cn(
            baseStyles,
            variantStyles[variant],
            variant === "file" ? "cursor-pointer" : "",
            LeadingIcon ? "pl-10" : "",
            TrailingIcon ? "pr-10" : "",
            className,
            "focus:ring-2 focus:ring-primary-400 focus:outline-none"
          )}
          disabled={variant === "disabled" || disabled}
          {...props}
        />

        {TrailingIcon && (
          <TrailingIcon
            className={cn(
              iconStyles,
              "right-3",
              "group-focus-within:text-primary-500"
            )}
          />
        )}

        {variant === "withButton" && buttonText && (
          <button
            type="button"
            onClick={onButtonClick}
            className={cn(
              "bg-primary-500 text-white px-4 py-2.5 rounded-r-xl transition-all duration-300 shadow-md hover:shadow-lg",
              "hover:bg-primary-600",
              "focus:ring-2 focus:ring-primary-400 focus:ring-opacity-50",
              "disabled:bg-neutral-200 disabled:cursor-not-allowed"
            )}
            disabled={disabled}
          >
            {buttonText}
          </button>
        )}
      </div>

      {error && (
        <p className="mt-1.5 text-xs text-destructive-500 animate-pulse">
          {props.title || "Invalid input"}
        </p>
      )}
    </div>
  );
};
