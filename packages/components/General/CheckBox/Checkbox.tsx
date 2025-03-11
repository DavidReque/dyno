import React, { useState } from "react";
import { cn } from "../../../lib/utils";

interface BaseProps {
  label?: string;
  name?: string;
  disabled?: boolean;
  className?: string;
}

// Checkbox Component
interface CheckboxProps extends BaseProps {
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  name,
  defaultChecked = false,
  disabled = false,
  className,
  onChange,
}) => {
  const [isChecked, setIsChecked] = useState(defaultChecked);

  const handleChange = (checked: boolean) => {
    setIsChecked(checked);
    onChange?.(checked);
  };

  return (
    <label
      className={cn(
        "flex items-center gap-2 cursor-pointer",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      <input
        type="checkbox"
        name={name}
        checked={isChecked}
        disabled={disabled}
        onChange={(e) => handleChange(e.target.checked)}
        className={cn(
          "w-4 h-4 rounded border border-neutral-300 bg-white text-primary-500 focus:ring-2 focus:ring-primary-500 focus:ring-offset-1 focus:ring-offset-white",
          disabled && "pointer-events-none"
        )}
      />
      {label && <span className="text-sm text-neutral-800">{label}</span>}
    </label>
  );
};
