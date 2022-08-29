import { FC } from 'react';

import CreateEventButtons from './components/CreateEventButtons/CreateEventButtons';
import Location from './components/Location/Location';
import TimePicker from './components/TimePicker/TimePicker';

import classes from './CreateEvent.module.css';

const CreateEvent: FC = () => {
  return (
    <div className={classes.root}>
      <TimePicker />
      <Location />
      <CreateEventButtons />
    </div>
  );
};

export default CreateEvent;
