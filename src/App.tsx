import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';

import useScreenWidth from 'hooks/useScreenWidth';
import { clockActions } from 'store/slices/clock.slice';
import { useAppDispatch } from 'store/store';
import { RootState } from 'types/store/clockState.type';
import DesktopView from 'view/DesktopView/DesktopView';

import MobileView from './components/view/MobileView/MobileView';
import { MIN_SYSTEM_RESOLUTION } from './constants';
import GlobalStyles from './globalStyles';

const App: FC = () => {
  const screenWidth = useScreenWidth();

  const time = useSelector((state: RootState) => state.updateClock.time);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      const newTime = new Date().toLocaleTimeString();
      dispatch(clockActions.updateClock(newTime));
    }, 1000);
    return () => clearInterval(interval);
  }, [time]);

  console.log('test commit');

  return (
    <>
      <GlobalStyles />
      {screenWidth < MIN_SYSTEM_RESOLUTION ? <MobileView /> : <DesktopView />}
    </>
  );
};

export default App;
