import { Taskbar } from '_taskbar/Taskbar/Taskbar';

import classes from './DesktopView.module.css';

export const DesktopView = () => {
  return (
    <div className={classes.root} data-testid="desktop-view">
      <Taskbar />
    </div>
  );
};
