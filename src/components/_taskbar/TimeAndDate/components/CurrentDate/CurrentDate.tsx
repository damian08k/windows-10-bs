import { FC } from 'react';

import { useAppSelector } from 'store/hooks';

import formatCurrentDate from 'utils/formatCurrentDate';

import classes from './CurrentDate.module.css';

const CurrentDate: FC = () => {
  const currentDate = useAppSelector(state => state.currentDate.today);

  const { dateTime, currentDateDMYFormat } = formatCurrentDate(currentDate);

  return (
    <time className={classes.root} dateTime={dateTime}>
      {currentDateDMYFormat}
    </time>
  );
};

export default CurrentDate;
