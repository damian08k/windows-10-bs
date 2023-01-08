import { useAppSelector } from 'store/hooks';

import classes from './CurrentTime.module.css';

export const CurrentTime = () => {
  const time = useAppSelector(state => state.clock.time);
  return <span className={classes.root}>{`${time?.substring(0, 5)}`}</span>;
};
