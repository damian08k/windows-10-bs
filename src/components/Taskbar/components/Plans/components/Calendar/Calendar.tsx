import { FC } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from 'types/store/store.type';

import classes from './Calendar.module.css';
import CalendarHeader from './components/CalendarHeader/CalendarHeader';
import DaysList from './components/DaysList/DaysList';
import MonthsList from './components/MonthsList/MonthsList';

const Calendar: FC = () => {
  const { today, month, year } = useSelector((state: RootState) => state.currentDate);
  const { isMonthsView } = useSelector((state: RootState) => state.calendar);

  return (
    <div className={classes.root}>
      <CalendarHeader month={month} year={year} isMonthsView={isMonthsView} />
      {!isMonthsView ? <DaysList today={today} month={month} year={year} /> : <MonthsList />}
    </div>
  );
};

export default Calendar;
