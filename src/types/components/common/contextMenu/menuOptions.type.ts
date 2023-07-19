import { ReactElement, SVGProps } from 'react';

import { MenuOptionIds } from './menuOptionIds.type';

export type MenuOptions = {
  id: MenuOptionIds;
  name: string;
  icon?: ReactElement<SVGProps<SVGSVGElement>>;
  isIconVisible: boolean;
  submenu?: MenuOptions;
};
