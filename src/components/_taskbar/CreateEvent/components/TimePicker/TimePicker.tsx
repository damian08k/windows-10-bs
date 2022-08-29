import { FC } from 'react';

import { ReactComponent as Clock } from 'assets/icons/clock.svg';

import classes from './TimePicker.module.css';

const TimePicker: FC = () => {
  return (
    <div className={classes.root}>
      <Clock className={classes.timeIcon} />
      <div className={classes.timeRange}>
        <input type="time" className={classes.timeFrom} />
        <p className={classes.connector}>to</p>
        <input type="time" className={classes.timeTo} />
      </div>
    </div>
  );
};

export default TimePicker;
