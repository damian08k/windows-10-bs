import { FC } from 'react';

import './App.scss';
import star from './assets/star.png';

const App: FC = () => {
  return (
    <div>
      Hello World!
      <img src={star} alt="" />
    </div>
  );
};

export default App;
