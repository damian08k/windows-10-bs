import { FC } from 'react';

import MobileView from './components/view/MobileView/MobileView';
import GlobalStyles from './globalStyles';

const App: FC = () => {
  return (
    <>
      <GlobalStyles />
      <MobileView />
    </>
  );
};

export default App;
