import { FC } from 'react';

import Event from './components/Event/Event';

import { useAppSelector } from 'store/hooks';

import classes from './EventsList.module.css';

const EventsList: FC = () => {
  const { events } = useAppSelector(state => state.plans);
  const { selectedDay } = useAppSelector(state => state.calendar);
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
