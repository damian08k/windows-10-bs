import { MouseEvent, PropsWithChildren } from 'react';

import classes from './ExplorerButton.module.css';

type Props = {
  onClick?: (evt?: MouseEvent<HTMLButtonElement>) => void;
  tooltip?: string;
  ariaLabel?: string;
} & PropsWithChildren;

export const ExplorerButton = ({ children, onClick, tooltip, ariaLabel }: Props) => {
  return (
    <button className={classes.root} onClick={onClick} title={tooltip} aria-label={ariaLabel}>
      {children}
    </button>
  );
};
