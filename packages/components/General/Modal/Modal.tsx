import React from "react";
import { cn } from "@/lib/utils";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Button } from "../Button/Button";
import { sizeStyles } from "../../../theme/spacing";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  /** Puede ser un ReactNode o una función que reciba onClose y retorne un ReactNode */
  children?: React.ReactNode | ((onClose: () => void) => React.ReactNode);
  size?: "sm" | "md" | "lg";
  showCloseButton?: boolean;
  className?: string;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  children,
  size = "md",
  showCloseButton = true,
  className,
}) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className="fixed inset-0 backdrop-blur-sm"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-200"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-150"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className={cn(
                  "relative w-full shadow-2xl p-6 transition-all duration-300",
                  sizeStyles[size],
                  className
                )}
                style={{
                  backgroundColor: "var(--color-background)",
                  borderRadius: "1rem",
                  border: "1px solid var(--color-border)",
                }}
              >
                {showCloseButton && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={onClose}
                    className="absolute right-4 top-4 p-1"
                    style={{
                      color: "var(--color-text)",
                    }}
                    aria-label="Close"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  </Button>
                )}

                <div className="space-y-4">
                  <Dialog.Title
                    as="h3"
                    className="text-xl font-semibold"
                    style={{
                      color: "var(--color-text)",
                    }}
                  >
                    {title}
                  </Dialog.Title>

                  {description && (
                    <Dialog.Description
                      style={{
                        color: "var(--color-text)",
                        opacity: 0.8,
                      }}
                    >
                      {description}
                    </Dialog.Description>
                  )}

                  <div className="pt-4">
                    {typeof children === "function"
                      ? children(onClose)
                      : children}
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
