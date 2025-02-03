import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import React from "react";

export interface ButtonProps {
  /** Variant of the button */
  variant?: "primary" | "secondary" | "ghost" | "destructive" | "rounded";
  /** Size of the button */
  size?: "sm" | "md" | "lg";
  /** Button contents */
  label?: string;
  icon?: LucideIcon;
  /** Optional click handler */
  onClick?: () => void;
  /** Optional additional className */
  className?: string;
  /** Disabled state */
  disabled?: boolean;
  children?: React.ReactNode;
}

export const Button = ({
  variant = "primary",
  size = "md",
  label,
  icon: Icon,
  onClick,
  className,
  disabled = false,
  children,
  ...props
}: ButtonProps) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-colors duration-200 disabled:opacity-50 disabled:pointer-events-none";

  const variantStyles = {
    primary: "bg-primary-500 text-white hover:bg-primary-600 ",
    secondary:
      "bg-neutral-100 text-neutral-900 hover:bg-neutral-200 focus:ring-neutral-500",
    ghost: "text-neutral-700 hover:bg-neutral-100 focus:ring-neutral-500",
    destructive:
      "bg-destructive-500 text-white hover:bg-destructive-600 focus:ring-destructive-500",
    rounded:
      "bg-green-400 text-white hover:bg-green-600 focus:ring-primary-500 rounded-full",
  };

  const sizeStyles = {
    sm: "text-sm px-3 py-1.5 rounded-md",
    md: "text-sm px-4 py-2 rounded-lg",
    lg: "text-md px-6 py-3 rounded-lg",
  };

  return (
    <button
      type="button"
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {Icon && <Icon className="mr-2" />} {/* Render icon as a component */}
      {label || children}
    </button>
  );
};
