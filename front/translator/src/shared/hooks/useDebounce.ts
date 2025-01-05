import { useCallback, useRef } from "react";

export const useDebounce = (
  callback: (...args: any) => void,
  delay: number
) => {
  const debounceRef = useRef<number>();

  return useCallback(
    (...args: any) => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }

      debounceRef.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay]
  );
};
