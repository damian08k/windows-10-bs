import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { AppDispatch } from 'types/store/store.type';

import { listenMiddleware } from './listenerMiddleware';
import calendarReducer from './slices/calendar.slice';
import clockReducer from './slices/clock.slice';
import currentDateReducer from './slices/currentDate.slice';
import plansReducer from './slices/plans.slice';

const store = configureStore({
  reducer: {
    clock: clockReducer,
    plans: plansReducer,
    currentDate: currentDateReducer,
    calendar: calendarReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().prepend(listenMiddleware.middleware);
  },
});

export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
