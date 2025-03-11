import React from "react";
import { cn } from "../../../lib/utils";

export interface AvatarProps {
  /** URL de la imagen del avatar */
  src?: string;
  /** Texto alternativo */
  alt?: string;
  /** Tamaño del avatar: sm, md o lg */
  size?: "sm" | "md" | "lg";
  /** Texto a mostrar como fallback si no hay imagen */
  fallback?: string;
  /** Clases adicionales */
  className?: string;
}

const sizeClasses: Record<NonNullable<AvatarProps["size"]>, string> = {
  sm: "w-8 h-8",
  md: "w-12 h-12",
  lg: "w-16 h-16",
};

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  size = "md",
  fallback,
  className,
}) => {
  return (
    <div
      className={cn(
        "rounded-full overflow-hidden bg-gray-200 flex items-center justify-center",
        sizeClasses[size],
        className
      )}
    >
      {src ? (
        <img
          src={src}
          alt={alt || "Avatar"}
          className="object-cover w-full h-full"
        />
      ) : (
        <span className="text-gray-600 font-medium">
          {fallback || (alt ? alt[0] : "A")}
        </span>
      )}
    </div>
  );
};
