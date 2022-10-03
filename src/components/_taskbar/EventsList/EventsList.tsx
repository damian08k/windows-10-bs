import { FC } from 'react';
import { useSelector } from 'react-redux';

import Event from './components/Event/Event';

import { RootState } from 'types/store/store.type';

import classes from './EventsList.module.css';

const EventsList: FC = () => {
  const { events } = useSelector((state: RootState) => state.plans);
  const { selectedDay } = useSelector((state: RootState) => state.calendar);
  const selectedDate = `${selectedDay.selectedDay}-${selectedDay.selectedMonth}-${selectedDay.selectedYear}`;

  const filteredEvents = events.filter(({ date, ...event }) => selectedDate === date && event);

  return (
    <div className={classes.root}>
      {filteredEvents.length ? (
        filteredEvents.map(({ id, ...event }) => <Event key={id} {...event} />)
      ) : (
        <p>No events</p>
      )}
    </div>
  );
};

export default EventsList;
