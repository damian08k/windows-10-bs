import { mergeClasses } from 'utils/mergeClasses';

import { ReactComponent as CloseIcon } from 'assets/icons/close.svg';

import classes from './ActionsBar.module.css';

export const ActionsBar = () => {
  return (
    <div className={classes.root}>
      <button className={mergeClasses(classes.actionButton, classes.minimalize)} />
      <button className={mergeClasses(classes.actionButton, classes.expand)} />
      <button className={mergeClasses(classes.actionButton, classes.close)}>
        <CloseIcon className={classes.closeIcon} />
      </button>
    </div>
  );
};
