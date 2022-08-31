import { Field } from 'formik';
import { FC } from 'react';

import { ReactComponent as LocationIcon } from 'assets/icons/location.svg';

import classes from './Location.module.css';

const Location: FC = () => {
  return (
    <div className={classes.root}>
      <LocationIcon className={classes.locationIcon} />
      <Field name="location" className={classes.addLocationInput} placeholder="Add location" />
    </div>
  );
};

export default Location;
