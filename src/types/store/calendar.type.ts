import { YearElement } from 'types/components/calendar/yearElement.type';

export type CalendarState = {
  isMonthsView: boolean;
  isYearsView: boolean;
  highlightedYears: YearElement[];
};
