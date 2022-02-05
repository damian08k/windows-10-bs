import { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';

import { DayElement } from 'types/components/calendar/dayElement.type';
import { DayName } from 'types/components/calendar/dayName.enum';

const { PREVIOUS_MONTH_DAY, CURRENT_MONTH_DAY, NEXT_MONTH_DAY } = DayName;

const useFillCalendar = (date: Date): DayElement[] => {
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
        name: CURRENT_MONTH_DAY,
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

// const date = new Date(2022, 4, 1);
// const x = [];
// const y = [];
// const z = [];
// const renderCalendar = () => {
//   date.setDate(1);
//   console.log(date);
//   const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
//   const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
//   const firstDayIndex = date.getDay() !== 0 ? date.getDay() : 7;
//   const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();

//   const nextDays = 7 - lastDayIndex;

//   console.log(prevLastDay, firstDayIndex);

//   // console.log(firstDayIndex);
//   for (let i = firstDayIndex; i > 1; i--) {
//     // console.log(prevLastDay, i);
//     x.push(prevLastDay - i + 2);
//   }

//   for (let i = 1; i <= lastDay; i++) {
//     // if(i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
//     // today
//     // }

//     y.push(i);
//   }

//   for (let i = 1; i <= nextDays; i++) {
//     z.push(i);
//   }
//   // console.log(x, y, z);
//   console.log(x);
// };

// renderCalendar();
