import { RefObject, useCallback, useEffect } from 'react';

import { FocusConfig } from 'types/hooks/focusConfig.type';

type ReturnType = () => void;

export const useElementFocus = (
  focusConfig: FocusConfig,
  ref: RefObject<HTMLButtonElement>,
): ReturnType => {
  const { index, isFocus, setFocus } = focusConfig;

  useEffect(() => {
    if (isFocus) {
      ref?.current?.focus();
    }
  }, [isFocus]);

  const handleElementFocus = useCallback(() => {
    setFocus(index);
  }, [index, setFocus]);

  return handleElementFocus;
};
