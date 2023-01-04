import { FC, useCallback, useEffect, useRef } from 'react';

import { useAppDispatch, useAppSelector } from 'store/hooks';
import { calendarActions } from 'store/slices/calendar.slice';

import { ChangingYearsConfig } from 'types/components/calendar/blockDatesChanging.type';
import { CalendarValues } from 'types/components/calendar/calendarValues.type';
import { DayConfig } from 'types/components/calendar/dayConfig.type';
import { DayElement } from 'types/components/calendar/dayElement.type';
import { DayName } from 'types/components/calendar/dayName.enum';
import { FocusConfig } from 'types/hooks/focusConfig.type';

import changeDatesOnDown from '_plans/Calendar/helpers/changeDatesOnDown';
import changeDatesOnUp from '_plans/Calendar/helpers/changeDatesOnUp';
import { TODAY_ID } from 'src/constants';

import mergeClasses from 'utils/mergeClasses';

import { getDayToFocus } from './helpers/getDayToFocus';
import selectMonthAndYear from './helpers/selectedMonthAndYear';

import classes from './Day.module.css';

const { TODAY, PREVIOUS_MONTH_DAY, NEXT_MONTH_DAY } = DayName;

type Props = {
  dayConfig: DayConfig;
  focusConfig: FocusConfig;
  listOfDays: CalendarValues<DayElement>;
};

const Day: FC<Props> = ({ dayConfig, focusConfig, listOfDays }) => {
  const { id, name, dayNumber, month, year } = dayConfig;
  const { setFocus, index, isFocus } = focusConfig;

  const dayRef = useRef<HTMLButtonElement>(null);
  const { selectedDate, isMonthsView, isYearsView, highlightedYears } = useAppSelector(
    state => state.calendar,
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isFocus) {
      dayRef?.current?.focus();
    }
  }, [isFocus, index]);

  const handleSelectDay = (id: string, name: DayName) => {
    const { selectedMonth, selectedYear } = selectMonthAndYear(month, name, year);

    dispatch(
      calendarActions.setSelectedDate({
        id,
        day: dayNumber,
        month: selectedMonth,
        year: selectedYear,
      }),
    );
  };

  const handleFocusDay = useCallback(() => {
    setFocus(index);
  }, [index, setFocus]);

  const handleChangeMonthFocusDay = useCallback(() => {
    const focusedDayInVisibleMonth = listOfDays.currentValues[index];

    const changeYearsConfig: ChangingYearsConfig = {
      isMonthsView,
      isYearsView,
      year,
      month,
      highlightedYears,
      dispatch,
    };

    if (name === PREVIOUS_MONTH_DAY) {
      changeDatesOnUp(changeYearsConfig);

      const dayToFocus = getDayToFocus(listOfDays.previousValues, focusedDayInVisibleMonth);

      setFocus(dayToFocus);
    } else if (name === NEXT_MONTH_DAY) {
      changeDatesOnDown(changeYearsConfig);

      const dayToFocus = getDayToFocus(listOfDays.nextValues, focusedDayInVisibleMonth);

      setFocus(dayToFocus);
    }
  }, [index, setFocus]);

  return (
    <button
      ref={dayRef}
      className={mergeClasses(classes.root, classes[name], {
        [classes.selected]: selectedDate.id === id,
        [classes[TODAY]]: id === TODAY_ID,
      })}
      onClick={() => handleSelectDay(id, name)}
      onKeyDown={handleFocusDay}
      tabIndex={isFocus ? 0 : -1}
      onKeyUp={handleChangeMonthFocusDay}
      aria-label={`Selecte day ${dayNumber}`}
    >
      <span className={classes.dayNumber}>{dayNumber}</span>
    </button>
  );
};

export default Day;
