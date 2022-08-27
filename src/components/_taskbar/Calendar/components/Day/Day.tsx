import { FC } from 'react';
import { useSelector } from 'react-redux';

import { calendarActions } from 'store/slices/calendar.slice';
import { useAppDispatch } from 'store/store';

import { DayName } from 'types/components/calendar/dayName.enum';
import { RootState } from 'types/store/store.type';

import { TODAY_ID } from 'src/constants';

import mergeClasses from 'utils/mergeClasses';

import selectMonthAndYear from './helpers/selectedMonthAndYear';

import classes from './Day.module.css';

const { TODAY } = DayName;

type Props = {
  id: string;
  name: DayName;
  dayNumber: number;
  month: number;
  year: number;
};

const Day: FC<Props> = ({ id, name, dayNumber, month, year }) => {
  const selectedDay = useSelector((state: RootState) => state.calendar.selectedDay);

  const dispatch = useAppDispatch();

  const handleSelectDay = (id: string, name: DayName) => {
    const { selectedMonth, selectedYear } = selectMonthAndYear(month, name, year);

    dispatch(
      calendarActions.setSelectedDay({
        id,
        selectedMonth,
        selectedYear,
        selectedDay: dayNumber,
      }),
    );
  };

  return (
    <div
      className={mergeClasses(classes.root, classes[name], {
        [classes.selected]: selectedDay.id === id,
        [classes[TODAY]]: id === TODAY_ID,
      })}
      onClick={() => handleSelectDay(id, name)}
    >
      <div className={classes.dayNumber}>{dayNumber}</div>
    </div>
  );
};

export default Day;
