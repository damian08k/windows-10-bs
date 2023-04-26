import { FC, MouseEvent, PropsWithChildren } from 'react';

import classes from './ExplorerButton.module.css';

type Props = {
  onClick?: (evt?: MouseEvent<HTMLButtonElement>) => void;
  tooltip?: string;
} & PropsWithChildren;

export const ExplorerButton: FC<Props> = ({ children, onClick, tooltip }) => {
  return (
    <button className={classes.root} onClick={onClick} title={tooltip}>
      {children}
    </button>
  );
};
