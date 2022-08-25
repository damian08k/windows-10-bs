import { FC } from 'react';
import { useSelector } from 'react-redux';

import { DayName } from 'types/components/calendar/dayName.enum';
import { RootState } from 'types/store/store.type';

import getSplittedToday from 'utils/getSplittedToday';
import mergeClasses from 'utils/mergeClasses';

import classes from './Day.module.css';

const { TODAY } = DayName;

type Props = {
  name: DayName;
  dayNumber: number;
  month: number;
  year: number;
};

const Day: FC<Props> = ({ name, dayNumber, month, year }) => {
  const today = useSelector((state: RootState) => state.currentDate.today);

  const { day: currentDay, month: currentMonth, year: currentYear } = getSplittedToday(today);

  return (
    <div
      className={mergeClasses(classes.root, classes[name], {
        [classes[TODAY]]:
          dayNumber === currentDay && currentMonth === month && currentYear === year,
      })}
      onClick={() => {
        console.log(dayNumber, month, year);
      }}
    >
      <div className={classes.dayNumber}>{dayNumber}</div>
    </div>
  );
};

export default Day;
