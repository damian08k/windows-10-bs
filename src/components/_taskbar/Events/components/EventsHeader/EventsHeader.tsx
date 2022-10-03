import { useFormikContext } from 'formik';

import { useAppSelector } from 'store/hooks';

import { EventData } from 'types/store/plansState.type';

import { TODAY_ID } from 'src/constants';

import changeSelectedDateToDayName from 'utils/changeSelectedDateToDayName';

import { ReactComponent as CloseIcon } from 'assets/icons/close.svg';

import classes from './EventsHeader.module.css';

const EventsHeader = () => {
  const { values, handleReset } = useFormikContext<EventData>();
  const { selectedDay } = useAppSelector(state => state.calendar);

  const selectedDayName = changeSelectedDateToDayName(selectedDay).toLowerCase();

  return (
    <div className={classes.root}>
      {selectedDay.id === TODAY_ID ? 'Today' : `${selectedDayName} ${selectedDay.selectedDay}`}
      {values?.title && (
        <button className={classes.closeCreateEventForm} onClick={handleReset}>
          <CloseIcon className={classes.closeIcon} />
        </button>
      )}
    </div>
  );
};

export default EventsHeader;
