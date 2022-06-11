import { FC } from 'react';

import useFillCalendar from 'hooks/useFillCalendar';

import { DayName } from 'types/components/calendar/dayName.enum';

import formatCurrentDate from 'utils/formatCurrentDate';
import getSplittedToday from 'utils/getSplittedToday';
import mergeClasses from 'utils/mergeClasses';

import getWeekDays from '../../helpers/getWeekDays';

import classes from './DaysList.module.css';

const { TODAY, CURRENT_MONTH_DAY } = DayName;

type Props = {
  today: string;
  month: number;
  year: number;
};

const DaysList: FC<Props> = ({ today, month, year }) => {
  const listOfDays = useFillCalendar(new Date(year, month, 1), month);

  const weekDays = getWeekDays();
  const { dateTime } = formatCurrentDate(today);

  const { month: currentMonth, year: currentYear } = getSplittedToday(today);

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
          <div
            key={id}
            // TODO: Something needs to be done with this todays checking
            className={mergeClasses(classes.day, classes[name], {
              [classes[TODAY]]:
                dayNumber === new Date(dateTime).getDate() &&
                name === CURRENT_MONTH_DAY &&
                currentMonth === month &&
                currentYear === year,
            })}
          >
            <div className={classes.dayNumber}>{dayNumber}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DaysList;
