import { FC } from 'react';

import getCurrentDate from 'utils/getCurrentDate';

import { CurrentDateContainer } from './CurrentDate.styled';

const CurrentDate: FC = () => {
  const { dateTime, currentDateDMYFormat } = getCurrentDate();

  return <CurrentDateContainer dateTime={dateTime}>{currentDateDMYFormat}</CurrentDateContainer>;
};

export default CurrentDate;
