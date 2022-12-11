import { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from 'store/hooks';
import { calendarActions } from 'store/slices/calendar.slice';

import { FilledCalendarYearValues } from 'types/components/calendar/calendarValues.type';
import { YearType } from 'types/components/calendar/yearType.type';

import betterAt from 'utils/betterAt';
import { getCalendarYearsValues } from 'utils/calendar/getCalendarYearsValues';

const { PREVIOUS, NEXT, HIGHLIGHTED } = YearType;

const useFillYears = (year: number): FilledCalendarYearValues => {
  const [years, setYears] = useState<FilledCalendarYearValues>(null);

  const { today } = useAppSelector(state => state.currentDate);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const currentVisibleYears = getCalendarYearsValues(year, today);

    const currentPreviousYears = currentVisibleYears.filter(({ type }) => type === PREVIOUS);
    const previousYears = currentPreviousYears.length
      ? getCalendarYearsValues(betterAt(currentPreviousYears, -1).year, today)
      : [];

    const currentNextYears = currentVisibleYears.filter(({ type }) => type === NEXT);
    const nextYears = currentNextYears.length
      ? getCalendarYearsValues(betterAt(currentNextYears, 0).year, today)
      : [];

    const yearsList: FilledCalendarYearValues = {
      previousValues: previousYears,
      currentValues: currentVisibleYears,
      nextValues: nextYears,
    };

    dispatch(
      calendarActions.setHighlightedYears(
        currentVisibleYears.filter(({ type }) => type === HIGHLIGHTED),
      ),
    );

    setYears(yearsList);

    return () => setYears(null);
  }, [year]);

  return years;
};

export default useFillYears;
