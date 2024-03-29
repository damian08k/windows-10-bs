import { Tooltip } from 'react-tooltip';

import { useAppSelector } from 'store/hooks';

import { ExplorerButton } from '_explorer/ExplorerButton/ExplorerButton';
import { EXPLORER } from 'src/testIds';

import { mergeClasses } from 'utils/mergeClasses';

import { ACTION_ICONS } from './data/actionIcons';

import classes from './QuickAccessBarActions.module.css';

export const QuickAccessBarActions = () => {
  const visibleIcons = useAppSelector(state => state.explorer.topBarVisibleIcons);

  return (
    <div className={classes.root} data-testid={EXPLORER.TOP_BAR.ACTIONS_AREA}>
      {visibleIcons.map(visibleIcon => {
        return ACTION_ICONS.map(({ name, icon, title, description, testId }) => {
          if (name === visibleIcon) {
            return (
              <div
                key={name}
                id={name}
                className={mergeClasses(classes.iconButton, { [classes.disabled]: true })}
                data-testid={testId}
              >
                <ExplorerButton disabled>{icon}</ExplorerButton>
                <Tooltip
                  anchorSelect={`#${name}`}
                  place="bottom"
                  className={classes.tooltip}
                  noArrow
                >
                  {title && <h2 className={classes.tooltipTitle}>{title}</h2>}
                  <p className={classes.tooltipDescription}>{description}</p>
                </Tooltip>
              </div>
            );
          }
        });
      })}
    </div>
  );
};
