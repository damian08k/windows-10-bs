import { FC } from 'react';

// import Day from './components/Day';

import useFillCalendar from 'hooks/useFillCalendar';

import { TODAY_ID } from 'src/constants';

import getSplittedToday from 'utils/getSplittedToday';

import getWeekDays from '../../helpers/getWeekDays';
import Day from '../Day/Day';

import classes from './DaysList.module.css';

type Props = {
  today: string;
  month: number;
  year: number;
};

const DaysList: FC<Props> = ({ today, month, year }) => {
  const listOfDays = useFillCalendar(new Date(year, month, 1), month);
  const weekDays = getWeekDays();

  const { day: currentDay, month: currentMonth, year: currentYear } = getSplittedToday(today);

  return (
    <div className={classes.root}>
      <div className={classes.weekDays}>
        {weekDays.map(day => (
          <p key={day} className={classes.weekDay}>
            {day}
          </p>
        ))}
      </div>
      <div className={classes.days}>
        {listOfDays.map(({ id, name, dayNumber }) => {
          const dayID =
            dayNumber === currentDay && month === currentMonth && year === currentYear
              ? TODAY_ID
              : id;

          return (
            <Day key={id} id={dayID} name={name} dayNumber={dayNumber} month={month} year={year} />
          );
        })}
      </div>
    </div>
  );
};

export default DaysList;
