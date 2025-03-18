import React, { useState, useRef, useEffect } from "react";
import { cn } from "../../../lib/utils";
import { ChevronDown, LucideIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getFocusRingColor } from "../../../lib";

export interface SelectProps {
  variant?: "primary" | "secondary" | "ghost" | "destructive";
  size?: "sm" | "md" | "lg";
  options: { value: string; label: string }[];
  selectedValue?: string;
  placeholder?: string;
  disabled?: boolean;
  icon?: LucideIcon;
  className?: string;
  onChange?: (value: string) => void;
}

export const Select: React.FC<SelectProps> = ({
  variant = "primary",
  size = "md",
  options,
  selectedValue: propSelectedValue,
  placeholder = "Select an option",
  disabled = false,
  icon: Icon = ChevronDown,
  className,
  onChange,
  ...props
}) => {
  // Mantener el estado interno
  const [internalSelectedValue, setInternalSelectedValue] = useState<
    string | undefined
  >(propSelectedValue);
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Actualizar el estado interno cuando cambia la prop
  useEffect(() => {
    setInternalSelectedValue(propSelectedValue);
  }, [propSelectedValue]);

  useEffect(() => {
    if (isOpen && activeIndex >= 0) {
      const listItems = document.querySelectorAll('[role="option"]');
      (listItems[activeIndex] as HTMLElement)?.focus();
    }
  }, [activeIndex, isOpen]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setActiveIndex(-1);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Usar el valor interno para mostrar la opción seleccionada
  const selectedOption = options.find(
    (opt) => opt.value === internalSelectedValue
  );

  const handleSelect = (value: string) => {
    // Actualizar el estado interno
    setInternalSelectedValue(value);
    // Notificar al componente padre
    onChange?.(value);
    setIsOpen(false);
    setActiveIndex(-1);
    buttonRef.current?.focus();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    switch (event.key) {
      case "Enter":
      case " ":
        event.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
          setActiveIndex(0);
        } else if (activeIndex >= 0) {
          handleSelect(options[activeIndex].value);
        }
        break;
      case "ArrowDown":
        event.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
          setActiveIndex(0);
        } else {
          setActiveIndex((prev) => (prev + 1) % options.length);
        }
        break;
      case "ArrowUp":
        event.preventDefault();
        if (isOpen) {
          setActiveIndex(
            (prev) => (prev - 1 + options.length) % options.length
          );
        }
        break;
      case "Escape":
        if (isOpen) {
          event.preventDefault();
          setIsOpen(false);
          setActiveIndex(-1);
          buttonRef.current?.focus();
        }
        break;
      case "Tab":
        if (isOpen) {
          event.preventDefault();
          setIsOpen(false);
          setActiveIndex(-1);
        }
        break;
    }
  };

  const sizeStyles = {
    sm: "px-2.5 py-1.5 text-sm",
    md: "px-3 py-2.5 text-base",
    lg: "px-4 py-3.5 text-lg",
  };

  const getBackgroundColor = () => {
    if (disabled) return "var(--color-disabled)";
    return variant === "ghost" ? "transparent" : "var(--color-background)";
  };

  const getHoverBackgroundColor = () => {
    return variant === "ghost" ? "var(--color-hover)" : "transparent";
  };

  const getBorderColor = () => {
    if (disabled) return "var(--color-disabled)";
    switch (variant) {
      case "primary":
        return "var(--color-primary)";
      case "secondary":
        return "var(--color-secondary)";
      case "destructive":
        return "var(--color-error)";
      case "ghost":
        return "transparent";
      default:
        return "var(--color-border)";
    }
  };

  const getBorderWidth = () => {
    return "1px";
  };

  const getOpacity = () => {
    if (disabled) return 0.5;
    return variant === "ghost" ? 0.8 : 1;
  };

  const getTextColor = () => {
    if (disabled) return "var(--color-disabled)";
    switch (variant) {
      case "primary":
        return "var(--color-primary)";
      case "secondary":
      case "ghost":
        return "var(--color-text)";
      case "destructive":
        return "var(--color-error)";
      default:
        return "var(--color-text)";
    }
  };

  const baseStyles = cn(
    "appearance-none w-full transition-all duration-300 rounded-lg",
    sizeStyles[size],
    "pr-10 w-full text-left",
    "focus:outline-none",
    className
  );

  return (
    <div
      ref={containerRef}
      className={cn("relative w-64", className)}
      onKeyDown={handleKeyDown}
      role="combobox"
      aria-expanded={isOpen}
      aria-haspopup="listbox"
      aria-controls="select-dropdown"
    >
      <button
        ref={buttonRef}
        type="button"
        disabled={disabled}
        onClick={() => !disabled && setIsOpen((prev) => !prev)}
        className={baseStyles}
        style={{
          backgroundColor: getBackgroundColor(),
          borderColor: getBorderColor(),
          borderWidth: getBorderWidth(),
          borderStyle: "solid",
          color: getTextColor(),
          cursor: disabled ? "not-allowed" : "pointer",
          opacity: getOpacity(),
          boxShadow: isOpen
            ? `0 0 0 2px ${getFocusRingColor(variant)}`
            : "none",
        }}
        onFocus={(e) => {
          e.currentTarget.style.boxShadow = `0 0 0 2px ${getFocusRingColor(
            variant
          )}`;
        }}
        onBlur={(e) => {
          if (!isOpen) {
            e.currentTarget.style.boxShadow = "none";
          }
        }}
        onMouseEnter={(e) => {
          if (variant === "ghost" && !disabled) {
            e.currentTarget.style.backgroundColor = getHoverBackgroundColor();
            e.currentTarget.style.opacity = "1";
          }
        }}
        onMouseLeave={(e) => {
          if (variant === "ghost" && !disabled) {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.opacity = "0.8";
          }
        }}
        {...props}
      >
        {selectedOption ? selectedOption.label : placeholder}
        <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
          <Icon
            className={cn(
              "w-5 h-5 transition-transform duration-200",
              isOpen && "rotate-180"
            )}
            style={{
              color: disabled ? "var(--color-disabled)" : getBorderColor(),
              opacity: getOpacity(),
            }}
          />
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -5 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -5 }}
            transition={{ duration: 0.2 }}
            className="absolute mt-1 w-full rounded-lg shadow-lg z-10"
            style={{
              backgroundColor: "var(--color-background)",
              border: "1px solid var(--color-border)",
            }}
            role="listbox"
            id="select-dropdown"
          >
            <ul className="max-h-60 overflow-auto">
              {options.map((option, index) => (
                <li
                  key={option.value}
                  role="option"
                  aria-selected={internalSelectedValue === option.value}
                  tabIndex={-1}
                  onClick={() => handleSelect(option.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handleSelect(option.value);
                    }
                  }}
                  className="cursor-pointer px-3 py-2 rounded-lg transition-colors focus:outline-none"
                  style={{
                    backgroundColor:
                      internalSelectedValue === option.value ||
                      activeIndex === index
                        ? "var(--color-hover)"
                        : "transparent",
                    color: "var(--color-text)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "var(--color-hover)";
                  }}
                  onMouseLeave={(e) => {
                    if (
                      internalSelectedValue !== option.value &&
                      activeIndex !== index
                    ) {
                      e.currentTarget.style.backgroundColor = "transparent";
                    }
                  }}
                >
                  {option.label}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
