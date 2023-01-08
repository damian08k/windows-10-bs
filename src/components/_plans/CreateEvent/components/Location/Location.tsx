import { Field } from 'formik';
import { FC, KeyboardEvent } from 'react';

import { ReactComponent as LocationIcon } from 'assets/icons/location.svg';

import classes from './Location.module.css';

type Props = {
  onClickEnter: (evt: KeyboardEvent<HTMLInputElement>) => void;
};

export const Location: FC<Props> = ({ onClickEnter }) => {
  return (
    <div className={classes.root}>
      <LocationIcon className={classes.locationIcon} />
      <Field
        name="location"
        className={classes.addLocationInput}
        placeholder="Add location"
        onKeyDown={onClickEnter}
      />
    </div>
  );
};
