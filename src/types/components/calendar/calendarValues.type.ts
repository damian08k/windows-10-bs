import { DayElement } from './dayElement.type';

export type CalendarValues<T> = {
  previousValues: T[];
  currentValues: T[];
  nextValues: T[];
};

export type FilledCalendarValues = CalendarValues<DayElement> | null;
