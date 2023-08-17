import { MenuOptions } from 'types/components/common/contextMenu/menuOptions.type';
import { TopBarIcons } from 'types/store/fileExplorerState.type';

import { toggleText } from 'utils/toggleText';

export const updateMenuOptions = (menuOptions: MenuOptions[][], id: TopBarIcons) => {
  for (let i = 0; i < menuOptions.length; i++) {
    for (let j = 0; j < menuOptions[i].length; j++) {
      if (menuOptions[i][j].id === id) {
        if (menuOptions[i][j].name.includes('below') || menuOptions[i][j].name.includes('above')) {
          menuOptions[i][j].name = toggleText(menuOptions[i][j].name);
        }

        if (Object.prototype.hasOwnProperty.call(menuOptions[i][j], 'icon')) {
          menuOptions[i][j].isIconVisible = !menuOptions[i][j].isIconVisible;
        }
      }
    }
  }
};
