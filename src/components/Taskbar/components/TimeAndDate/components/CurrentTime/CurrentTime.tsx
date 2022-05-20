import { FC } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from 'types/store/clockState.type';

import classes from './CurrentTime.module.css';

const CurrentTime: FC = () => {
  const time = useSelector((state: RootState) => state.updateClock.time);
  return <div className={classes.root}>{`${time?.substring(0, 5)}`}</div>;
};

export default CurrentTime;
