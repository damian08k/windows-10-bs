import { FC } from 'react';

import DesktopView from './components/view/DesktopView/DesktopView';
import MobileView from './components/view/MobileView/MobileView';
import { MIN_SYSTEM_RESOLUTION } from './constants';
import GlobalStyles from './globalStyles';
import useScreenWidth from './hooks/useScreenWidth';

const App: FC = () => {
  const screenWidth = useScreenWidth();

  return (
    <>
      <GlobalStyles />
      {screenWidth < MIN_SYSTEM_RESOLUTION ? <MobileView /> : <DesktopView />}
    </>
  );
};

export default App;
