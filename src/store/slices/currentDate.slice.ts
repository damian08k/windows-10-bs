import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CurrentDate, TodaysDay } from 'types/store/currentDate.type';

export const initialCurrentDateState = {
  today: new Date().toLocaleDateString('pl-PL', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }),
  month: new Date().getMonth(),
  year: new Date().getFullYear(),
} as TodaysDay;

const currentDateSlice = createSlice({
  name: 'today',
  initialState: initialCurrentDateState,
  reducers: {
    updateDay(state, action: PayloadAction<CurrentDate>) {
      state.today = action.payload;
    },
    updateMonth(state, action: PayloadAction<number>) {
      state.month = action.payload;

      if (state.month < 0) {
        state.month = 11;
        state.year -= 1;
      } else if (state.month > 11) {
        state.month = 0;
        state.year += 1;
      }
    },
  },
});

export const currentDateActions = currentDateSlice.actions;

export default currentDateSlice.reducer;
