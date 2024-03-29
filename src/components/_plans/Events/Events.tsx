import { Form, Formik, FormikHelpers, FormikProps } from 'formik';
import { KeyboardEvent } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { EventsHeader } from './components/EventsHeader/EventsHeader';
import { EventTitle } from './components/EventTitle/EventTitle';

import { useAppDispatch, useAppSelector } from 'store/hooks';
import { plansActions } from 'store/slices/plans.slice';

import { AddEventData } from 'types/components/taskbar/events.type';

import { CreateEvent } from '_plans/CreateEvent/CreateEvent';
import { EventsList } from '_plans/EventsList/EventsList';

import { getSelectedDateAsString } from 'utils/getSelectedDateAsString';

import { initialEventFormValues } from './data/data';

import classes from './Events.module.css';

export const Events = () => {
  const { selectedDate } = useAppSelector(state => state.calendar);

  const dispatch = useAppDispatch();

  const handleEnterDown = (evt: KeyboardEvent<HTMLInputElement>) => {
    const { key } = evt;

    if (key === 'Enter') {
      evt.preventDefault();
    }
  };

  const handleSaveEvent = (values: AddEventData, actions: FormikHelpers<AddEventData>) => {
    const event = {
      ...values,
      id: uuidv4(),
      date: getSelectedDateAsString(selectedDate),
    };
    dispatch(plansActions.addEvent(event));
    actions.resetForm();
  };

  return (
    <div className={classes.root}>
      <Formik initialValues={initialEventFormValues} onSubmit={handleSaveEvent}>
        {(props: FormikProps<AddEventData>) => {
          const { title } = props.values;
          return (
            <>
              <EventsHeader />
              <Form>
                <EventTitle onClickEnter={handleEnterDown} />
                {title && <CreateEvent onClickEnter={handleEnterDown} />}
              </Form>
              {/* //TODO: Find way to remove this from <Formik> but without using useState */}
              {!title && <EventsList />}
            </>
          );
        }}
      </Formik>
    </div>
  );
};
