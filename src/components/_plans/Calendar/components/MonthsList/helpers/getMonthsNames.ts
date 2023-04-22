import { MonthName } from 'types/components/calendar/monthName.type';

export const getMonthsNames = (): MonthName[] =>
  [...Array(12).keys()].map(key => {
    return {
      monthName: new Date(0, key).toLocaleString('en', { month: 'short' }).toLowerCase(),
      monthId: key,
    };
  });
