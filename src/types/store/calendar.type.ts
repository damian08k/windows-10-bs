import { YearElement } from 'types/components/calendar/yearElement.type';

export type YearsChangeBlock = {
  isBlockUp: boolean;
  isBlockDown: boolean;
};

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
  yearsBlock: YearsChangeBlock;
};
