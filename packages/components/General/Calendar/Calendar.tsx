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

  // Estilos que usan las variables CSS
  const calendarStyles = {
    background: "var(--color-background)",
    color: "var(--color-text)",
    border: "1px solid var(--color-border)",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  const buttonStyles = {
    color: "var(--color-text)",
    cursor: "pointer",
    background: "transparent",
    border: "none",
  };

  const dayHeaderStyles = {
    color: "var(--color-placeholder)",
    fontWeight: 600,
  };

  const dayButtonStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "2rem",
    width: "100%",
    borderRadius: "0.25rem",
    background: "transparent",
    border: "none",
    color: "var(--color-text)",
    cursor: "pointer",
    transition: "background-color 0.2s",
  };

  const dayButtonHoverStyles = {
    backgroundColor: "var(--color-hover)",
  };

  return (
    <div
      className={cn("w-full max-w-md rounded-lg p-4", className)}
      style={calendarStyles}
    >
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={goToPreviousMonth}
          style={buttonStyles}
          className="focus:outline-none"
        >
          &lt;
        </button>
        <h3
          className="text-lg font-medium"
          style={{ color: "var(--color-text)" }}
        >
          {monthNames[month]} {year}
        </h3>
        <button
          onClick={goToNextMonth}
          style={buttonStyles}
          className="focus:outline-none"
        >
          &gt;
        </button>
      </div>
      {/* Cabecera de días de la semana */}
      <div className="grid grid-cols-7 gap-1 text-center text-sm">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} style={dayHeaderStyles}>
            {day}
          </div>
        ))}
      </div>
      {/* Contenedor con altura fija para evitar que se muevan los botones */}
      <div
        className="relative min-h-[150px]"
        data-testid="calendar-grid-container"
      >
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
                style={dayButtonStyles}
                className="hover-effect"
                onMouseOver={(e) => {
                  Object.assign(e.currentTarget.style, dayButtonHoverStyles);
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
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
