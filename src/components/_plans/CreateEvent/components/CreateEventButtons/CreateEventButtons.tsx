import { Button } from '_commons/Button/Button';
import { CALENDAR } from 'src/testIds';

import classes from './CreateEventButtons.module.css';

export const CreateEventButtons = () => {
  return (
    <div className={classes.root}>
      <Button
        variant="primary"
        value="Save"
        type="submit"
        ariaLabel="Create event"
        testId={CALENDAR.EVENTS.CREATE_EVENT}
      />
      <Button
        variant="secondary"
        value="More details"
        ariaLabel="Show more details about creating event"
        disabled
      />
    </div>
  );
};
