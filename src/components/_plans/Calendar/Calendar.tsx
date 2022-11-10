import { WheelEvent } from 'react';

import CalendarHeader from './components/CalendarHeader/CalendarHeader';
import DaysList from './components/DaysList/DaysList';
import MonthsList from './components/MonthsList/MonthsList';
import YearsList from './components/YearsList/YearsList';

import { useAppDispatch, useAppSelector } from 'store/hooks';

import changeDatesOnDown from './helpers/changeDatesOnDown';
import changeDatesOnUp from './helpers/changeDatesOnUp';

import classes from './Calendar.module.css';

const Calendar = () => {
  const { today, month, year } = useAppSelector(state => state.currentDate);
  const { isMonthsView, isYearsView, highlightedYears } = useAppSelector(state => state.calendar);

  const dispatch = useAppDispatch();

  const handleMouseWheel = (evt: WheelEvent) => {
    const { deltaY } = evt;
    if (deltaY < 0) {
      changeDatesOnUp(isMonthsView, isYearsView, year, month, highlightedYears, dispatch);
    } else {
      changeDatesOnDown(isMonthsView, isYearsView, year, month, highlightedYears, dispatch);
    }
  };

  const getRenderList = () => {
    if (isMonthsView) {
      return <MonthsList />;
    } else if (isYearsView) {
      return <YearsList year={year} />;
    } else {
      return <DaysList today={today} month={month as number} year={year} />;
    }
  };

  return (
    <div className={classes.root}>
      <CalendarHeader
        month={month as number}
        year={year}
        isMonthsView={isMonthsView}
        isYearsView={isYearsView}
      />
      <img src="" />
      <div onWheel={handleMouseWheel}>{getRenderList()}</div>
    </div>
  );
};

export default Calendar;
