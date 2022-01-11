import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ClockState, Time } from 'types/store/clockState.type';

export const initialClockState = {
  time: null,
  timeSeconds: null,
} as ClockState;

const clockSlice = createSlice({
  name: 'clock',
  initialState: initialClockState,
  reducers: {
    updateClock(state, action: PayloadAction<Time>) {
      state.time = action.payload;
    },
    updateClockWithSeconds(state, action: PayloadAction<Time>) {
      state.timeWithSeconds = action.payload;
    },
  },
});

export const clockActions = clockSlice.actions;

export default clockSlice.reducer;
