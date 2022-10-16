import { Dispatch } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

import { calendarActions } from 'store/slices/calendar.slice';

import { YearElement } from 'types/components/calendar/yearElement.type';
import { YearType } from 'types/components/calendar/yearType.type';

import betterAt from 'utils/betterAt';

import getSplittedToday from './getSplittedToday';

const { HIGHLIGHTED, PREVIOUS, NEXT, CURRENT } = YearType;

// * There's a logic here -> if second last year digit is even
// * list of years should have 2 previous years and 4 next years
// * if it's odd, list of years have 6 next years and 0 previous

const getHighlightedYears = (startCountingYear: number, today: string): YearElement[] => {
  const VALUE_TO_ADD = 10;
  const years: YearElement[] = [];

  const { year: currentYear } = getSplittedToday(today);

  for (let y = startCountingYear; y < startCountingYear + VALUE_TO_ADD; y++) {
    years.push({
      id: uuidv4(),
      type: y === currentYear ? CURRENT : HIGHLIGHTED,
      year: y,
    });
  }

  return years;
};

const getPreviousYears = (years: YearElement[], startCountingYear: number): void => {
  for (let y = startCountingYear - 2; y < startCountingYear; y++) {
    years.push({
      id: uuidv4(),
      type: PREVIOUS,
      year: y,
    });
  }
};

const getNextYears = (
  years: YearElement[],
  lastHighlightedYear: number,
  valueToAdd: number,
): void => {
  for (let y = lastHighlightedYear + 1; y < lastHighlightedYear + valueToAdd; y++) {
    years.push({
      id: uuidv4(),
      type: NEXT,
      year: y,
    });
  }
};

export const getCalendarYearsValues = (
  year: number,
  today: string,
  dispatch: Dispatch,
): YearElement[] => {
  const yearAsDigits = [...(year + '')].map(Number);
  const currentYearLastNumber = betterAt(yearAsDigits, -1);
  const startCountingYear = year - currentYearLastNumber;
  const yearSecondLastDigit = betterAt(yearAsDigits, -2);

  const highlightedYears = getHighlightedYears(startCountingYear, today);
  const previousYears: YearElement[] = [];
  const nextYears: YearElement[] = [];

  dispatch(calendarActions.setHighlightedYears(highlightedYears));

  const lastHighlightedYear = betterAt(highlightedYears, -1).year;

  if (yearSecondLastDigit % 2 === 0) {
    getPreviousYears(previousYears, startCountingYear);
    getNextYears(nextYears, lastHighlightedYear, 5);
  } else {
    getNextYears(nextYears, lastHighlightedYear, 7);
  }

  const allVisibleYears = [...previousYears, ...highlightedYears, ...nextYears];

  return allVisibleYears;
};
