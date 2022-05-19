import { FC } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from 'types/store/clockState.type';

import * as S from './CurrentTime.styled';

const CurrentTime: FC = () => {
  const time = useSelector((state: RootState) => state.updateClock.time);
  return <S.Container>{`${time?.substring(0, 5)}`}</S.Container>;
};

export default CurrentTime;
