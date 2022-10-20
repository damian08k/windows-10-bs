import { Dispatch, FC, SetStateAction, useCallback, useEffect, useRef } from 'react';

import { useAppDispatch, useAppSelector } from 'store/hooks';
import { calendarActions } from 'store/slices/calendar.slice';
import { currentDateActions } from 'store/slices/currentDate.slice';

import { CalendarValues } from 'types/components/calendar/calendarValues.type';
import { YearElement } from 'types/components/calendar/yearElement.type';
import { YearType } from 'types/components/calendar/yearType.type';

import changeDatesOnDown from '_plans/Calendar/helpers/changeDatesOnDown';
import changeDatesOnUp from '_plans/Calendar/helpers/changeDatesOnUp';

import mergeClasses from 'utils/mergeClasses';

import { getYearToFocus } from './helpers/getYearToFocus';

import classes from './Year.module.css';

const { PREVIOUS, NEXT } = YearType;

type Props = {
  yearElement: YearElement;
  index: number;
  isFocus: boolean;
  setFocus: Dispatch<SetStateAction<number>>;
  yearList: CalendarValues<YearElement>;
};

export const Year: FC<Props> = ({ yearElement, index, isFocus, setFocus, yearList }) => {
  const { type, year, isCurrent } = yearElement;
  const yearRef = useRef<HTMLButtonElement>(null);
  const dispatch = useAppDispatch();
  const { isMonthsView, isYearsView, highlightedYears } = useAppSelector(state => state.calendar);
  const { month } = useAppSelector(state => state.currentDate);

  const handleYearClick = (year: number) => {
    dispatch(currentDateActions.updateYear(year));
    dispatch(calendarActions.setIsYearsView(false));
    dispatch(calendarActions.setIsMonthsView(true));
  };

  useEffect(() => {
    if (isFocus) {
      yearRef?.current?.focus();
    }
  }, [isFocus]);

  const handleFocusYear = useCallback(() => {
    setFocus(index);
  }, [index, setFocus]);

  const handleChangeYearFocus = useCallback(() => {
    const focusedYearInVisibleMonth = yearList.currentValues[index];

    if (yearElement.type === PREVIOUS) {
      changeDatesOnUp(isMonthsView, isYearsView, year, month, highlightedYears, dispatch);

      const yearToFocus = getYearToFocus(yearList.previousValues, focusedYearInVisibleMonth);

      setFocus(yearToFocus);
    } else if (yearElement.type === NEXT) {
      changeDatesOnDown(isMonthsView, isYearsView, year, month, highlightedYears, dispatch);

      const yearToFocus = getYearToFocus(yearList.nextValues, focusedYearInVisibleMonth);

      setFocus(yearToFocus);
    }
  }, [index, setFocus]);

  return (
    <button
      className={mergeClasses(classes.root, classes[type.toLowerCase()], {
        [classes.current]: isCurrent === true,
      })}
      onClick={() => handleYearClick(year)}
      onKeyDown={handleFocusYear}
      onKeyUp={handleChangeYearFocus}
      tabIndex={isFocus ? 0 : -1}
      ref={yearRef}
    >
      {year}
    </button>
  );
};
