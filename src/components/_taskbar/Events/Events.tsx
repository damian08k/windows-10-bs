import { Form, Formik, FormikHelpers, FormikProps } from 'formik';
import { FC, KeyboardEvent } from 'react';

import EventsHeader from './components/EventsHeader/EventsHeader';
import EventTitle from './components/EventTitle/EventTitle';

import { plansActions } from 'store/slices/plans.slice';
import { useAppDispatch } from 'store/store';

import { EventData } from 'types/store/plansState.type';

import CreateEvent from '_taskbar/CreateEvent/CreateEvent';

import { initialEventFormValues } from './data/data';

import classes from './Events.module.css';

const Events: FC = () => {
  const dispatch = useAppDispatch();

  const handleEnterDown = (evt: KeyboardEvent<HTMLFormElement>) => {
    const { code } = evt;

    if (code === 'Enter' || code === 'NumpadEnter') {
      evt.preventDefault();
    }
  };

  const handleSaveEvent = (values: EventData, actions: FormikHelpers<EventData>) => {
    dispatch(plansActions.addEvent(values));
    actions.resetForm();
  };

  return (
    <div className={classes.root}>
      <Formik initialValues={initialEventFormValues} onSubmit={handleSaveEvent}>
        {(props: FormikProps<EventData>) => {
          const { title } = props.values;

          return (
            <>
              <EventsHeader />
              <Form onKeyDown={handleEnterDown}>
                <EventTitle />
                {title ? <CreateEvent /> : <div className={classes.events}>No events</div>}
              </Form>
            </>
          );
        }}
      </Formik>
    </div>
  );
};

export default Events;
