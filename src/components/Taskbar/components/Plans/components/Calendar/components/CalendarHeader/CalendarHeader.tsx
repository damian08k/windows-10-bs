import { FC } from 'react';

import { ReactComponent as ArrowDown } from 'assets/icons/arrow_down.svg';
import { ReactComponent as ArrowUp } from 'assets/icons/arrow_up.svg';
import { calendarActions } from 'store/slices/calendar.slice';
import { currentDateActions } from 'store/slices/currentDate.slice';
import { useAppDispatch } from 'store/store';

import classes from './CalendarHeader.module.css';

type Props = {
  month: number;
  year: number;
  isMonthsView: boolean;
};

const CalendarHeader: FC<Props> = ({ month, year, isMonthsView }) => {
  const dispatch = useAppDispatch();

  const handleArrowDownClick = () => {
    dispatch(currentDateActions.updateMonthAndYear({ month: month + 1 }));
  };

  const handleArrowUpClick = () => {
    dispatch(currentDateActions.updateMonthAndYear({ month: month - 1 }));
  };

  const handleMonthClick = () => {
    dispatch(calendarActions.setIsMonthsView(!isMonthsView));
  };

  return (
    <div className={classes.root}>
      <div
        className={`${classes.dateInformation} ${classes.headerElement}`}
        onClick={handleMonthClick}
      >
        <span className={classes.month}>
          {new Intl.DateTimeFormat('en-US', { month: 'long' }).format(new Date(0, month))}
        </span>
        <span>{year}</span>
      </div>
      <div className={`${classes.arrowsContainer} ${classes.headerElement}`}>
        <ArrowUp onClick={handleArrowUpClick} className={classes.arrow} />
        <ArrowDown onClick={handleArrowDownClick} className={classes.arrow} />
      </div>
    </div>
  );
};

export default CalendarHeader;
