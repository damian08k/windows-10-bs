import { FC } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from 'types/store/clockState.type';
import formatCurrentDate from 'utils/formatCurrentDate';

import classes from './CurrentDate.module.css';

const CurrentDate: FC = () => {
  const currentDate = useSelector((state: RootState) => state.showTodaysDay.today);

  const { dateTime, currentDateDMYFormat } = formatCurrentDate(currentDate);

  return (
    <time className={classes.root} dateTime={dateTime}>
      {currentDateDMYFormat}
    </time>
  );
};

export default CurrentDate;
