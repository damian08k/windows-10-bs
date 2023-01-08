import { FC, useCallback, useRef } from 'react';

import { useElementFocus } from 'hooks/useElementFocus';

import { useAppDispatch, useAppSelector } from 'store/hooks';
import { calendarActions } from 'store/slices/calendar.slice';
import { currentDateActions } from 'store/slices/currentDate.slice';

import { ChangingYearsConfig } from 'types/components/calendar/blockDatesChanging.type';
import { CalendarValues } from 'types/components/calendar/calendarValues.type';
import { YearElement } from 'types/components/calendar/yearElement.type';
import { YearType } from 'types/components/calendar/yearType.type';
import { FocusConfig } from 'types/hooks/focusConfig.type';

import { changeDatesOnDown } from '_plans/Calendar/helpers/changeDatesOnDown';
import { changeDatesOnUp } from '_plans/Calendar/helpers/changeDatesOnUp';
import { getElementToFocus } from '_plans/Calendar/helpers/getValueToFocus';
import { MAX_VISIBLE_YEAR, MIN_VISIBLE_YEAR } from 'src/constants';

import { mergeClasses } from 'utils/mergeClasses';

import classes from './Year.module.css';

const { PREVIOUS, NEXT } = YearType;

type Props = {
  yearElement: YearElement;
  focusConfig: FocusConfig;
  yearList: CalendarValues<YearElement>;
};

export const Year: FC<Props> = ({ yearElement, focusConfig, yearList }) => {
  const { index, isFocus, setFocus } = focusConfig;
  const { type, year, isCurrent } = yearElement;
  const yearRef = useRef<HTMLButtonElement>(null);
  const dispatch = useAppDispatch();
  const { isMonthsView, isYearsView, highlightedYears } = useAppSelector(state => state.calendar);
  const { month } = useAppSelector(state => state.currentDate);

  const handleFocusYear = useElementFocus(focusConfig, yearRef);

  const handleYearClick = (year: number) => {
    if (year > MIN_VISIBLE_YEAR && year < MAX_VISIBLE_YEAR) {
      dispatch(
        calendarActions.blockYearsListChanging({
          isBlockDown: false,
          isBlockUp: false,
        }),
      );
    }
    dispatch(currentDateActions.updateYear(year));
    dispatch(calendarActions.setIsYearsView(false));
    dispatch(calendarActions.setIsMonthsView(true));
  };

  const handleChangeYearFocus = useCallback(() => {
    const focusedYearInVisibleMonth = yearList.currentValues[index];

    const changeYearsConfig: ChangingYearsConfig = {
      isMonthsView,
      isYearsView,
      year,
      month,
      highlightedYears,
      dispatch,
    };

    if (yearElement.type === PREVIOUS) {
      changeDatesOnUp(changeYearsConfig);

      const yearToFocus = getElementToFocus<YearElement>(
        yearList.previousValues,
        focusedYearInVisibleMonth,
      );

      setFocus(yearToFocus);
    } else if (yearElement.type === NEXT) {
      changeDatesOnDown(changeYearsConfig);

      const yearToFocus = getElementToFocus<YearElement>(
        yearList.nextValues,
        focusedYearInVisibleMonth,
      );

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
      aria-label={`Select year ${year}`}
    >
      {year}
    </button>
  );
};
