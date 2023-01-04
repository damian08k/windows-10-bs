import { Dispatch, SetStateAction } from 'react';

export type FocusConfig = {
  index: number;
  isFocus: boolean;
  setFocus: Dispatch<SetStateAction<number>>;
};
