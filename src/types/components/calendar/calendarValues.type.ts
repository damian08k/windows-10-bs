import { DayElement } from './dayElement.type';

export type CalendarValues = {
  previousMonth: DayElement[];
  currentMonth: DayElement[];
  nextMonth: DayElement[];
};

export type FilledCalendarValues = CalendarValues | null;
