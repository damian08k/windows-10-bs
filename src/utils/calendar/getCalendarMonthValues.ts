import { v4 as uuidv4 } from 'uuid';

import { DayElement } from 'types/components/calendar/dayElement.type';
import { DayName } from 'types/components/calendar/dayName.enum';

import { CALENDAR_WEEK_DAYS } from 'src/constants';

import betterAt from 'utils/betterAt';

import getSplittedToday from './getSplittedToday';

const { PREVIOUS_MONTH_DAY, CURRENT_MONTH_DAY, NEXT_MONTH_DAY } = DayName;

const setStartedDate = (date: Date, monthSubtrahend: number): void => {
  date.setDate(1);
  date.setMonth(date.getMonth() - monthSubtrahend);
};

const getMonthPreviousDays = (
  date: Date,
  dateFullYear: number,
  dateMonth: number,
): DayElement[] => {
  const VALUE_TO_ADD = 2;

  const days: DayElement[] = [];

  const previousMonthLastDay = new Date(dateFullYear, dateMonth, 0).getDate();
  const currentMonthFirstDayIndex = date.getDay() !== 0 ? date.getDay() : CALENDAR_WEEK_DAYS;

  for (let d = currentMonthFirstDayIndex; d > 1; d--) {
    days.push({
      id: uuidv4(),
      name: PREVIOUS_MONTH_DAY,
      dayNumber: previousMonthLastDay - d + VALUE_TO_ADD,
    });
  }

  return days;
};

const getMonthCurrentDays = (
  today: string,
  dateMonth: number,
  dateFullYear: number,
): DayElement[] => {
  const days: DayElement[] = [];

  const currentMonthLastDay = new Date(dateFullYear, dateMonth + 1, 0).getDate();
  const { day: currentDay, month: currentMonth, year: currentYear } = getSplittedToday(today);

  for (let d = 1; d <= currentMonthLastDay; d++) {
    days.push({
      id: uuidv4(),
      name: CURRENT_MONTH_DAY,
      dayNumber: d,
      isToday: d === currentDay && dateMonth === currentMonth && dateFullYear === currentYear,
    });
  }

  return days;
};

const getMonthNextDays = (dateFullYear: number, dateMonth: number): DayElement[] => {
  const days: DayElement[] = [];

  const currentMonthLastDayIndex = new Date(dateFullYear, dateMonth + 1, 0).getDay();
  const numberOfNextDays = CALENDAR_WEEK_DAYS - currentMonthLastDayIndex;

  for (let d = 1; d <= numberOfNextDays; d++) {
    days.push({
      id: uuidv4(),
      name: NEXT_MONTH_DAY,
      dayNumber: d,
    });
  }

  return days;
};

const fillMonthWithMissingDays = (allDays: DayElement[]): void => {
  const NUMBER_OF_DAYS_IN_SIX_ROWS = 42;
  const VALUE_TO_ADD = 8;

  if (allDays.length !== NUMBER_OF_DAYS_IN_SIX_ROWS) {
    const lastDay = betterAt(allDays, -1).dayNumber;

    for (let d = lastDay + 1; d < lastDay + VALUE_TO_ADD; d++) {
      allDays.push({
        id: uuidv4(),
        name: NEXT_MONTH_DAY,
        dayNumber: d,
      });
    }
  }
};

export const getCalendarMonthValues = (
  monthSubtrahend: number,
  date: Date,
  today: string,
): DayElement[] => {
  const dateCopy = new Date(date);

  setStartedDate(dateCopy, monthSubtrahend);

  const dateFullYear = dateCopy.getFullYear();
  const dateMonth = dateCopy.getMonth();

  const previousDays = getMonthPreviousDays(dateCopy, dateFullYear, dateMonth);
  const currentDays = getMonthCurrentDays(today, dateMonth, dateFullYear);
  const nextDays = getMonthNextDays(dateFullYear, dateMonth);

  const monthAllDays = [...previousDays, ...currentDays, ...nextDays];

  fillMonthWithMissingDays(monthAllDays);

  return monthAllDays;
};
