import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  variant?: "default" | "ghost" | "outline";
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  className?: string;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  children,
  footer,
  variant = "default",
  icon: Icon,
  className,
  onClick,
}) => {
  const baseStyles = cn(
    "group rounded-xl overflow-hidden transition-all duration-300",
    variant === "default" &&
      "bg-white dark:bg-neutral-900 shadow-sm hover:shadow-lg",
    variant === "ghost" &&
      "bg-transparent dark:bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-800",
    variant === "outline" &&
      "border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-900",
    className
  );

  return (
    <div className={baseStyles} onClick={onClick}>
      {/* Header */}
      {(title || Icon) && (
        <div
          className={cn(
            "px-4 py-4 border-b transition-colors duration-300 flex items-center gap-3",
            "border-neutral-200 dark:border-neutral-700"
          )}
        >
          {Icon && (
            <Icon
              data-testid="card-icon"
              className={cn(
                "w-6 h-6 transition-transform group-hover:scale-110 group-hover:rotate-6",
                variant === "ghost" ? "text-green-500" : "text-green-500"
              )}
            />
          )}
          <div>
            {title && (
              <h3
                className={cn(
                  "text-lg font-medium transition-colors group-hover:text-green-500",
                  variant === "ghost"
                    ? "text-green-500"
                    : "text-neutral-800 dark:text-neutral-100"
                )}
              >
                {title}
              </h3>
            )}
            {subtitle && (
              <p
                className={cn(
                  "text-sm",
                  variant === "ghost"
                    ? "text-gray-500"
                    : "text-neutral-500 dark:text-neutral-400"
                )}
              >
                {subtitle}
              </p>
            )}
          </div>
        </div>
      )}

      {/* Body */}
      <div
        className={cn(
          "p-4 space-y-2 transition-colors",
          variant === "ghost"
            ? "text-green-500"
            : "text-neutral-700 dark:text-neutral-300"
        )}
      >
        {children}
      </div>

      {/* Footer */}
      {footer && (
        <div
          className={cn(
            "px-4 py-3 border-t transition-colors",
            variant === "ghost"
              ? "border-white/30 bg-transparent text-gray-500"
              : "text-gray-400 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800"
          )}
        >
          {footer}
        </div>
      )}
    </div>
  );
};
