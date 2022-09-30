import { FC } from 'react';
import { useSelector } from 'react-redux';

import Event from './components/Event/Event';

import { RootState } from 'types/store/store.type';

import classes from './EventsList.module.css';

const EventsList: FC = () => {
  const { events } = useSelector((state: RootState) => state.plans);

  return (
    <div className={classes.root}>
      {events.length ? (
        events.map(({ id, ...event }) => <Event key={id} {...event} />)
      ) : (
        <p>No events</p>
      )}
    </div>
  );
};

export default EventsList;
