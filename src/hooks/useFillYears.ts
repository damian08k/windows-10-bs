import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { calendarActions } from 'store/slices/calendar.slice';
import { useAppDispatch } from 'store/store';

import { YearElement } from 'types/components/calendar/yearElement.type';
import { YearType } from 'types/components/calendar/yearType.type';
import { RootState } from 'types/store/store.type';

import betterAt from 'utils/betterAt';
import getSplittedToday from 'utils/getSplittedToday';

const { HIGHLIGHTED, PREVIOUS, NEXT, CURRENT } = YearType;

// * There's a logic here -> if second last year digit is even
// * list of years should have 2 previous years and 4 next years
// * if it's odd, list of years have 6 next years and 0 previous

const useFillYears = (year: number): YearElement[] => {
  const { today } = useSelector((state: RootState) => state.currentDate);
  const [years, setYears] = useState<YearElement[]>([]);

  const dispatch = useAppDispatch();

  const { year: currentYear } = getSplittedToday(today);

  const yearAsDigits = [...(year + '')].map(Number);
  const currentYearLastNumber = betterAt(yearAsDigits, -1);
  const yearSecondLastDigit = betterAt(yearAsDigits, -2);
  const startCountingYear = year - currentYearLastNumber;

  useEffect(() => {
    const previousYears: YearElement[] = [];
    const highlightedYears: YearElement[] = [];
    const nextYears: YearElement[] = [];

    for (let i = startCountingYear; i < startCountingYear + 10; i++) {
      highlightedYears.push({
        id: uuidv4(),
        type: i === currentYear ? CURRENT : HIGHLIGHTED,
        year: i,
      });
    }

    dispatch(calendarActions.setHighlightedYears(highlightedYears));

    const lastHighlightedYear = betterAt(highlightedYears, -1).year;

    if (yearSecondLastDigit % 2 === 0) {
      for (let i = startCountingYear - 2; i < startCountingYear; i++) {
        previousYears.push({
          id: uuidv4(),
          type: PREVIOUS,
          year: i,
        });
      }

      for (let i = lastHighlightedYear + 1; i < lastHighlightedYear + 5; i++) {
        nextYears.push({
          id: uuidv4(),
          type: NEXT,
          year: i,
        });
      }
    } else {
      for (let i = lastHighlightedYear + 1; i < lastHighlightedYear + 7; i++) {
        nextYears.push({
          id: uuidv4(),
          type: NEXT,
          year: i,
        });
      }
    }

    setYears(old => [...old, ...previousYears, ...highlightedYears, ...nextYears]);

    return () => setYears([]);
  }, [year]);

  return years;
};

export default useFillYears;
