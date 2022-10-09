import { FC, useRef } from 'react';

import { useArrowFocus } from 'hooks/useArrowFocus';
import useFillCalendar from 'hooks/useFillCalendar';

import { DayName } from 'types/components/calendar/dayName.enum';

import { CALENDAR_WEEK_DAYS, TODAY_ID } from 'src/constants';

import getSplittedToday from 'utils/calendar/getSplittedToday';

import getWeekDays from '../../helpers/getWeekDays';
import Day from '../Day/Day';

import classes from './DaysList.module.css';

const { CURRENT_MONTH_DAY } = DayName;

type Props = {
  today: string;
  month: number;
  year: number;
};

const DaysList: FC<Props> = ({ today, month, year }) => {
  const daysContainerRef = useRef<HTMLDivElement>(null);
  const listOfDays = useFillCalendar(new Date(year, month, 1), month);
  const [focus, setFocus] = useArrowFocus(
    listOfDays.length,
    daysContainerRef,
    CALENDAR_WEEK_DAYS,
    11,
  );

  const weekDays = getWeekDays();
  const { day: currentDay, month: currentMonth, year: currentYear } = getSplittedToday(today);

  return (
    <>
      <div className={classes.weekDays}>
        {weekDays.map(day => (
          <p key={day} className={classes.weekDay}>
            {day}
          </p>
        ))}
      </div>
      <div className={classes.days} ref={daysContainerRef}>
        {listOfDays.map((element, index) => {
          const dayID =
            element.dayNumber === currentDay &&
            month === currentMonth &&
            year === currentYear &&
            element.name === CURRENT_MONTH_DAY
              ? TODAY_ID
              : element.id;

          return (
            <Day
              key={element.id}
              id={dayID}
              name={element.name}
              dayNumber={element.dayNumber}
              month={month}
              year={year}
              setFocus={setFocus}
              index={index}
              focus={focus === index}
              element={element}
            />
          );
        })}
      </div>
    </>
  );
};

export default DaysList;
