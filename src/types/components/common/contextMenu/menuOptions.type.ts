import { ReactElement, SVGProps } from 'react';

export type MenuOptions = {
  name: string;
  icon: ReactElement<SVGProps<SVGSVGElement>>;
  isIconVisible: boolean;
  submenu?: MenuOptions;
};
