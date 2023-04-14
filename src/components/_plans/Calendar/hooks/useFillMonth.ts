import { useState, useEffect } from 'react';

import { FilledCalendarMonthValues } from 'types/components/calendar/calendarValues.type';

import { getCalendarMonthValues } from '../helpers/getCalendarMonthValues';

export const useFillMonth = (
  date: Date,
  month: number,
  today: string,
): FilledCalendarMonthValues => {
  const [listOfDays, setListOfDays] = useState<FilledCalendarMonthValues>(null);

  useEffect(() => {
    const daysList: FilledCalendarMonthValues = {
      previousValues: getCalendarMonthValues(1, date, today),
      currentValues: getCalendarMonthValues(0, date, today),
      nextValues: getCalendarMonthValues(-1, date, today),
    };

    setListOfDays(daysList);

    return () => setListOfDays(null);
  }, [month]);

  return listOfDays;
};
