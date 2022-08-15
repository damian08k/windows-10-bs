import { FC } from 'react';

import classes from './Plan.module.css';

const Plan: FC = () => {
  return (
    <div className={classes.root}>
      <div className={classes.date}>today...</div>
      <input className={classes.input} placeholder="Add an event or reminder" />
      <div className={classes.events}>events...</div>
    </div>
  );
};

export default Plan;
