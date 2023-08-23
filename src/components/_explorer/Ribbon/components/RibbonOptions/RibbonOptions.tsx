import { useAppDispatch, useAppSelector } from 'store/hooks';
import { explorerActions } from 'store/slices/explorer.slice';

import { RibbonOptionValues } from 'types/store/fileExplorerState.type';

import { mergeClasses } from 'utils/mergeClasses';

import classes from './RibbonOptions.module.css';

export const RibbonOptions = () => {
  const ribbonOptions = useAppSelector(state => state.explorer.ribbonOptions);
  const dispatch = useAppDispatch();

  const handleOptionClick = (option: RibbonOptionValues) => {
    dispatch(explorerActions.changeSelectedRibbonOption(option));
  };

  return (
    <nav className={classes.root}>
      <ul className={classes.optionsList}>
        <li className={mergeClasses(classes.option, classes.fileOption)}>
          <button>File</button>
        </li>
        {ribbonOptions.map(({ option, isSelected }) => {
          return (
            <li
              key={`ribbon-${option}`}
              className={mergeClasses(classes.option, classes.ribbonOption, {
                [classes.selectedOption]: isSelected,
              })}
            >
              <button onClick={() => handleOptionClick(option)} disabled={isSelected}>
                {option}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
