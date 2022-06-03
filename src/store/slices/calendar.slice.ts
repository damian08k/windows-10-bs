import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CalendarState } from 'types/store/calendar.type';

const initialCalendarState = {
  isMonthsView: false,
  isYearsView: false,
} as CalendarState;

const calendarSlice = createSlice({
  name: 'calendar',
  initialState: initialCalendarState,
  reducers: {
    setIsMonthsView(state, action: PayloadAction<boolean>) {
      state.isMonthsView = action.payload;
    },
    setIsYearsView(state, action: PayloadAction<boolean>) {
      state.isYearsView = action.payload;
    },
  },
});

export const calendarActions = calendarSlice.actions;

export default calendarSlice.reducer;
