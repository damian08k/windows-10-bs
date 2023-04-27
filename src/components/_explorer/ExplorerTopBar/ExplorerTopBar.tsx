import { ActionsBar } from './components/ActionsBar/ActionsBar';
import { QuickAccessBar } from './components/QuickAccessBar/QuickAccessBar';

import classes from './ExplorerTopBar.module.css';

export const ExplorerTopBar = () => {
  return (
    <div className={classes.root}>
      <QuickAccessBar />
      <ActionsBar />
    </div>
  );
};
