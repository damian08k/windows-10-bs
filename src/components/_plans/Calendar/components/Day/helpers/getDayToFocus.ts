import { DayElement } from 'types/components/calendar/dayElement.type';
import { DayName } from 'types/components/calendar/dayName.enum';

const { CURRENT_MONTH_DAY } = DayName;

export const getDayToFocus = (listOfDays: DayElement[], focusedDay: DayElement): number => {
  const dayToFocus = listOfDays.findIndex(
    ({ name, dayNumber }) => name === CURRENT_MONTH_DAY && dayNumber === focusedDay?.dayNumber,
  );

  return dayToFocus;
};
