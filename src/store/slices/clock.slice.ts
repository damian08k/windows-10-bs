import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ClockState } from 'types/store/clockState.type';

export const initialClockState = {
  time: new Date().toLocaleTimeString(),
} as ClockState;

const clockSlice = createSlice({
  name: 'clock',
  initialState: initialClockState,
  reducers: {
    updateClock(state, action: PayloadAction<string>) {
      state.time = action.payload;
    },
  },
});

export const clockActions = clockSlice.actions;

export default clockSlice.reducer;
