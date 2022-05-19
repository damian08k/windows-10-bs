import { RefObject, useEffect } from 'react';

const useOutsideClick = <T extends HTMLElement>(
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

    document.addEventListener('click', handleOutsideClick);
    document.addEventListener('visibilitychange', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
      document.removeEventListener('visibilitychange', handleOutsideClick);
    };
  }, [ref, toggleVisibility]);
};

export default useOutsideClick;
