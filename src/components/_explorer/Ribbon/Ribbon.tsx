import { RibbonOptions } from './components/RibbonOptions/RibbonOptions';

import classes from './Ribbon.module.css';

export const Ribbon = () => {
  return (
    <div className={classes.root}>
      <RibbonOptions />
    </div>
  );
};
