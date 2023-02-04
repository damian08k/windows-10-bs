import { SetStateAction, Dispatch } from 'react';

import { ChangingYearsConfig } from 'types/components/calendar/blockDatesChanging.type';
import { CalendarValues } from 'types/components/calendar/calendarValues.type';
import { DayElement } from 'types/components/calendar/dayElement.type';
import { DayName } from 'types/components/calendar/dayName.enum';

import { changeDatesOnDown } from '_plans/Calendar/helpers/changeDatesOnDown';
import { changeDatesOnUp } from '_plans/Calendar/helpers/changeDatesOnUp';

export const changeMonthOnDayFocus = (
  changeYearsConfig: ChangingYearsConfig,
  name: DayName,
  index: number,
  listOfDays: CalendarValues<DayElement>,
  setFocus: Dispatch<SetStateAction<number>>,
  isAllowToChangeDatesUp: boolean,
  isAllowToChangeDatesDown: boolean,
  dayName: DayName,
) => {
  const focusedDayInVisibleMonth = listOfDays.currentValues[index];

  if (isAllowToChangeDatesUp) {
    changeDatesOnUp(changeYearsConfig);

    // const dayToFocus = getElementToFocus<DayElement>(
    //   listOfDays.previousValues,
    //   focusedDayInVisibleMonth,
    // );

    // setFocus(dayToFocus);
  } else if (isAllowToChangeDatesDown) {
    changeDatesOnDown(changeYearsConfig);

    // const dayToFocus = getElementToFocus<DayElement>(
    //   listOfDays.nextValues,
    //   focusedDayInVisibleMonth,
    // );
    // setFocus(dayToFocus);
  }
};
