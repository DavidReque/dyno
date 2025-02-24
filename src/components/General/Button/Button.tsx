import { Radius, Spacing } from "@/theme/spacing";
import { Colors } from "@/theme/tokens";
import { Typography } from "@/theme/typography";
import React, { useState } from "react";

export interface ButtonProps {
  variant?: "primary" | "secondary" | "ghost" | "destructive" | "rounded";
  size?: "sm" | "md" | "lg";
  label?: string;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  onClick?: () => void;
  className?: string;
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
  const [isHover, setIsHover] = useState(false);

  const baseStyles: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: Typography.fontWeightRegular,
    transition: "all 150ms ease-in-out",
    opacity: disabled ? 0.5 : 1,
    pointerEvents: disabled ? "none" : "auto",
    cursor: "pointer",
    border: "none",
    outline: "none",
    userSelect: "none",
  };

  const variantStyles = {
    primary: {
      normalBg: Colors.primary400,
      hoverBg: Colors.primary600,
      textColor: Colors.white,
    },
    secondary: {
      normalBg: Colors.secondary400,
      hoverBg: Colors.secondary600,
      textColor: Colors.white,
    },
    ghost: {
      normalBg: "transparent",
      hoverBg: Colors.neutral100,
      textColor: Colors.neutral700,
    },
    destructive: {
      normalBg: Colors.destructive500,
      hoverBg: Colors.destructive600,
      textColor: Colors.white,
    },
    rounded: {
      normalBg: Colors.primary400,
      hoverBg: Colors.primary600,
      textColor: Colors.white,
      isRounded: true,
    },
  };

  const sizeStyles = {
    sm: {
      fontSize: Typography.fontSizeSm,
      padding: `${Spacing.xs} ${Spacing.sm}`,
      borderRadius: variant === "rounded" ? Radius.full : Radius.sm,
      gap: Spacing.xs,
    },
    md: {
      fontSize: Typography.fontSizeSm,
      padding: `${Spacing.sm} ${Spacing.md}`,
      borderRadius: variant === "rounded" ? Radius.full : Radius.base,
      gap: Spacing.sm,
    },
    lg: {
      fontSize: Typography.fontSizeMd,
      padding: `${Spacing.md} ${Spacing.lg}`,
      borderRadius: variant === "rounded" ? Radius.full : Radius.base,
      gap: Spacing.sm,
    },
  };

  const config = variantStyles[variant];
  const sizeConfig = sizeStyles[size];

  const backgroundColor = isHover ? config.hoverBg : config.normalBg;

  const finalStyle: React.CSSProperties = {
    ...baseStyles,
    ...sizeConfig,
    backgroundColor,
    color: config.textColor,
    borderRadius: "isRounded" in config ? Radius.full : sizeConfig.borderRadius,
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
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      style={finalStyle}
      className={className}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {Icon && <Icon />}
      {label || children}
    </button>
  );
};
