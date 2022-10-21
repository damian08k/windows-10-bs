import Button from '_commons/Button/Button';

import classes from './CreateEventButtons.module.css';

const CreateEventButtons = () => {
  return (
    <div className={classes.root}>
      <Button variant="primary" value="Save" type="submit" ariaLabel="Create event" />
      <Button
        variant="secondary"
        value="More details"
        ariaLabel="Show more details about creating event"
        disabled
      />
    </div>
  );
};

export default CreateEventButtons;
