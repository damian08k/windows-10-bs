import { FC } from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch } from 'store/store';

import { RootState } from 'types/store/store.type';

import changeDatesOnDown from '../../../../helpers/changeDatesOnDown';
import changeDatesOnUp from '../../../../helpers/changeDatesOnUp';

import { ReactComponent as ArrowDown } from 'assets/icons/arrow_down.svg';
import { ReactComponent as ArrowUp } from 'assets/icons/arrow_up.svg';

import classes from './Arrows.module.css';

const Arrows: FC = () => {
  const { isMonthsView, isYearsView, highlightedYears } = useSelector(
    (state: RootState) => state.calendar,
  );
  const { month, year } = useSelector((state: RootState) => state.currentDate);

  const dispatch = useAppDispatch();

  const handleArrowDownClick = () => {
    changeDatesOnDown(isMonthsView, isYearsView, year, month, highlightedYears, dispatch);
  };

  const handleArrowUpClick = () => {
    changeDatesOnUp(isMonthsView, isYearsView, year, month, highlightedYears, dispatch);
  };

  return (
    <div className={classes.root}>
      <ArrowUp onClick={handleArrowUpClick} className={classes.arrow} />
      <ArrowDown onClick={handleArrowDownClick} className={classes.arrow} />
    </div>
  );
};

export default Arrows;
