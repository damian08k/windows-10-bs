import { YearElement } from 'types/components/calendar/yearElement.type';

export type SelectedDay = {
  id: string;
  selectedDay: number;
  selectedMonth: number;
  selectedYear: number;
};

export type CalendarState = {
  isMonthsView: boolean;
  isYearsView: boolean;
  highlightedYears: YearElement[];
  selectedDay: SelectedDay;
};
