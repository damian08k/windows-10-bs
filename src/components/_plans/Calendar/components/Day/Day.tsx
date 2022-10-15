import { Dispatch, FC, SetStateAction, useCallback, useEffect, useRef } from 'react';

// import useFillCalendar from 'hooks/useFillCalendar';

import { useAppDispatch, useAppSelector } from 'store/hooks';
import { calendarActions } from 'store/slices/calendar.slice';

import { CalendarValues } from 'types/components/calendar/calendarValues.type';
import { DayName } from 'types/components/calendar/dayName.enum';

import changeDatesOnDown from '_plans/Calendar/helpers/changeDatesOnDown';
import changeDatesOnUp from '_plans/Calendar/helpers/changeDatesOnUp';
import { TODAY_ID } from 'src/constants';

import mergeClasses from 'utils/mergeClasses';

import { getDayToFocus } from './helpers/getDayToFocus';
import selectMonthAndYear from './helpers/selectedMonthAndYear';

import classes from './Day.module.css';

const { TODAY, PREVIOUS_MONTH_DAY, NEXT_MONTH_DAY } = DayName;

type Props = {
  id: string;
  name: DayName;
  dayNumber: number;
  month: number;
  year: number;
  index: number;
  isFocus: boolean;
  setFocus: Dispatch<SetStateAction<number>>;
  listOfDays: CalendarValues;
};

const Day: FC<Props> = props => {
  const { id, name, dayNumber, month, year, setFocus, index, isFocus, listOfDays } = props;

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
    const focusedDayInVisibleMonth = listOfDays.currentMonth[index];

    if (name === PREVIOUS_MONTH_DAY) {
      changeDatesOnUp(isMonthsView, isYearsView, year, month, highlightedYears, dispatch);

      const dayToFocus = getDayToFocus(listOfDays.previousMonth, focusedDayInVisibleMonth);

      setFocus(dayToFocus);
    } else if (name === NEXT_MONTH_DAY) {
      changeDatesOnDown(isMonthsView, isYearsView, year, month, highlightedYears, dispatch);

      const dayToFocus = getDayToFocus(listOfDays.nextMonth, focusedDayInVisibleMonth);

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
    >
      <span className={classes.dayNumber}>{dayNumber}</span>
    </button>
  );
};

export default Day;
