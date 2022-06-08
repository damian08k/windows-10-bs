import { FC } from 'react';

import { ReactComponent as ArrowDown } from 'assets/icons/arrow_down.svg';
import { ReactComponent as ArrowUp } from 'assets/icons/arrow_up.svg';
import { calendarActions } from 'store/slices/calendar.slice';
import { currentDateActions } from 'store/slices/currentDate.slice';
import { useAppDispatch } from 'store/store';
import { YearElement } from 'types/components/calendar/yearElement.type';
import betterAt from 'utils/betterAt';

import classes from './CalendarHeader.module.css';

type Props = {
  month: number;
  year: number;
  isMonthsView: boolean;
  isYearsView: boolean;
  highlightedYears: YearElement[];
};

const CalendarHeader: FC<Props> = ({
  month,
  year,
  isMonthsView,
  highlightedYears,
  isYearsView,
}) => {
  const dispatch = useAppDispatch();

  const handleArrowDownClick = () => {
    if (isMonthsView) {
      dispatch(currentDateActions.updateMonthAndYear({ month: null, year: year + 1 }));
    } else {
      dispatch(currentDateActions.updateMonthAndYear({ month: month + 1 }));
    }
  };

  const handleArrowUpClick = () => {
    if (isMonthsView) {
      dispatch(currentDateActions.updateMonthAndYear({ month: null, year: year - 1 }));
    } else {
      dispatch(currentDateActions.updateMonthAndYear({ month: month - 1 }));
    }
  };

  const handleMonthClick = () => {
    if (isMonthsView) {
      dispatch(calendarActions.setIsMonthsView(false));
      dispatch(calendarActions.setIsYearsView(true));
    } else {
      dispatch(calendarActions.setIsMonthsView(true));
    }
  };

  return (
    <div className={classes.root}>
      <div
        className={`${classes.dateInformation} ${classes.headerElement}`}
        onClick={handleMonthClick}
      >
        {/* // TODO: Split this */}
        <span className={classes.month}>
          {!isMonthsView && !isYearsView && (
            <>
              {new Intl.DateTimeFormat('en-US', { month: 'long' }).format(new Date(0, month))}
              <span> {year}</span>
            </>
          )}
        </span>
        {isMonthsView && !isYearsView && <span>{year}</span>}
        {isYearsView &&
          highlightedYears.length &&
          `${highlightedYears[0].year} - ${betterAt(highlightedYears, -1).year}`}
      </div>
      <div className={`${classes.arrowsContainer} ${classes.headerElement}`}>
        <ArrowUp onClick={handleArrowUpClick} className={classes.arrow} />
        <ArrowDown onClick={handleArrowDownClick} className={classes.arrow} />
      </div>
    </div>
  );
};

export default CalendarHeader;
