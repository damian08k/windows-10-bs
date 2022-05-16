import { FC } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from 'types/store/clockState.type';
import formatCurrentDate from 'utils/formatCurrentDate';

import * as S from './CurrentDate.styled';

const CurrentDate: FC = () => {
  const currentDate = useSelector((state: RootState) => state.showTodaysDay.today);

  const { dateTime, currentDateDMYFormat } = formatCurrentDate(currentDate);

  return (
    <S.CurrentDateContainer dateTime={dateTime}>{currentDateDMYFormat}</S.CurrentDateContainer>
  );
};

export default CurrentDate;
