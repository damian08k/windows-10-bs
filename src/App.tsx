import { useEffect } from 'react';

import { useScreenWidth } from 'hooks/useScreenWidth';

import { useAppDispatch } from 'store/hooks';
import { clockActions } from 'store/slices/clock.slice';
import { currentDateActions } from 'store/slices/currentDate.slice';

import { DesktopView } from '_view/DesktopView/DesktopView';
import { MobileView } from '_view/MobileView/MobileView';

import './assets/styles/global.module.css';
import { MIDNIGHT, MIN_SYSTEM_RESOLUTION } from './constants';

import './assets/styles/variables.module.css';

export const App = () => {
  const screenWidth = useScreenWidth();

  const dispatch = useAppDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      const newTime = new Date();
      const currentHour = newTime.toLocaleTimeString();

      dispatch(clockActions.updateClock(currentHour));

      if (currentHour === MIDNIGHT) {
        dispatch(
          currentDateActions.updateDay(
            newTime.toLocaleDateString('pl-PL', {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric',
            }),
          ),
        );
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [dispatch]);

  return screenWidth < MIN_SYSTEM_RESOLUTION ? <MobileView /> : <DesktopView />;
};
