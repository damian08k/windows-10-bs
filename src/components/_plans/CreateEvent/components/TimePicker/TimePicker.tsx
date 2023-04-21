import { Field, FieldProps } from 'formik';
import { FC, KeyboardEvent } from 'react';

import { CALENDAR } from 'src/testIds';

import { ReactComponent as ClockIcon } from 'assets/icons/clock.svg';

import classes from './TimePicker.module.css';

type Props = {
  onClickEnter: (evt: KeyboardEvent<HTMLInputElement>) => void;
};

export const TimePicker: FC<Props> = ({ onClickEnter }) => {
  return (
    <div className={classes.root}>
      <ClockIcon className={classes.timeIcon} />
      <div className={classes.timeRange}>
        <Field name="timeFrom">
          {({ field }: FieldProps) => (
            <input
              {...field}
              type="time"
              className={classes.timeFrom}
              onKeyDown={onClickEnter}
              data-testid={CALENDAR.EVENTS.TIME_PICKER_FROM}
            />
          )}
        </Field>
        <p className={classes.connector}>to</p>
        <Field name="timeTo">
          {({ field }: FieldProps) => (
            <input
              {...field}
              type="time"
              className={classes.timeTo}
              onKeyDown={onClickEnter}
              data-testid={CALENDAR.EVENTS.TIME_PICKER_TO}
            />
          )}
        </Field>
      </div>
    </div>
  );
};
