import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { YearElement } from 'types/components/calendar/yearElement.type';
import { CalendarState } from 'types/store/calendar.type';

const initialCalendarState = {
  isMonthsView: false,
  isYearsView: false, //! Should be false by default, need to change when logic will be ready
  highlightedYears: [],
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
    setHighlightedYears(state, action: PayloadAction<YearElement[]>) {
      if (state.highlightedYears.length) {
        state.highlightedYears.length = 0;
      }

      state.highlightedYears.push(...action.payload);
    },
  },
});

export const calendarActions = calendarSlice.actions;

export default calendarSlice.reducer;
