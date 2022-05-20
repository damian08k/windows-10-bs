import { FC } from 'react';
import { useSelector } from 'react-redux';

import { ReactComponent as ArrowDown } from 'assets/icons/arrow_down.svg';
import { ReactComponent as ArrowUp } from 'assets/icons/arrow_up.svg';
import useFillCalendar from 'hooks/useFillCalendar';
import { currentDateActions } from 'store/slices/currentDate.slice';
import { useAppDispatch } from 'store/store';
import { DayName } from 'types/components/calendar/dayName.enum';
import { RootState } from 'types/store/clockState.type';
import formatCurrentDate from 'utils/formatCurrentDate';

import classes from './Calendar.module.css';
import MonthsList from './components/MonthsList/MonthsList';
import getWeekDays from './helpers/getWeekDays';

const { TODAY, CURRENT_MONTH_DAY } = DayName;

const Calendar: FC = () => {
  const { today, month, year, isMonthsView } = useSelector(
    (state: RootState) => state.showTodaysDay,
  );

  const dispatch = useAppDispatch();

  const listOfDays = useFillCalendar(new Date(year, month, 1), month);

  const weekDays = getWeekDays();
  const { dateTime } = formatCurrentDate(today);

  const handleArrowDownClick = () => {
    dispatch(currentDateActions.updateMonthAndYear({ month: month + 1 }));
  };

  const handleArrowUpClick = () => {
    dispatch(currentDateActions.updateMonthAndYear({ month: month - 1 }));
  };

  const handleMonthClick = () => {
    dispatch(currentDateActions.setIsMonthsView(!isMonthsView));
  };

  return (
    <div className={classes.root}>
      <div className={classes.header}>
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
      {!isMonthsView ? (
        <>
          <div className={classes.weekDays}>
            {weekDays.map(day => (
              <p key={day} className={classes.weekDay}>
                {day}
              </p>
            ))}
          </div>
          <div className={classes.days}>
            {listOfDays.map(({ id, name, dayNumber }) => (
              <div
                key={id}
                className={`${classes.day} ${classes[name]} ${
                  dayNumber === new Date(dateTime).getDate() &&
                  name === CURRENT_MONTH_DAY &&
                  classes[TODAY]
                }`}
              >
                <div className={classes.dayNumber}>{dayNumber}</div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <MonthsList />
      )}
    </div>
  );
};

export default Calendar;
