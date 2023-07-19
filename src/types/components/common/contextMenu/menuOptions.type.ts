import { ReactElement, SVGProps } from 'react';

import { MenuOptionIds } from './menuOptionIds.type';

export type MenuOptions = {
  id: MenuOptionIds;
  name: string;
  isIconVisible: boolean;
  icon?: ReactElement<SVGProps<SVGSVGElement>>;
  submenu?: MenuOptions;
};
