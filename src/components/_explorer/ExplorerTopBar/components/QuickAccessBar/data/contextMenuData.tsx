import { MenuOptions } from 'types/components/common/contextMenu/menuOptions.type';

import { EXPLORER } from 'src/testIds';

import { ReactComponent as CheckedIcon } from 'assets/icons/checkMark.svg';

const { UNDO, REDO, DELETE, PROPERTIES, NEW_FOLDER, RENAME, RIBBON_POSITION, RIBBON_VISIBILITY } =
  EXPLORER.TOP_BAR.CONTEXT_MENU_OPTIONS;

export const quickBarMenuOptions: MenuOptions[][] = [
  [
    {
      id: 'arrow-undo',
      name: 'Undo',
      icon: <CheckedIcon />,
      isIconVisible: false,
      testId: UNDO,
    },
    { id: 'arrow-redo', name: 'Redo', icon: <CheckedIcon />, isIconVisible: false, testId: REDO },
    { id: 'close', name: 'Delete', icon: <CheckedIcon />, isIconVisible: false, testId: DELETE },
    {
      id: 'properties',
      name: 'Properties',
      icon: <CheckedIcon />,
      isIconVisible: false,
      testId: PROPERTIES,
    },
    {
      id: 'folder',
      name: 'New folder',
      icon: <CheckedIcon />,
      isIconVisible: false,
      testId: NEW_FOLDER,
    },
    { id: 'rename', name: 'Rename', icon: <CheckedIcon />, isIconVisible: false, testId: RENAME },
  ],
  [
    {
      id: 'icons-position',
      name: 'Show below Ribbon',
      isIconVisible: false,
      testId: RIBBON_POSITION,
    },
  ],
  [
    {
      id: 'minimalize-ribbon',
      name: 'Minimalize Ribbon',
      isIconVisible: false,
      testId: RIBBON_VISIBILITY,
    },
  ],
];
