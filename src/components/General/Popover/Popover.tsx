import React from "react";
import { Popover as HeadlessPopover, Transition } from "@headlessui/react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

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
      <HeadlessPopover.Button className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 focus:outline-none transition-colors duration-300">
        {buttonContent}
        <ChevronDown className="ml-2 w-4 h-4" />
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
            "absolute z-10 mt-2 w-64 bg-white rounded-md shadow-lg p-4",
            panelClassName
          )}
        >
          {panelContent}
        </HeadlessPopover.Panel>
      </Transition>
    </HeadlessPopover>
  );
};
