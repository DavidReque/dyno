import { cn } from "../../../lib/utils";
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
    error
      ? "focus:outline-none focus:ring-2 focus:ring-[var(--color-error)] focus:ring-opacity-50"
      : "focus:outline-none focus:ring-2 focus:ring-[var(--color-focus)] focus:ring-opacity-50",
    "placeholder-[var(--color-placeholder)]",
    "bg-[var(--color-background)] text-[var(--color-text)]",
    "border-[var(--color-border)]"
  );

  const variantStyles = {
    default: cn(
      error
        ? "border-[var(--color-error)] focus:border-[var(--color-error)] focus:ring-[var(--color-error)]"
        : "focus:border-[var(--color-primary)]",
      disabled &&
        "bg-[var(--color-disabled)] text-[var(--color-disabled)] cursor-not-allowed"
    ),
    withButton: "rounded-r-none border-r-0",
    file: cn(
      "file:mr-4 file:py-2 file:px-4",
      "file:rounded-lg file:border-0",
      "file:text-sm file:font-semibold",
      "file:bg-[var(--color-primary)] file:text-white",
      "file:hover:bg-[var(--color-primary)]",
      "file:transition-colors file:duration-300",
      "file:cursor-pointer",
      "text-[var(--color-placeholder)] placeholder-[var(--color-placeholder)]"
    ),
    disabled:
      "bg-[var(--color-disabled)] text-[var(--color-disabled)] cursor-not-allowed",
    withLabel: "mt-2",
  };

  const iconStyles = cn(
    "absolute top-1/2 -translate-y-1/2",
    "text-[var(--color-placeholder)] transition-colors duration-200"
  );

  return (
    <div className={cn("w-full group", variant === "withLabel" && "mb-4")}>
      {label && (
        <label
          className={cn(
            "block mb-2 text-sm font-medium transition-colors duration-200",
            error
              ? "text-[var(--color-error)]"
              : "text-[var(--color-text)] group-focus-within:text-[var(--color-primary)]"
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
              error
                ? "group-focus-within:text-[var(--color-error)]"
                : "group-focus-within:text-[var(--color-primary)]"
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
            error
              ? "focus:ring-2 focus:ring-[var(--color-error)] focus:outline-none"
              : "focus:ring-2 focus:ring-[var(--color-focus)] focus:outline-none"
          )}
          disabled={variant === "disabled" || disabled}
          {...props}
        />

        {TrailingIcon && (
          <TrailingIcon
            className={cn(
              iconStyles,
              "right-3",
              error
                ? "group-focus-within:text-[var(--color-error)]"
                : "group-focus-within:text-[var(--color-primary)]"
            )}
          />
        )}

        {variant === "withButton" && buttonText && (
          <button
            type="button"
            onClick={onButtonClick}
            className={cn(
              "bg-[var(--color-primary)] text-white px-4 py-2.5 rounded-r-xl transition-all duration-300 shadow-md hover:shadow-lg",
              "hover:bg-[var(--color-primary)]",
              "focus:ring-2 focus:ring-[var(--color-focus)] focus:ring-opacity-50",
              "disabled:bg-[var(--color-disabled)] disabled:cursor-not-allowed"
            )}
            disabled={disabled}
          >
            {buttonText}
          </button>
        )}
      </div>

      {error && (
        <p className="mt-1.5 text-xs text-[var(--color-error)] animate-pulse">
          {props.title || "Invalid input"}
        </p>
      )}
    </div>
  );
};
