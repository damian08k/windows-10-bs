import { Field, useFormikContext } from 'formik';
import { FC, KeyboardEvent } from 'react';

import { EventData } from 'types/store/plansState.type';

import { CALENDAR } from 'src/testIds';

import { mergeClasses } from 'utils/mergeClasses';

import { ReactComponent as CloseIcon } from 'assets/icons/close.svg';

import classes from './EventTitle.module.css';

type Props = {
  onClickEnter: (evt: KeyboardEvent<HTMLInputElement>) => void;
};

export const EventTitle: FC<Props> = ({ onClickEnter }) => {
  const { values, handleReset } = useFormikContext<EventData>();

  return (
    <div className={classes.root}>
      <Field
        name="title"
        className={classes.input}
        placeholder="Add an event or reminder"
        onKeyDown={onClickEnter}
        data-testid={CALENDAR.EVENTS.TITLE}
      />
      {values.title && (
        <button
          className={classes.closeCreateEventForm}
          onClick={handleReset}
          aria-label="Close adding event form"
        >
          <CloseIcon className={mergeClasses(classes.closeIcon, classes.closeIconInInput)} />
        </button>
      )}
    </div>
  );
};
