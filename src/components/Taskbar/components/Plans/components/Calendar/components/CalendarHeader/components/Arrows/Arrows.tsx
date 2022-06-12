import { FC } from 'react';
import { useSelector } from 'react-redux';

import { currentDateActions } from 'store/slices/currentDate.slice';
import { useAppDispatch } from 'store/store';

import { RootState } from 'types/store/store.type';

import betterAt from 'utils/betterAt';

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
    if (isMonthsView && !isYearsView) {
      dispatch(currentDateActions.updateYear(year + 1));
    } else if (!isMonthsView && !isYearsView) {
      dispatch(currentDateActions.updateMonthAndYear({ month: (month as number) + 1 }));
    } else if (isYearsView && highlightedYears.length) {
      const year = betterAt(highlightedYears, -1).year + 1;
      dispatch(currentDateActions.updateYear(year));
    }
  };

  const handleArrowUpClick = () => {
    if (isMonthsView && !isYearsView) {
      dispatch(currentDateActions.updateYear(year - 1));
    } else if (!isMonthsView && !isYearsView) {
      dispatch(currentDateActions.updateMonthAndYear({ month: (month as number) - 1 }));
    } else if (isYearsView && highlightedYears.length) {
      const year = highlightedYears[0].year - 1;
      dispatch(currentDateActions.updateYear(year));
    }
  };
  return (
    <div className={classes.root}>
      <ArrowUp onClick={handleArrowUpClick} className={classes.arrow} />
      <ArrowDown onClick={handleArrowDownClick} className={classes.arrow} />
    </div>
  );
};

export default Arrows;
