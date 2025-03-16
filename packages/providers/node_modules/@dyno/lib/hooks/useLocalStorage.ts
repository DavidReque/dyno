import { useState } from "react";
import { storage } from "../storage/localStorage";

export function useLocalStorage<T>(key: string, initialValue: T) {
  // Estado para almacenar el valor actual
  const [storedValue, setStoredValue] = useState<T>(() => {
    const value = storage.get(key, initialValue);
    return value === null ? initialValue : value;
  });

  // Retornar una versión envuelta de la función setter que persiste
  // el nuevo valor en localStorage.
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      // Permitir que el valor sea una función para que tengamos la misma API que useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;

      // Guardar el estado
      setStoredValue(valueToStore);

      // Guardar en localStorage
      storage.set(key, valueToStore);
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  };

  return [storedValue, setValue] as const;
}
