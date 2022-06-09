import { FC } from 'react';

import { calendarActions } from 'store/slices/calendar.slice';
import { useAppDispatch } from 'store/store';

import classes from './CalendarHeader.module.css';
import Arrows from './components/Arrows/Arrows';
import CurrentView from './components/CurrentView/CurrentView';

type Props = {
  month: number;
  year: number;
  isMonthsView: boolean;
  isYearsView: boolean;
};

const CalendarHeader: FC<Props> = ({ month, year, isMonthsView, isYearsView }) => {
  const dispatch = useAppDispatch();

  const handleViewClick = () => {
    if (isMonthsView) {
      dispatch(calendarActions.setIsMonthsView(false));
      dispatch(calendarActions.setIsYearsView(true));
    } else if (!isYearsView) {
      dispatch(calendarActions.setIsMonthsView(true));
    }
  };

  return (
    <div className={classes.root}>
      <div
        className={`${classes.dateInformation} ${classes.headerElement}`}
        onClick={handleViewClick}
      >
        <CurrentView
          isMonthsView={isMonthsView}
          isYearsView={isYearsView}
          year={year}
          month={month}
        />
      </div>
      <div className={classes.headerElement}>
        <Arrows />
      </div>
    </div>
  );
};

export default CalendarHeader;
