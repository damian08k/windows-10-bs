import { WheelEvent } from 'react';

import { CalendarHeader } from './components/CalendarHeader/CalendarHeader';
import { DaysList } from './components/DaysList/DaysList';
import { MonthsList } from './components/MonthsList/MonthsList';
import { YearsList } from './components/YearsList/YearsList';

import { useAppDispatch, useAppSelector } from 'store/hooks';

import { ChangingYearsConfig } from 'types/components/calendar/blockDatesChanging.type';

import { changeDatesOnDown } from './helpers/changeDatesOnDown';
import { changeDatesOnUp } from './helpers/changeDatesOnUp';

import classes from './Calendar.module.css';

export const Calendar = () => {
  const { today, month, year } = useAppSelector(state => state.currentDate);
  const { isMonthsView, isYearsView, highlightedYears, yearsBlock } = useAppSelector(
    state => state.calendar,
  );

  const dispatch = useAppDispatch();

  const changeYearsConfig: ChangingYearsConfig = {
    isMonthsView,
    isYearsView,
    year,
    month,
    highlightedYears,
    dispatch,
  };

  const handleMouseWheel = (evt: WheelEvent) => {
    const { deltaY } = evt;

    const { isBlockDown, isBlockUp } = yearsBlock;

    if (deltaY < 0) {
      if ((isBlockDown || !isBlockDown) && !isBlockUp) {
        changeDatesOnUp(changeYearsConfig);
      }
    } else {
      if ((isBlockUp || !isBlockUp) && !isBlockDown) {
        changeDatesOnDown(changeYearsConfig);
      }
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
      <div onWheel={handleMouseWheel}>{getRenderList()}</div>
    </div>
  );
};
