import { useAppDispatch } from 'store/hooks';
import { explorerActions } from 'store/slices/explorer.slice';

import { ReactComponent as FileExplorerIcon } from 'assets/icons/file-explorer.svg';

import classes from './FileExplorerSwitch.module.css';

export const FileExplorerSwitch = () => {
  const dispatch = useAppDispatch();

  const handleToggleExplorerVisibility = () => {
    dispatch(explorerActions.toggleExplorerVisibility(true));
  };

  return (
    <div className={classes.root} title="Open file explorer">
      <button
        className={classes.explorerButton}
        aria-label="Open file explorer"
        onClick={handleToggleExplorerVisibility}
      >
        <FileExplorerIcon className={classes.fileExplorerIcon} />
      </button>
    </div>
  );
};
