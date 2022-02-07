import { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';

import { DayElement } from 'types/components/calendar/dayElement.type';
import { DayName } from 'types/components/calendar/dayName.enum';

const { PREVIOUS_MONTH_DAY, CURRENT_MONTH_DAY, NEXT_MONTH_DAY, TODAY } = DayName;

const useFillCalendar = (date: Date): DayElement[] => {
  const [listOfDays, setListOfDays] = useState<DayElement[]>([]);
  const previousDays: DayElement[] = [];
  const monthDays: DayElement[] = [];
  const nextDays: DayElement[] = [];

  const dateFullYear = date.getFullYear();
  const dateMonth = date.getMonth();
  const today = date.getDate();

  date.setDate(1);

  const currentMonthLastDay = new Date(dateFullYear, dateMonth + 1, 0).getDate();
  const previousMonthLastDay = new Date(dateFullYear, dateMonth, 0).getDate();
  const currentMonthFirstDayIndex = date.getDay() !== 0 ? date.getDay() : 7;
  const currentMonthLastDayIndex = new Date(dateFullYear, dateMonth + 1, 0).getDay();

  const numberOfNextDays = 7 - currentMonthLastDayIndex;

  useEffect(() => {
    for (let dn = currentMonthFirstDayIndex; dn > 1; dn--) {
      previousDays.push({
        id: uuid(),
        name: PREVIOUS_MONTH_DAY,
        dayNumber: previousMonthLastDay - dn + 2,
      });
    }

    for (let dn = 1; dn <= currentMonthLastDay; dn++) {
      monthDays.push({
        id: uuid(),
        name: dn === today ? TODAY : CURRENT_MONTH_DAY,
        dayNumber: dn,
      });
    }

    for (let dn = 1; dn <= numberOfNextDays; dn++) {
      nextDays.push({
        id: uuid(),
        name: NEXT_MONTH_DAY,
        dayNumber: dn,
      });
    }

    setListOfDays(old => [...old, ...previousDays, ...monthDays, ...nextDays]);
  }, []);

  return listOfDays;
};

export default useFillCalendar;
