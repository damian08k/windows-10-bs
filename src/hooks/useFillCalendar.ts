import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { DayElement } from 'types/components/calendar/dayElement.type';
import { DayName } from 'types/components/calendar/dayName.enum';

import betterAt from 'utils/betterAt';

const { PREVIOUS_MONTH_DAY, CURRENT_MONTH_DAY, NEXT_MONTH_DAY } = DayName;

const useFillCalendar = (date: Date, month: number): DayElement[] => {
  const [listOfDays, setListOfDays] = useState<DayElement[]>([]);
  const previousDays: DayElement[] = [];
  const monthDays: DayElement[] = [];
  const nextDays: DayElement[] = [];

  const dateFullYear = date.getFullYear();
  const dateMonth = date.getMonth();

  date.setDate(1);

  const currentMonthLastDay = new Date(dateFullYear, dateMonth + 1, 0).getDate();
  const previousMonthLastDay = new Date(dateFullYear, dateMonth, 0).getDate();
  const currentMonthFirstDayIndex = date.getDay() !== 0 ? date.getDay() : 7;
  const currentMonthLastDayIndex = new Date(dateFullYear, dateMonth + 1, 0).getDay();

  const numberOfNextDays = 7 - currentMonthLastDayIndex;
  const maxNumberOfDaysInSixRows = 42;

  useEffect(() => {
    setListOfDays([]);

    for (let dn = currentMonthFirstDayIndex; dn > 1; dn--) {
      previousDays.push({
        id: uuidv4(),
        name: PREVIOUS_MONTH_DAY,
        dayNumber: previousMonthLastDay - dn + 2,
      });
    }

    for (let dn = 1; dn <= currentMonthLastDay; dn++) {
      monthDays.push({
        id: uuidv4(),
        name: CURRENT_MONTH_DAY,
        dayNumber: dn,
      });
    }

    for (let dn = 1; dn <= numberOfNextDays; dn++) {
      nextDays.push({
        id: uuidv4(),
        name: NEXT_MONTH_DAY,
        dayNumber: dn,
      });
    }

    const allDays = [...previousDays, ...monthDays, ...nextDays];

    if (allDays.length !== maxNumberOfDaysInSixRows) {
      const lastDay = betterAt(allDays, -1).dayNumber;

      for (let dn = lastDay + 1; dn < lastDay + 8; dn++) {
        allDays.push({
          id: uuidv4(),
          name: NEXT_MONTH_DAY,
          dayNumber: dn,
        });
      }
    }

    setListOfDays(old => [...old, ...allDays]);
  }, [month]);

  return listOfDays;
};

export default useFillCalendar;
