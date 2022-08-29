import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from 'types/store/store.type';

import CreateEvent from '_taskbar/CreateEvent/CreateEvent';
import { TODAY_ID } from 'src/constants';

import changeSelectedDateToDayName from 'utils/changeSelectedDateToDayName';
import mergeClasses from 'utils/mergeClasses';

import { ReactComponent as CloseIcon } from 'assets/icons/close.svg';

import classes from './Events.module.css';

const Events: FC = () => {
  const [eventTitle, setEventTitle] = useState('');
  const { selectedDay } = useSelector((state: RootState) => state.calendar);

  const selectedDayName = changeSelectedDateToDayName(selectedDay).toLowerCase();

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const target = evt.target.value;

    setEventTitle(target);
  };

  const handleSaveEvent = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
  };

  const handleCloseCreateEventForm = () => {
    setEventTitle('');
  };

  // TODO: Split this to separate components
  return (
    <div className={classes.root}>
      <div className={classes.date}>
        {selectedDay.id === TODAY_ID ? 'Today' : `${selectedDayName} ${selectedDay.selectedDay}`}
        {eventTitle && (
          <button className={classes.closeCreateEventForm} onClick={handleCloseCreateEventForm}>
            <CloseIcon className={classes.closeIcon} />
          </button>
        )}
      </div>
      <form onSubmit={handleSaveEvent}>
        <div className={classes.eventTitleContainer}>
          <input
            className={classes.input}
            placeholder="Add an event or reminder"
            value={eventTitle}
            onChange={handleInputChange}
          />
          {eventTitle && (
            <button className={classes.closeCreateEventForm} onClick={handleCloseCreateEventForm}>
              <CloseIcon className={mergeClasses(classes.closeIcon, classes.closeIconInInput)} />
            </button>
          )}
        </div>
        {eventTitle ? <CreateEvent /> : <div className={classes.events}>No events</div>}
      </form>
    </div>
  );
};

export default Events;
