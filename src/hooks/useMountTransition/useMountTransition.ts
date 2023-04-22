import { useState, useEffect } from 'react';

export const useMountTransition = (isMounted: boolean, delay: number): boolean => {
  const [hasTransitionedIn, setHasTransitionedIn] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timer;

    if (isMounted && !hasTransitionedIn) {
      setHasTransitionedIn(true);
    } else if (!isMounted && hasTransitionedIn) {
      timeoutId = setTimeout(() => setHasTransitionedIn(false), delay);
    }

    return () => clearTimeout(timeoutId);
  }, [delay, isMounted, hasTransitionedIn]);

  return hasTransitionedIn;
};
