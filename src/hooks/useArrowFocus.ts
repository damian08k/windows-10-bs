import { useCallback, useState, useEffect, RefObject, Dispatch, SetStateAction } from 'react';

type ReturnType = [number, Dispatch<SetStateAction<number>>];

export const useArrowFocus = <T extends HTMLElement>(
  size: number,
  containerRef: RefObject<T>,
  elementsInRow: number,
  initialState = 0,
): ReturnType => {
  const [currentFocus, setCurrentFocus] = useState(initialState);

  useEffect(() => {
    if (initialState > -1) {
      setCurrentFocus(initialState);
    }
  }, [initialState]);

  console.log(currentFocus);
  const handleKeyDown = useCallback(
    (evt: KeyboardEvent) => {
      const { key, target } = evt;

      if (containerRef && containerRef.current) {
        const containerChilds = [...containerRef.current.childNodes];
        const isFocusedElementInContainer = containerChilds.includes(target as ChildNode);

        if (isFocusedElementInContainer) {
          switch (key) {
            case 'ArrowRight':
              evt.preventDefault();
              setCurrentFocus(currentFocus === size - 1 ? 0 : currentFocus + 1);
              break;
            case 'ArrowLeft':
              evt.preventDefault();
              setCurrentFocus(currentFocus === 0 ? size - 1 : currentFocus - 1);
              break;
            case 'ArrowDown':
              evt.preventDefault();
              setCurrentFocus(
                currentFocus === size - elementsInRow ? 0 : currentFocus + elementsInRow,
              );
              break;
            case 'ArrowUp':
              evt.preventDefault();
              setCurrentFocus(
                currentFocus === 0 ? size - elementsInRow : currentFocus - elementsInRow,
              );
              break;
          }
        }
      }
    },
    [size, currentFocus, setCurrentFocus],
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return [currentFocus, setCurrentFocus];
};
