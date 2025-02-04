import { cn } from "@/lib/utils";
import React from "react";

export interface TypographyProps {
  /** HTML element to render */
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  /** Variant defines the text style regardless of the HTML element */
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
  /** Custom weight of the text */
  weight?: "regular" | "medium" | "semibold" | "bold" | "extrabold";
  /** Color variant */
  color?: "default" | "primary" | "secondary" | "success" | "error" | "warning";
  /** Optional additional className */
  className?: string;
  /** Content */
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
  const variantStyles = {
    display: "text-5xl leading-tight",
    h1: "scroll-m-20 text-4xl tracking-tight lg:text-5xl",
    h2: "scroll-m-20 border-b pb-2 text-3xl tracking-tight first:mt-0",
    h3: "scroll-m-20 text-2xl tracking-tight",
    h4: "scroll-m-20 text-xl tracking-tight",
    body1: "leading-7 [&:not(:first-child)]:mt-6",
    blockquote: "mt-6 border-l-2 pl-6 italic",
    caption: "text-xs leading-normal",
    code: "relative rounded bg-gray-500 px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
  };

  const weightStyles = {
    regular: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
    extrabold: "font-extrabold",
  };

  const colorStyles = {
    default: "text-neutral-900",
    primary: "text-white",
    secondary: "text-neutral-600",
    success: "text-green-600",
    error: "text-destructive-600",
    warning: "text-yellow-600",
  };

  return (
    <Component
      className={cn(
        variantStyles[variant],
        weightStyles[weight],
        colorStyles[color],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};
