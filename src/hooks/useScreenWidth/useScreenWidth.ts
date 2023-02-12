import { useState, useLayoutEffect } from 'react';

export const useScreenWidth = (): number => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useLayoutEffect(() => {
    const handleScreenResize = (): void => {
      const width = window.innerWidth;
      setScreenWidth(width);
    };

    window.addEventListener('resize', handleScreenResize);

    return () => removeEventListener('resize', handleScreenResize);
  }, []);

  return screenWidth;
};
