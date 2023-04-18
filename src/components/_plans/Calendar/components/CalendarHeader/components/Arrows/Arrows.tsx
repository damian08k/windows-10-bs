import { useAppDispatch, useAppSelector } from 'store/hooks';

import { ChangingYearsConfig } from 'types/components/calendar/blockDatesChanging.type';

import { changeDatesOnDown } from '_plans/Calendar/helpers/changeDatesOnDown';
import { changeDatesOnUp } from '_plans/Calendar/helpers/changeDatesOnUp';
import { CALENDAR } from 'src/testIds';

import { ReactComponent as ArrowDownIcon } from 'assets/icons/arrow_down.svg';
import { ReactComponent as ArrowUpIcon } from 'assets/icons/arrow_up.svg';

import classes from './Arrows.module.css';

export const Arrows = () => {
  const { isMonthsView, isYearsView, highlightedYears, yearsBlock } = useAppSelector(
    state => state.calendar,
  );
  const { month, year } = useAppSelector(state => state.currentDate);

  const { isBlockDown, isBlockUp } = yearsBlock;

  const dispatch = useAppDispatch();

  const changeYearsConfig: ChangingYearsConfig = {
    isMonthsView,
    isYearsView,
    year,
    month,
    highlightedYears,
    dispatch,
  };

  const handleArrowDownClick = () => {
    if ((isBlockUp || !isBlockUp) && !isBlockDown) {
      changeDatesOnDown(changeYearsConfig);
    }
  };

  const handleArrowUpClick = () => {
    if ((isBlockDown || !isBlockDown) && !isBlockUp) {
      changeDatesOnUp(changeYearsConfig);
    }
  };

  return (
    <div className={classes.root}>
      <button
        className={classes.arrowButton}
        onClick={handleArrowUpClick}
        aria-label="Show previous month"
        data-testid={CALENDAR.ARROWS.UP}
      >
        <ArrowUpIcon className={classes.arrow} />
      </button>
      <button
        className={classes.arrowButton}
        onClick={handleArrowDownClick}
        aria-label="Show next month"
        data-testid={CALENDAR.ARROWS.DOWN}
      >
        <ArrowDownIcon className={classes.arrow} />
      </button>
    </div>
  );
};
