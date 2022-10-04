import Event from './components/Event/Event';

import { useAppSelector } from 'store/hooks';

import { getSelectedDateAsString } from 'utils/calendar/getSelectedDateAsString';

import classes from './EventsList.module.css';

const EventsList = () => {
  const { events } = useAppSelector(state => state.plans);
  const { selectedDate } = useAppSelector(state => state.calendar);
  const selectedDateAsString = getSelectedDateAsString(selectedDate);

  const filteredEvents = events.filter(
    ({ date, ...event }) => selectedDateAsString === date && event,
  );

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
