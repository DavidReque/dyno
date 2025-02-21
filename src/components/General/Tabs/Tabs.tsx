import React, { useState, useRef, KeyboardEvent } from "react";
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
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Handle keyboard navigation
  const handleKeyDown = (
    e: KeyboardEvent<HTMLButtonElement>,
    index: number
  ) => {
    const isLeftArrow = e.key === "ArrowLeft";
    const isRightArrow = e.key === "ArrowRight";

    if (!isLeftArrow && !isRightArrow) return;

    e.preventDefault();

    let newIndex = index;
    if (isLeftArrow) {
      newIndex = index === 0 ? tabs.length - 1 : index - 1;
    } else if (isRightArrow) {
      newIndex = index === tabs.length - 1 ? 0 : index + 1;
    }

    const newTab = tabs[newIndex];
    setActiveTab(newTab.id);
    tabRefs.current[newIndex]?.focus();
  };

  return (
    <div
      className={cn(
        "w-full p-4 rounded-lg bg-[#0D1B2A] text-white",
        className,
        poppins.className
      )}
    >
      {/* Tab list with ARIA roles */}
      <div
        role="tablist"
        aria-label="Content tabs"
        className="flex border-b border-gray-600 overflow-x-auto"
      >
        {tabs.map((tab, index) => (
          <button
            ref={(el) => {
              tabRefs.current[index] = el;
            }}
            role="tab"
            key={tab.id}
            id={`tab-${tab.id}`}
            aria-selected={activeTab === tab.id}
            aria-controls={`panel-${tab.id}`}
            tabIndex={activeTab === tab.id ? 0 : -1}
            onClick={() => setActiveTab(tab.id)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className={cn(
              "relative flex items-center px-4 py-2 text-sm whitespace-nowrap transition-colors duration-300",
              activeTab === tab.id
                ? "text-white font-semibold"
                : "text-gray-400"
            )}
          >
            {tab.icon && (
              <span className="mr-2" aria-hidden="true">
                {tab.icon}
              </span>
            )}
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

      {/* Tab panels with ARIA roles */}
      <div className="mt-4 p-4 bg-gray-800 rounded-lg relative overflow-hidden">
        <AnimatePresence mode="wait">
          {tabs.map(
            (tab) =>
              activeTab === tab.id && (
                <motion.div
                  key={tab.id}
                  role="tabpanel"
                  id={`panel-${tab.id}`}
                  aria-labelledby={`tab-${tab.id}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  {tab.content}
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
