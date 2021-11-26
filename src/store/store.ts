import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { AppDispatch } from 'types/store/clockState.type';

import updateClockReducer from './slices/clock.slice';

const store = configureStore({
  reducer: {
    updateClock: updateClockReducer,
  },
});

export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
