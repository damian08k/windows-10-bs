import { FC, useEffect } from 'react';

import useScreenWidth from 'hooks/useScreenWidth';
import { clockActions } from 'store/slices/clock.slice';
import { currentDateActions } from 'store/slices/currentDate.slice';
import { useAppDispatch } from 'store/store';
import DesktopView from 'view/DesktopView/DesktopView';

import MobileView from './components/view/MobileView/MobileView';
import { MIDNIGHT, MIN_SYSTEM_RESOLUTION } from './constants';
import GlobalStyles from './globalStyles';

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

  console.log('test commit');

  return (
    <>
      <GlobalStyles />
      {screenWidth < MIN_SYSTEM_RESOLUTION ? <MobileView /> : <DesktopView />}
    </>
  );
};

export default App;
