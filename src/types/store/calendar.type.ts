import { YearElement } from 'types/components/calendar/yearElement.type';

export type SelectedDate = {
  id: string;
  day: number;
  month: number;
  year: number;
};

export type CalendarState = {
  isMonthsView: boolean;
  isYearsView: boolean;
  highlightedYears: YearElement[];
  selectedDate: SelectedDate;
};
