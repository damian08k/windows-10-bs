import { FC, KeyboardEvent, useCallback, useRef } from 'react';

import { useElementFocus } from 'hooks/useElementFocus';

import { useAppDispatch, useAppSelector } from 'store/hooks';
import { calendarActions } from 'store/slices/calendar.slice';

import { ChangingYearsConfig } from 'types/components/calendar/blockDatesChanging.type';
import { CalendarValues } from 'types/components/calendar/calendarValues.type';
import { DayConfig } from 'types/components/calendar/dayConfig.type';
import { DayElement } from 'types/components/calendar/dayElement.type';
import { DayName } from 'types/components/calendar/dayName.enum';
import { FocusConfig } from 'types/hooks/focusConfig.type';

import { changeDatesOnDown } from '_plans/Calendar/helpers/changeDatesOnDown';
import { changeDatesOnUp } from '_plans/Calendar/helpers/changeDatesOnUp';
import { getElementToFocus } from '_plans/Calendar/helpers/getValueToFocus';
import {
  FIRST_ROW_FINISH_INDEX,
  FIRST_ROW_START_INDEX,
  LAST_ROW_FINISH_INDEX,
  LAST_ROW_START_INDEX,
  TODAY_ID,
} from 'src/constants';

import { mergeClasses } from 'utils/mergeClasses';

import { selectMonthAndYear } from './helpers/selectedMonthAndYear';

import classes from './Day.module.css';

const { TODAY, PREVIOUS_MONTH_DAY, NEXT_MONTH_DAY, CURRENT_MONTH_DAY } = DayName;

type Props = {
  dayConfig: DayConfig;
  focusConfig: FocusConfig;
  listOfDays: CalendarValues<DayElement>;
};

export const Day: FC<Props> = ({ dayConfig, focusConfig, listOfDays }) => {
  const { id, name, dayNumber, month, year } = dayConfig;
  const { setFocus, index, isFocus } = focusConfig;

  const dayRef = useRef<HTMLButtonElement>(null);
  const { selectedDate, isMonthsView, isYearsView, highlightedYears } = useAppSelector(
    state => state.calendar,
  );
  const dispatch = useAppDispatch();
  const handleFocusDay = useElementFocus(focusConfig, dayRef);

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

  const handleChangeFocusOnKey = useCallback(
    (evt: KeyboardEvent) => {
      const changeYearsConfig: ChangingYearsConfig = {
        isMonthsView,
        isYearsView,
        year,
        month,
        highlightedYears,
        dispatch,
      };
      const focusedDayInVisibleMonth = listOfDays.currentValues[index];
      handleFocusDay();

      if (evt.type === 'keydown') {
        if (name === CURRENT_MONTH_DAY) {
          if (
            index >= FIRST_ROW_START_INDEX &&
            index <= FIRST_ROW_FINISH_INDEX &&
            evt.key === 'ArrowUp'
          ) {
            changeDatesOnUp(changeYearsConfig);
            const dayToFocus = getElementToFocus<DayElement>(
              listOfDays.previousValues,
              focusedDayInVisibleMonth,
              NEXT_MONTH_DAY,
            );
            setFocus(dayToFocus);
          }

          if (
            index >= LAST_ROW_START_INDEX &&
            index <= LAST_ROW_FINISH_INDEX &&
            evt.key === 'ArrowDown'
          ) {
            changeDatesOnDown(changeYearsConfig);
            const dayToFocus = getElementToFocus<DayElement>(
              listOfDays.nextValues,
              focusedDayInVisibleMonth,
              PREVIOUS_MONTH_DAY,
            );
            setFocus(dayToFocus);
          }
        }
      }

      if (evt.type === 'keyup') {
        if (name === PREVIOUS_MONTH_DAY) {
          changeDatesOnUp(changeYearsConfig);

          const dayToFocus = getElementToFocus<DayElement>(
            listOfDays.previousValues,
            focusedDayInVisibleMonth,
            CURRENT_MONTH_DAY,
          );
          setFocus(dayToFocus);
        } else if (name === NEXT_MONTH_DAY) {
          changeDatesOnDown(changeYearsConfig);

          const dayToFocus = getElementToFocus<DayElement>(
            listOfDays.nextValues,
            focusedDayInVisibleMonth,
            CURRENT_MONTH_DAY,
          );
          setFocus(dayToFocus);
        }
      }
    },
    [index, setFocus],
  );

  return (
    <button
      ref={dayRef}
      className={mergeClasses(classes.root, classes[name], {
        [classes.selected]: selectedDate.id === id,
        [classes[TODAY]]: id === TODAY_ID,
      })}
      onClick={() => handleSelectDay(id, name)}
      onKeyDown={handleChangeFocusOnKey}
      tabIndex={isFocus ? 0 : -1}
      onKeyUp={handleChangeFocusOnKey}
      aria-label={`Selected day ${dayNumber}`}
    >
      <span className={classes.dayNumber}>{dayNumber}</span>
    </button>
  );
};
