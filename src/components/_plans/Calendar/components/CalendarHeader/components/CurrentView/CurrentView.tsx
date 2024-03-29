import { FC } from 'react';

import { useAppDispatch, useAppSelector } from 'store/hooks';
import { calendarActions } from 'store/slices/calendar.slice';

import {
  MAX_MONTH_VALUE,
  MAX_VISIBLE_YEAR,
  MIN_MONTH_VALUE,
  MIN_VISIBLE_YEAR,
} from 'src/constants';
import { CALENDAR } from 'src/testIds';

import { betterAt } from 'utils/betterAt';

import classes from './CurrentView.module.css';

type Props = {
  isMonthsView: boolean;
  isYearsView: boolean;
  month: number;
  year: number;
};

export const CurrentView: FC<Props> = ({ isMonthsView, isYearsView, month, year }) => {
  const { highlightedYears } = useAppSelector(state => state.calendar);
  const dispatch = useAppDispatch();

  // TODO: think about moving it to some custom format function so it will be easier later to add multi language support
  const visibleMonth = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(
    new Date(0, month),
  );

  const handleViewClick = () => {
    if (
      (year > MIN_VISIBLE_YEAR && year < MAX_VISIBLE_YEAR) ||
      (month > MIN_MONTH_VALUE && month < MAX_MONTH_VALUE)
    ) {
      dispatch(
        calendarActions.blockYearsListChanging({
          isBlockDown: false,
          isBlockUp: false,
        }),
      );
    }
    if (isMonthsView) {
      dispatch(calendarActions.setIsMonthsView(false));
      dispatch(calendarActions.setIsYearsView(true));
    } else if (!isYearsView) {
      dispatch(calendarActions.setIsMonthsView(true));
    }
  };

  const renderViewContent = () => {
    if (!isMonthsView && !isYearsView) {
      return (
        <button
          className={classes.calendarView}
          aria-label={`${visibleMonth} ${year}`}
          onClick={handleViewClick}
          data-testid={CALENDAR.VIEW.MONTH}
        >
          <span className={classes.month} data-testid={CALENDAR.HEADER.VISIBLE_MONTH}>
            {visibleMonth}
          </span>
          <span data-testid={CALENDAR.HEADER.MONTH_VIEW_YEAR}>{year}</span>
        </button>
      );
    } else if (isMonthsView) {
      return (
        <button
          className={classes.calendarView}
          aria-label={`${year}`}
          onClick={handleViewClick}
          data-testid={CALENDAR.VIEW.MONTHS_LIST}
        >
          <span data-testid={CALENDAR.HEADER.MONTHS_LIST_VIEW_YEAR}>{year}</span>
        </button>
      );
    } else if (isYearsView && highlightedYears.length) {
      return (
        <span data-testid={CALENDAR.VIEW.YEARS}>{`${highlightedYears[0].year} - ${
          betterAt(highlightedYears, -1).year
        }`}</span>
      );
    }
  };

  return <div className={classes.root}>{renderViewContent()}</div>;
};
