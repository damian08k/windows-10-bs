import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { YearElement } from 'types/components/calendar/yearElement.type';
import { CalendarState, SelectedDay } from 'types/store/calendar.type';

import { TODAY_ID } from 'src/constants';

export const initialSelectedDay: SelectedDay = {
  id: TODAY_ID,
  selectedDay: new Date().getDate(),
  selectedMonth: new Date().getMonth() + 1,
  selectedYear: new Date().getFullYear(),
};

const initialCalendarState = {
  isMonthsView: false,
  isYearsView: false,
  highlightedYears: [],
  selectedDay: initialSelectedDay,
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
    setSelectedDay(state, action: PayloadAction<SelectedDay>) {
      state.selectedDay = { ...action.payload };
    },
  },
});

export const calendarActions = calendarSlice.actions;

export default calendarSlice.reducer;
