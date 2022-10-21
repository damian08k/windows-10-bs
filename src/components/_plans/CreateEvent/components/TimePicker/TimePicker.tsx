import { Field, FieldProps } from 'formik';
import { FC, KeyboardEvent } from 'react';

import { ReactComponent as ClockIcon } from 'assets/icons/clock.svg';

import classes from './TimePicker.module.css';

type Props = {
  onClickEnter: (evt: KeyboardEvent<HTMLInputElement>) => void;
};

const TimePicker: FC<Props> = ({ onClickEnter }) => {
  return (
    <div className={classes.root}>
      <ClockIcon className={classes.timeIcon} />
      <div className={classes.timeRange}>
        <Field name="timeFrom">
          {({ field }: FieldProps) => (
            <input {...field} type="time" className={classes.timeFrom} onKeyDown={onClickEnter} />
          )}
        </Field>
        <p className={classes.connector}>to</p>
        <Field name="timeTo">
          {({ field }: FieldProps) => (
            <input {...field} type="time" className={classes.timeTo} onKeyDown={onClickEnter} />
          )}
        </Field>
      </div>
    </div>
  );
};

export default TimePicker;
