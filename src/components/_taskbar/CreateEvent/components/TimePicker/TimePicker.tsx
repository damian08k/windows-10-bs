import { Field, FieldProps } from 'formik';
import { FC } from 'react';

import { ReactComponent as ClockIcon } from 'assets/icons/clock.svg';

import classes from './TimePicker.module.css';

const TimePicker: FC = () => {
  return (
    <div className={classes.root}>
      <ClockIcon className={classes.timeIcon} />
      <div className={classes.timeRange}>
        <Field name="timeFrom">
          {({ field }: FieldProps) => <input {...field} type="time" className={classes.timeFrom} />}
        </Field>
        <p className={classes.connector}>to</p>
        <Field name="timeTo">
          {({ field }: FieldProps) => <input {...field} type="time" className={classes.timeTo} />}
        </Field>
      </div>
    </div>
  );
};

export default TimePicker;
