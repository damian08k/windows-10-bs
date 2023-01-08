import { RefObject, useEffect } from 'react';

export const useOutsideClick = <T extends HTMLElement>(
  ref: RefObject<T>,
  toggleVisibility: () => void,
): void => {
  useEffect(() => {
    const timeOfEffect = performance.now();

    const handleOutsideClick = (evt: Event): void => {
      if (timeOfEffect > evt.timeStamp) {
        return;
      }

      if (ref?.current && !ref?.current.contains(evt.target as Node)) {
        toggleVisibility();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('visibilitychange', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('visibilitychange', handleOutsideClick);
    };
  }, [ref, toggleVisibility]);
};
