import { ReactComponent as FileExplorerIcon } from 'assets/icons/file-explorer.svg';

import classes from './FileExplorerSwitch.module.css';

export const FileExplorerSwitch = () => {
  return (
    <div className={classes.root} title="Open file explorer">
      <button className={classes.explorerButton} aria-label="Open file explorer">
        <FileExplorerIcon className={classes.fileExplorerIcon} />
      </button>
    </div>
  );
};
