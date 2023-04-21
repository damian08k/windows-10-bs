import { CURRENT_VIEW } from 'src/testIds';

import classes from './MobileView.module.css';

export const MobileViewInfoText =
  "To get this app's full experience, please run it on a desktop (more than 1000px) resolution.";

export const MobileView = () => (
  // TODO: Change text inside MobileViewText

  <div className={classes.root}>
    <h1 className={classes.infoText} data-testid={CURRENT_VIEW.MOBILE_VIEW}>
      {MobileViewInfoText}
    </h1>
  </div>
);
