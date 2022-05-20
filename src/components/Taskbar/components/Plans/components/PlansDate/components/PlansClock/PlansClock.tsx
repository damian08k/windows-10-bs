import { FC } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from 'types/store/clockState.type';

import classes from './PlansClock.module.css';

const PlansClock: FC = () => {
  const time = useSelector((state: RootState) => state.updateClock.time);

  return <div className={classes.root}>{time}</div>;
};

export default PlansClock;
