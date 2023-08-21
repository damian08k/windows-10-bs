import { mergeClasses } from 'utils/mergeClasses';

import classes from './RibbonOptions.module.css';

export const RibbonOptions = () => {
  return (
    <nav className={classes.root}>
      <ul className={classes.optionsList}>
        <li className={mergeClasses(classes.option, classes.fileOption)}>File</li>
        <li className={mergeClasses(classes.option, classes.ribbonOption)}>Main tools</li>
        <li className={mergeClasses(classes.option, classes.ribbonOption)}>Sharing</li>
        <li className={mergeClasses(classes.option, classes.ribbonOption)}>View</li>
      </ul>
    </nav>
  );
};
