import { Dispatch, FC, SetStateAction, useCallback, useEffect, useRef } from 'react';

import { useAppDispatch, useAppSelector } from 'store/hooks';
import { calendarActions } from 'store/slices/calendar.slice';

import { DayName } from 'types/components/calendar/dayName.enum';

import { TODAY_ID } from 'src/constants';

import mergeClasses from 'utils/mergeClasses';

import selectMonthAndYear from './helpers/selectedMonthAndYear';

import classes from './Day.module.css';

const { TODAY } = DayName;

type Props = {
  id: string;
  name: DayName;
  dayNumber: number;
  month: number;
  year: number;
  index: number;
  isFocus: boolean;
  setFocus: Dispatch<SetStateAction<number>>;
};

const Day: FC<Props> = ({ id, name, dayNumber, month, year, setFocus, index, isFocus }) => {
  const dayRef = useRef<HTMLButtonElement>(null);
  const selectedDate = useAppSelector(state => state.calendar.selectedDate);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isFocus) {
      dayRef?.current?.focus();
    }
  }, [isFocus]);

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
    >
      <span className={classes.dayNumber}>{dayNumber}</span>
    </button>
  );
};

export default Day;
