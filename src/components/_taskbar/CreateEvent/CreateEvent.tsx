import { FC } from 'react';

import classes from './CreateEvent.module.css';

const CreateEvent: FC = () => {
  return (
    <div className={classes.root}>
      <div>time</div>
      <div>add location</div>
      <div className={classes.buttons}>
        <button className={classes.saveButton}>Save</button>
        <button className={classes.moreDetailsButton}>More details</button>
      </div>
    </div>
  );
};

export default CreateEvent;
