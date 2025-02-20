import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown, LucideIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
  selectedValue,
  placeholder = "Select an option",
  disabled = false,
  icon: Icon = ChevronDown,
  className,
  onChange,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

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

  const selectedOption = options.find((opt) => opt.value === selectedValue);

  const handleSelect = (value: string) => {
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

  const baseStyles =
    "appearance-none w-full focus:outline-none focus:ring-2 transition-all duration-300 rounded-lg border";
  const variantStyles = {
    primary:
      "bg-white dark:bg-neutral-800 border-green-300 text-green-900 dark:text-green-100 focus:ring-green-500 focus:border-green-500 hover:border-green-400",
    secondary:
      "bg-white dark:bg-neutral-800 border-primary-500 text-gray-300 dark:text-gray-300 focus:ring-primary-500 focus:border-primary-500 hover:border-primary-500",
    ghost:
      "bg-transparent border-transparent text-neutral-800 dark:text-neutral-500 hover:bg-neutral-50 focus:ring-neutral-400",
    destructive:
      "bg-white dark:bg-neutral-800 border-red-300 text-red-700 dark:text-red-300 focus:ring-red-500 focus:border-red-500 hover:border-red-400",
  };
  const sizeStyles = {
    sm: "px-2.5 py-1.5 text-sm",
    md: "px-3 py-2.5 text-base",
    lg: "px-4 py-3.5 text-lg",
  };
  const iconColors = {
    primary: "text-green-500",
    secondary: "text-neutral-500",
    ghost: "text-neutral-500",
    destructive: "text-red-500",
  };

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
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          disabled &&
            "opacity-60 cursor-not-allowed bg-neutral-100 dark:bg-neutral-700",
          "pr-10 w-full text-left"
        )}
        {...props}
      >
        {selectedOption ? selectedOption.label : placeholder}
        <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
          <Icon
            className={cn(
              "w-5 h-5 transition-transform duration-200",
              iconColors[variant],
              disabled && "text-neutral-400",
              isOpen && "rotate-180"
            )}
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
            className="absolute mt-1 w-full rounded-lg shadow-lg bg-white dark:bg-neutral-800 z-10"
            role="listbox"
            id="select-dropdown"
          >
            <ul className="max-h-60 overflow-auto">
              {options.map((option, index) => (
                <li
                  key={option.value}
                  role="option"
                  aria-selected={selectedValue === option.value}
                  tabIndex={-1}
                  onClick={() => handleSelect(option.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handleSelect(option.value);
                    }
                  }}
                  className={cn(
                    "cursor-pointer px-3 py-2 text-gray-300 hover:bg-neutral-100 rounded-lg dark:hover:bg-neutral-700 transition-colors focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-700",
                    variant === "destructive" &&
                      "text-red-300 dark:text-red-300",
                    selectedValue === option.value &&
                      "bg-neutral-300 dark:bg-neutral-600",
                    activeIndex === index &&
                      "bg-neutral-100 dark:bg-neutral-700"
                  )}
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
