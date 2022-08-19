import { FC } from 'react';

import classes from './Events.module.css';

const Events: FC = () => {
  return (
    <div className={classes.root}>
      <div className={classes.date}>today...</div>
      <input className={classes.input} placeholder="Add an event or reminder" />
      <div className={classes.events}>events...</div>
    </div>
  );
};

export default Events;
