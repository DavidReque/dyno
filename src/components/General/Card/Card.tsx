import React from "react";
import { cn } from "@/lib/utils";
import { Colors } from "@/theme/tokens";

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
  const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const getBackgroundColor = () => {
    if (variant === "default") return isDark ? Colors.neutral900 : Colors.white;
    if (variant === "ghost") return Colors.transparent;
    if (variant === "outline") return isDark ? Colors.neutral900 : Colors.white;
    return Colors.white;
  };

  const getHoverBackgroundColor = () => {
    if (variant === "ghost") {
      return isDark ? Colors.neutral800 : Colors.neutral100;
    }
    return Colors.transparent;
  };

  const baseStyles = cn(
    "group rounded-xl overflow-hidden transition-all duration-300",
    variant === "default" && "shadow-sm hover:shadow-lg",
    variant === "outline" && "border",
    className
  );

  return (
    <div
      className={baseStyles}
      onClick={onClick}
      style={{
        backgroundColor: getBackgroundColor(),
        borderColor:
          variant === "outline"
            ? isDark
              ? Colors.neutral600
              : Colors.neutral300
            : undefined,
      }}
      onMouseEnter={(e) => {
        if (variant === "ghost") {
          e.currentTarget.style.backgroundColor = getHoverBackgroundColor();
        }
      }}
      onMouseLeave={(e) => {
        if (variant === "ghost") {
          e.currentTarget.style.backgroundColor = Colors.transparent;
        }
      }}
    >
      {/* Header */}
      {(title || Icon) && (
        <div
          className="px-4 py-4 border-b transition-colors duration-300 flex items-center gap-3"
          style={{
            borderColor: isDark ? Colors.neutral700 : Colors.neutral200,
          }}
        >
          {Icon && (
            <Icon
              data-testid="card-icon"
              className="w-6 h-6 transition-transform group-hover:scale-110 group-hover:rotate-6"
              style={{
                color: Colors.primary500,
              }}
            />
          )}
          <div>
            {title && (
              <h3
                className="text-lg font-medium transition-colors group-hover:text-green-500"
                style={{
                  color:
                    variant === "ghost"
                      ? Colors.primary500
                      : isDark
                      ? Colors.neutral100
                      : Colors.neutral800,
                }}
              >
                {title}
              </h3>
            )}
            {subtitle && (
              <p
                className="text-sm"
                style={{
                  color: isDark ? Colors.neutral400 : Colors.neutral500,
                }}
              >
                {subtitle}
              </p>
            )}
          </div>
        </div>
      )}

      {/* Body */}
      <div
        className="p-4 space-y-2 transition-colors"
        style={{
          color:
            variant === "ghost"
              ? Colors.primary500
              : isDark
              ? Colors.neutral300
              : Colors.neutral700,
        }}
      >
        {children}
      </div>

      {/* Footer */}
      {footer && (
        <div
          className="px-4 py-3 border-t transition-colors"
          style={{
            color: variant === "ghost" ? Colors.neutral500 : Colors.neutral400,
            borderColor: isDark ? Colors.neutral700 : Colors.neutral200,
            backgroundColor:
              variant === "ghost"
                ? Colors.transparent
                : isDark
                ? Colors.neutral800
                : Colors.neutral100,
          }}
        >
          {footer}
        </div>
      )}
    </div>
  );
};
