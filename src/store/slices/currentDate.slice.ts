import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CurrentDate, TodaysDay } from 'types/store/currentDate.type';

export const initialCurrentDateState = {
  today: new Date().toLocaleDateString('pl-PL', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }),
} as TodaysDay;

const currentDateSlice = createSlice({
  name: 'today',
  initialState: initialCurrentDateState,
  reducers: {
    updateDay(state, action: PayloadAction<CurrentDate>) {
      state.today = action.payload;
    },
  },
});

export const currentDateActions = currentDateSlice.actions;

export default currentDateSlice.reducer;
