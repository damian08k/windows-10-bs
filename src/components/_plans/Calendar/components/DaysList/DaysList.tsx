import { FC, useRef } from 'react';

import { useArrowFocus } from 'hooks/useArrowFocus';

import { DayConfig } from 'types/components/calendar/dayConfig.type';
import { FocusConfig } from 'types/hooks/focusConfig.type';

import { useFillMonth } from '_plans/Calendar/hooks/useFillMonth';
import { CALENDAR_WEEK_DAYS, TODAY_ID } from 'src/constants';

import getWeekDays from '../../helpers/getWeekDays';
import Day from '../Day/Day';

import classes from './DaysList.module.css';

type Props = {
  today: string;
  month: number;
  year: number;
};

const DaysList: FC<Props> = ({ today, month, year }) => {
  const daysContainerRef = useRef<HTMLDivElement>(null);
  const listOfDays = useFillMonth(new Date(year, month, 1), month, today);

  const initialFocus = listOfDays?.currentValues.findIndex(day => day.isToday);
  const [focus, setFocus] = useArrowFocus(
    listOfDays?.currentValues?.length as number,
    daysContainerRef,
    CALENDAR_WEEK_DAYS,
    initialFocus,
  );

  const weekDays = getWeekDays();

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
        {listOfDays?.currentValues.map((day, index) => {
          const { id, name, dayNumber, isToday } = day;
          const dayID = isToday ? TODAY_ID : id;
          const isFocus = focus === index;

          const dayConfig: DayConfig = {
            id: dayID,
            name,
            dayNumber,
            month,
            year,
          };

          const focusConfig: FocusConfig = {
            index,
            isFocus,
            setFocus,
          };

          return (
            <Day key={id} dayConfig={dayConfig} focusConfig={focusConfig} listOfDays={listOfDays} />
          );
        })}
      </div>
    </>
  );
};

export default DaysList;
