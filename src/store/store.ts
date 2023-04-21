import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit';

import { RootState } from 'types/store/store.type';

import { listenMiddleware } from './listenerMiddleware';
import calendarReducer from './slices/calendar.slice';
import clockReducer from './slices/clock.slice';
import currentDateReducer from './slices/currentDate.slice';
import plansReducer from './slices/plans.slice';

export const rootReducer = combineReducers({
  clock: clockReducer,
  plans: plansReducer,
  currentDate: currentDateReducer,
  calendar: calendarReducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    middleware(getDefaultMiddleware) {
      return getDefaultMiddleware().prepend(listenMiddleware.middleware);
    },
    preloadedState,
  });
};
