import { ReactNode } from "react";

export interface BaseProps {
  className?: string;
  children?: ReactNode;
}

export interface VariantProps {
  variant?: "primary" | "secondary" | "success" | "error" | "warning" | "info";
}

export interface SizeProps {
  size?: "sm" | "md" | "lg";
}

export interface DisabledProps {
  disabled?: boolean;
}

export interface LoadingProps {
  loading?: boolean;
}
