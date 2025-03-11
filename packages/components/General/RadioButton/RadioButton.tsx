import React, { useState } from "react";
import { cn } from "../../../lib/utils";

interface BaseProps {
  label?: string;
  name?: string;
  disabled?: boolean;
  className?: string;
}

interface RadioButtonProps extends BaseProps {
  value: string;
  defaultChecked?: boolean;
  onChange?: (value: string) => void;
}

export const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  name,
  value,
  defaultChecked = false,
  disabled = false,
  className,
  onChange,
}) => {
  const [isChecked, setIsChecked] = useState(defaultChecked);

  const handleChange = () => {
    setIsChecked(true);
    onChange?.(value);
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
        type="radio"
        name={name}
        value={value}
        checked={isChecked}
        disabled={disabled}
        onChange={handleChange}
        className={cn(
          "w-4 h-4 rounded-full border border-neutral-300 bg-white text-primary-500 focus:ring-2 focus:ring-primary-500 focus:ring-offset-1 focus:ring-offset-white",
          disabled && "pointer-events-none"
        )}
      />
      {label && <span className="text-sm text-neutral-800">{label}</span>}
    </label>
  );
};
