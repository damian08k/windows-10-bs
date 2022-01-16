import { FC } from 'react';

import getCurrentDate from 'utils/getCurrentDate';

import * as S from './CurrentDate.styled';

const CurrentDate: FC = () => {
  const { dateTime, currentDateDMYFormat } = getCurrentDate();

  return (
    <S.CurrentDateContainer dateTime={dateTime}>{currentDateDMYFormat}</S.CurrentDateContainer>
  );
};

export default CurrentDate;
