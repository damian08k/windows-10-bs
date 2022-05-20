import { FC } from 'react';

import Taskbar from 'Taskbar/Taskbar';

import classes from './DesktopView.module.css';

const DesktopView: FC = () => {
  return (
    <div className={classes.root} data-testid="desktop-view">
      <Taskbar />
    </div>
  );
};

export default DesktopView;
