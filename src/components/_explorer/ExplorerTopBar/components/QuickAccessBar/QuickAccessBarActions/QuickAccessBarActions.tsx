import { Tooltip } from 'react-tooltip';

import { ExplorerButton } from '_explorer/ExplorerButton/ExplorerButton';

import { mergeClasses } from 'utils/mergeClasses';

import { ACTION_ICONS } from './data/actionIcons';

import classes from './QuickAccessBarActions.module.css';

// ! Temporary solution. Should be removed when state will work
export const QuickAccessBarActions = () => {
  return (
    <div className={classes.root}>
      {ACTION_ICONS.map(el => {
        return (
          <div
            key={el.name}
            id={el.name}
            className={mergeClasses(classes.iconButton, { [classes.disabled]: true })}
          >
            <ExplorerButton disabled>{el.icon}</ExplorerButton>
            <Tooltip
              anchorSelect={`#${el.name}`}
              place="bottom"
              className={classes.tooltip}
              noArrow
            >
              {el.title && <h2 className={classes.tooltipTitle}>{el.title}</h2>}
              <p className={classes.tooltipDescription}>{el.description}</p>
            </Tooltip>
          </div>
        );
      })}
    </div>
  );
};
