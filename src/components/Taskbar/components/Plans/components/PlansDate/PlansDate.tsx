import { FC } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from 'types/store/clockState.type';
import formatCurrentDate from 'utils/formatCurrentDate';

import PlansClock from './components/PlansClock/PlansClock';
import * as S from './PlansDate.styled';

const PlansDate: FC = () => {
  const today = useSelector((state: RootState) => state.showTodaysDay.today);

  const { currentDateNamesFormat } = formatCurrentDate(today);

  return (
    <S.Container>
      <PlansClock />
      <div className="plans-box-date">{currentDateNamesFormat}</div>
    </S.Container>
  );
};

export default PlansDate;
