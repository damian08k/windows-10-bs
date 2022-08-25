import { FC } from 'react';

import Day from './components/Day';

import useFillCalendar from 'hooks/useFillCalendar';

import getWeekDays from '../../helpers/getWeekDays';

import classes from './DaysList.module.css';

type Props = {
  month: number;
  year: number;
};

const DaysList: FC<Props> = ({ month, year }) => {
  const listOfDays = useFillCalendar(new Date(year, month, 1), month);
  const weekDays = getWeekDays();

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
        {listOfDays.map(({ id, name, dayNumber }) => (
          <Day key={id} name={name} dayNumber={dayNumber} month={month} year={year} />
        ))}
      </div>
    </div>
  );
};

export default DaysList;
