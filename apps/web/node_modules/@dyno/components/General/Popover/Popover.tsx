import React from "react";
import { Popover as HeadlessPopover, Transition } from "@headlessui/react";
import { cn } from "../../../lib/utils";

export interface PopoverProps {
  /** Contenido que se muestra en el botón que dispara el popover */
  buttonContent: React.ReactNode;
  /** Contenido que se muestra dentro del panel del popover */
  panelContent: React.ReactNode;
  /** Clases adicionales para el panel del popover */
  panelClassName?: string;
  /** Clases adicionales para el contenedor general */
  className?: string;
}

export const Popover: React.FC<PopoverProps> = ({
  buttonContent,
  panelContent,
  panelClassName,
  className,
}) => {
  return (
    <HeadlessPopover className={cn("relative", className)}>
      <HeadlessPopover.Button className="inline-flex items-center px-4 py-2 bg-[var(--color-popover-button-bg)] text-[var(--color-popover-button-text)] rounded-md hover:bg-[var(--color-popover-button-hover)] focus:outline-none transition-colors duration-300">
        {buttonContent}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="ml-2 w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </HeadlessPopover.Button>
      <Transition
        as={React.Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <HeadlessPopover.Panel
          className={cn(
            "absolute z-10 mt-2 w-64 bg-[var(--color-popover-panel-bg)] rounded-md shadow-lg p-4 text-[var(--color-text)] color-text-[var(--color-text)]",
            panelClassName
          )}
        >
          {panelContent}
        </HeadlessPopover.Panel>
      </Transition>
    </HeadlessPopover>
  );
};

export default Popover;
