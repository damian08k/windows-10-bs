import { DayName } from 'types/components/calendar/dayName.enum';

const { NEXT_MONTH_DAY, PREVIOUS_MONTH_DAY } = DayName;

type MonthAndYear = {
  selectedMonth: number;
  selectedYear: number;
};

export const selectMonthAndYear = (month: number, name: DayName, year: number): MonthAndYear => {
  const selectedMonth = month;
  const selectedYear = year;

  switch (name) {
    case PREVIOUS_MONTH_DAY:
      if (selectedMonth - 1 < 0) {
        return {
          selectedMonth: 11,
          selectedYear: selectedYear - 1,
        };
      } else {
        return {
          selectedMonth: selectedMonth - 1,
          selectedYear: selectedYear,
        };
      }
    case NEXT_MONTH_DAY:
      if (selectedMonth + 1 > 11) {
        return {
          selectedMonth: 0,
          selectedYear: selectedYear + 1,
        };
      } else {
        return {
          selectedMonth: selectedMonth + 1,
          selectedYear: selectedYear,
        };
      }
  }

  return { selectedMonth, selectedYear };
};
