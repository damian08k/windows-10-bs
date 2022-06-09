import { FC } from 'react';

import useFillYears from 'hooks/useFillYears';
import { calendarActions } from 'store/slices/calendar.slice';
import { currentDateActions } from 'store/slices/currentDate.slice';
import { useAppDispatch } from 'store/store';
import { YearType } from 'types/components/calendar/yearType.type';
import getSplittedToday from 'utils/getSplittedToday';

import classes from './YearsList.module.css';

type Props = {
  today: string;
};

const YearsList: FC<Props> = ({ today }) => {
  const dispatch = useAppDispatch();

  const { year: currentYear } = getSplittedToday(today);

  const years = useFillYears(currentYear);

  const handleYearClick = (year: number) => {
    dispatch(currentDateActions.updateMonthAndYear({ month: null, year }));
    dispatch(calendarActions.setIsYearsView(false));
    dispatch(calendarActions.setIsMonthsView(true));
  };

  return (
    <div className={classes.root}>
      {years.map(({ id, type, year }) => (
        <div
          key={id}
          className={`${classes.yearElement} ${type === YearType.CURRENT && classes.current} ${
            classes[type.toLowerCase()]
          }`}
          onClick={() => handleYearClick(year)}
        >
          {year}
        </div>
      ))}
    </div>
  );
};

export default YearsList;
