import { useState, useEffect } from 'react';

import { FilledCalendarValues } from 'types/components/calendar/calendarValues.type';

import { getCalendarMonthValues } from 'utils/calendar/getCalendarMonthValues';

export const useFillMonth = (date: Date, month: number, today: string): FilledCalendarValues => {
  const [listOfDays, setListOfDays] = useState<FilledCalendarValues>(null);

  useEffect(() => {
    const daysList: FilledCalendarValues = {
      previousMonth: getCalendarMonthValues(1, date, today),
      currentMonth: getCalendarMonthValues(0, date, today),
      nextMonth: getCalendarMonthValues(-1, date, today),
    };

    setListOfDays(daysList);

    return () => setListOfDays(null);
  }, [month]);

  return listOfDays;
};
