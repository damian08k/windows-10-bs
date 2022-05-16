import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { AppDispatch } from 'types/store/clockState.type';

import updateClockReducer from './slices/clock.slice';
import updateDayReducer from './slices/currentDate.slice';
import togglePlansVisibilityReducer from './slices/plans.slice';

const store = configureStore({
  reducer: {
    updateClock: updateClockReducer,
    togglePlansVisibility: togglePlansVisibilityReducer,
    showTodaysDay: updateDayReducer,
  },
});

export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
