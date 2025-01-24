import React from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CardProps {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  variant?: "default" | "ghost" | "outline";
  icon?: LucideIcon;
  className?: string;
  onClick?: () => void;
}

export const Card = ({
  title,
  subtitle,
  children,
  footer,
  variant = "default",
  icon: Icon,
  className,
  onClick,
}: CardProps) => {
  const baseStyles = cn(
    "group rounded-xl overflow-hidden transition-all duration-300",
    "bg-white",
    variant === "default" && "shadow-sm hover:shadow-md",
    variant === "ghost" && "hover:bg-neutral-100",
    variant === "outline" && "border border-neutral-200",
    className
  );

  const cardContent = (
    <>
      {/* Header */}
      {(title || Icon) && (
        <div className="px-4 py-4 border-b border-neutral-100 flex items-center gap-3">
          {Icon && (
            <Icon
              className="w-6 h-6 text-primary-500 cursor-pointer
                transition-transform group-hover:scale-110 
                group-hover:rotate-6"
            />
          )}
          <div>
            {title && (
              <h3
                className="text-lg font-medium text-neutral-800 
                transition-colors group-hover:text-primary-600"
              >
                {title}
              </h3>
            )}
            {subtitle && <p className="text-sm text-neutral-500">{subtitle}</p>}
          </div>
        </div>
      )}

      {/* Body */}
      <div className="p-4 space-y-2">{children}</div>

      {/* Footer */}
      {footer && (
        <div
          className="px-4 py-3 border-t border-neutral-100 
          bg-neutral-50"
        >
          {footer}
        </div>
      )}
    </>
  );

  return (
    <div className={baseStyles} onClick={onClick}>
      {cardContent}
    </div>
  );
};
