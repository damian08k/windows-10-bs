import { DayElement } from './dayElement.type';
import { YearElement } from './yearElement.type';

export type CalendarValues<T> = {
  previousValues: T[];
  currentValues: T[];
  nextValues: T[];
};

export type FilledCalendarMonthValues = CalendarValues<DayElement> | null;

export type FilledCalendarYearValues = CalendarValues<YearElement> | null;
