import { FC } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from 'types/store/clockState.type';

import * as S from './PlansClock.styled';

const PlansClock: FC = () => {
  const time = useSelector((state: RootState) => state.updateClock.time);
  return <S.Container>{time}</S.Container>;
};

export default PlansClock;
