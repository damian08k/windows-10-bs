import { MenuOptions } from 'types/components/common/contextMenu/menuOptions.type';

import { ReactComponent as CheckedIcon } from 'assets/icons/checkMark.svg';

export const quickBarMenuOptions: MenuOptions[][] = [
  [
    { id: 'arrow-undo', name: 'Undo', icon: <CheckedIcon />, isIconVisible: true },
    { id: 'arrow-redo', name: 'Redo', icon: <CheckedIcon />, isIconVisible: true },
    { id: 'close', name: 'Delete', icon: <CheckedIcon />, isIconVisible: true },
    { id: 'properties', name: 'Properties', icon: <CheckedIcon />, isIconVisible: true },
    { id: 'folder', name: 'New folder', icon: <CheckedIcon />, isIconVisible: true },
    { id: 'rename', name: 'Rename', icon: <CheckedIcon />, isIconVisible: true },
  ],
  [{ id: 'icons-position', name: 'Show below Ribbon', isIconVisible: true }],
  [{ id: 'minimalize-ribbon', name: 'Minimalize Ribbon', isIconVisible: true }],
];
