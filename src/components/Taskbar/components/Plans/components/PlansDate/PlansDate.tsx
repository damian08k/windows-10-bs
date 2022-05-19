import { FC } from 'react';
import { useSelector } from 'react-redux';

import PlansBoxClock from 'Plans/PlansBoxClock/PlansBoxClock';
import { RootState } from 'types/store/clockState.type';
import formatCurrentDate from 'utils/formatCurrentDate';

import * as S from './PlansBoxDate.styled';

const PlansBoxDate: FC = () => {
  const today = useSelector((state: RootState) => state.showTodaysDay.today);

  const { currentDateNamesFormat } = formatCurrentDate(today);

  return (
    <S.Container>
      <PlansBoxClock />
      <div className="plans-box-date">{currentDateNamesFormat}</div>
    </S.Container>
  );
};

export default PlansBoxDate;
