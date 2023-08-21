import { RibbonContent } from './components/RibbonContent/RibbonContent';
import { RibbonOptions } from './components/RibbonOptions/RibbonOptions';

import classes from './Ribbon.module.css';

export const Ribbon = () => {
  return (
    <div className={classes.root}>
      <RibbonOptions />
      <RibbonContent />
    </div>
  );
};
