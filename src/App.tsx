import { useEffect } from 'react';

import useScreenWidth from 'hooks/useScreenWidth';

import { useAppDispatch } from 'store/hooks';
import { clockActions } from 'store/slices/clock.slice';
import { currentDateActions } from 'store/slices/currentDate.slice';

import DesktopView from '_view/DesktopView/DesktopView';
import MobileView from '_view/MobileView/MobileView';

import classes from './assets/styles/global.module.css';
import { MIDNIGHT, MIN_SYSTEM_RESOLUTION } from './constants';

import './assets/styles/variables.module.css';

const App = () => {
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
