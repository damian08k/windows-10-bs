import { MenuOptions } from 'types/components/common/contextMenu/menuOptions.type';

import { ReactComponent as CheckedIcon } from 'assets/icons/checkMark.svg';

export const quickBarMenuOptions: MenuOptions[][] = [
  [
    { id: 'arrow-undo', name: 'Undo', icon: <CheckedIcon />, isIconVisible: false },
    { id: 'arrow-redo', name: 'Redo', icon: <CheckedIcon />, isIconVisible: false },
    { id: 'close', name: 'Delete', icon: <CheckedIcon />, isIconVisible: false },
    { id: 'properties', name: 'Properties', icon: <CheckedIcon />, isIconVisible: false },
    { id: 'folder', name: 'New folder', icon: <CheckedIcon />, isIconVisible: false },
    { id: 'rename', name: 'Rename', icon: <CheckedIcon />, isIconVisible: false },
  ],
  [{ id: 'icons-position', name: 'Show below Ribbon', isIconVisible: false }],
  [{ id: 'minimalize-ribbon', name: 'Minimalize Ribbon', isIconVisible: false }],
];
