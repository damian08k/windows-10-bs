import { RefObject, useEffect } from 'react';

const useOutsideClick = <T extends HTMLElement>(
  ref: RefObject<T>,
  toggleVisibility: () => void,
): void => {
  const handleOutsideClick = (evt: Event): void => {
    if (ref?.current && !ref?.current.contains(evt.target as Node)) {
      toggleVisibility();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    document.addEventListener('visibilitychange', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
      document.removeEventListener('visibilitychange', handleOutsideClick);
    };
  }, [ref, handleOutsideClick]);
};

export default useOutsideClick;
