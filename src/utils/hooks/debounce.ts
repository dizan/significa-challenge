import { useRef } from 'react';

export function useDebounce(delay: number): (request: () => Promise<any>) => void {
  const timeout = useRef(null);

  const debounceRequest = (request: () => Promise<any>) => {
    if (timeout.current) {
      clearTimeout(timeout.current);
      timeout.current = setTimeout(() => {
        request();
      }, delay);
    } else {
      timeout.current = setTimeout(() => {
        request();
      }, delay);
    }
  };

  return debounceRequest;
}
