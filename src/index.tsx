import { StrictMode } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from 'store/store';

import App from './App';

const root = document.getElementById('root');

render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>,
  root,
);
