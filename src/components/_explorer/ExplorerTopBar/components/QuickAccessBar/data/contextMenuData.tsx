import { MenuOptions } from 'types/components/common/contextMenu/menuOptions.type';

import { ReactComponent as CheckedIcon } from 'assets/icons/checkMark.svg';

export const quickBarMenuOptions: MenuOptions[][] = [
  [
    { name: 'Undo', icon: <CheckedIcon />, isIconVisible: true },
    { name: 'Redo', icon: <CheckedIcon />, isIconVisible: true },
    { name: 'Remove', icon: <CheckedIcon />, isIconVisible: true },
    { name: 'Properties', icon: <CheckedIcon />, isIconVisible: true },
    { name: 'New folder', icon: <CheckedIcon />, isIconVisible: true },
    { name: 'Rename', icon: <CheckedIcon />, isIconVisible: true },
  ],
  [{ name: 'Show below Ribbon', icon: <CheckedIcon />, isIconVisible: true }],
  [{ name: 'Minimalize Ribbon', icon: <CheckedIcon />, isIconVisible: true }],
];
