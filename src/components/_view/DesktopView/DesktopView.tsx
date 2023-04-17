import { Taskbar } from '_taskbar/Taskbar/Taskbar';
import { CURRENT_VIEW } from 'src/testIds';

import classes from './DesktopView.module.css';

export const DesktopView = () => {
  return (
    <div className={classes.root} data-testid={CURRENT_VIEW.DESKTOP_VIEW}>
      <Taskbar />
    </div>
  );
};
