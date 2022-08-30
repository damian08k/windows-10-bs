import { Form, Formik, FormikProps } from 'formik';
import { FC } from 'react';

import EventsHeader from './components/EventsHeader/EventsHeader';
import EventTitle from './components/EventTitle/EventTitle';

import { EventData } from 'types/store/plansState.type';

import CreateEvent from '_taskbar/CreateEvent/CreateEvent';

import { initialEventFormValues } from './data/data';

import classes from './Events.module.css';

const Events: FC = () => {
  // const handleSaveEvent = (evt: any) => {
  //   evt.preventDefault();
  // };

  return (
    <div className={classes.root}>
      <Formik initialValues={initialEventFormValues} onSubmit={e => console.log(e)}>
        {(props: FormikProps<EventData>) => {
          const { title } = props.values;

          return (
            <>
              <EventsHeader />
              <Form>
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
