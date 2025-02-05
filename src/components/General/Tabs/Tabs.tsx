import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });

export interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({ tabs, className }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id);

  return (
    <div
      className={cn(
        "w-full p-4 rounded-lg bg-[#0D1B2A] text-white",
        className,
        poppins
      )}
    >
      {/* Encabezado de pestañas */}
      <div className="flex border-b border-gray-600 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "relative flex items-center px-4 py-2 text-sm whitespace-nowrap transition-colors duration-300",
              activeTab === tab.id
                ? "text-white font-semibold"
                : "text-gray-400"
            )}
          >
            {tab.icon && <span className="mr-2">{tab.icon}</span>}
            {tab.label}
            {activeTab === tab.id && (
              <motion.span
                layoutId="underline"
                className="absolute bottom-0 left-0 w-full h-[2px] bg-green-400 rounded-full"
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Contenido de la pestaña seleccionada con animación */}
      <div className="mt-4 p-4 bg-gray-800 rounded-lg relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {tabs.find((tab) => tab.id === activeTab)?.content}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
