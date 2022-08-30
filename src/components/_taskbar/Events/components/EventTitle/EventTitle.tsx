import { Field, useFormikContext } from 'formik';

import { EventData } from 'types/store/plansState.type';

import mergeClasses from 'utils/mergeClasses';

import { ReactComponent as CloseIcon } from 'assets/icons/close.svg';

import classes from './EventTitle.module.css';

const EventTitle = () => {
  const { values, handleReset } = useFormikContext<EventData>();

  return (
    <div className={classes.root}>
      <Field name="title" className={classes.input} placeholder="Add an event or reminder" />
      {values.title && (
        <button className={classes.closeCreateEventForm} onClick={handleReset}>
          <CloseIcon className={mergeClasses(classes.closeIcon, classes.closeIconInInput)} />
        </button>
      )}
    </div>
  );
};

export default EventTitle;
