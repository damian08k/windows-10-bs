import { FC } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from 'types/store/store.type';

import { TODAY_ID } from 'src/constants';

import changeSelectedDateToDayName from 'utils/changeSelectedDateToDayName';

import classes from './Events.module.css';

const Events: FC = () => {
  const { selectedDay } = useSelector((state: RootState) => state.calendar);

  const selectedDayName = changeSelectedDateToDayName(selectedDay).toLowerCase();

  return (
    <div className={classes.root}>
      <div className={classes.date}>
        {selectedDay.id === TODAY_ID ? 'Today' : `${selectedDayName} ${selectedDay.selectedDay}`}
      </div>
      <input className={classes.input} placeholder="Add an event or reminder" />
      <div className={classes.events}>events...</div>
    </div>
  );
};

export default Events;
