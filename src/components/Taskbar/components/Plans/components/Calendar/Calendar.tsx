import { FC } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from 'types/store/store.type';

import classes from './Calendar.module.css';
import CalendarHeader from './components/CalendarHeader/CalendarHeader';
import DaysList from './components/DaysList/DaysList';
import MonthsList from './components/MonthsList/MonthsList';
import YearsList from './components/YearsList/YearsList';

const Calendar: FC = () => {
  const { today, month, year } = useSelector((state: RootState) => state.currentDate);
  const { isMonthsView, isYearsView } = useSelector((state: RootState) => state.calendar);

  // ! Should be remove when years list will be ready
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const getRenderList = () => {
    if (isMonthsView) {
      return <MonthsList />;
    } else if (isYearsView) {
      return <YearsList today={today} />;
    } else {
      return <DaysList today={today} month={month as number} year={year} />;
    }
  };

  return (
    <div className={classes.root}>
      <CalendarHeader month={month as number} year={year} isMonthsView={isMonthsView} />
      {/* {getRenderList()} */}
      <YearsList today={today} />
    </div>
  );
};

export default Calendar;
