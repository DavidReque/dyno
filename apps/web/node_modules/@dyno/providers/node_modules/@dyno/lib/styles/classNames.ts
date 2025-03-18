export function cn(
  ...classes: (string | undefined | null | boolean)[]
): string {
  return classes.filter(Boolean).join(" ");
}

export const getBorderColor = (variant: string) => {
  if (variant === "outline") {
    return "var(--color-border)";
  } else if (variant === "default") {
    return "var(--color-border)";
  }
  return undefined;
};

export const getFocusRingColor = (variant: string) => {
  switch (variant) {
    case "destructive":
      return "var(--color-error)";
    case "secondary":
      return "var(--color-secondary)";
    case "primary":
    case "ghost":
    default:
      return "var(--color-focus)";
  }
};
