import React from "react";
import { cn } from "../../../lib/utils";
import { typography } from "../../../theme/typography";
import { getBorderColor } from "../../../lib";

export interface CardProps {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  variant?: "default";
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  className?: string;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  children,
  footer,
  icon: Icon,
  className,
  onClick,
}) => {
  const baseStyles = cn(
    "group rounded-xl overflow-hidden transition-all duration-300",
    "border",
    "shadow-sm hover:shadow-lg",
    className
  );

  return (
    <div
      className={baseStyles}
      onClick={onClick}
      style={{
        backgroundColor: "var(--color-background)",
        borderColor: getBorderColor("default"),
      }}
    >
      {/* Header */}
      {(title || Icon) && (
        <div
          className="px-4 py-4 border-b transition-colors duration-300 flex items-center gap-3"
          style={{
            borderColor: "var(--color-border)",
          }}
        >
          {Icon && (
            <Icon
              data-testid="card-icon"
              className="w-6 h-6 transition-transform group-hover:scale-110 group-hover:rotate-6"
              style={{
                color: "var(--color-primary)",
              }}
            />
          )}
          <div>
            {title && (
              <h3
                className={cn(
                  typography.h5,
                  "transition-colors group-hover:text-green-500"
                )}
                style={{
                  color: "var(--color-text)",
                }}
              >
                {title}
              </h3>
            )}
            {subtitle && (
              <p className={cn(typography.body2, typography.muted)}>
                {subtitle}
              </p>
            )}
          </div>
        </div>
      )}

      {/* Body */}
      <div
        className={cn("p-4 space-y-2 transition-colors", typography.body1)}
        style={{
          color: "var(--color-text)",
        }}
      >
        {children}
      </div>

      {/* Footer */}
      {footer && (
        <div
          className={cn(
            "px-4 py-3 border-t transition-colors",
            typography.body2,
            typography.muted
          )}
          style={{
            borderColor: "var(--color-border)",
            backgroundColor: "var(--color-hover)",
          }}
        >
          {footer}
        </div>
      )}
    </div>
  );
};
