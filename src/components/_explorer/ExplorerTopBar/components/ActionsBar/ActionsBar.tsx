import { useDispatch } from 'react-redux';

import { explorerActions } from 'store/slices/explorer.slice';

import { SYSTEM_WINDOW } from 'src/testIds';

import { mergeClasses } from 'utils/mergeClasses';

import { ReactComponent as CloseIcon } from 'assets/icons/close.svg';

import classes from './ActionsBar.module.css';

export const ActionsBar = () => {
  const dispatch = useDispatch();

  const handleCloseWindow = () => {
    dispatch(explorerActions.toggleExplorerVisibility(false));
  };

  return (
    <div className={classes.root}>
      <button
        className={mergeClasses(classes.actionButton, classes.minimalize)}
        aria-label="Minimalize window"
        data-testid={SYSTEM_WINDOW.ACTIONS.MINIMALIZE}
      />
      <button
        className={mergeClasses(classes.actionButton, classes.expand)}
        aria-label="Expand window"
        data-testid={SYSTEM_WINDOW.ACTIONS.EXPAND}
      />
      <button
        className={mergeClasses(classes.actionButton, classes.close)}
        aria-label="Close window"
        onClick={handleCloseWindow}
        data-testid={SYSTEM_WINDOW.ACTIONS.CLOSE}
      >
        <CloseIcon className={classes.closeIcon} />
      </button>
    </div>
  );
};
