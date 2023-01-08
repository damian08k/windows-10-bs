import { useAppSelector } from 'store/hooks';

import { formatCurrentDate } from 'utils/calendar/formatCurrentDate';

import classes from './CurrentDate.module.css';

export const CurrentDate = () => {
  const currentDate = useAppSelector(state => state.currentDate.today);

  const { dateTime, currentDateDMYFormat } = formatCurrentDate(currentDate);

  return (
    <time className={classes.root} dateTime={dateTime}>
      {currentDateDMYFormat}
    </time>
  );
};
