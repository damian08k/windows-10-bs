import { FC } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from 'types/store/store.type';

import classes from './CurrentTime.module.css';

const CurrentTime: FC = () => {
  const time = useSelector((state: RootState) => state.clock.time);
  return <div className={classes.root}>{`${time?.substring('1', 5)}`}</div>;
};

export default CurrentTime;
