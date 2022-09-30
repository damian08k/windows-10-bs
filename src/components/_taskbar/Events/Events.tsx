import { Form, Formik, FormikHelpers, FormikProps } from 'formik';
import { FC, KeyboardEvent } from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import EventsHeader from './components/EventsHeader/EventsHeader';
import EventTitle from './components/EventTitle/EventTitle';

import { plansActions } from 'store/slices/plans.slice';
import { useAppDispatch } from 'store/store';

import { AddEventData } from 'types/components/taskbar/events.type';
import { RootState } from 'types/store/store.type';

import CreateEvent from '_taskbar/CreateEvent/CreateEvent';
import EventsList from '_taskbar/EventsList/EventsList';

import { initialEventFormValues } from './data/data';

import classes from './Events.module.css';

const Events: FC = () => {
  const { selectedDay } = useSelector((state: RootState) => state.calendar);

  const dispatch = useAppDispatch();

  const handleEnterDown = (evt: KeyboardEvent<HTMLFormElement>) => {
    const { code } = evt;

    if (code === 'Enter' || code === 'NumpadEnter') {
      evt.preventDefault();
    }
  };

  const handleSaveEvent = (values: AddEventData, actions: FormikHelpers<AddEventData>) => {
    const event = {
      ...values,
      id: uuidv4(),
      date: `${selectedDay.selectedDay}-${selectedDay.selectedMonth}-${selectedDay.selectedYear}`,
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
              <Form onKeyDown={handleEnterDown}>
                <EventTitle />
                {title && <CreateEvent />}
              </Form>
              <EventsList />
            </>
          );
        }}
      </Formik>
    </div>
  );
};

export default Events;
