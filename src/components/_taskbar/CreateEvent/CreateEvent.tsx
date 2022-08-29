import { FC } from 'react';

import { ReactComponent as Clock } from 'assets/icons/clock.svg';
import { ReactComponent as Location } from 'assets/icons/location.svg';

import classes from './CreateEvent.module.css';

const CreateEvent: FC = () => {
  return (
    <div className={classes.root}>
      <div className={classes.time}>
        <Clock className={classes.timeIcon} />
        <div className={classes.timeRange}>
          <input type="time" className={classes.timeFrom} />
          <p className={classes.connector}>to</p>
          <input type="time" className={classes.timeTo} />
        </div>
      </div>
      <div className={classes.addLocation}>
        <Location className={classes.locationIcon} />
        <input className={classes.addLocationInput} type="text" placeholder="Add location" />
      </div>
      <div className={classes.buttons}>
        <button className={classes.saveButton} type="submit">
          Save
        </button>
        <button className={classes.moreDetailsButton} disabled>
          More details
        </button>
      </div>
    </div>
  );
};

export default CreateEvent;
