import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { clockActions } from 'store/slices/clock.slice';
import { useAppDispatch } from 'store/store';
import { RootState } from 'types/store/clockState.type';

import { Container } from './Clock.styled';

const Clock: FC = () => {
  const time = useSelector((state: RootState) => state.updateClock.time);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      const newTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      dispatch(clockActions.updateClock(newTime));
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  return <Container>{time}</Container>;
};

export default Clock;
