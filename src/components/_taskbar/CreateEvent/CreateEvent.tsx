import { FC } from 'react';

import CreateEventButtons from './components/CreateEventButtons/CreateEventButtons';
import Location from './components/Location/Location';
import TimePicker from './components/TimePicker/TimePicker';

const CreateEvent: FC = () => {
  return (
    <>
      <TimePicker />
      <Location />
      <CreateEventButtons />
    </>
  );
};

export default CreateEvent;
