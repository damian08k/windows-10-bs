import { v4 as uuidv4 } from 'uuid';

import { YearElement } from 'types/components/calendar/yearElement.type';
import { YearType } from 'types/components/calendar/yearType.type';

import { LAST_MIN_START_COUNTING_YEAR, MAX_VISIBLE_YEAR, MIN_VISIBLE_YEAR } from 'src/constants';

import { betterAt } from 'utils/betterAt';
import { getSplittedToday } from 'utils/getSplittedToday';

const { HIGHLIGHTED, PREVIOUS, NEXT } = YearType;

// * There's a logic here -> if second last year digit is even
// * list of years should have 2 previous years and 4 next years
// * if it's odd, list of years have 6 next years and 0 previous

const getHighlightedYears = (startCountingYear: number, today: string): YearElement[] => {
  const VALUE_TO_ADD = 10;
  const years: YearElement[] = [];

  const { year } = getSplittedToday(today);
  for (let y = startCountingYear; y < startCountingYear + VALUE_TO_ADD; y++) {
    if (y < MIN_VISIBLE_YEAR && startCountingYear === LAST_MIN_START_COUNTING_YEAR) continue;

    years.push({
      id: uuidv4(),
      type: HIGHLIGHTED,
      year: y,
      isCurrent: y === year,
      elementName: 'year',
    });
  }

  return years;
};

const getPreviousYears = (years: YearElement[], startCountingYear: number): void => {
  if (startCountingYear === LAST_MIN_START_COUNTING_YEAR) return;

  for (let y = startCountingYear - 2; y < startCountingYear; y++) {
    years.push({
      id: uuidv4(),
      type: PREVIOUS,
      year: y,
      elementName: 'year',
    });
  }
};

const getNextYears = (
  years: YearElement[],
  lastHighlightedYear: number,
  valueToAdd: number,
): void => {
  for (let y = lastHighlightedYear + 1; y < lastHighlightedYear + valueToAdd; y++) {
    if (y > MAX_VISIBLE_YEAR) break;

    years.push({
      id: uuidv4(),
      type: NEXT,
      year: y,
      elementName: 'year',
    });
  }
};

export const getCalendarYearsValues = (year: number, today: string): YearElement[] => {
  const yearAsDigits = [...(year + '')].map(Number);
  const currentYearLastNumber = betterAt(yearAsDigits, -1);
  const startCountingYear = year - currentYearLastNumber;
  const yearSecondLastDigit = betterAt(yearAsDigits, -2);

  const highlightedYears = getHighlightedYears(startCountingYear, today);
  const previousYears: YearElement[] = [];
  const nextYears: YearElement[] = [];

  const lastHighlightedYear = betterAt(highlightedYears, -1).year;

  if (yearSecondLastDigit % 2 === 0) {
    getPreviousYears(previousYears, startCountingYear);
    getNextYears(nextYears, lastHighlightedYear, startCountingYear !== 1920 ? 5 : 9);
  } else {
    getNextYears(nextYears, lastHighlightedYear, 7);
  }

  const allVisibleYears = [...previousYears, ...highlightedYears, ...nextYears];

  return allVisibleYears;
};
