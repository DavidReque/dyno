import { cn } from "@/lib/utils";
import { Dialog, Transition } from "@headlessui/react";
import { X } from "lucide-react";
import { Fragment } from "react";
import { Button } from "../Button/Button";

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

export const Modal = ({
  isOpen,
  onClose,
  title,
  description,
  children,
  size = "md",
  showCloseButton = true,
  className,
}: ModalProps) => {
  const sizeStyles = {
    sm: "max-w-md",
    md: "max-w-lg",
    lg: "max-w-2xl",
  };

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
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
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
                  "relative w-full bg-white rounded-xl shadow-2xl p-6",
                  sizeStyles[size],
                  className
                )}
              >
                {showCloseButton && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={onClose}
                    className="absolute right-4 top-4 p-1 text-neutral-500 hover:text-neutral-700"
                    aria-label="Close"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                )}

                <div className="space-y-4">
                  <Dialog.Title
                    as="h3"
                    className="text-xl font-semibold text-neutral-900"
                  >
                    {title}
                  </Dialog.Title>

                  {description && (
                    <Dialog.Description className="text-neutral-600">
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
