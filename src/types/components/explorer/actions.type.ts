import { ReactElement, SVGProps } from 'react';

import { TopBarIcons } from 'types/store/fileExplorerState.type';

export type Actions = {
  name: TopBarIcons;
  icon: ReactElement<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  testId?: string;
};
