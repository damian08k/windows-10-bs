import { FC } from 'react';

import { CurrentDateContainer } from './CurrentDate.styled';
import getCurrentDate from './helpers/getCurrentDate';

const CurrentDate: FC = () => {
  const { dateTime, currentDate } = getCurrentDate();

  return <CurrentDateContainer dateTime={dateTime}>{currentDate}</CurrentDateContainer>;
};

export default CurrentDate;
