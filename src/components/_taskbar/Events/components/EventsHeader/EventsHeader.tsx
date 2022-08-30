import { useFormikContext } from 'formik';
import { FC } from 'react';
import { useSelector } from 'react-redux';

import { EventData } from 'types/store/plansState.type';
import { RootState } from 'types/store/store.type';

import { TODAY_ID } from 'src/constants';

import changeSelectedDateToDayName from 'utils/changeSelectedDateToDayName';

import { ReactComponent as CloseIcon } from 'assets/icons/close.svg';

import classes from './EventsHeader.module.css';

const EventsHeader: FC = () => {
  const { values, setFieldValue } = useFormikContext<EventData>();
  const { selectedDay } = useSelector((state: RootState) => state.calendar);

  const selectedDayName = changeSelectedDateToDayName(selectedDay).toLowerCase();

  const handleResetTitleField = () => {
    setFieldValue('title', '');
  };

  return (
    <div className={classes.root}>
      {selectedDay.id === TODAY_ID ? 'Today' : `${selectedDayName} ${selectedDay.selectedDay}`}
      {values?.title && (
        <button className={classes.closeCreateEventForm} onClick={handleResetTitleField}>
          <CloseIcon className={classes.closeIcon} />
        </button>
      )}
    </div>
  );
};

export default EventsHeader;
