import React from "react";
import { cn } from "@/lib/utils";
import { Spacing } from "../../../theme/spacing";

export interface TypographyProps {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  variant?:
    | "display"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "body1"
    | "caption"
    | "code"
    | "blockquote";
  weight?: "regular" | "medium" | "semibold" | "bold" | "extrabold";
  color?: "default" | "primary" | "secondary" | "success" | "error" | "warning";
  className?: string;
  children: React.ReactNode;
}

export const Typography = ({
  as: Component = "p",
  variant = "body1",
  weight = "regular",
  color = "default",
  className,
  children,
  ...props
}: TypographyProps) => {
  const variantClasses = {
    display: "text-5xl leading-tight",
    h1: "scroll-m-20 text-4xl tracking-tight lg:text-5xl",
    h2: "scroll-m-20 border-b pb-2 text-3xl tracking-tight first:mt-0",
    h3: "scroll-m-20 text-2xl tracking-tight",
    h4: "scroll-m-20 text-xl tracking-tight",
    body1: "leading-7",
    blockquote: "border-l-2 pl-6 italic",
    caption: "text-xs leading-normal",
    code: "relative rounded bg-gray-500 px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
  };

  const spacingInlineStyle: React.CSSProperties = {};
  if (variant === "body1") {
    spacingInlineStyle.marginTop = Spacing.md; // ~16px
  }

  // Definimos el mapeo de pesos
  const weightStyles = {
    regular: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
    extrabold: "font-extrabold",
  };

  // Mapeo de colores
  const colorStyles = {
    default: "text-neutral-900",
    primary: "text-white",
    secondary: "text-neutral-600",
    success: "text-green-600",
    error: "text-red-600",
    warning: "text-yellow-600",
  };

  return (
    <Component
      className={cn(
        variantClasses[variant],
        weightStyles[weight],
        colorStyles[color],
        className
      )}
      style={spacingInlineStyle}
      {...props}
    >
      {children}
    </Component>
  );
};
