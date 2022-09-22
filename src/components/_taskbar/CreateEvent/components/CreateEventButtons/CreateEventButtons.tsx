import { FC } from 'react';

import Button from '_commons/Button/Button';

import classes from './CreateEventButtons.module.css';

const CreateEventButtons: FC = () => {
  return (
    <div className={classes.root}>
      <Button variant="primary" value="Save" type="submit" />
      <Button variant="secondary" value="More details" disabled />
    </div>
  );
};

export default CreateEventButtons;
