import { mergeClasses } from 'utils/mergeClasses';

import { ReactComponent as CloseIcon } from 'assets/icons/close.svg';

import classes from './ActionsBar.module.css';

export const ActionsBar = () => {
  return (
    <div className={classes.root}>
      <button
        className={mergeClasses(classes.actionButton, classes.minimalize)}
        aria-label="Minimalzie window"
      />
      <button
        className={mergeClasses(classes.actionButton, classes.expand)}
        aria-label="Expand window"
      />
      <button
        className={mergeClasses(classes.actionButton, classes.close)}
        aria-label="Close window"
      >
        <CloseIcon className={classes.closeIcon} />
      </button>
    </div>
  );
};
