import { KeyboardEvent } from 'react';

import { useAppDispatch, useAppSelector } from 'store/hooks';

import { Arrow } from 'types/components/calendar/arrows.type';
import { ChangingYearsConfig } from 'types/components/calendar/blockDatesChanging.type';

import changeDatesOnDown from '_plans/Calendar/helpers/changeDatesOnDown';
import changeDatesOnUp from '_plans/Calendar/helpers/changeDatesOnUp';

import { ReactComponent as ArrowDownIcon } from 'assets/icons/arrow_down.svg';
import { ReactComponent as ArrowUpIcon } from 'assets/icons/arrow_up.svg';

import classes from './Arrows.module.css';

const Arrows = () => {
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

  const handleArrowClick = (evt: KeyboardEvent<HTMLButtonElement>, arrow: Arrow) => {
    const { key } = evt;

    if (key === 'Enter') {
      if (arrow === 'up') {
        handleArrowUpClick();
      }

      if (arrow === 'down') {
        handleArrowDownClick();
      }
    }
  };

  return (
    <div className={classes.root}>
      <button
        className={classes.arrowButton}
        onKeyDown={evt => handleArrowClick(evt, 'up')}
        onClick={handleArrowUpClick}
        aria-label="Show previous month"
      >
        <ArrowUpIcon className={classes.arrow} />
      </button>
      <button
        className={classes.arrowButton}
        onKeyDown={evt => handleArrowClick(evt, 'down')}
        onClick={handleArrowDownClick}
        aria-label="Show next month"
      >
        <ArrowDownIcon className={classes.arrow} />
      </button>
    </div>
  );
};

export default Arrows;
