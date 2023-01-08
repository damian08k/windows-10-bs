import { useAppSelector } from 'store/hooks';

import classes from './PlansClock.module.css';

export const PlansClock = () => {
  const time = useAppSelector(state => state.clock.time);

  return <div className={classes.root}>{time}</div>;
};
