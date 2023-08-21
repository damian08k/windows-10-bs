import { useAppSelector } from 'store/hooks';

import { mergeClasses } from 'utils/mergeClasses';

import classes from './RibbonOptions.module.css';

export const RibbonOptions = () => {
  const ribbonOptions = useAppSelector(state => state.explorer.ribbonOptions);
  return (
    <nav className={classes.root}>
      <ul className={classes.optionsList}>
        <li className={mergeClasses(classes.option, classes.fileOption)}>File</li>
        {ribbonOptions.map(({ option, isSelected }) => {
          return (
            <li
              key={`ribbon-${option}`}
              className={mergeClasses(classes.option, classes.ribbonOption, {
                [classes.selectedOption]: isSelected,
              })}
            >
              {option}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
