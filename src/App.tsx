import { FC, useEffect } from 'react';

import useScreenWidth from 'hooks/useScreenWidth';
import { clockActions } from 'store/slices/clock.slice';
import { currentDateActions } from 'store/slices/currentDate.slice';
import { useAppDispatch } from 'store/store';
import DesktopView from 'view/DesktopView/DesktopView';

import classes from './assets/styles/global.module.css';
import MobileView from './components/view/MobileView/MobileView';
import { MIDNIGHT, MIN_SYSTEM_RESOLUTION } from './constants';

import './assets/styles/variables.module.css';

const App: FC = () => {
  const screenWidth = useScreenWidth();

  const dispatch = useAppDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      const newTime = new Date();
      const currentHour = newTime.toLocaleTimeString();

      dispatch(clockActions.updateClock(currentHour));

      if (currentHour === MIDNIGHT) {
        dispatch(currentDateActions.updateDay(newTime.toLocaleDateString()));
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div className={classes.root}>
      {screenWidth < MIN_SYSTEM_RESOLUTION ? <MobileView /> : <DesktopView />}
    </div>
  );
};

export default App;
