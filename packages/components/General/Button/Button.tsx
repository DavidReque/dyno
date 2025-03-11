import React from "react";
import { cn } from "../../../lib/utils";
import { typography } from "../../../theme/typography";

export interface ButtonProps {
  variant?: "primary" | "secondary" | "ghost" | "destructive" | "rounded";
  size?: "sm" | "md" | "lg";
  label?: string;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
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
  const baseStyles = cn(
    "inline-flex items-center justify-center transition-all duration-150 ease-in-out",
    "border-none outline-none select-none",
    disabled && "opacity-50 pointer-events-none",
    !disabled && "cursor-pointer",
    typography.medium
  );

  const variantStyles = {
    primary: cn(
      "bg-[var(--color-primary)] text-white",
      "hover:bg-[var(--color-primary)]/90 hover:shadow-lg hover:shadow-[var(--color-primary)]/20",
      "active:bg-[var(--color-primary)]/80",
      "focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2"
    ),
    secondary: cn(
      "bg-[var(--color-secondary)] text-white",
      "hover:bg-[var(--color-secondary)]/90 hover:shadow-lg hover:shadow-[var(--color-secondary)]/20",
      "active:bg-[var(--color-secondary)]/80",
      "focus:ring-2 focus:ring-[var(--color-secondary)] focus:ring-offset-2"
    ),
    ghost: cn(
      "bg-transparent text-[var(--color-text)]",
      "hover:bg-[var(--color-hover)] hover:text-[var(--color-primary)]",
      "active:bg-[var(--color-hover)]/80",
      "focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2"
    ),
    destructive: cn(
      "bg-[var(--color-error)] text-white",
      "hover:bg-[var(--color-error)]/90 hover:shadow-lg hover:shadow-[var(--color-error)]/20",
      "active:bg-[var(--color-error)]/80",
      "focus:ring-2 focus:ring-[var(--color-error)] focus:ring-offset-2"
    ),
    rounded: cn(
      "bg-[var(--color-primary)] text-white rounded-full",
      "hover:bg-[var(--color-primary)]/90 hover:shadow-lg hover:shadow-[var(--color-primary)]/20",
      "active:bg-[var(--color-primary)]/80",
      "focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2"
    ),
  };

  const sizeStyles = {
    sm: cn(typography.body3, "px-3 py-1.5 gap-1"),
    md: cn(typography.body2, "px-4 py-2 gap-2"),
    lg: cn(typography.body1, "px-6 py-3 gap-2"),
  };

  const borderRadiusStyles = {
    sm: variant === "rounded" ? "rounded-full" : "rounded-sm",
    md: variant === "rounded" ? "rounded-full" : "rounded-md",
    lg: variant === "rounded" ? "rounded-full" : "rounded-lg",
  };

  return (
    <button
      type="button"
      onKeyDown={(e) => {
        if (e.key === " " || e.key === "Enter") {
          e.preventDefault();
          onClick?.();
        }
      }}
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        borderRadiusStyles[size],
        className
      )}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {Icon && <Icon className="w-4 h-4" />}
      {label || children}
    </button>
  );
};
