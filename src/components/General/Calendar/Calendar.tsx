import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export interface CalendarProps {
  /** Clases adicionales para el contenedor */
  className?: string;
  /** Callback que recibe la fecha seleccionada */
  onDateSelect?: (date: Date) => void;
}

export const Calendar: React.FC<CalendarProps> = ({
  className,
  onDateSelect,
}) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay(); // 0 = Sunday

  // Relleno para los días previos al primer día del mes
  const blanks = Array.from({ length: firstDay }, (_, i) => i);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const goToPreviousMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const handleDateClick = (day: number) => {
    const selected = new Date(year, month, day);
    if (onDateSelect) {
      onDateSelect(selected);
    }
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div
      className={cn(
        "w-full max-w-md bg-white rounded-lg shadow p-4",
        className
      )}
    >
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={goToPreviousMonth}
          className="text-gray-600 hover:text-gray-800 focus:outline-none"
        >
          &lt;
        </button>
        <h3 className="text-lg font-medium text-gray-800">
          {monthNames[month]} {year}
        </h3>
        <button
          onClick={goToNextMonth}
          className="text-gray-600 hover:text-gray-800 focus:outline-none"
        >
          &gt;
        </button>
      </div>
      {/* Cabecera de días de la semana */}
      <div className="grid grid-cols-7 gap-1 text-center text-sm">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="font-semibold text-gray-600">
            {day}
          </div>
        ))}
      </div>
      {/* Contenedor con altura fija para evitar que se muevan los botones */}
      <div className="relative min-h-[150px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${year}-${month}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="grid grid-cols-7 gap-1 mt-1"
          >
            {blanks.map((_, i) => (
              <div key={`blank-${i}`} className="h-8"></div>
            ))}
            {days.map((day) => (
              <button
                key={day}
                onClick={() => handleDateClick(day)}
                className="h-8 flex items-center justify-center rounded hover:bg-green-100 transition-colors duration-200"
              >
                {day}
              </button>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
