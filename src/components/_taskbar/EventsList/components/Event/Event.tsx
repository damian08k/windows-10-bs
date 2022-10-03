import { FC, useState } from 'react';

import { EventData } from 'types/store/plansState.type';

import classes from './Event.module.css';

type Props = Omit<EventData, 'id'>;

const Event: FC<Props> = ({ title, timeFrom, timeTo, location }) => {
  const [isPressed, setIsPressed] = useState(false);

  const handleEventClick = () => {
    setIsPressed(prev => !prev);
  };

  return (
    <div className={classes.root} role="button" aria-pressed={isPressed} onClick={handleEventClick}>
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

export default Event;
