import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import React, { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: "default" | "withButton" | "file" | "disabled" | "withLabel";
  leadingIcon?: LucideIcon;
  trailingIcon?: LucideIcon;
  error?: boolean;
  label?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

export const Input = ({
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
}: InputProps) => {
  const baseStyles = cn(
    "w-full px-4 py-2.5 text-sm",
    "border rounded-xl",
    "transition-all duration-300",
    "focus:outline-none focus:ring-2 focus:ring-opacity-50",
    "placeholder-neutral-400",
    "shadow-sm hover:shadow-md"
  );

  const variantStyles = {
    default: cn(
      error
        ? "border-destructive-500 focus:ring-destructive-300"
        : "border-neutral-300 focus:border-primary-500 focus:ring-primary-100",
      disabled && "bg-neutral-200 text-neutral-500 cursor-not-allowed"
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
    disabled: "bg-neutral-200 text-neutral-500 cursor-not-allowed",
    withLabel: "mt-2",
  };

  const iconStyles = cn(
    "absolute top-1/2 -translate-y-1/2",
    "text-neutral-500",
    "transition-colors duration-200"
  );

  return (
    <div className={cn("w-full group", variant === "withLabel" && "mb-4")}>
      {label && (
        <label
          className={cn(
            "block mb-2 text-sm font-medium",
            "transition-colors duration-200",
            error
              ? "text-destructive-500"
              : "text-neutral-700 group-focus-within:text-primary-500"
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
          className={cn(
            baseStyles,
            variantStyles[variant],
            variant === "file" ? "cursor-pointer" : "",
            LeadingIcon ? "pl-10" : "",
            TrailingIcon ? "pr-10" : "",
            className
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
              "bg-primary-500 text-white px-4 py-2.5 rounded-r-xl",
              "hover:bg-primary-600 focus:ring-2 focus:ring-primary-100",
              "transition-all duration-300",
              "disabled:bg-neutral-200 disabled:cursor-not-allowed",
              "shadow-sm hover:shadow-md"
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
