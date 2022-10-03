import { FC } from 'react';

import { useAppDispatch, useAppSelector } from 'store/hooks';

import changeDatesOnDown from '_taskbar/Calendar/helpers/changeDatesOnDown';
import changeDatesOnUp from '_taskbar/Calendar/helpers/changeDatesOnUp';

import { ReactComponent as ArrowDownIcon } from 'assets/icons/arrow_down.svg';
import { ReactComponent as ArrowUpIcon } from 'assets/icons/arrow_up.svg';

import classes from './Arrows.module.css';

const Arrows: FC = () => {
  const { isMonthsView, isYearsView, highlightedYears } = useAppSelector(state => state.calendar);
  const { month, year } = useAppSelector(state => state.currentDate);

  const dispatch = useAppDispatch();

  const handleArrowDownClick = () => {
    changeDatesOnDown(isMonthsView, isYearsView, year, month, highlightedYears, dispatch);
  };

  const handleArrowUpClick = () => {
    changeDatesOnUp(isMonthsView, isYearsView, year, month, highlightedYears, dispatch);
  };

  return (
    <div className={classes.root}>
      <ArrowUpIcon onClick={handleArrowUpClick} className={classes.arrow} />
      <ArrowDownIcon onClick={handleArrowDownClick} className={classes.arrow} />
    </div>
  );
};

export default Arrows;
