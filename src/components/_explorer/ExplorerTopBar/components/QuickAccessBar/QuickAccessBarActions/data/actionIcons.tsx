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
    icon: <ArrowUndoIcon className={classes.icon} />,
  },
  {
    name: 'arrow-redo',
    icon: <ArrowUndoIcon className={mergeClasses(classes.icon, classes.redo)} />,
  },
  {
    name: 'close',
    icon: <CloseIcon className={mergeClasses(classes.icon, classes.close)} />,
  },
  {
    name: 'folder',
    icon: <FolderIcon className={classes.icon} />,
  },
  {
    name: 'properties',
    icon: <PropertiesIcon className={classes.icon} />,
  },
  {
    name: 'rename',
    icon: <RenameIcon className={classes.icon} />,
  },
];
