/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import store from 'store/store';

import App from './App';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
