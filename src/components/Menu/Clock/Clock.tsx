import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { clockActions } from 'store/slices/clock.slice';
import { useAppDispatch } from 'store/store';
import { RootState } from 'types/store/clockState.type';

import * as S from './Clock.styled';

type Props = {
  timeFormat: Intl.DateTimeFormatOptions;
};

const Clock: FC<Props> = ({ timeFormat }) => {
  const time = useSelector((state: RootState) => state.updateClock.time);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      const newTime = new Date().toLocaleTimeString([], timeFormat);
      dispatch(clockActions.updateClock(newTime));
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  return <S.Container>{time}</S.Container>;
};

export default Clock;
