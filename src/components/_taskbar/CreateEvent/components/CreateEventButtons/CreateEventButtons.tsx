import { FC } from 'react';

import classes from './CreateEventButtons.module.css';

const CreateEventButtons: FC = () => {
  return (
    <div className={classes.root}>
      <button className={classes.saveButton} type="submit">
        Save
      </button>
      <button className={classes.moreDetailsButton} disabled>
        More details
      </button>
    </div>
  );
};

export default CreateEventButtons;
