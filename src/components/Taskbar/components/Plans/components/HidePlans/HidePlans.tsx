import { FC } from 'react';

import { ReactComponent as ArrowDown } from 'assets/icons/arrow_down.svg';
// import { ReactComponent as ArrowUp } from 'assets/icons/arrow_up.svg';

import classes from './HidePlans.module.css';

const HidePlans: FC = () => {
  return (
    <button className={classes.root}>
      <p>Hide plans</p>
      <ArrowDown className={classes.arrow} />
    </button>
  );
};

export default HidePlans;
