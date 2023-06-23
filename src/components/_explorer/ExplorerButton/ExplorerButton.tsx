import { MouseEvent, PropsWithChildren } from 'react';

import classes from './ExplorerButton.module.css';

type Props = {
  onClick?: (evt?: MouseEvent<HTMLButtonElement>) => void;
  tooltip?: string;
  ariaLabel?: string;
  disabled?: boolean;
} & PropsWithChildren;

export const ExplorerButton = ({ children, onClick, tooltip, ariaLabel, disabled }: Props) => {
  return (
    <button
      className={classes.root}
      onClick={onClick}
      title={tooltip}
      aria-label={ariaLabel}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
