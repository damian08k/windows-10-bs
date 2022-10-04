import { useFormikContext } from 'formik';

import { useAppSelector } from 'store/hooks';

import { EventData } from 'types/store/plansState.type';

import { TODAY_ID } from 'src/constants';

import changeSelectedDateToDayName from 'utils/calendar/changeSelectedDateToDayName';

import { ReactComponent as CloseIcon } from 'assets/icons/close.svg';

import classes from './EventsHeader.module.css';

const EventsHeader = () => {
  const { values, handleReset } = useFormikContext<EventData>();
  const { selectedDate } = useAppSelector(state => state.calendar);
  const { id, day } = selectedDate;

  const selectedDayName = changeSelectedDateToDayName(selectedDate).toLowerCase();

  return (
    <div className={classes.root}>
      {id === TODAY_ID ? 'Today' : `${selectedDayName} ${day}`}
      {values?.title && (
        <button className={classes.closeCreateEventForm} onClick={handleReset}>
          <CloseIcon className={classes.closeIcon} />
        </button>
      )}
    </div>
  );
};

export default EventsHeader;
