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
  const timeWithSeconds = useSelector((state: RootState) => state.updateClock.timeWithSeconds);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      const newTime = new Date().toLocaleTimeString([], timeFormat);
      timeFormat.second
        ? dispatch(clockActions.updateClockWithSeconds(newTime))
        : dispatch(clockActions.updateClock(newTime));
    }, 1000);

    return () => clearInterval(interval);
  }, [time, timeWithSeconds]);

  return <S.Container>{timeFormat.second ? timeWithSeconds : time}</S.Container>;
};

export default Clock;
