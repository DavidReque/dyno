import React, { useState } from "react";
import { cn } from "@/lib/utils";

export interface SwitchProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onChange"> {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
}

export const Switch: React.FC<SwitchProps> = ({
  checked,
  onChange,
  className,
  ...props
}) => {
  const [internalChecked, setInternalChecked] = useState(false);
  const isChecked = typeof checked === "boolean" ? checked : internalChecked;

  const toggle = () => {
    const newVal = !isChecked;
    if (onChange) {
      onChange(newVal);
    }
    if (typeof checked !== "boolean") {
      setInternalChecked(newVal);
    }
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isChecked}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === " " || e.key === "Enter") {
          e.preventDefault();
          toggle();
        }
      }}
      onClick={toggle}
      className={cn(
        "relative inline-flex h-6 w-11 items-center cursor-pointer rounded-full transition-colors",
        isChecked ? "bg-green-500" : "bg-gray-200",
        className
      )}
      {...props}
    >
      <span
        className={cn(
          "absolute h-4 w-4 transform rounded-full bg-white transition-transform shadow-sm",
          isChecked ? "translate-x-6" : "translate-x-1"
        )}
      />
    </button>
  );
};
