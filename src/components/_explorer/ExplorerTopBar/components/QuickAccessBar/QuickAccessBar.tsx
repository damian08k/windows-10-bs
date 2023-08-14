import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import { useOutsideClick } from 'hooks/useOutsideClick';

import { explorerActions } from 'store/slices/explorer.slice';

import { MenuOptionIds } from 'types/components/common/contextMenu/menuOptionIds.type';
import { MenuOptions } from 'types/components/common/contextMenu/menuOptions.type';
import { TopBarIcons } from 'types/store/fileExplorerState.type';

import { ContextMenu } from '_commons/ContextMenu/ContextMenu';
import { ExplorerButton } from '_explorer/ExplorerButton/ExplorerButton';

import { ReactComponent as ArrowEject } from 'assets/icons/arrow_eject.svg';
import { ReactComponent as FileExplorerIcon } from 'assets/icons/file-explorer.svg';

import { quickBarMenuOptions } from './data/contextMenuData';
import { updateMenuOptions } from './helpers/updateMenuOptions';
import { QuickAccessBarActions } from './QuickAccessBarActions/QuickAccessBarActions';

import classes from './QuickAccessBar.module.css';

export const QuickAccessBar = () => {
  const contextMenuRef = useRef<HTMLDivElement>(null);
  const [menuOptions, setMenuOptions] = useState<MenuOptions[][]>(quickBarMenuOptions);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();

  const handleClick = (id: TopBarIcons) => {
    dispatch(explorerActions.toggleTopBarVisibleIcons(id));

    const menuOptionsCopy = [...menuOptions];
    updateMenuOptions(menuOptionsCopy, id);
    setMenuOptions(menuOptionsCopy);
  };

  const handleOpenMenu = () => {
    if (!isMenuOpen) {
      setIsMenuOpen(true);
    }
  };

  useOutsideClick(contextMenuRef, () => setIsMenuOpen(false));

  return (
    <div className={classes.root}>
      <button className={classes.folderIconButton} aria-label="Open file explorer options">
        <FileExplorerIcon className={classes.folderIcon} />
      </button>
      <div className={classes.quickAccessContainer}>
        <QuickAccessBarActions />
        <div className={classes.arrowEjectButton} ref={contextMenuRef}>
          <ExplorerButton
            tooltip="Customize the Quick Access Toolbar"
            ariaLabel="Open a window allowing customization of the quick access bar"
            onClick={handleOpenMenu}
          >
            <ArrowEject className={classes.arrowEjectIcon} />
          </ExplorerButton>
          <ContextMenu
            title="Adjust Quick Access Toolbar"
            options={menuOptions}
            onClick={(id: MenuOptionIds) => handleClick(id as TopBarIcons)}
            isOpen={isMenuOpen}
          />
        </div>
      </div>
      <h2 className={classes.explorerName}>File Explorer</h2>
    </div>
  );
};
