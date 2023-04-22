import { FC } from 'react';

import { EventData } from 'types/store/plansState.type';

import classes from './Event.module.css';

type Props = Omit<EventData, 'id'>;

export const Event: FC<Props> = ({ title, timeFrom, timeTo, location }) => {
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.time}>
          <p className={classes.timeFrom}>{timeFrom}</p>
          <p className={classes.timeTo}>{timeTo}</p>
        </div>
        <div className={classes.info}>
          <p className={classes.title}>{title}</p>
          <p className={classes.location}>{location.length ? location : <>&nbsp;</>}</p>
        </div>
      </div>
    </div>
  );
};
