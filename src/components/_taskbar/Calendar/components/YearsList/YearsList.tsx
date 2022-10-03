import { FC } from 'react';

import useFillYears from 'hooks/useFillYears';

import { useAppDispatch } from 'store/hooks';
import { calendarActions } from 'store/slices/calendar.slice';
import { currentDateActions } from 'store/slices/currentDate.slice';

import { YearType } from 'types/components/calendar/yearType.type';

import mergeClasses from 'utils/mergeClasses';

import classes from './YearsList.module.css';

const { CURRENT } = YearType;

type Props = {
  year: number;
};

const YearsList: FC<Props> = ({ year }) => {
  const dispatch = useAppDispatch();

  const years = useFillYears(year);

  const handleYearClick = (year: number) => {
    dispatch(currentDateActions.updateYear(year));
    dispatch(calendarActions.setIsYearsView(false));
    dispatch(calendarActions.setIsMonthsView(true));
  };

  return (
    <div className={classes.root}>
      {years.map(({ id, type, year }) => (
        <div
          key={id}
          className={mergeClasses(classes.yearElement, classes[type.toLowerCase()], {
            [classes.current]: type === CURRENT,
          })}
          onClick={() => handleYearClick(year)}
        >
          {year}
        </div>
      ))}
    </div>
  );
};

export default YearsList;
