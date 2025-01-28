import { cn } from "@/lib/utils";
import { ChevronDown, LucideIcon } from "lucide-react";
import React from "react";

export interface SelectProps {
  variant?: "primary" | "secondary" | "ghost" | "destructive";
  size?: "sm" | "md" | "lg";
  options: { value: string; label: string }[];
  selectedValue?: string;
  placeholder?: string;
  disabled?: boolean;
  icon?: LucideIcon;
  className?: string;
  onChange?: (value: string) => void;
}

export const Select = ({
  variant = "primary",
  size = "md",
  options,
  selectedValue,
  placeholder = "Select an option",
  disabled = false,
  icon: Icon = ChevronDown,
  className,
  onChange,
  ...props
}: SelectProps) => {
  const baseStyles =
    "appearance-none w-full focus:outline-none focus:ring-2 transition-all duration-200 rounded-lg border";

  const variantStyles = {
    primary:
      "bg-primary-50 border-primary-300 text-primary-900 focus:ring-primary-500 focus:border-primary-500 hover:border-primary-400",
    secondary:
      "bg-neutral-50 border-neutral-200 text-neutral-700 focus:ring-neutral-400 focus:border-neutral-400 hover:border-neutral-300",
    ghost:
      "border-transparent bg-transparent text-neutral-600 hover:bg-neutral-50 focus:ring-neutral-400",
    destructive:
      "bg-destructive-50 border-destructive-300 text-destructive-700 focus:ring-destructive-500 focus:border-destructive-500 hover:border-destructive-400",
  };

  const sizeStyles = {
    sm: "px-2.5 py-1.5 text-sm",
    md: "px-3 py-2.5 text-base",
    lg: "px-4 py-3.5 text-lg",
  };

  const iconColors = {
    primary: "text-primary-500",
    secondary: "text-neutral-500",
    ghost: "text-neutral-500",
    destructive: "text-destructive-500",
  };

  return (
    <div className={cn("relative w-64", className)}>
      <select
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          disabled && "opacity-60 cursor-not-allowed bg-neutral-100",
          "pr-10"
        )}
        value={selectedValue}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.value)}
        {...props}
      >
        <option value="" disabled hidden>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
        <Icon
          className={cn(
            "w-5 h-5 transition-transform",
            iconColors[variant],
            disabled && "text-neutral-400"
          )}
        />
      </div>
    </div>
  );
};
