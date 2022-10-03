import Taskbar from '_taskbar/Taskbar/Taskbar';

import classes from './DesktopView.module.css';

const DesktopView = () => {
  return (
    <div className={classes.root} data-testid="desktop-view">
      <Taskbar />
    </div>
  );
};

export default DesktopView;
