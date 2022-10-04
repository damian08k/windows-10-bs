import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { YearElement } from 'types/components/calendar/yearElement.type';
import { CalendarState, SelectedDate } from 'types/store/calendar.type';

import { TODAY_ID } from 'src/constants';

export const initialSelectedDate: SelectedDate = {
  id: TODAY_ID,
  day: new Date().getDate(),
  month: new Date().getMonth(),
  year: new Date().getFullYear(),
};

const initialCalendarState = {
  isMonthsView: false,
  isYearsView: false,
  highlightedYears: [],
  selectedDate: initialSelectedDate,
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
    setSelectedDate(state, action: PayloadAction<SelectedDate>) {
      state.selectedDate = { ...action.payload };
    },
  },
});

export const calendarActions = calendarSlice.actions;

export default calendarSlice.reducer;
