import { Actions } from 'types/components/explorer/actions.type';

import { mergeClasses } from 'utils/mergeClasses';

import classes from '../QuickAccessBarActions.module.css';

import { ReactComponent as ArrowUndoIcon } from 'assets/icons/arrow_undo.svg';
import { ReactComponent as CloseIcon } from 'assets/icons/close.svg';
import { ReactComponent as FolderIcon } from 'assets/icons/folder.svg';
import { ReactComponent as PropertiesIcon } from 'assets/icons/properties.svg';
import { ReactComponent as RenameIcon } from 'assets/icons/rename.svg';

export const ACTION_ICONS: Actions[] = [
  {
    name: 'arrow-undo',
    icon: <ArrowUndoIcon className={mergeClasses(classes.icon, classes.undo)} />,
    title: '',
    description: 'Undo (Ctrl + Z)',
  },
  {
    name: 'arrow-redo',
    icon: <ArrowUndoIcon className={mergeClasses(classes.icon, classes.redo)} />,
    title: '',
    description: 'Redo (Ctrl + Y)',
  },
  {
    name: 'close',
    icon: <CloseIcon className={mergeClasses(classes.icon, classes.close)} />,
    title: 'Delete (Ctrl + D)',
    description: 'Move to bin or permanently delete the selected items',
  },
  {
    name: 'folder',
    icon: <FolderIcon className={classes.icon} />,
    title: 'New Folder (Ctrl + Shift + N)',
    description: 'Create new folder',
  },
  {
    name: 'properties',
    icon: <PropertiesIcon className={classes.icon} />,
    title: 'Properties (Alt + Enter)',
    description: 'Show properties of selected element',
  },
  {
    name: 'rename',
    icon: <RenameIcon className={classes.icon} />,
    title: 'Rename (F2)',
    description: 'Rename selected element',
  },
];
