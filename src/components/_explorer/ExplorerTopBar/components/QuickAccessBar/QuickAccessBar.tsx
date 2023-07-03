import { ContextMenu } from '_commons/ContextMenu/ContextMenu';
import { ExplorerButton } from '_explorer/ExplorerButton/ExplorerButton';

import { ReactComponent as ArrowEject } from 'assets/icons/arrow_eject.svg';
import { ReactComponent as FileExplorerIcon } from 'assets/icons/file-explorer.svg';

import { quickBarMenuOptions } from './data/contextMenuData';
import { QuickAccessBarActions } from './QuickAccessBarActions/QuickAccessBarActions';

import classes from './QuickAccessBar.module.css';

export const QuickAccessBar = () => {
  return (
    <div className={classes.root}>
      <button className={classes.folderIconButton} aria-label="Open file explorer options">
        <FileExplorerIcon className={classes.folderIcon} />
      </button>
      <div className={classes.quickAccessContainer}>
        <QuickAccessBarActions />
        <div className={classes.arrowEjectButton}>
          <ExplorerButton
            tooltip="Customize the Quick Access Toolbar"
            ariaLabel="Open a window allowing customization of the quick access bar"
          >
            <ArrowEject className={classes.arrowEjectIcon} />
          </ExplorerButton>
          <ContextMenu title="Adjust Quick Access Toolbar" options={quickBarMenuOptions} />
        </div>
      </div>
      <h2 className={classes.explorerName}>File Explorer</h2>
    </div>
  );
};
