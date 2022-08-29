import { ChangeEvent, FC, useState } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from 'types/store/store.type';

import CreateEvent from '_taskbar/CreateEvent/CreateEvent';
import { TODAY_ID } from 'src/constants';

import changeSelectedDateToDayName from 'utils/changeSelectedDateToDayName';

import classes from './Events.module.css';

const Events: FC = () => {
  const [eventTitle, setEventTitle] = useState('');
  const { selectedDay } = useSelector((state: RootState) => state.calendar);

  const selectedDayName = changeSelectedDateToDayName(selectedDay).toLowerCase();

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const target = evt.target.value;

    setEventTitle(target);
  };

  return (
    <div className={classes.root}>
      <div className={classes.date}>
        {selectedDay.id === TODAY_ID ? 'Today' : `${selectedDayName} ${selectedDay.selectedDay}`}
      </div>
      <input
        className={classes.input}
        placeholder="Add an event or reminder"
        onChange={handleInputChange}
      />
      {eventTitle ? <CreateEvent /> : <div className={classes.events}>No events</div>}
    </div>
  );
};

export default Events;
